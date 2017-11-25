<template>
  <el-main>
    <el-tabs type="border-card">
      <el-tab-pane label="用户管理">用户管理
        <template>
          <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="ite in item" :key="item">
              <h3 class="h3class">{{ ite.text }}</h3>
              <h3 class="h3class">{{ ite.text }}</h3>
              <h3 class="h3class">{{ ite.text }}</h3>
              <image :src=ite.img width="80" height="80"/>
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

      <el-tab-pane label="定时任务补偿">定时任务补偿
        <template>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column label="图片" width="180">
              <template scope="scope">
                <image :src="scope.row.img" width="100" height="100"/>
              </template>
            </el-table-column>
            <el-table-column label="姓名" width="180">
              <template scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>姓名: {{ scope.row.name }}</p>
                  <p>住址: {{ scope.row.address }}</p>
                  <p>时间: {{ scope.row.date }}</p>
                  <p><image :src="scope.row.img" width="100" height="100"/></p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag>{{ scope.row.name }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template scope="scope">
                <el-popover trigger="hover" placement="top">
                  <div slot="reference" class="name-wrapper">
                    <image :src="scope.row.img" width="100" height="100"/>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </el-tab-pane>
      <router-view></router-view>
    </el-tabs>
  </el-main>
</template>

<script>

</script>
