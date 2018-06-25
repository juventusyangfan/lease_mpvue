<template>
  <div class="home">
    <scroll-view scroll-y="true" style="height: 100%;" upper-threshold="20" bindscrolltoupper="scrolltoupper">
      <header class="m_header">
        <div class="m_header_box" id="my_search">
          <a href="#" class="address"
             style="background: url('/static/images/icon_arrow_down.png') 65% no-repeat;background-size: 16px 16px;">{{city}}</a>
          <div class="search_input">
          <span class="icon_search"
                style="background: url('/static/images/search_03.png');background-size: cover;"></span>
            <input type="search" class="search" placeholder="" @click="goSearch($event)" value="贝雷片">
          </div>
          <a class="logo_btn">登录</a>
          <a class="ic_message"></a>
        </div>
      </header>
      <swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="500">
        <swiper-item v-for="(item,key) in imgUrls" :key="key">
          <image :src="item" class="slide-image" mode="widthFix"/>
        </swiper-item>
      </swiper>
      <div class="home_menu_con clearfix">
        <a class="home_menu_icon">
          <img :src="icon1" mode="widthFix">
          <span>支架租赁</span>
        </a>
        <a class="home_menu_icon">
          <img :src="icon2" mode="widthFix">
          <span>贝雷租赁</span>
        </a>
        <a class="home_menu_icon">
          <img :src="icon3" mode="widthFix">
          <span>型材租赁</span>
        </a>
        <a class="home_menu_icon">
          <img :src="icon4" mode="widthFix">
          <span>支撑租赁</span>
        </a>
        <a class="home_menu_icon">
          <img :src="icon5" mode="widthFix">
          <span>供货信息</span>
        </a>
        <a class="home_menu_icon">
          <img :src="icon6" mode="widthFix">
          <span>需求信息</span>
        </a>
        <a class="home_menu_icon">
          <img :src="icon7" mode="widthFix">
          <span>合作商家</span>
        </a>
        <a class="home_menu_icon" href="tel:400-168-0270">
          <img :src="icon8" mode="widthFix">
          <span>一键客服</span>
        </a>
      </div>
      <div class="home_user_list clearfix">
        <div class="user_icon">
          <img :src="userIcon" mode="widthFix">
        </div>
        <div class="user_list_con marquee_box">
          <ul class="marquee_list" :class="{marquee_top:animate}">
            <li v-for="(item,key) in userInfoArr" :key="key"><a>{{item}}</a></li>
          </ul>
        </div>
      </div>
      <div class="home_help_con clearfix">
        <div class="home_help_cells">
          <a class="floatL">
            <img :src="help1" mode="widthFix">
          </a>
          <a class="floatR">
            <img :src="help2" mode="widthFix">
          </a>
        </div>
        <div class="home_help_banner">
          <a>
            <img :src="home_help_banner" mode="widthFix">
          </a>
        </div>
      </div>
    </scroll-view>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import request from '../utils/fly';

  export default {
    data() {
      return {
        city: '武汉',
        imgUrls: ['/static/images/1.png', '/static/images/2.png'],
        icon1: '/static/images/icon_m_01.png',
        icon2: '/static/images/icon_m_02.png',
        icon3: '/static/images/icon_m_03.png',
        icon4: '/static/images/icon_m_04.png',
        icon5: '/static/images/icon_m_05.png',
        icon6: '/static/images/icon_m_06.png',
        icon7: '/static/images/icon_m_07.png',
        icon8: '/static/images/icon_m_08.png',
        userIcon: '/static/images/userInfo_icon.png',
        animate: false,
        userInfoArr: ["上海钢银供应链管理有限公司", "北京科正平机电设备检验所", "中铁八局现代物流有限公司", "广东中拓物产供应链管理有限公司", "中交二航局第四工程有限公司", "物集港钢铁贸易有限公司", "贵州国辉投资有限公司", "北京华源龙泰房地产土地资产评估有限公司", "中交第二航务工程局有限公司第六工程分公司漳州九龙岭项目部", "武汉富诺建筑劳务有限公司"],
        help1: '/static/images/help_m_01.png',
        help2: '/static/images/help_m_02.png',
        home_help_banner: '/static/images/home_help_banner.png'
      }
    },
    computed: {
      ...mapState([
        'bannerList'
      ])
    },
    mounted() {
      setInterval(this.showMarquee, 5000);
      this.getBannerList();
    },
    methods: {
      ...mapActions([
        'getBannerList'
      ]),
      //跳入搜索页面
      goSearch(event) {

      },
      showMarquee: function () {
        this.animate = true;
        setTimeout(() => {
          this.userInfoArr.push(this.userInfoArr[0]);
          this.userInfoArr.shift();
          this.animate = false;
        }, 500)
      },
      scrolltoupper (){
        let sea = document.query.select("#my_search");
        console.log(sea)
      }
    }
  }
