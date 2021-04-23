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
    <el-form :inline="true" :model="formData" ref="formData" label-width="100px" label-position="right" size="mini">
      <el-form-item label="产品大类" prop="categoryName">
        <el-select @change="handleGetDemandList" v-model="formData.categoryName" placeholder="请选择产品大类" clearable>
          <el-option
            v-for="item in categoryNameList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="产品小类" prop="subCategoryName">
        <el-select v-model="formData.subCategoryName" placeholder="请选择产品小类" clearable>
          <el-option
            v-for="item in subcategoryNameList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="产品类型" prop="productType">
        <el-select v-model="formData.productType" placeholder="请选择产品类型" clearable>
          <el-option
            v-for="item in productTypeList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="SKU" prop="erpSku">
        <el-input v-model="formData.erpSku" placeholder="请输入SKU" clearable></el-input>
      </el-form-item>
      <el-form-item label="Model" prop="model">
        <el-input v-model="formData.model" placeholder="请输入Model" clearable></el-input>
      </el-form-item>
      <el-form-item label="需求编号" prop="getDemandStatus">
        <el-input v-model="formData.getDemandStatus" placeholder="请输入需求编号" clearable></el-input>
      </el-form-item>
      <el-form-item label="事业部/team" prop="team" >
        <el-input v-model="formData.team" placeholder="请输入事业部/team" clearable></el-input>
      </el-form-item>
      <el-form-item label="需求状态" prop="status">
        <el-select v-model="formData.status" placeholder="请选择需求状态" clearable>
          <el-option
            v-for="item in statusList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="PM" prop="pmUserId">
        <el-select v-model="formData.pmUserId" placeholder="请选择PM" clearable>
          <el-option
            v-for="item in pmUserIdList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="过会时间" prop="meetingDate">
        <el-date-picker
          v-model="formData.meetingDate"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          format="yyyy-MM-dd"
          value-format="yyyy-MM-dd"
          end-placeholder="结束日期"
          clearable>
        </el-date-picker>
      </el-form-item>
      <el-form-item label="计划上架时间" prop="upSelDate">
        <el-date-picker
          v-model="formData.upSelDate"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          clearable>
        </el-date-picker>
      </el-form-item>
      <br>
      <div class="input-btn">
        <el-form-item>
          <el-button @click="handleGetDemandList" type="primary" icon="el-icon-searchData" plain>搜索</el-button>
          <el-button @click="clearBtn('formData')" icon="el-icon-refresh-left">重置</el-button>
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
      :height="tableHeight"
      border
      stripe
      v-loading="loading"
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
        <template slot-scope="">
          <el-button
            type="text"
            size="small"
          >
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
        subCategoryName: '',
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
      // 表格高度
      tableHeight: null,
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
      // 查询到的数据
      checkData: [],
      // 翻页
      currentPage: 1,
      pageSize: 10,
      total: 0,
      loading: true
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
      this.loading = true
      const params = { ...this.formData }
      if (params.meetingDate && params.meetingDate.length > 1) {
        params.startMeetingDate = params.meetingDate[0]
        params.endMeetingDate = params.meetingDate[1]
      }
      getDemandList(params).then(res => {
        this.tableData = res.data
        this.total = res.data.length
        this.currentPage = 1
        this.onPagination()
        this.loading = false
      })
    },
    // 分页， 切割数据
    onPagination() {
      this.tableView = this.tableData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
    },
    // 数据查询
    searchData() {
      this.handleGetDemandList()
      // this.checkData = []
      // for (var i = 0; i <= this.total; i++) {
      //   if (this.tableData[i]) {
      //     if (this.formData.categoryName === this.tableData[i].categoryName) {
      //       this.checkData.push(this.tableData[i])
      //       this.tableView = this.checkData
      //     }
      //   }
      // }
    //   getDemandList(this.formData).then(res => {
    //     this.submitForm(formName)
    //     this.checkData = []
    //     for (var i = 0; i <= this.total; i++) {
    //       if (res.data[i]) {
    //         if (this.formData.categoryName === res.data[i].categoryName) {
    //           this.checkData.push(res.data[i])
    //           this.tableView = this.checkData
    //         }
    //       }
    //     }
    //   })
    // },
    // submitForm(formName) {
    //   this.$refs[formName].validate((valid, text) => {
    //     if (!valid) {
    //       console.log(1)
    //       console.log(text)
    //     } else {
    //       // console.log('error submit!!')
    //       console.log(text)
    //       return false
    //     }
    //   })
    },
    // 清除表单
    clearBtn(formName) {
      this.$refs[formName].resetFields()
      this.handleGetDemandList()
      // Object.assign(this.$data, this.$options.data())
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
      this.currentPage = val
      this.onPagination()
    },
    // 每页显示条数改变
    handleSizeChange(newSize) {
      this.pageSize = newSize
      this.onPagination()
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 88%;
  height: 100%;
  margin-left: 11.5% ;
  margin-top: 68px;
  top: 4.2rem;
  background: #fff;
  border-radius: 4px;
  .tip {
    height: 60px;
    border-bottom: 1px solid #ccc;
    line-height: 60px;
  }
  .input-line {
    margin: 50px 110px;
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
    height: 100%;
  }
  .page {
    margin-top: 10px;
    height: 60px;
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
