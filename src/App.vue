<template>
  <div id="app">
    <input type="number" v-model="model">
    <button @click="onClick">ADD</button>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/performance-computed">Performance computed</router-link> |
      <router-link to="/performance-getter">Performance getter</router-link> |
      <router-link to="/getter">Getter</router-link> |
      <router-link to="/computed">Computed</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from "vue-property-decorator"
import {mapper} from "@/store/foo"

const Super = Vue.extend({
  methods: {
    ...mapper.mapMutations(["generateItems"])
  }
})

@Component
export default class App extends Super {
  private model = 10000
  onClick() {
    this.generateItems(this.model)
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
