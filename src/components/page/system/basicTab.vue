<template>
    <div class="smbasicTab">
        <div class="head">
            <div class="head-left">
                <p style="line-height: 40px;font-size: 18px;">基本信息下拉菜单维护</p>
            </div>
        </div>
        <el-form ref="form" :model="form" label-width="180px" style="width:95%;" >
            <el-form-item label="姓别:">
                <star-input-tag v-model="dynamicTags" :labeltype="'姓别'" theme="新增" />
            </el-form-item>
             <el-form-item label="民族:">
                  <star-input-tag v-model="dynamicTags1" :labeltype="'民族'" theme="新增" />
            </el-form-item>
             <el-form-item label="国籍:">
                 <star-input-tag v-model="dynamicTags2" :labeltype="'国籍'" theme="新增" />
            </el-form-item>
            <el-form-item label="籍贯:">
                 <star-input-tag v-model="dynamicTags2" :labeltype="'籍贯'" theme="新增" />
            </el-form-item>
             <el-form-item label="政治面貌:">
                  <star-input-tag v-model="dynamicTags3" :labeltype="'政治面貌'" theme="新增" />
            </el-form-item>
             <el-form-item label="最高学历:">
                <star-input-tag v-model="dynamicTags3" :labeltype="'最高学历'" theme="新增" />
            </el-form-item>
             <el-form-item label="最高学位:">
               <star-input-tag v-model="dynamicTags3" :labeltype="'最高学位'" theme="新增" />
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import starInputTag from './starIInputTag'
  export default {
 components: { starInputTag },
    data() {
      return {
        form:{},
        dynamicTags: ['标签一', '标签tyhertgwefweifuyehfdfeyureiufsdfjiwoeurf3哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇嗡嗡嗡嗡嗡嗡哇哇哇哇哇哇哇哇哇哇哇哇哇哇oisfdoeifjeorieferierifeifjrefjejfeiowfwoefrweorf二', '标签三','标签一', '标签二', '标签三'],
        dynamicTags1: ['标签一', '标签二', '标签三'],
        dynamicTags2: ['标签一', '标签二', '标签三'],
        dynamicTags3: ['标签一', '标签二', '标签三'],

        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
  }
</script>
<style  scoped>
.smbasicTab {
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
