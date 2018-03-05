<template>
  <div class="bb">
        
      <div class="one" v-if="flag">
            <header>
                <h1>小黄车</h1>
            </header>
            <section>
                <div>
                    <son></son>
                </div>
            </section>
            <footer>
                <ul>
                    <li><i class="iconfont" @click="click">&#xe607;</i></li>
                    <li><i class="iconfont">&#xe60d;</i></li>
                </ul>
            </footer>
        </div>
        <!-- <div class="two">
            <son2></son2>
        </div> -->
        <!-- 用户页面 -->
        <div class="userlist">
        <span class="close">
            <i class="icon iconfont icon-guanbi-01"></i>
        </span>
        <div class="top">
            用户
        </div>
        <div class="content-tel">
            <input type="tel" maxlength="11" required placeholder="请输入手机号">
        </div>
        <div class="content-list">
            <ul>
                <li>
                    <i class="icon iconfont icon-wodedingdan"></i>
                    <span>我的行程</span>
                </li>
                <li>
                    <i class="icon iconfont icon-qianbao"></i>
                    <span>我的钱包</span>
                </li>
                <li>
                    <i class="icon iconfont icon-gerenxinxi"></i>
                    <span>邀请好友</span>
                </li>
                <li>
                    <i class="icon iconfont icon-kefu"></i>
                    <span>我的客服</span>
                </li>

            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import aa from './components/aa.vue'
export default {
    name:'bb',
    data(){
        return{
           flag: true,
           title:''
        }
    },
    components:{
        son:aa
    },
    methods:{
        click(){
            this.flag=false
        },
        getjson(){
            axios.get('http://www.hao123.com')
            .then((res)=>{
                this.title = res.data.name
                console.log(res.data)
            })
        }
    }
}
</script>

<style>
@import './css/style.css';
@import './css/common.css';
@import './css/reset.css';
@import './font/iconfont.css';
</style>
