<template>
  <tr>
    <td>
      <p class="text-info">{{ title }}</p>
    </td>
    <td>
      <p class="text-black-50">{{ value }}</p>
    </td>
    <td></td>
  </tr>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
