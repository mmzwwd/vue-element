<template>
  <div class='sciencTab'>
        <div class="head">
            <!-- <div class="head-left">
                <p style="line-height: 40px;font-size: 18px;">科研信息下拉菜单维护</p>
            </div> -->
        </div>
        <el-form ref="form" :model="form" label-width="180px" style="width:95%;" >
           <el-form-item  label-width="50px">
                <span style="font-size: 16px;">发表学术论文情况下拉菜单维护</span>
            </el-form-item>
            <el-form-item label="本人排名:" >
                <star-input-tag v-model="tableData" :labeltype="'本人排名'" theme="新增" />
            </el-form-item>
             <el-form-item label="是否通讯作者:">
                  <star-input-tag v-model="tableData" :labeltype="'是否通讯作者'" theme="新增" />
            </el-form-item>
             <el-form-item label="刊物类别:">
                 <star-input-tag v-model="countryList" :labeltype="'刊物类别'" theme="新增"  @toFather="countryListway()" />
            </el-form-item>
            <el-form-item  label-width="50px">
                <span style="font-size: 16px;">获专利情况下拉菜单维护</span>
            </el-form-item>
            <el-form-item label="本人排名:" >
                <star-input-tag v-model="tableData" :labeltype="'本人排名'" theme="新增" />
            </el-form-item>
             <el-form-item label="专利类别:">
                 <star-input-tag v-model="countryList" :labeltype="'专利类别'" theme="新增"  @toFather="countryListway()" />
            </el-form-item>
            <el-form-item  label-width="50px">
                <span style="font-size: 16px;">其他成果情况下拉菜单维护</span>
            </el-form-item>
            <el-form-item label="本人排名:" >
                <star-input-tag v-model="tableData" :labeltype="'本人排名'" theme="新增" />
            </el-form-item>
            <el-form-item  label-width="50px">
                <span style="font-size: 16px;">获奖情况下拉菜单维护</span>
            </el-form-item>
            <el-form-item label="本人排名:" >
                <star-input-tag v-model="tableData" :labeltype="'本人排名'" theme="新增" />
            </el-form-item>
            <el-form-item label="项目来源:" >
                <star-input-tag v-model="tableData" :labeltype="'项目来源'" theme="新增" />
            </el-form-item>
           <el-form-item  label-width="50px">
                <span style="font-size: 16px;">获奖情况下拉菜单维护</span>
            </el-form-item>
            <el-form-item label="项目来源:" >
                <star-input-tag v-model="tableData" :labeltype="'项目来源'" theme="新增" />
            </el-form-item>
            <el-form-item label="项目状态:" >
                <star-input-tag v-model="tableData" :labeltype="'项目状态'" theme="新增" />
            </el-form-item>
        </el-form>

    </div>
</template>

<script>
import starInputTag from './starIInputTag'
import {countryList } from '@/api/index';
  export default {
 components: { starInputTag },
    data() {
      return {
        form:{},
        tableData: [{
          date: 2,
          name: '王小虎',
        }, {
          date: 3,
          name: '王虎',
        }, {
          date: 3,
          name: '虎',
        },],
        countryList:[],
      };
    },
    mounted(){
     this.countryListway()
    },
    methods: {
      	countryListway() {
				let  data={
					name:this.inputValue
				}
				 countryList(data).then(res => {
             console.log(res)
             this.countryList=res.data
				 })


			},
    }

  }
</script>
<style>
 .sciencTab .el-form-item__label{
  line-height: 48px;
  }
</style>
<style  scoped>
.sciencTab {
    height:1010px;
}
.head {
    width: 100%;
    height: 15px;
    margin-bottom: 10px;
}
.head-left {
    width: 400px;
    height: 15px;
    margin-left: 30px;
    float: left;
}
</style>

