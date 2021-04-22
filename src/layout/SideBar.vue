<template>
  <div class="tab-menu">
    <el-row >
      <el-col :span="24">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#fff"
          text-color="black"
          active-text-color="#377bf6"
          router>
          <el-menu-item index="/">
            <i class="el-icon-menu"></i>
            <span slot="title">需求管理</span>
          </el-menu-item>
          <el-menu-item index="/user">
            <i class="el-icon-document"></i>
            <span slot="title">导航2</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">导航3</span>
          </el-menu-item>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航4</span>
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
  width: 15%;
  height: 100%;
  position: fixed;
  left: 0;
  top:4.2rem;
  z-index: 10;
  background: #fff;
}
</style>
