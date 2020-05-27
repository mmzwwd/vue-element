<template>
  <div class='vocationTab'>
       <div class="head">
            <div class="head-left">
                <p style="line-height: 40px;font-size: 18px;">教师职业信息下拉菜单维护</p>
            </div>
        </div>
        <el-form ref="form" :model="jobForm" label-width="180px" style="width:95%;" >
            <el-form-item label="岗位等级:" >
                <star-input-tag v-model="dynamicTags" :labeltype="'姓别'" theme="新增" />
            </el-form-item>
             <el-form-item label="职称:">
                  <star-input-tag v-model="dynamicTags1" :labeltype="'民族'" theme="新增" />
            </el-form-item>
             <el-form-item label="招生专业:">
                 <star-input-tag v-model="dynamicTags2" :labeltype="'国籍'" theme="新增" />
            </el-form-item>
            <el-form-item label="状态:">
                 <star-input-tag v-model="dynamicTags2" :labeltype="'籍贯'" theme="新增" />
            </el-form-item>
             <el-form-item label="考试科目1:">
                  <star-input-tag v-model="dynamicTags3" :labeltype="'政治面貌'" theme="新增" />
            </el-form-item>
             <el-form-item label="考试科目2:">
                <star-input-tag v-model="dynamicTags3" :labeltype="'最高学历'" theme="新增" />
            </el-form-item>
             <el-form-item label="考试科目3:">
               <star-input-tag v-model="dynamicTags3" :labeltype="'最高学位'" theme="新增" />
            </el-form-item>
             <el-form-item label="考试科目4:">
                 <star-input-tag v-model="dynamicTags2" :labeltype="'籍贯'" theme="新增" />
            </el-form-item>
        </el-form>
  </div>
</template>

<script>
import starInputTag from './starIInputTag'

export default {
  name: 'vocationTab',
  components: { starInputTag },
  data(){
    return {
        jobForm:{},
        dynamicTags: ['标签一', '标签哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇嗡嗡嗡嗡嗡嗡哇哇哇哇哇哇哇哇哇哇哇哇哇哇oisfdoeifjeorieferierifeifjrefjejfeiowfwoefrweorf二', '标签三','标签一', '标签二', '标签三'],
        dynamicTags1: ['标签一', '标签二', '标签三'],
        dynamicTags2: ['标签一', '标签二', '标签三'],
        dynamicTags3: ['标签一', '标签二', '标签三'],
    }
  },
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style>
 .vocationTab .el-form-item__label{
  line-height: 48px;
  }
</style>
<style  scoped>
.vocationTab {
    height:777px;
}
.head {
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
}
.head-left {
    width: 400px;
    height: 100px;
    margin-left: 30px;
    float: left;
}
</style>
