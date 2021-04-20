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
    <el-row >
      <el-col :span="6" :offset="0">
        <span class="demonstration">产品大类</span>
        <el-select v-model="value1" multiple placeholder="请选择产品大类" size="small">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="6" :offset="0">
        <span class="demonstration">产品小类</span>
        <el-select v-model="value1" multiple placeholder="请选择产品大类" size="small">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="6" :offset="0" >
      <span class="demonstration">产品类型</span>
      <el-select v-model="value1" multiple placeholder="请选择产品大类" size="small">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      </el-col>
      <el-col :span="6" :offset="0" >
        <span class="demonstration">SKU</span>
        <el-input v-model="input" placeholder="请输入内容" label="123" style="width:52%"></el-input>
      </el-col>
    </el-row>
  </div>
  <div class="input-line">
    <el-row >
      <el-col :span="6" :offset="0" >
      <div class="demo-input-suffix">
        <span class="demonstration">Model</span>
        <el-input v-model="input" placeholder="请输入内容" style="width:52%"></el-input>
      </div>
      </el-col>
      <el-col :span="6" :offset="0" >
      <div class="demo-input-suffix">
        <span class="demonstration">需求编号</span>
        <el-input v-model="input" placeholder="请输入内容" size="mini" style="width:52%"></el-input>
      </div>
      </el-col>
      <el-col :span="6" :offset="0">
      <span class="demonstration">事业部</span>
      <el-select v-model="value1" multiple placeholder="请选择产品大类" size="small">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      </el-col>
      <el-col :span="6" :offset="0">
      <span class="demonstration">需求状态</span>
      <el-select v-model="value1" multiple placeholder="请选择产品大类" size="small">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      </el-col>
    </el-row>
  </div>
  <div class="input-line">
    <el-row >
      <el-col :span="6" :offset="0">
      <span class="demonstration">PM</span>
      <el-select v-model="value1" multiple placeholder="请选择产品大类" size="small">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      </el-col>
      <el-col :span="6" :offset="0">
      <span class="demonstration">过会时间</span>
      <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        style="width:52%">
      </el-date-picker>
      </el-col>
      <el-col :span="6" :offset="0">
      <span class="demonstration">计划上架时间</span>
      <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        style="width:52%">
      </el-date-picker>
      </el-col>
    </el-row>
  </div>
  <div class="input-btn">
    <el-row >
      <el-col :span="6" :offset="8">
        <el-button type="primary" plain icon="el-icon-search">搜索</el-button>
      </el-col>
      <el-col :span="6" :offset="0">
        <el-button  icon="el-icon-refresh-right">重置</el-button>
      </el-col>
    </el-row>
  </div>
  <el-row>
    <el-col :span="6" :offset="1">
      <el-button type="primary" plain >+新建需求</el-button>
      <el-button  >复制</el-button>
    </el-col>
  </el-row>
  <div class="tab">
     <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width:100%;"
      height="100%"
      >
      <el-table-column
        fixed
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="date"
        label="需求编号"
        width="250">
      </el-table-column>
      <el-table-column
        prop="name"
        label="产品大类"
        width="250
        ">
      </el-table-column>
      <el-table-column
        prop="province"
        label="产品小类"
        width="250
        ">
      </el-table-column>
      <el-table-column
        prop="city"
        label="产品类型"
        width="250
        ">
      </el-table-column>
      <el-table-column
        prop="address"
        label="Model"
        width="250
        ">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="SKU"
        width="250
        ">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="需求编号"
        width="250
        ">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="事业部/team"
        width="250
        ">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="需求状态"
        width="250
        ">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="需求状态"
        width="250
        ">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="过会时间"
        width="250
        ">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="项目状态"
        prop="zt"
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
            @click.native.prevent="deleteRow(scope.$index, tableData)"
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
        :page-sizes="[15]"
        :page-size="15"
        layout="prev, pager, next, jumper, sizes"
        :total="60">
      </el-pagination>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      tabPosition: 'left',
      options:
        [{
          value: 1,
          lable: '1'
        }],
      value1: '',
      input: '',
      tableData: [
        {
          date: 'PS2021040745538',
          name: '汽车',
          province: '电动',
          city: '新品',
          address: 'PR-PB221',
          zip: 200333,
          zt: '已立项'
        },
        {
          date: 'PS2021040745538',
          name: '汽车',
          province: '电动',
          city: '新品',
          address: 'PR-PB221',
          zip: 200333,
          zt: '已立项'
        },
        {
          date: 'PS2021040745538',
          name: '汽车',
          province: '电动',
          city: '新品',
          address: 'PR-PB221',
          zip: 200333,
          zt: '已立项'
        },
        {
          date: 'PS2021040745538',
          name: '汽车',
          province: '电动',
          city: '新品',
          address: 'PR-PB221',
          zip: 200333,
          zt: '已立项'
        },
        {
          date: 'PS2021040745538',
          name: '汽车',
          province: '电动',
          city: '新品',
          address: 'PR-PB221',
          zip: 200333,
          zt: '已立项'
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 80%;
  height: 800px;
  position: fixed;
  right: 4%;
  top: 4.2rem;
  background: #fff;
  border-radius: 4px;
  .tip {
    height: 60px;
    border-bottom: 1px solid #ccc;
    line-height: 60px;
  }
  .input-line {
    text-align: right;
    margin: 50px 0px;
    .demonstration {
      width: 10%;
      font-weight: bold;
      margin-right: 5px;
    }
  }
  .input-btn {
    margin: 20px 0;
  }
  .tab {
    margin-top: 20px;
  }
  .page {
    margin-top: 10px;
  }
}
</style>
