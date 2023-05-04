<template>
  <div>
    <ul>
      <li v-for="item in arrList" :key="item">{{ item }}</li>
    </ul>

    <hr />

    <ul>
      <li v-for="(item, index) in arrList" :key="item">
        {{ item }} - {{ index }}
      </li>
    </ul>

    <br />

    <ul>
      <li v-for="(value, key) in exam" :key="value">{{ value }}/{{ key }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrList: ["12", "23", "34", "45"],
      exam: {
        tittle: "2. 下潜时,我需要平衡压力.以下哪些是平衡耳朵的正确技巧?",
        answerA: "A 捏着鼻子,然后试着从鼻子轻轻吹气.",
        answerB: "B 做吞咽的动作,左右活动下巴.",
        answerC: "C 捏着鼻子,然后用力地长时间从鼻子吹气.",
      },
    };
  },
};
</script>

<style></style>
