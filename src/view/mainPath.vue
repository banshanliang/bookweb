<template>
  <div class="mainPath">
    <div class="banner">
      <img src="/static/MPimg/mainPath_logo.png" />
    </div>
    <div class="MP_menu">
      <span>每日推荐</span><span>您的图书</span><span>每周榜首</span
      ><span>top books</span>
    </div>

    <el-row>
      <el-carousel :interval="5000" type="card" height="300px">
        <el-carousel-item
          v-for="item in scrollbox"
          :key="item.name"
          style="background: gray"
        >
          <img :src="item.img" style="width: 780px; height: 300px" />
          <div class="scroll_bt">
            <p class="scbox_top">图书推荐</p>
            <p class="scbox_text">{{ item.text }}</p>
            <p class="scbox_intro">{{ item.intro }}</p>
          </div>
        </el-carousel-item>
      </el-carousel>
      <el-divider>书痴者文必工，艺痴者技必良</el-divider>
    </el-row>
    <div class="MP_intro">
      <img src="/static/MPimg/pic01.png" />
      <div class="MP_introtext">
        <p class="title">您的专属图书推荐</p>
        <p class="text">
          本平台是为您打造的专属图书推荐平台，我们将根据您的爱好与学习倾向来为您推荐优秀的图书。浩瀚书海纵然无法畅游饱览，惟愿取其精华拾其珍宝，汲取一方营养而已。
        </p>
      </div>
    </div>
    <div class="weeklybook">
      <div class="weeklyspan"><p>weekly 每 周 图 书 推 荐</p></div>
      <div class="weeklyspan2"><p class="iconfont bookcategory"></p></div>
      <div class="weeklybooks">
        <div class="weeklybox1" @click="bookmess(0)">
          <img :src="this.weeklybooks[0].img" />
          <div class="weeklyspan3 iconfont bookoffice">1
            <p class="iconfire iconfont bookfavorites">
            <span
              style="font-size: 20px; margin-left: 10px; font-family: '仿宋'"
              >热度{{ this.weeklybooks[0].fire }}40</span
            >
          </p></div>
          

          <p class="weektitle">{{ this.weeklybooks[0].text }}</p>
          <p class="weekintro">{{ this.weeklybooks[0].intro }}</p>
        </div>
        <div class="weeklybox2" @click="bookmess(1)">
          <img :src="this.weeklybooks[1].img" />
          <div class="weeklyspan3 iconfont bookoffice"> 2 <i class="iconfire iconfont bookfavorites">
            <span
              style="font-size: 20px; margin-left: 10px; font-family: '仿宋'"
              >热度{{ this.weeklybooks[0].fire }}40</span
            >
          </i></div>
          <p class="weektitle">{{ this.weeklybooks[1].text }}</p>
          <p class="weekintro">{{ this.weeklybooks[1].intro }}</p>
        </div>
        <div class="weeklybox3" @click="bookmess(2)">
          <img :src="this.weeklybooks[2].img" />
          <div class="weeklyspan3 iconfont bookoffice">3<i class="iconfire iconfont bookfavorites">
            <span
              style="font-size: 20px; margin-left: 10px; font-family: '仿宋'"
              >热度{{ this.weeklybooks[0].fire }}40</span
            >
          </i></div>
          <p class="weektitle">{{ this.weeklybooks[2].text }}</p>
          <p class="weekintro">{{ this.weeklybooks[2].intro }}</p>
        </div>
        <div class="weeklybox4" @click="bookmess(3)">
          <img :src="this.weeklybooks[3].img" />
          <div class="weeklyspan3 iconfont bookoffice">4 <i class="iconfire iconfont bookfavorites">
            <span
              style="font-size: 20px; margin-left: 10px; font-family: '仿宋'"
              >热度{{ this.weeklybooks[0].fire }}40</span
            >
          </i></div>
          <p class="weektitle">{{ this.weeklybooks[3].text }}</p>
          <p class="weekintro">{{ this.weeklybooks[3].intro }}</p>
        </div>
        <div class="weeklybox5" @click="bookmess(4)">
          <img :src="this.weeklybooks[4].img" />
          <div class="weeklyspan3 iconfont bookoffice">5 <i class="iconfire iconfont bookfavorites">
            <span
              style="font-size: 20px; margin-left: 10px; font-family: '仿宋'"
              >热度{{ this.weeklybooks[0].fire }}40</span
            >
          </i></div>
          <p class="weektitle">{{ this.weeklybooks[4].text }}</p>
          <p class="weekintro">{{ this.weeklybooks[4].intro }}</p>
        </div>
      </div>
    </div>
    <div class="tops">
      <div class="toptitle">
        <p>Top Books</p>
      </div>
      <div class="top1">
        <p class="topbg">{{ this.tops[0].type }}</p>
        <img class="imgg" :src="this.tops[0].img" />
        <p class="toptext">{{ this.tops[0].text }}</p>
        <div class="tops_intro">{{ this.tops[0].intro }}</div>
      </div>
      <div class="top2">
        <p class="topbg">{{ this.tops[1].type }}</p>
        <img class="imgg" :src="this.tops[1].img" />
        <p class="toptext">{{ this.tops[1].text }}</p>
        <div class="tops_intro">{{ this.tops[1].intro }}</div>
      </div>
      <div class="top3">
        <p class="topbg">{{ this.tops[2].type }}</p>
        <img class="imgg" :src="this.tops[2].img" />
        <p class="toptext">{{ this.tops[2].text }}</p>
        <div class="tops_intro">{{ this.tops[2].intro }}</div>
      </div>
    </div>

    <el-dialog
      title="图 书 介 绍"
      :visible.sync="bookmessShow"
      center
      width="950px"
    >
      <el-form label-width="120px" style="width: 100%; height: 400px">
        <el-col :span="10">
          <el-form-item
            label="图书名称"
            style="margin-bottom: 10px; font-weight: bold"
            ><i class="iconfont bookform"></i>
            {{ this.item.text }}</el-form-item
          >
          <el-form-item
            label="图书简介"
            style="margin-bottom: 10px; font-weight: bold"
            ><i class="iconfont bookoffice"></i>
            {{ this.item.intro }}</el-form-item
          >
          <el-form-item
            label="推荐理由"
            style="margin-bottom: 10px; font-weight: bold"
            ><i class="iconfont bookgood"></i>
            {{ this.item.reason }}</el-form-item
          >
          <el-form-item
            label="跳转地址"
            style="margin-bottom: 10px; font-weight: bold"
            ><i class="iconfont booklink"></i>
            <a :href="item.src" target="_blank" style="color: #00f"
              >外部图书推荐网址</a
            ></el-form-item
          >
          <el-form-item style="margin-bottom: 10px; font-weight: bold">
            <el-button
              icon="el-icon-star-on"
              type="primary"
              v-if="!this.item.hasStared"
              @click="addStar"
              >收藏</el-button
            >
            <el-button
              icon="el-icon-star-off"
              type="primary"
              v-if="this.item.hasStared"
              @click="removeStar"
              >已经收藏</el-button
            >
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item style="margin-bottom: 10px">
            <div class="kuang">
              <div
                style="
                  position: relative;
                  width: 100px;
                  height: auto;
                  text-align: center;
                  float: left;
                  margin: 28px;
                "
              >
                <img
                  :src="item.img"
                  style="width: 300px; height: 300px; vertical-align: bottom"
                />
              </div>
            </div> </el-form-item></el-col></el-form
    ></el-dialog>
  </div>
</template>
<script>
import { scrollShow, startScroll } from "../../static/js/mainPath.js";
import { getmainPath } from "../url.js";
export default {
  data() {
    return {
      mainPath: [],
      scrollbox: [], //记录轮播图数据
      weeklybooks: [{}, {}, {}, {}, {}],
      tops: [{}, {}, {}],
      bookmessShow: false,
      item: "",
    };
  },
  methods: {
    addStar() {
      this.$message.success("收藏成功");
    },
    removeStar() {
      this.$message.success("移除成功");
    },
    getData() {
      //渲染首页的数据
      getmainPath().then((res) => {
        this.scrollbox = res.data.scrollbox;
        this.weeklybooks = res.data.weeklybooks;
        this.tops = res.data.tops;
      });
    },

    bookmess(num) {
      this.bookmessShow = true;
      this.item = this.weeklybooks[num];
    },
    hidBg() {},
  },
  mounted() {
    this.getData(); //加载时渲染数据
    scrollShow();
  },
  destroyed: function () {
    //离开路由的时候停止轮播
    clearInterval(this.ds);
  },
};
</script>
<style lang="scss" src='../../static/css/mainPath.css'>
</style>