</script>

<style>
  @import '../../static/style/base.css';

  .m_header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 45px;
    z-index: 100;
  }

  .m_header .m_header_box {
    position: relative;
    min-width: 300px;
    max-width: 640px;
    height: 45px;
    margin: 0 auto;
    background: rgba(201, 21, 35, 0);
  }

  .m_header_box .address {
    width: 60px;
    height: 36px;
    line-height: 36px;
    position: absolute;
    top: 4px;
    left: 10px;
    color: #fff;
    font-size: 12px;
    display: block;
  }

  .m_header_box .search_input {
    width: 100%;
    height: 45px;
    padding-left: 75px;
    padding-right: 60px;
    padding-top: 2px;
    position: relative;
  }

  .m_header_box .search_input .search {
    width: 200px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    margin-top: 8px;
    padding-left: 30px;
    background: rgba(255, 255, 255, 0.5);
    color: #fff;
    font-size: 12px;
  }

  .m_header_box .search_input .search:-moz-placeholder {
    color: #fff;
  }

  .m_header_box .search_input .search::-moz-placeholder {
    color: #fff;
  }

  .m_header_box .search_input .search::-webkit-input-placeholder {
    color: #fff;
  }

  .m_header_box .search_input .icon_search {
    display: inline-block;
    width: 13px;
    height: 13px;
    position: absolute;
    left: 84px;
    top: 18px;
  }

  .m_header_box .logo_btn {
    display: block;
    width: 30px;
    height: 40px;
    position: absolute;
    right: 8px;
    top: 0;
    color: #fff;
    font-size: 12px;
    line-height: 40px;
    font-weight: 400;
  }

  .home_menu_con {
    width: 100%;
    margin-bottom: 10px;
    padding-bottom: 20px;
    background: #fff;
  }

  .home_menu_con .home_menu_icon {
    display: inline-block;
    width: 25%;
    margin-top: 20px;
    text-align: center;
    float: left;
  }

  .home_menu_con .home_menu_icon img {
    display: block;
    margin: 0 auto;
    width: 40px;
  }

  .home_menu_con .home_menu_icon span {
    display: block;
    margin-top: 10px;
    font-size: 14px;
  }

  .home_user_list {
    width: 100%;
    margin-bottom: 10px;
    padding: 14px 22px;
    background: #fff;
  }

  .home_user_list > div {
    float: left;
  }

  .home_user_list .user_icon {
    padding-right: 14px;
    margin-right: 14px;
    border-right: solid 1px #E5E5E5;
  }

  .home_user_list img {
    width: 34px;
  }

  .home_user_list .user_list_con {
    width: 260px;
    height: 38px;
    overflow-y: hidden;
  }

  .home_user_list .user_list_con a {
    display: inline-block;
    width: 100%;
    height: 14px;
    line-height: 14px;
    margin-bottom: 8px;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .marquee_top {
    transition: all 0.5s;
    margin-top: -22px
  }

  .home_help_con {
    margin-bottom: 10px;
    padding: 14px 16px;
    background: #fff;
  }

  .home_help_con .home_help_cells img {
    width: 168px;
  }

  .home_help_con .home_help_banner img {
    width: 100%;
    margin-top: 10px;
  }
</style>
