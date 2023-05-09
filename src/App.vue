<template>
  <div>
    <RockHeader></RockHeader>
    <RockMain v-show="isShow"></RockMain>
    <RockFooter></RockFooter>

    <button @click="isShow = !isShow">显示隐藏</button>
  </div>
</template>

<script>
import RockHeader from "./components/rock-header.vue";
import RockMain from "./components/rock-main.vue";
import RockFooter from "./components/rock-footer.vue";

export default {
  components: {
    RockHeader,
    RockMain,
    RockFooter,
  },
  data() {
    return {
      isShow: true,
    };
  },
  methods: {

  },
};
</script>

<style>

</style>
