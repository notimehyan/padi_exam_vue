<template>
  <div>
    <h3>{{ money }}</h3>
    <button v-on:click="money++">h22222</button>
    <button v-on:click="addMoeny">hahaha</button>
    <button v-on:click="removeMoney">111111</button>
    <button v-on:click="eat('员工')">吃饭</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      money: 100
    };
  },
  methods: {
    addMoeny() {
      this.money = this.money + 100;  
    },
    removeMoney(){
      this.money = this.money - 100;  
    },
    eat(person){
        if(person ==='员工'){
          this.money -= 50
        }      
    }
  },
};
</script>

<style></style>