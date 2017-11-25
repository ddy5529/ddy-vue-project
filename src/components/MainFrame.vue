<template>
  <div id="app">
    <el-container>
      <!--头部-->
      <ip-Header></ip-Header>
      <el-container>
        <!--侧边栏-->
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <ip-aside></ip-aside>
        </el-aside>
        <el-container>
          <!--主体-->
          <ip-Content></ip-Content>
        </el-container>
      </el-container>
      <!--尾部-->
      <el-footer><ip-footer></ip-footer> </el-footer>
    </el-container>
  </div>
</template>


<script>
  import Header from '../components/Header.vue'
  import Aside from '../components/Aside.vue'
  import Content from '../components/Content.vue'
  import Footer from '../components/Footer.vue'
  export default {
    components: {
      'ip-Header': Header,
      'ip-Content': Content,
      'ip-aside': Aside,
      'ip-footer': Footer
    },
    data () {
      return {
        item: [
          {
            text: '中国环境'
          },
          {
            img: '../../static/150852084685.jpg',
            text: '太空环境'
          },
          {
            img: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
            text: '宇宙环境'
          }
        ],
        tableData: [{
          img: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg',
          date: '2017-10-15',
          name: 'ddy1',
          address: '深圳市南山区科技园'
        }, {
          img: '../../static/150852084685.jpg',
          date: '2017-10-15',
          name: 'ddy2',
          address: '深圳市南山区科技园'
        }, {
          date: '2017-10-15',
          name: 'ddy3',
          address: '深圳市南山区科技园'
        }, {
          date: '2017-10-15',
          name: 'ddy4',
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
  .h3class{
    color: #475669;
    font-size: 14px;

    line-height: 200px;

  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

