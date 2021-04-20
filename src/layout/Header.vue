<template>
  <div class="container">
    <el-header>
        <el-row>
          <el-col :span="16"><div class="grid-content bg-purple"><img src="../assets/sunvalley.png" alt=""></div></el-col>
          <el-col :span="2" :offset="6">
            <div class="grid-content bg-purple center">
              <el-dropdown>
                <span class="el-dropdown-link" style="color:white">
                  个人中心<i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>个人信息</el-dropdown-item>
                  <el-dropdown-item>设置</el-dropdown-item>
                  <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-col>
        </el-row>
    </el-header>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.container {
  background: #377bf6;
  height: 60px;
  width: 100%;
  line-height: 60px;
  img {
    height: 50px;
    transform: translate(20px, 10%);
  }
  .center {
    cursor: pointer;
    font-weight: bold;
    font-size: 20px;
  }
}
</style>
