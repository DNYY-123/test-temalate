<template>
<div class="container">
  <div class="tip">
    <el-row>
      <el-col :span="4" :offset="1">
        <div class="grid-content bg-purple">
          <i class="el-icon-collection-tag" style="font-size:14px;font-weight:bold">需求管理</i>
        </div>
      </el-col>
      <el-col :span="4" :offset="15">
        <div class="grid-content bg-purple-light">
          <el-button type="info" icon="el-icon-video-play" size="mini" plain>发起单品过会</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
  <div class="input-line">
    <el-form :inline="true" class="" label-width="110px" label-position="right" size="small">
      <el-form-item label="产品大类">
        <el-select v-model="formData.categoryName" placeholder="请选择产品大类">
          <el-option
            v-for="item in categoryNameList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="产品小类">
        <el-select v-model="formData.subcategoryName" placeholder="请选择产品小类">
          <el-option
            v-for="item in subcategoryNameList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="产品类型">
        <el-select v-model="formData.productType" placeholder="请选择产品类型">
          <el-option
            v-for="item in productTypeList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="SKU">
        <el-input v-model="formData.erpSku" placeholder="请输入SKU"></el-input>
      </el-form-item>
      <el-form-item label="Model">
        <el-input v-model="formData.model" placeholder="请输入Model"></el-input>
      </el-form-item>
      <el-form-item label="需求编号">
        <el-input v-model="formData.getDemandStatus" placeholder="请输入需求编号"></el-input>
      </el-form-item>
      <el-form-item label="事业部/team">
        <el-input v-model="formData.team" placeholder="请输入事业部/team"></el-input>
      </el-form-item>
      <el-form-item label="需求状态">
        <el-select v-model="formData.status" placeholder="请选择需求状态">
          <el-option
            v-for="item in statusList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="PM">
        <el-select v-model="formData.pmUserId" placeholder="请选择PM">
          <el-option
            v-for="item in pmUserIdList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="过会时间">
        <el-date-picker
          v-model="formData.meetingDate"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="计划上架时间">
        <el-date-picker
          v-model="formData.upSelDate"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <br>
      <div class="input-btn">
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" plain>搜索</el-button>
          <el-button @click="clearBtn" icon="el-icon-refresh-left">重置</el-button>
        </el-form-item>
      </div>
      <el-form-item>
          <el-button type="primary"  plain icon="el-icon-plus">新建需求</el-button>
          <el-button type="info" icon="el-icon-document-copy" plain>复制</el-button>
        </el-form-item>
    </el-form>
  </div>
  <div class="tab">
    <el-table
      ref="multipleTable"
      :data="tableView"
      tooltip-effect="dark"
      style="width:100%;"
      height="100%"
      border
      stripe
      >
      <el-table-column
        fixed
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="proposalInfoNo"
        label="需求编号"
        width="250">
      </el-table-column>
      <el-table-column
        prop="categoryName"
        label="产品大类"
        width="250
        ">
      </el-table-column>
      <el-table-column
        prop="subCategoryName"
        label="产品小类"
        width="250
        ">
      </el-table-column>
      <el-table-column
        prop="productType"
        label="产品类型"
        width="250
        ">
      </el-table-column>
      <el-table-column
        prop="model"
        label="Model"
        width="250
        ">
      </el-table-column>
      <el-table-column
        prop="erpSku"
        label="SKU"
        width="250
        ">
      </el-table-column>
      <el-table-column
        prop="proposalInfoNo"
        label="需求编号"
        width="250
        ">
      </el-table-column>
      <el-table-column
        prop="groupName"
        label="事业部/team"
        width="250
        ">
      </el-table-column>
      <el-table-column
        prop="status"
        label="需求状态"
        width="250
        ">
      </el-table-column>
      <el-table-column
        prop="meetingDate"
        label="过会时间"
        width="250
        ">
      </el-table-column>
      <el-table-column
        label="计划上架时间"
        prop="upSelfDate"
        width="150
        ">
      </el-table-column>
      <el-table-column
      fixed="right"
        label="项目状态"
        prop="investigationResult"
        width="150
        ">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="150
        ">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small">
            移除
          </el-button>
        </template>
   </el-table-column>
    </el-table>
  </div>
  <div class="page">
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[5, 10, 15, 20 ]"
        :current-page="currentPage"
        :page-size="pageSize"
        :total="total"
        layout="prev, pager, next, jumper, sizes, total"
        >
      </el-pagination>
    </div>
  </div>
</div>
</template>

