<template>
  <div id="login-paper">
    <el-container>

      <el-main>
        <div id="paperLogin" style="width: 400px ; " class="logindiv">
          <el-form ref="form" :model="form" label-width="80px">
            账号：
            <el-input prefix-icon="el-icon-caret-right" v-model="form.username" placeholder="请输入账号"></el-input>
            <br/>
            密码：
            <el-input prefix-icon="el-icon-caret-right" type="password" v-model="form.password"
                      placeholder="请输入账号"></el-input>
            <br/>
            <!--<router-link to="/MainFrame">MainFrame</router-link>-->
            <el-button :plain="true" @click="loginweb">提 交</el-button>
            <el-button :plain="true" @click="sendweb">发送请求</el-button>
            {{webBody}}
            <br/>
            <router-view></router-view>
          </el-form>
        </div>
      </el-main>
    </el-container>
    <ip-content></ip-content>
  </div>
</template>


<script>
  export default {
    components: {
    },
    data () {
      return {
        form: {
          username: '',
          password: ''
        },
        webBody: ''
      }
    },
    methods: {
      loginweb: function () {
        if (this.form.username === 'admin' && this.form.password === '123') {
          this.fullscreenLoading = true
          setTimeout(() => {
            this.fullscreenLoading = false
          }, 1000)
          this.$router.push({ path: '/MainFrame' })
        } else {
          this.$message({
            message: '密码输入错误哦，请再次输入试试吧',
            type: 'error'
          })
        }
      },
      sendweb: function () {
        this.$http.get('https://github.com/ddy5529').then(response => {
          this.webBody = response.body
        }, response => {
          // error
          this.webBody = response.body
        })
      }
    }
  }
</script>


<style>
  @import url("//unpkg.com/element-ui@2.0.5/lib/theme-chalk/index.css");
  .logindiv{
    margin-top:50px;
    margin-bottom:100px;
    margin-right:50px;
    margin-left:50px;
  }
</style>

