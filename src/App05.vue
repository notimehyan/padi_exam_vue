<template>
   <div>
    <h3>按键修饰符</h3>
    <input v-on:keyup.enter="handlekeup" type="text" /><button>search</button>
  </div>
</template>

<script>
export default {
methods: {
      handlekeup(){
        console.log("222");
      }
  },
}
</script>

<style>

</style>