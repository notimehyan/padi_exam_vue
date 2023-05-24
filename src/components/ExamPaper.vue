<template>
  <div class="ExamPaper_body">
    <div class="ExamPaper_Title">
      <p class="title01">随堂测验 1</p>
      <p class="title02">
        3. 在下潜时,我试着要平衡压力,但发现有困难,以下何者正确?
      </p>
    </div>

    <div class="ExamPaper_Answers">
      <ul>
        <li v-for="item in examA.answer" :key="item.answer">{{ item.answer }}</li>
      </ul>
    </div>

    <div class="ExamPaper_Button">
      <button class="back">上一题</button>
      <button class="next">下一题</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      examA: [
        {
          title: "3. 在下潜时,我试着要平衡压力,但发现有困难,以下何者正确?",
          answer: [
            "A 减慢下潜速率,以手势示意我的潜伴也慢下来,然后更用力地平衡压力.",
            "B 停止下潜,向潜伴比手势,稍微上升,然后再试一次.",
            "C 持续下潜,同时不断平衡压力.",
            "D 向潜伴比手势,上升到水面,然后重新下潜.",
          ],
        },
        {
          title: "3. 在下潜时,我试着要平衡压力,但发现有困难,以下何者正确?",
          answer: [
            "A 减慢下潜速率,以手势示意我的潜伴也慢下来,然后更用力地平衡压力.",
            "B 停止下潜,向潜伴比手势,稍微上升,然后再试一次.",
            "C 持续下潜,同时不断平衡压力.",
            "D 向潜伴比手势,上升到水面,然后重新下潜.",
          ],
        },
        {
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
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.ExamPaper_body {
  height: 600px;
  width: 800px;
  border: 1px solid #000;
  margin-top: 200px;
}

.ExamPaper_Title {
  background: skyblue;
  height: 100px;
}

.ExamPaper_Title .title01 {
  height: 40px;
  line-height: 40px;
  text-align: right;
  margin-right: 15px;
}
.ExamPaper_Title .title02 {
  height: 60px;
  font-size: 20px;
  line-height: 60px;
}

.ExamPaper_Answers {
  height: 450px;
  background: #fcb2b2;
}
.ExamPaper_Answers li {
  height: 50px;
  line-height: 50px;
  margin-left: 20px;
}

.ExamPaper_Button {
  height: 50px;
  display: flex;
  justify-content: space-around;
}

.back,
.next {
  width: 150px;
}
</style>
