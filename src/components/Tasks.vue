<template>
  <div class="tasks">
    <h1>Tasks drag and drop</h1>

    <Container
      orientation="horizontal"
      @drop="onColumnDrop($event)"
      drag-handle-selector=".column-drag-handle"
      @drag-start="dragStart">

      <Draggable v-for="column in scene.children" :key="column.id">
        <div :class="column.props.className" class="md-card">
          <div class="card-column-header md-title">
            <span class="column-drag-handle"><md-icon>menu</md-icon></span>
            {{column.name}}
          </div>

          <Container
            group-name="col"
            @drop="(e) => onCardDrop(column.id, e)"
            :get-child-payload="getCardPayload(column.id)"
            drag-class="card-ghost"
            drop-class="card-ghost-drop">
            <Draggable v-for="card in column.children" :key="card.id">
              <div :class="card.props.className" :style="card.props.style">
                <p>
                  {{card.data}}
                </p>
              </div>
            </Draggable>
          </Container>

        </div>
      </Draggable>
    </Container>
  </div>
</template>

<script>
import {Container, Draggable} from 'vue-smooth-dnd'
import {applyDrag, generateItems} from './tasksUtils'

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
const columnNames = ['Lorem', 'Ipsum', 'Consectetur', 'Eiusmod']
const cardColors = [
  'azure',
  'beige',
  'bisque',
  'blanchedalmond',
  'burlywood',
  'cornsilk',
  'gainsboro',
  'ghostwhite',
  'ivory',
  'khaki'
]
const pickColor = () => {
  const rand = Math.floor(Math.random() * 10)
  return cardColors[rand]
}
const scene = {
  type: 'container',
  props: {
    orientation: 'horizontal'
  },
  children: generateItems(4, i => ({
    id: `column${i}`,
    type: 'container',
    name: columnNames[i],
    props: {
      orientation: 'vertical',
      className: 'card-container'
    },
    children: generateItems(+(Math.random() * 10).toFixed() + 5, j => ({
      type: 'draggable',
      id: `${i}${j}`,
      props: {
        className: 'card',
        style: {backgroundColor: pickColor()}
      },
      data: lorem.slice(0, Math.floor(Math.random() * 150) + 30)
    }))
  }))
}
export default {
  name: 'Tasks',
  components: {Container, Draggable},
  data () {
    return {
      scene
    }
  },
  methods: {
    onColumnDrop: function (dropResult) {
      const scene = Object.assign({}, this.scene)
      scene.children = applyDrag(scene.children, dropResult)
      this.scene = scene
    },
    onCardDrop: function (columnId, dropResult) {
      if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
        const scene = Object.assign({}, this.scene)
        const column = scene.children.filter(p => p.id === columnId)[0]
        const columnIndex = scene.children.indexOf(column)
        const newColumn = Object.assign({}, column)
        newColumn.children = applyDrag(newColumn.children, dropResult)
        scene.children.splice(columnIndex, 1, newColumn)
        this.scene = scene
      }
    },
    getCardPayload: function (columnId) {
      return index => {
        return this.scene.children.filter(p => p.id === columnId)[0].children[index]
      }
    },
    dragStart: function () {
      console.log('drag started')
    }
  }
}
</script>

<style lang="scss" scoped>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
    background-color: #fff;
    padding: 16px;
  }
  .column-drag-handle {
    cursor: grab;
  }
  .card p {
    cursor: grab;
    padding: 12px;
  }
</style>
