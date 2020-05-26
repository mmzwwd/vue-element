<template>
    <div class="basicTab">
        <div class="head">
            <div class="head-left">
                <p style="line-height: 40px;font-size: 18px;">教师基本信息</p>
                <h6 style="line-height: 40px;font-size: 14px;font-weight:normal;margin-top:10px;">
                    导师编码：
                    <span></span>
                </h6>
            </div>
            <div class="head-right">
                <div style="margin-top:25px">
                    <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
                    <el-button
                        style="margin-left:50px;"
                        type="primary"
                        @click="resetForm('ruleForm')"
                    >导出</el-button>
                </div>
            </div>
        </div>
        <div class="content1">
            <div class="content-upload">
                  <!-- <div class="uploadTip">图片尺寸为1024*600，大小不超过15M</div> -->
                  <div :class="['imgbox',{'imgbox-v':!ruleForm.picture}]">
                    <img :src="ruleForm.picture" alt>
                  </div>
                  <el-upload
                    class="upload-demo"
                    action="1"
                    :show-file-list="false"
                    :before-upload="beforeAvatarUpload"
                    :http-request="uploadSectionFile2"
                  >
                  <el-button class="upload-btn button-upload" type="primary">上传<i class="el-icon-upload el-icon--right" style="font-size: 16px;margin:0 0 0 5px;line-height:0;color:#fff;"></i></el-button>

                  </el-upload>
            </div>
            <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-width="150px"
                class="demo-ruleForm"
            >
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="姓名:" prop="name">
                            <el-input v-model="ruleForm.name" class="maxwidth"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="姓别:" prop="sex">
                            <el-select v-model="ruleForm.sex" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="民族:" prop="nation">
                            <el-select v-model="ruleForm.nation" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="政治面貌:" prop="politicsStatus">
                            <el-select v-model="ruleForm.politicsStatus" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="国籍:" prop="nationality">
                            <el-select v-model="ruleForm.nationality" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="籍贯:" prop="nativePlace">
                            <el-select v-model="ruleForm.nativePlace" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="身份证号:" prop="IdCard">
                            <el-input v-model="ruleForm.IdCard"  maxlength="18" class="maxwidth"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="出生日期:" prop="birth">
                        <el-date-picker v-model="ruleForm.birth" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" @change='count' placeholder="选择日期"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="年龄:" >
                            <span >{{ruleForm.age}}</span>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="邮编:" prop="postcode">
                            <el-input v-model="ruleForm.postcode" class="maxwidth"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="通讯地址:" prop="mailingAddress">
                            <el-input v-model="ruleForm.mailingAddress" class="maxwidth"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="手机号:" prop="tel">
                            <el-input v-model="ruleForm.tel" class="maxwidth" maxlength="11" ></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="电子信箱:" prop="email">
                            <el-input v-model="ruleForm.email" class="maxwidth"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="办公电话:" prop="officePhone">
                            <el-input v-model="ruleForm.officePhone" class="maxwidth"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="最高学历:" prop="highestAcademicDegree">
                           <el-select v-model="ruleForm.highestAcademicDegree" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="最高学历所学专业:" prop="profession">
                            <el-input v-model="ruleForm.profession" class="maxwidth"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="获得最高学历院校:" prop="highestAcademicDegreeSchool">
                            <el-input v-model="ruleForm.highestAcademicDegreeSchool" class="maxwidth"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="最高学位:" prop="educationBackground">
                            <el-select v-model="ruleForm.educationBackground" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>                         </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="获得高学位院校:" prop="educationBackgroundSchool">
                            <el-input v-model="ruleForm.educationBackgroundSchool" class="maxwidth"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
    </div>
</template>
<script>
import {uploadFile } from '@/api/index';
import util from '@/utils/check';
export default {
    data() {
        return {
            imageUrl: '',
            ruleForm: {
                name: '',
                birth: '',
                age: '',
                sex:'',
                politicsStatus:'',
                nationality:'',
                nativePlace:'',
                nation:'',
                mailingAddress:'',
                postcode:'',
                officePhone:'',
                tel:'',
                email:'',
                highestAcademicDegree:'',
                profession:'',
                highestAcademicDegreeSchool:'',
                educationBackgroundSchool:'',
                picture:'',
                IdCard:'',
                delivery: false,

            },
            rules: {
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                tel: [{ required: true, message: '请填写手机号', trigger: 'blur' },
                      { validator: util.validMobilePhoneCallback, trigger: 'blur' }
                ],
                IdCard:[
                    { required: true, message: '请填写身份证号', trigger: 'blur' },
                      { validator: util.idCard, trigger: 'blur' }
                ],
                region: [{ required: true, message: '请选择活动区域', trigger: 'change' }],
                date1: [{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }],
                date2: [{ type: 'date', required: true, message: '请选择时间', trigger: 'change' }],
                type: [{ type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }],
                resource: [{ required: true, message: '请选择活动资源', trigger: 'change' }],
            }
        };
    },
    created(){
         console.log(util)
        },
    methods: {
        // 根据返回的日期计算间隔
             toAge(timeStamp) {
                let birthDate = timeStamp.substr(0, 4);
                let newDate = new Date().getFullYear();
                return (newDate - parseInt(birthDate));
            },
        count(){
 		 this.ruleForm.age = this.toAge(this.ruleForm.birth);
         console.log(this.ruleForm.birth)
         console.log(this.ruleForm.age)
        },
        beforeAvatarUpload(file) {
      const isJPG =
        file.type === "image/png" ||
        file.type === "image/jpg" ||
        file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 15;
      if (!isJPG) {
        this.$message.error("上传图片格式错误!");
      }
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 15M!");
      }

      return isJPG && isLt2M;
    },
    //上传图片
    uploadSectionFile2(param) {
      var fileObj = param.file;
      var data = new FormData();
      data.append("file", fileObj);
      data.append("projectName", fileObj.name);
      console.log(data)
      uploadFile(data).then(res => {
        this.ruleForm.picture = `${getFile}?id=${res.data.id}`;
      });
    },
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
};
</script>
<style>
.basicTab .el-form-item__label {
    padding-right: 16px;
    /* text-align-last: justify; */
}
  .el-upload--text{
    margin:10px 0 0 0px;
    width: 180px;
    height: 33px;
    border: none;
  }
  .el-icon-upload:before{
    width: 20px;
    height: 20px;
  }
</style>
<style  scoped>
.basicTab {
    margin-top: 10px;
    height:auto;
}
.basicTab .el-row {
    margin-bottom: 30px;
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
.head-right {
    width:25%;
    height: 100px;
    float: right;
}
.maxwidth {
    max-width: 215px;
}
.content1{
position: relative;
}
.content-upload{
    width:25%;
  height: 222px;
  position: absolute;
  top:10px ;
  right:16px;
  z-index: 100;
}
.button-upload{
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    font-size: 12px;
    position: absolute;
    left: 36px;
    width: 80px;
    height: 33px;
    border-radius: 3px;
    line-height:18px;
}
.imgbox {
  display: inline-block;
  border: 1px dashed #dcdfe6;
  border-radius: 6px;
}
.imgbox-v {
  width: 148px;
  height: 148px;
}
.imgbox img {
  display: block;
  width: auto;
  height: 148px;
}
.content-icon{
  width: 20px;
  height: 15px;
  line-height: 20px;
  margin: 0;
  padding: 0;
}
</style>
