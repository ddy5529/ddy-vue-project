<template>
  <el-main>
    <template>
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </template>
    <el-tabs type="border-card">
      <el-tab-pane label="用户管理">用户管理
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
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>

  </el-main>
</template>

<script>
  import Vue from 'vue'
  import Router from 'vue-router'

  const router = new Router({
  })
  new Vue({
    router
  }).$mount('#app')   // 在这里定义vue实例的指定的ID

</script>
