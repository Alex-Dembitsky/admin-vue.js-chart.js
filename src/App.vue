<template>
  <div id="app">
    <div class="page-container">
      <md-app md-waterfall md-mode="fixed">

        <md-app-toolbar class="md-primary">
          <md-button class="md-icon-button" @click="showNavigation = true">
            <md-icon>menu</md-icon>
          </md-button>

          <span class="md-title">{{this.$router.history.current.name}}</span>
        </md-app-toolbar>

        <md-app-drawer md-permanent="full" :md-active.sync="showNavigation">

          <md-toolbar class="md-transparent logo" md-elevation="0">
            Place for logo
          </md-toolbar>

          <md-list>
            <router-link to="/">
              <md-list-item @click="showNavigation = false">
                <md-icon>dashboard</md-icon>
                <span class="md-list-item-text">Dashboard</span>
              </md-list-item>
            </router-link>

            <router-link to="/users">
              <md-list-item @click="showNavigation = false">
                <md-icon>person</md-icon>
                <span class="md-list-item-text">Users</span>
              </md-list-item>
            </router-link>

            <router-link to="/tasks">
              <md-list-item @click="showNavigation = false">
                <md-icon>list</md-icon>
                <span class="md-list-item-text">Tasks</span>
              </md-list-item>
            </router-link>

            <md-list-item>
              <md-icon>delete</md-icon>
              <span class="md-list-item-text">Trash</span>
            </md-list-item>

            <md-list-item>
              <md-icon>error</md-icon>
              <span class="md-list-item-text">Spam</span>
            </md-list-item>
          </md-list>
        </md-app-drawer>

        <md-app-content>
          <router-view/>
        </md-app-content>
      </md-app>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    showNavigation: false
  })
}
</script>

<!--scoped styles-->
<style lang="scss" scoped>
  .md-app {
    height: 100vh;
  }
  .md-app-toolbar {
    border-bottom: 1px solid #eee;
  }
  .md-app-drawer {
    border: none;
  }
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
    background: #5e35b1;
    color: #fff;
  }
  .router-link-exact-active {
    .md-list-item {
      background-color: #512c9a;
    }
  }
  .md-list-item-button {
    color: #fff;
  }
  .md-toolbar .md-button~.md-title{
    margin-left: 8px;
  }
  .md-icon-button {
    display: none;
  }
  @media screen and (max-width: 600px) {
    .md-icon-button {
      display: block;
    }
  }
</style>

<!--general styles-->
<style>
  h1 {
    line-height: 1.3em;
    margin-bottom: 40px;
  }
  h1, h2 {
    font-weight: normal;
  }
  .md-app-content {
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 50px;
  }
  .md-app-content .md-card {
     margin-right: 0;
     margin-left: 0;
  }
  /*styles for scroll*/
  *::-webkit-scrollbar {
    width: 12px;
  }
  /* Track */
  *::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #e1e1e1;
  }
  /* Handle */
  *::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #757575;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
  }
  *::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(204,204,204,0.4);
  }
</style>
