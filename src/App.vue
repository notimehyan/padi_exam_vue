<template>
  <div>
    <ul>
      <li v-for="item in arr" :key="item">{{ item }}</li>
    </ul>

    <button @click="addNew">新来的</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["老大", "老二", "老三","老四"],
    };
  },
  methods: {
    addNew() {
      this.arr.splice(1,0,'新人')
    },
  },
};
</script>

<style></style>
