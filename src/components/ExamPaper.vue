<template>
  <div class="ExamPaper_body">
    <p class="ExamPaper_title01">随堂测验 1</p>
    <p class="ExamPaper_title02" v-for="item in examList" :key="item">
      {{ item.title }}
    </p>

    <div class="ExamPaper_Answers">
      <ul>
        <li v-for="item in examList" :key="item.answer" @click="useChoose">{{ item.answer }}</li>
      </ul>
    </div>

    <div class="UserChooseView">你选择答案:{{ 1111 }}</div>

    <div class="ExamPaper_Button">
      <button class="back" @click="back">(检查)上一题</button>
      <button class="next" @click="next">(确认)下一题</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      examList: [
        {
          id: 100,
          title: "3. 在下潜时,我试着要平衡压力,但发现有困难,以下何者正确?",
          answer: [
            "A 减慢下潜速率,以手势示意我的潜伴也慢下来,然后更用力地平衡压力.",
            "B 停止下潜,向潜伴比手势,稍微上升,然后再试一次.",
            "C 持续下潜,同时不断平衡压力.",
            "D 向潜伴比手势,上升到水面,然后重新下潜.",
          ],
        },
      ],
    };
  },
  methods: {
    useChoose() {
      console.log("已选");
    },
    back() {
      console.log("111111");
    },
    next() {
      console.log("222222");
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.ExamPaper_body {
  height: 1000px;
  width: 800px;
  border: 1px solid #000;
  margin-top: 100px;
  margin-left: 100px;
}

.ExamPaper_title01 {
  height: 40px;
  line-height: 40px;
  font-size: 30px;
  text-align: right;
  margin-right: 15px;
}
.ExamPaper_title02 {
  height: 200px;
  font-size: 20px;
  line-height: 60px;
}

.ExamPaper_Answers {
  height: 550px;
  background: #fcb2b2;
}
.ExamPaper_Answers ul {
  padding-top: 30px;
}

.ExamPaper_Answers li {
  height: 50px;
  line-height: 50px;
  margin-left: 20px;
}

.UserChooseView {
  background-color: aqua;
  height: 80px;
}

.ExamPaper_Button {
  height: 120px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}

.back,
.next {
  width: 300px;
  height: 80px;
  font-size: 25px;
}
</style>
