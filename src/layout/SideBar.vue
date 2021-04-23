<template>
  <div class="tab-menu">
    <el-row >
      <el-col :span="24">
        <el-menu
          default-active="1"
          default-openeds="/user"
          class="el-menu-vertical-demo"
          background-color="#fff"
          text-color="black"
          active-text-color="#377bf6"
          router>
          <el-menu-item index="/">
            <span slot="title">需求管理</span>
          </el-menu-item>
          <el-menu-item index="/user">
            <span slot="title">任务管理</span>
          </el-menu-item>
          <el-menu-item index="3">
            <span slot="title">计划模板管理</span>
          </el-menu-item>
          <el-menu-item index="4">
            <span slot="title">项目管理</span>
          </el-menu-item>
          <el-menu-item index="5">
            <span slot="title">人员配置</span>
          </el-menu-item>
          <el-submenu index="6">
            <el-menu-item index="7">
            <span slot="title">流程人员配置</span>
          </el-menu-item>
            <template slot="title">
              <span>报表</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getNewUserMenu } from '@/api/user'
export default {
  name: 'SideBaar',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  created() {
    this.handleGetNewUserMenu()
  },
  methods: {
    handleGetNewUserMenu() {
      getNewUserMenu().then(res => {
        // console.log(res.data)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-menu {
  width: 11%;
  height: 100%;
  position: fixed;
  left: 0;
  top:4.2rem;
  z-index: 10;
  background: #fff;
}
</style>
