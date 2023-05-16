<template>
  <div class="DiverStatement">
      <div class="DSinfo">
        <div class="tittleImage">
          <!-- <img src="../padi_exam/padi_logo2.png" alt="" /> -->
        </div>

        <h1>水肺潜水员声明书</h1>
        <h3>THE PADI SCUBA DIVER STATEMENT</h3>
        <br />
        <span
          >PADI
          水肺潜水员等级让您在专业人士的直接督导下,得以获取经验.本合约乃是定义您的的准入门等级(Pre
          entry
          Level)证书之限制,并说明为了您的舒服与安全着想所必需的潜水规范.</span
        ><br /><br />
        <span>
          本人,________________________了解,身为一位
          PADI水肺潜水员,我应该:</span
        ><br />
        <ul>
          <li>
            1.
            在一位PADI潜水长、助理教练或教练的直接水中督导之下潜水.仔细听从潜水简介,并尊重那些督导潜水活动的人士所提出的忠告.每一次潜水都要谨守潜伴制度.
          </li>
          <li>
            2.
            要在比我当初受训时来的良好或是相仿的环境状况中潜水.这表示最大潜水深度限制为12米/40英尺,或者,若要到更大的深度潜水之前,要先接受额外的教学.
          </li>
          <li>
            3.
            维持适合潜水的健康状况,并且保持在个人的极限内潜水.避免潜水时过度疲累,并且不要在受到酒
            精或药物影响的情况下潜水.
          </li>
          <li>
            4.
            仅能在安全可靠的来源填充空气或是取得潜水装备,例如PADI潜水中心或渡假村,以避免填充到受污
            染的空气.
          </li>
          <li>
            5.
            潜水时要维持适度的浮力.在水面且BCD中没有空气时,将配重调整至中性浮力,同时要考虑到在潜
            水期间,空气的消耗量会造成浮力改变.如果在水面上遇到问题时,请将配重带丢弃及/或充气
            BCD,以建立正浮力.
          </li>
          <li>
            6. 在超越PADI
            水肺潜水员等级的极限之前,先进修潜水教育以确保适度的训练和经验.在一段时间没
            有潜水后,请在一个受到控制的环境中,且在专业人士监督下复习技巧.
          </li>
          <li>
            7. 潜水时要正确的呼吸.呼吸压缩空气时,绝对不要憋气或是跳跃式的呼吸.
          </li>
          <li>
            8.
            每次潜水的上升速率要低于每分钟18米/60英尺,并且在每次潜水结束前,都要执行安全停留.
          </li>
          <li>
            9.
            使用完整、合身、保养良好且使用熟悉的水肺装备.面对陌生的装备时,请向潜水专业人士征询相关
            意见和介绍.
          </li>
          <li>10. 知道并遵守有关休闲潜水的当地法律和规定.</li>
          <li>
            11.
            了解我可能在我的水肺潜水员签证日起的12个月内,升等成为不需要专业人士督导就能潜水的开放水
            域潜水员.
          </li>
          <li>
            12.
            了解背离安全潜水实务将会提高罹患减压疾病、其他伤害甚至是死亡的风险,并同意为了安全和安危
            起见,水肺潜水员在到陌生的环境潜水之前,应该遵守以上建议并寻求更多资讯或建议.
          </li>
        </ul>
        <br /><br />

        <span
          >本人已详阅以上声明,相关问题也已得到满意之答复.本人了解此些既定实务之重要性与目的.我明白这
          是为我的安全与健康著想,也明白潜水时如没有遵守此些实务,将可能导致自身的危险.</span
        ><br /><br />

        <div class="DS_Bottom">
          <div>
            <span>____________________________________</span><br />
            <span>参加者姓名</span><br /><br /><br />
            <span>____________________________________</span><br />
            <span>家长/监护人签名(如适用)</span>
          </div>
          <div>
            <span>____________________________________</span><br />
            <span>日期(日/月/年)</span><br /><br /><br />
            <span>____________________________________</span><br />
            <span>日期(日/月/年)</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.DiverStatement{
    width: 940px;
    height: 1220px;
    margin-left: 50px;
    border: 1px solid;
}
.tittleImage {
    text-align: center;
}

/* .DSinfo img, h1, h3{
    text-align: center;
} */

.DSinfo{
    width: 778px;
    height: 900px;
    margin-left: 85px;
    padding-top: 65px;
}

.DSinfo ul li{
    margin-top: 13px;
}

.DS_Bottom{
    display: flex;
    justify-content: space-evenly;
    margin-top: 30px;
    text-align: center;
}


</style>