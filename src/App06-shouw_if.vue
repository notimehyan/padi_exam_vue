<template>
  <div>
    <button v-on:click="isShow = !isShow">显示/隐藏</button>
    <h3 v-show="isShow">show盒子</h3>
    <h3 v-if="isShow">if盒子</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    
  },
};
</script>

<style></style>