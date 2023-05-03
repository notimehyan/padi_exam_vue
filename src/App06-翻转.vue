<template>
  <div>
    <h3>{{ msg }}</h3>
    <button v-on:click="change">翻转</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello World",
    };
  },
  methods: {
    change() {
      this.msg = this.msg.split('').reverse('').join('')
    },
  },
};
</script>

<style></style>