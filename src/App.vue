<template>
  <div id="app">
    <NavBar></NavBar>
    <div class="container" style="margin-top: 15px;">
      <div class="row">
        <Card v-for="title in titles" :title="title" :key="title"></Card>
      </div>
    </div>
    <img alt="Vue logo" src="./assets/logo-vue.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Card from "@/views/Card.vue";

export default {
  name: "App",
  components: {
    NavBar,
    HelloWorld,
    Card,
  },
  data() {
    return {
      titles: [
        "System",
        "CPU",
        "Disks",
        "Network",
        "Sensors",
        "Users",
        "Process",
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
