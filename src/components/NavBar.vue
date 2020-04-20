<template>
  <nav class="navbar navbar-dark bg-dark">
    <a class="navbar-brand" href="#">
      <img
        src="@/assets/logo.png"
        width="32"
        height="32"
        class="d-inline-block align-top"
        alt=""
      />
      System Monitor
    </a>
    <div class="navbar-text">
      <span id="hostname">{{ hostname }}</span>
      <span> - </span>
      <span id="datetime">{{ timedate.toLocaleString() }}</span>
    </div>
  </nav>
</template>

<script>
import EventService from "@/services/EventService.js";
export default {
  data() {
    return {
      hostname: "localhost",
      timedate: "date",
    };
  },
  methods: {
    updateDateTime() {},
  },
  created() {
    this.timedate = new Date();
    EventService.getHostname().then((response) => {
      console.log(response);
      this.hostname = response.data.hostname;
      this.timedate = new Date(response.data.timedate);
    });
  },
  mounted() {
    setInterval(() => {
      this.timedate = new Date(this.timedate.getTime() + 1000);
    }, 1000);
  },
};
</script>

<style scoped></style>
