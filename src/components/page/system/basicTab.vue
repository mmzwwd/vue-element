<template>
    <div class="smbasicTab">
        <div class="head">
            <!-- <div class="head-left">
                <p style="line-height: 40px;font-size: 18px;">基本信息下拉菜单维护</p>
            </div> -->
        </div>
        <el-form ref="form" :model="form" label-width="180px" style="width:95%;" >
           <el-form-item  label-width="50px">
                <span style="font-size: 16px;">基本信息下拉菜单维护</span>
            </el-form-item>
            <el-form-item label="姓别:" >
                <star-input-tag v-model="tableData" :labeltype="'labelname'" theme="新增" />
            </el-form-item>
             <el-form-item label="民族:">
                  <star-input-tag v-model="tableData" :labeltype="'民族'" theme="新增" />
            </el-form-item>
             <el-form-item label="国籍:">
                 <star-input-tag v-model="countryList" :labeltype="'国籍'" theme="新增"  @toFather="countryListway()" />
            </el-form-item>
            <el-form-item label="籍贯:">
                 <star-input-tag v-model="tableData" :labeltype="'籍贯'" theme="新增" />
            </el-form-item>
             <el-form-item label="政治面貌:">
                  <star-input-tag v-model="tableData" :labeltype="'政治面貌'" theme="新增" />
            </el-form-item>
             <el-form-item label="最高学历:">
                <star-input-tag v-model="tableData" :labeltype="'最高学历'" theme="新增" />
            </el-form-item>
             <el-form-item label="最高学位:">
               <star-input-tag v-model="tableData" :labeltype="'最高学位'" theme="新增" />
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
 .smbasicTab .el-form-item__label{
  line-height: 48px;
  }
</style>
<style  scoped>
.smbasicTab {
    height:777px;
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
