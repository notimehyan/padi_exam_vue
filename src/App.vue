<template>
  <div>
    <!-- <RockHeader></RockHeader>
    <RockMain v-show="isShow"></RockMain>
    <RockFooter></RockFooter>
    <button @click="isShow = !isShow">显示隐藏</button>

    <ExamA></ExamA>
    <ExamB></ExamB>
    <SecurityPractices></SecurityPractices>
    <DiverStatement></DiverStatement>
    <DiverDisclaimers></DiverDisclaimers>
    <FinalExamCard></FinalExamCard> -->
    <ExamPaper></ExamPaper>
  </div>
</template>

<script>
// import RockHeader from "./components/rock-header.vue";
// import RockMain from "./components/rock-main.vue";
// import RockFooter from "./components/rock-footer.vue";
// import ExamA from './components/ExamA.vue';
// import ExamB from './components/ExamB.vue';
// import SecurityPractices from './components/SecurityPractices.vue';
// import DiverStatement from './components/DiverStatement.vue';
// import DiverDisclaimers from './components/DiverDisclaimers.vue';
// import FinalExamCard from './components/FinalExamCard.vue';
import ExamPaper from './components/ExamPaper.vue';

export default {
  components: {
    // RockHeader,
    // RockMain,
    // RockFooter,
    // ExamA,
    // ExamB,
    // SecurityPractices,
    // DiverStatement,
    // DiverDisclaimers,
    // FinalExamCard,
    ExamPaper
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