<script>
import {
  getCategoryList, getSubCategoryList,
  getProductTypeList, getPlmActiveGroupList,
  getDemandList, getDemandStatusList,
  getProductManagerList
} from '@/api/demand'
export default {
  data() {
    return {
      formData: {
        categoryName: '',
        subcategoryName: '',
        productType: '',
        erpSku: '',
        model: '',
        getDemandStatus: '',
        team: '',
        pmUserId: '',
        status: '',
        getPlmActiveGroup: '',
        meetingDate: '',
        upSelDate: ''
      },
      // 产品大类
      categoryNameList: [],
      // 产品小类
      subcategoryNameList: [],
      // 产品类型
      productTypeList: [],
      // 事业部/team
      getPlmActiveGroupList: [],
      // 需求状态
      statusList: [],
      // PM
      pmUserIdList: [],
      // 总数据
      tableData: [],
      // 当前显示数据
      tableView: [],
      // 翻页
      currentPage: 1,
      pageSize: 5,
      total: 0
    }
  },
  created() {
    this.handleGetCategoryList()
    this.handleGetSubCategoryList()
    this.handleGetProductTypeList()
    this.handleGetPlmActiveGroupList()
    this.handleGetDemandStatusList()
    this.handleGetProductManagerList()
    this.handleGetDemandList()
    // const getList = () => new Promise((resolve,reject) => {
    //   setTimeout(() => {
    //     resolve([1,2,3])
    //   }, 2000);
    // })
    // getList()
    //   .then(data => {
    //     console.log(data)
    //   })
    //   const promise = new Promise(function(resolve, reject) {
    //   if (0){
    //     resolve(1)
    //   } else {
    //     reject(2)
    //   }
    // });
    // promise.then(function(value) {
    //   console.log(value)
    // }, function(error) {
    //   // failure
    //   console.log(error)
    // })
  },
  methods: {
    // 数据获取
    // 产品大类
    handleGetCategoryList() {
      getCategoryList().then(res => {
        this.categoryNameList = res.data.data.getCategoryList
      })
    },
    // 产品小类
    handleGetSubCategoryList() {
      getSubCategoryList().then(res => {
        this.subcategoryNameList = res.data.data.getSubCategoryList
      })
    },
    // 产品类型
    handleGetProductTypeList() {
      getProductTypeList().then(res => {
        this.productTypeList = res.data.data.getDicList
      })
    },
    // 事业部/team
    handleGetPlmActiveGroupList() {
      getPlmActiveGroupList().then(res => {
        this.plmActiveGroupList = res.data.data.getPlmActiveGroupList
      })
    },
    // 获取需求状态列表
    handleGetDemandStatusList() {
      getDemandStatusList().then(res => {
        this.statusList = res.data.data.getDicList
      })
    },
    // 获取PM用户列表
    handleGetProductManagerList() {
      getProductManagerList().then(res => {
        this.pmUserIdList = res.data.data.getProductManagerList
      })
    },
    // 获取需求列表
    handleGetDemandList() {
      getDemandList(this.formData).then(res => {
        console.log(res.data[1])
        if (res.data.length !== 0) {
          this.tableView = [] // 清除之前的数据
          this.tableData = res.data
          this.total = res.data.length
          if (res.data.length >= this.pageSize) {
            for (let i = 0; i < this.pageSize; i++) {
              this.tableView.push(res.data[i])
            }
          } else {
            this.tableView = res.data
          }
        }
      })
    },
    // async handleGetDemandListTest() {
    //   // const res = await getDemandList(this.formData)
    //   const { data } = await getDemandList(this.formData)
    //   console.log(data[0])
    //   if (data.length !== 0) {
    //     this.tableView = [] // 清除之前的数据
    //     this.tableData = data
    //     this.total = data.length
    //     if (data.length >= this.pageSize) {
    //       for (let i = 0; i < this.pageSize; i++) {
    //         this.tableView.push(data[i])
    //       }
    //     } else {
    //       this.tableView = data
    //     }
    //   }
    // },
    // 当前页码改变
    handleCurrentChange(val) {
      console.log(val)
      if (val !== 1) {
        val = (val - 1) * this.pageSize
      }
      const number = this.tableData.length
      if (number > val + this.pageSize) {
        this.tableView = this.tableData.slice(val, val + this.pageSize)
      } else {
        this.tableView = this.tableData.slice(val, this.tableData.length)
      }
    },
    // 每页显示条数改变
    handleSizeChange(newSize) {
      this.pageSize = newSize
      this.handleGetDemandList()
    },
    // 清除表单
    clearBtn() {
      Object.assign(this.$data, this.$options.data())
      // 重新请求数据
      this.handleGetCategoryList()
      this.handleGetSubCategoryList()
      this.handleGetProductTypeList()
      this.handleGetPlmActiveGroupList()
      this.handleGetDemandStatusList()
      this.handleGetProductManagerList()
      this.handleGetDemandList()
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 83%;
  height: 100%;
  position: fixed;
  right: 1%;
  top: 4.2rem;
  background: #fff;
  border-radius: 4px;
  .tip {
    height: 60px;
    border-bottom: 1px solid #ccc;
    line-height: 60px;
  }
  .input-line {
    margin: 50px 30px;
    font-weight: bold;
  }
  .input-btn {
    text-align: center;
    .el-button {
      margin: 0px 20px;
    }
  }
  .tab {
    margin-top: 20px;
    height: 270px;
  }
  .page {
    margin-top: 10px;
  }
  .el-form-item {
    margin-top: 20px;
    width: 350px;
    .el-input__inner {
      width: 199px !important;
    }
  }
}
</style>
