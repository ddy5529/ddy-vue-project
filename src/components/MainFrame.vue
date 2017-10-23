<template>
  <div id="app">
    <el-container>
      <!--头部-->
      <el-header style=" font-size: 12px">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>

          </el-radio-group>

          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
          <el-menu-item index="4">
            <el-badge :value="1" class="item">
              <el-button size="small">评论</el-button>
            </el-badge>
            <el-badge :value="3" class="item">
              <el-button size="small">回复</el-button>
            </el-badge>
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <!--侧边栏-->
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                   :collapse="isCollapse">
            <el-switch
              v-model="isCollapse"
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-text="导航栏缩放开关"
              inactive-text="按年付费" >
            </el-switch>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-upload"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">选项2-1</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span slot="title">导航三</span>
              </template>
              <el-menu-item index="3-1">

              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container>
          <!--主体-->
          <el-main>

            <el-tabs type="border-card">
              <el-tab-pane label="用户管理">用户管理
                <template>
                  <el-carousel :interval="4000" type="card" height="200px">
                    <el-carousel-item v-for="item in 6" :key="item">
                      <h3>{{ item }}</h3>
                    </el-carousel-item>
                  </el-carousel>
                </template>
                <el-table
                  :data="tableData"
                  stripe
                  border
                  style=" width: 100% "
                >
                  <el-table-column prop="date" label="日期" width="180">
                  </el-table-column>
                  <el-table-column prop="name" label="姓名" width="180">
                  </el-table-column>
                  <el-table-column prop="address" label="地址">
                  </el-table-column>
                </el-table>
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                               :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100"
                               layout="total, sizes, prev, pager, next, jumper" :total="400">
                </el-pagination>
              </el-tab-pane>
              <el-tab-pane label="配置管理">配置管理

                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :file-list="fileList">
                  <el-button size="small" type="primary">点击上传</el-button>
                  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
              </el-tab-pane>
              <el-tab-pane label="角色管理">角色管理
                <router-view :is=""></router-view>
                <router-link to="/foo">Go to Foo</router-link>
                <router-link to="/bar">Go to Bar</router-link>
              </el-tab-pane>

              <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
              <router-view></router-view>
            </el-tabs>

          </el-main>
        </el-container>
      </el-container>
      <!--尾部-->
      <el-footer>本案例仅供学习参考，若是用作商业用途，请联系我 。QQ：1171148438 </el-footer>
    </el-container>
  </div>
</template>


<script>
  import Vue from 'vue'
  import Router from 'vue-router'
  import Aside from '../components/Aside.vue'
  import Content from '../components/Content.vue'
  import Footer from '../components/Footer.vue'
  import Header from '../components/Header.vue'
  import ElSubmenu from '../../node_modules/element-ui/packages/menu/src/submenu.vue'
  import ElMenuItemGroup from '../../node_modules/element-ui/packages/menu/src/menu-item-group.vue'

  const Foo = {template: '<p>foo</p>'}
  const Bar = {template: '<p>bar</p>'}

  const routes = [
    {path: '/foo', component: Foo},
    {path: '/bar', component: Bar},
    {path: '/Header', component: Header},
    {path: '/Aside', component: Aside},
    {path: '/Content', component: Content},
    {path: '/Footer', component: Footer}
  ]

  const router = new Router({
    routes: routes
  })
  new Vue({
    router
  }).$mount('#app')

  export default {
    components: {
      ElMenuItemGroup,
      ElSubmenu
    },
    data () {
      return {
        item: [
          {
            img: '../../static/150852084685.jpg',
            text: '太空环境'
          }
        ],
        tableData: [{
          date: '2017-10-15',
          name: 'ddy',
          address: '深圳市南山区科技园'
        }, {
          date: '2017-10-15',
          name: 'ddy',
          address: '深圳市南山区科技园'
        }, {
          date: '2017-10-15',
          name: 'ddy',
          address: '深圳市南山区科技园'
        }, {
          date: '2017-10-15',
          name: 'ddy',
          address: '深圳市南山区科技园'
        }],
        isCollapse: false
      }
    },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>


<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;

  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

