<template>
  <div class="ExamPaper_body">
    <div v-for="(examList, k) in examList" :key="examList">
      <div v-if="index === k">
        <p class="ExamPaper_title01">{{ titleName }}</p>
        <p class="ExamPaper_title02">{{ examList.title }}</p>
        <div class="ExamPaper_Answers">
          <ul>
            <li v-for="e in examList.answer" :key="e" >
              <a :class="{ active: index === activeIndex }" @click="useChoose" href="#">
                {{ e }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="UserChooseView">你选择答案</div>

    <div class="ExamPaper_Button">
      <button :disabled="index === 0" class="back" @click="back">
        [检查]上一题
      </button>
      <button :disabled="index === 16" class="next" @click="next">
        [确认]下一题
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      index: 0,
      titleName: "随堂测验1",
      examList: [
        {
          id: 100,
          title: "1. 请完成以下的深度 - 压力 - 空气体积 - 空气密度的表格:",
          answer: [
            "A -------------------------------.",
            "B -------------------------------.",
            "C -------------------------------.",
            "D -------------------------------.",
          ],
        },
        {
          id: 101,
          title: "2. 下潜时,我需要平衡压力.以下哪些是平衡耳朵的正确技巧?",
          answer: [
            "A 捏着鼻子,然后试着从鼻子轻轻吹气.",
            "B 做吞咽的动作,左右活动下巴.",
            "C 捏着鼻子,然后用力地长时间从鼻子吹气.",
          ],
        },
        {
          id: 102,
          title: "3. 在下潜时,我试着要平衡压力,但发现有困难,以下何者正确?",
          answer: [
            "A 减慢下潜速率,以手势示意我的潜伴也慢下来,然后更用力地平衡压力.",
            "B 停止下潜,向潜伴比手势,稍微上升,然后再试一次.",
            "C 持续下潜,同时不断平衡压力.",
            "D 向潜伴比手势,上升到水面,然后重新下潜.",
          ],
        },
        {
          id: 103,
          title: "4. 我应该______平衡压力?",
          answer: [
            "A 尽早,经常且在我感到不适之前.",
            "B 在我开始感到不适时.",
            "C 只在我觉得疼痛时.",
          ],
        },
        {
          id: 104,
          title: "5. 我不应该在感冒时潜水,也不该在使用感冒药物后潜水.",
          answer: [
            "A 减慢下潜速率,以手势示意我的潜伴也慢下来,然后更用力地平衡压力.",
            "B 停止下潜,向潜伴比手势,稍微上升,然后再试一次.",
            "C 持续下潜,同时不断平衡压力.",
            "D 向潜伴比手势,上升到水面,然后重新下潜.",
          ],
        },
        {
          id: 105,
          title: "6. 水肺潜水最重要的规则是:",
          answer: [
            "A 持续呼吸且绝对不要憋气.",
            "B 永远和潜伴一起潜水.",
            "C 在水中戴着面镜,即使在水面上也是一样.",
            "D 每几分钟就检查一次我的压力表.",
          ],
        },
        {
          id: 106,
          title:
            "7. 没有遵守水肺潜水最重要的规则可能会导致严重的肺部过度扩张(肺破裂)伤害,进而可能导致瘫痪和死亡.",
          answer: ["A 正确.", "B 错误."],
        },
        {
          id: 107,
          title: "8. 若我在上升时身体的空腔感到不适,正确的做法是:",
          answer: [
            "A 持续上升,同时捏住鼻孔吹气.",
            "B 停下来,稍微下潜,让阻塞的空气有时间自行排出.",
            "C 下潜至少10公尺 / 33英尺,然后恢复上升.",
          ],
        },
        {
          id: 108,
          title:
            "9. 我的潜伴和我计划要潜入18公尺/60英尺的深度,在其他情况不变下,我们应该要预期空气供给时间会比在10公尺/33英尺时______",
          answer: ["A 更长.", "B 更短.", "C 一样."],
        },
        {
          id: 109,
          title:
            "10. 在潜水时,我为了跟随我感兴趣的鱼而奋力游泳,但很快就感觉我无法呼吸到足够的空气,此时正确的行为是:",
          answer: [
            "A 向潜伴比手势,然后回到水面上.",
            "B 使用调节器排气钮来增加空气流量.",
            "C 停下所有动作,然后休息直到恢复深沉,缓慢的呼吸.",
          ],
        },
        {
          id: 110,
          title: "11. 一个在淡水中呈现中性浮力的物体,在海水中会_______?",
          answer: ["A 沉下去", "B 浮起来.", "C 是中性浮力."],
        },
        {
          id: 111,
          title: "12. 潜伴制度的三个主要好处是实用性,安全性和乐趣.",
          answer: ["A 正确.", "B 错误."],
        },
        {
          id: 112,
          title: "13. 水肺潜水最重要的规则是:",
          answer: [
            "A 持续呼吸且绝对不要憋气.",
            "B 永远和潜伴一起潜水.",
            "C 在水中戴着面镜,即使在水面上也是一样.",
            "D 每几分钟就检查一次我的压力表.",
          ],
        },
        {
          id: 113,
          title: "14. 选择任何水肺潜水装备时的主要考量为_____.",
          answer: ["A 适合.", "B 品牌.", "C 合身.", "D 舒适."],
        },
        {
          id: 114,
          title:
            "15. 我正在计划下周的潜水并且检查我的装备,我将装备组装好之后,发现我的调节器呼吸起来比印象中困难,此时适当的行为是:",
          answer: [
            "A 在使用前让专业人士进行检查和保养.",
            "B 不管它继续用,但限制我的潜水深度为10公尺 / 33英尺.",
            "C 用清水冲洗,然后查看问题是否还存在.",
          ],
        },
        {
          id: 115,
          title: "16. 你无法在yoke气瓶阀上使用DIN调节器.",
          answer: ["A 正确.", "B 错误."],
        },
        {
          id: 116,
          title:
            "17. 熟练浮力控制技巧非常重要,因为它能让我控制下潜,上浮或是维持中性浮力,我在潜水时经常需要调整浮力.",
          answer: ["A 正确.", "B 错误."],
        },
      ],
    };
  },
  methods: {
    useChoose() {
      this.activeIndex = this.index;
      
    },
    back() {
      this.index--;
    },
    next() {
      this.index++;
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

a{
  text-decoration: none;
  color: #000;
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
  text-align: center;
  margin-right: 15px;
  margin-top: 30px;
}
.ExamPaper_title02 {
  height: 100px;
  font-size: 25px;
  line-height: 50px;
  margin-left: 30px;
}

.ExamPaper_Answers {
  height: 550px;
  /* background: #fcb2b2; */
}
.ExamPaper_Answers ul {
  margin-top: 50px;
}

.ExamPaper_Answers li {
  height: 100px;
  line-height: 100px;
  margin-left: 40px;
  font-size: 24px;
}

.active {
  background-color: skyblue;
}

.UserChooseView {
  /* background-color: aqua; */
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
  border-radius: 20px;
  width: 300px;
  height: 80px;
  font-size: 25px;
}
</style>
