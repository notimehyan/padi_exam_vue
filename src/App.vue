<template>
  <div>
    <h3 v-if="flag">vip 来了</h3>
    <h3 v-else>先登录</h3>
    <hr>
    <h3 v-if="age > 10">1-10 dasda  </h3>
    <h3 v-else-if="age >=20">11-20 dasda</h3>
    <h3 v-else>21-30 </h3>
  </div>
</template>

<script>
export default {
  data(){
    return{
      flag: true,
      age:27
    }
  }
}
</script>

<style>

</style>