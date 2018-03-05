<template>
  <!-- 容器 -->
  <el-container class="wrap">
    <!-- 页面头部 -->
    <el-header class="header">
      <span class="info">this is header <i class="el-icon-success"></i></span>
    </el-header>
    <!-- 页面主体 -->
    <el-main class="content">
      <!-- 栅格行 -->
      <el-row :gutter="20">
        <!-- 栅格列 -->
        <el-col :span="12" class="grid-content text-center bg-orange">左</el-col>
        <el-col :span="12" class="grid-content text-center bg-navy">右</el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8" class="grid-content text-center bg-orange">左</el-col>
        <el-col :span="8" class="grid-content text-center bg-navy">右</el-col>
        <el-col :span="8" class="grid-content text-center bg-orange">右</el-col>
      </el-row>
      <hr>
      <!-- 按钮组件  plain default round 三种按钮类型 -->
      <el-button type="danger">1111</el-button>
      <el-button type="wraning" plain>1111</el-button>
      <el-button type="info" round>1111</el-button>
      <el-button type="success" plain>1111</el-button>
      <el-button type="primary">1111</el-button>
      <!-- 单选 -->
      <el-row>
        <el-radio :span="24">
          <p>
            请您选择性别：{{sex}}
          </p>
          <el-radio v-model="sex" label="man">男</el-radio>
          <el-radio v-model="sex" label="woman">女</el-radio>
        </el-radio>
      </el-row>
      <!-- 多选 -->
      <el-row>
        <el-col :span="24">
          {{checkList}}
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="eat">吃</el-checkbox>
            <el-checkbox label="drink">喝</el-checkbox>
            <el-checkbox label="play">玩儿</el-checkbox>
            <el-checkbox label="have fun">乐</el-checkbox>
          </el-checkbox-group>
        </el-col>
      </el-row>
      <!-- 输入框 -->
      <el-row :gutter="20">
        <el-col :span="12">
          <el-input v-model="username" placeholder="please input your username"></el-input>
        </el-col>
        <el-col :span="12">
          <el-input v-model="password" placeholder="please input your password"></el-input>
        </el-col>
      </el-row>
      <!-- 下拉菜单 -->
      <el-row>
        <el-col :span="24">
        </el-col>
      </el-row>
      <!-- 开关按钮 -->
      <el-row>
        <el-col :span="24">
          <el-switch v-model="val1" active-color="red" inactive-color="green">
          </el-switch>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-rate v-model="val2"></el-rate>
          <el-color-picker v-model="val3"></el-color-picker>
          <el-pagination background layout="prev, pager, next" :total="1000">
          </el-pagination>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          tab的索引项 {{activeName}}个
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-button @click="next">下一步</el-button>
          <el-steps :active="active" finish-status="success">
            <el-step title="步骤 1"></el-step>
            <el-step title="步骤 2"></el-step>
            <el-step title="步骤 3"></el-step>
          </el-steps>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-carousel trigger="click" height="150px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </el-col>
      </el-row>
      <router-view/>
    </el-main>
    <!-- 页面尾部 -->
    <el-footer class="footer">
      this is footer
    </el-footer>
  </el-container>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      val1: true,
      val2: null,
      val3: null,
      val5: null,
      active: 0,
      options: ["eat", "drink", "havefun"],
      username: "heinan",
      password: 123456,
      sex: null,
      checkList: [],
      activeName: "second"
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    next() {
      if (this.active++ > 2) this.active = 0;
    }
  }
}

</script>
<style>
@import url("../node_modules/element-ui/lib/theme-chalk/index.css");
@import url("../static/css/font-awesome.min.css");
@import url("../static/css/reset.css");
@import url("../static/css/common.css");
@import url("../static/css/style.css");
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

</style>
