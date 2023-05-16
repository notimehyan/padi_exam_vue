<template>
  <div class="DiverDisclaimers">
    <div class="DDinfo">
      <div class="upDisclaimers">dsadasdsadasd</div>

      <div class="downDisclaimers">
        <span class="downTittle">责任免除即风险承担协议书</span><br />
        <span>欧盟地区国家及欧洲自由贸易联盟成员国另有适用表格.</span>
        <h3>请仔细阅读后,填写下列所有空格,并在下方签名.</h3>
        <ul>
          <li>
            本人,____________________,藉此申明本人知道浮潜和水肺潜水具有可能导致重大伤害、甚至死亡的危险.
          </li>
          <li>
            此外,本人了解使用压缩空气潜水可能导致若干固有之风险,其中包括但不限于减压病、空气栓塞或是其他高压伤害等需要送入再压舱治疗的病症.本人亦了解,训练和取得证书所必要的开放水域之行程,可能会在时间或距离或二者皆远离上述再压舱之地点进行.即使潜点附近可能缺乏再压舱或医疗设施,本人仍选择参加此活动.
          </li>
          <li>
            本人了解并同意包括本人的教练、办理本活动之机构__________、PADI
            Americas, Inc.
            及其联营公司、子公司、雇员、主管、代理人、加盟商或受让人（以下统称为「豁免方」）在由于本人参加此活动或由于豁免方主动或被动之疏忽行为而使本人受伤、死亡或遭受损失的情况下,皆无须对本人、本人家属、财产、继承人或受让人负任何法律责任.
          </li>
          <li>
            为获准参加本课程（和选修之探险潜水,以下总称为「课程」）,本人愿承担与上述课程有关之所有风险,及本人在参加本课程之活动时,包括但不限于学科活动、平静水域活动或开放水域活动,可能发生之所有风险,无论该类风险为可预见或不可预见.
          </li>
          <li>
            本人免除上述课程和豁免方,因本人报名参加本课程而被本人、本人家人、继承人或受让人要求索赔和提起诉讼之责任,包括在课程期间或本人取得证书后所发生之索赔责任.
          </li>
          <li>
            本人并了解浮潜和水肺潜水是剧烈的体能活动,本人将在课程中尽力,若本人因心脏病发、恐慌、过度换气等受到伤害,本人愿明确承担上述伤害之风险.同样地,本人将不保留并且放弃追诉上列个人或公司责任之权力.
          </li>
          <li>
            此外,本人声明本人已届法定年龄并具有签署本责任免除书之法定资格,或是本人已取得本人父母或监护人之书面同意.
          </li>
          <li>
            本人了解文中之条款具法律合约效力,而非仅为叙述性,本人乃出于自由行动并在了解本人已放弃本人之合法权力的情况下,签署此文件,本人更了解,若本协议书中有任何条款被发现为无法执行或不具效力,则本条款得分离于本协议书之外.本协议书中的其余条款将被视作该无法执行之条款从未包含于本协议书中.
          </li>
          <li>
            本人了解并同意本人不仅放弃起诉豁免方的权利,也放弃本人之继承人、受让人、受益人若因本人死亡而起诉豁免方的权利.本人亦声明本人可代表本人之继承人、受让人、受益人表示同意,因此上述对象将不得要求赔偿.
          </li>
          <li>
            本人__________藉
            此文件以豁免和免除我的教练,__________,提供本人教学的机构,__________,以及
            PADI Americas, Inc.
            及上述所定义之相关实体,因任何原因所造成之人身伤害、财物损失或不当身故之所有义务和责任,包括但不限定于豁免方主动或被动之疏忽行为.
          </li>
        </ul>
        <div>
          <h5>
            在本人代表本人及本人继承人签署本文件之前,本人已阅读过并被充分告知此非代理风险披露及认可协议书与责任免除暨
            风险承担协议书之内容.
          </h5>
        </div>

        <div class="DD_Bottom">
          <div>
            <span
              >_________________________________________________________________</span
            ><br />
            <span>参加者姓名</span><br /><br />
            <span
              >_________________________________________________________________</span
            ><br />
            <span>家长/监护人签名(如适用)</span>
          </div>
          <div>
            <span>____________________________________</span><br />
            <span>日期(日/月/年)</span><br /><br />
            <span>____________________________________</span><br />
            <span>日期(日/月/年)</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.DiverDisclaimers {
  width: 940px;
  height: 1220px;
  margin-left: 50px;
  border: 1px solid;
}

.DDinfo {
  width: 778px;
  height: 900px;
  margin-left: 85px;
  padding-top: 65px;
}

/* .upDisclaimers{
    width: 667px;
    height: 50px;
    color: white;
    background-color: black;
} */

.downTittle {
  width: 667px;
  height: 50px;
  color: white;
  background-color: black;
}

.downDisclaimers ul {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 700px;
}

.downDisclaimers li {
  width: 335px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 15px;
}

.DD_Bottom {
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
  text-align: center;
}
</style>
