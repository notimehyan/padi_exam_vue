<template>
  <div v-on:click="fuji">
    <h3>vue中获取事件对象</h3>
    <a href="http://www.jd.com" v-on:click.prevent.stop="jd">去京东</a>
    <a href="http://www.taobao.com" v-on:click.prevent.stop="tb('girlfriend',$event)">去淘宝</a>
  </div>
</template>

<script>
export default {
  methods: {
    jd() {
      console.log('jd');
    },
    tb(person) {
      console.log(person)
    },
    fuji (){
      console.log("中招了");
    }
  },
};
</script>

<style></style>