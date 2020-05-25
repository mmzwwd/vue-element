<template>
    <div class="vocationTab">
        <div class="head">
            <div class="head-left">
                <p style="line-height: 40px;font-size: 18px;">教师职业信息</p>
            </div>
            <div class="head-right">
                <div style="margin-top:25px">
                    <el-button type="primary" @click="submitForm('jobForm')">保存</el-button>
                    <el-button
                        style="margin-left:50px;"
                        type="primary"
                        @click="resetForm('jobForm')"
                    >导出</el-button>
                </div>
            </div>
        </div>
        <el-form
            :model="jobForm"
            :rules="rules"
            ref="jobForm"
            label-width="170px"
            class="demo-ruleForm"
        >
            <el-row>
                <el-col :span="8">
                    <el-form-item label="工作单位:" prop="name">
                        <el-input v-model="jobForm.name" class="maxwidth"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="参加工作日期:" prop="region">
                        <el-date-picker v-model="jobForm.value" type="date" placeholder="选择日期"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="岗位等级:" prop="region">
                        <el-select v-model="jobForm.region" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <el-form-item label="职称:" prop="region">
                        <el-select v-model="jobForm.region" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="获现职称日期:" prop="region">
                        <el-date-picker v-model="jobForm.value" type="date" placeholder="选择日期"></el-date-picker>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <el-form-item label="获博士生导师资格日期:" prop="region">
                        <el-date-picker v-model="jobForm.value" type="date" placeholder="选择日期"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="获硕士生导师资格日期:" prop="region">
                        <el-date-picker v-model="jobForm.value" type="date" placeholder="选择日期"></el-date-picker>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <el-form-item label="招生专业:" prop="name">
                        <el-input v-model="jobForm.name" class="maxwidth"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="研究方向:" prop="region">
                        <el-select v-model="jobForm.region" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="状态:" prop="name">
                        <el-select v-model="jobForm.region" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
         <el-card class="box-card" >
            <div slot="header" class="clearfix">
                <el-form-item label="导师类别:" style="margin:8px 0;">
                    <el-radio-group v-model="jobForm.resource">
                        <el-radio label="0">硕士</el-radio>
                        <el-radio label="1">博士</el-radio>
                    </el-radio-group>
                </el-form-item>
            </div>
            <div class="content-radios">
                <el-row style="padding-top:20px;padding-right:30px;">
                    <el-col :span="6">
                        <el-form-item label="考试科目1:" prop="name">
                            <el-input v-model="jobForm.name" class="maxwidth"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="考试科目2:" prop="region">
                            <el-select v-model="jobForm.region" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="考试科目3:" prop="name">
                            <el-select v-model="jobForm.region" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="考试科目4:" prop="name" v-if="jobForm.resource=='0'">
                            <el-select v-model="jobForm.region" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="承担课程教学情况:" prop="name">
                            <el-input v-model="jobForm.name" class="maxwidth"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label-width="240px" label="已培养毕业研究生数量:" prop="region">
                            <el-input v-model="jobForm.name" class="maxwidth"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label-width="246px" label="在外单位兼职任导师情况:" prop="name">
                            <el-input v-model="jobForm.name" class="maxwidth"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="在读研究生数量:" prop="name">
                            <el-input v-model="jobForm.name" class="maxwidth"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label-width="240px" label="学术组织任职及各类人才称号情况:" prop="region">
                            <el-input v-model="jobForm.name" class="maxwidth"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label-width="246px" label="是否有海外研学经历（3个月以上）:" prop="name">
                            <el-input v-model="jobForm.name" class="maxwidth"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="本单位行政职务:" prop="name">
                            <el-input v-model="jobForm.name" class="maxwidth"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </div>
           </el-card>
        </el-form>
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {
            jobForm: {
                picUrl: '',
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '0',
                value: '',
                desc: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                region: [{ required: true, message: '请选择活动区域', trigger: 'change' }],
                date1: [{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }],
                date2: [{ type: 'date', required: true, message: '请选择时间', trigger: 'change' }],
                type: [{ type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }],
                resource: [{ required: true, message: '请选择活动资源', trigger: 'change' }],
                desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }]
            }
        };
    },
    components: {},
    created() {},
    mounted() {},
    methods: {
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
 .vocationTab .box-card .el-card__header{
   padding: 10px 0 0 0 ;
 }
</style>
<style  scoped>
.vocationTab {
    margin-top: 10px;
    height: auto;
}
.vocationTab .el-row {
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
    width: 25%;
    height: 100px;
    float: right;
}
.maxwidth {
    max-width: 215px;
}
.content-radio {
    width: 90%;
    padding-right: 20px;
    margin: auto;
    background-color: #f5f7fa;
    color: #2c3e4e;
    border: 1px solid #e4e7ed;
    border-radius: 5px;
}
.content-radios {
    width: 100%;
    margin: auto;
    padding-right: 20px;
    color: #2c3e4e;
}
  .box-card {
    width: 95%;
    margin: auto;
    margin-bottom: 20px;
  }
</style>
