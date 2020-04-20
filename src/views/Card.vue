<template>
  <div class="col-6">
    <div class="card">
      <div class="card-header bg-info p-1">
        {{ title }}
      </div>
      <div class="card-body p-1">
        <table class="table table-striped table-sm">
          <CardRow
            v-for="(value, title_value) in values"
            :key="title_value"
            :title="title_value"
            :value="value"
          ></CardRow>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import CardRow from "@/views/CardRow.vue";
import EventService from "@/services/EventService.js";

export default {
  components: {
    CardRow,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      values: null,
    };
  },
  created() {
    EventService.getResource(this.title.toLowerCase()).then((response) => {
      this.values = response.data;
    });
  },
};
</script>

<style scoped>
.card {
  text-align: left;
}
</style>
