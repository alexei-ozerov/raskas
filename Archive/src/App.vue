<template>
  <app-header @displayUI="uiOn=true, headerOn=false, user=$event"  :headerOn="headerOn" />
  <UI :uiOn="uiOn" :user="user" />
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import UI from './components/UI.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    UI
  },
  data() {
    return {
      uiOn: false,
      headerOn: true,
      user: "Guest1"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
