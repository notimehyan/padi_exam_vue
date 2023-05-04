<template>
  <div>
    <select v-model="cityID">
      <option value="101">beijing</option>
      <option value="102">shanghai</option>
      <option value="103">guangdong</option>
      <option value="104">chengdu</option>
      <option value="105">chongqing</option>
    </select>
    <div>{{ cityID }}</div>

    <input type="text" v-model.number="age">

  </div>
</template>

<script>
export default {
  data() {
    return {
      cityID: " ",
      age:''
    };
  },
};
</script>

<style></style>
