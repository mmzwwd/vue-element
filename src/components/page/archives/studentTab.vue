<template>
  <div class='studentTab'>
       <div class="head">
            <div class="head-left">
                <p style="line-height: 40px;font-size: 18px;">教师学生信息</p>
            </div>
        </div>
         <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span style="margin: 0 10px;">博士生</span>
                <el-button class="button-el"  @click="doctorAdd()" type="primary" plain> 新增 </el-button>
                <el-button class="button-el"   type="primary" plain> 导出 </el-button>
            </div>
            <!-- <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
            </div> -->
                <el-table :data="tableData" max-height="285" border style="width: 100%">
                    <el-table-column type="index" width="50" label="编号" align="center">
                    </el-table-column>
                    <el-table-column prop="date" label="学生编码" width="180" align="center">
                    </el-table-column>
                    <el-table-column prop="name" label="入学时间"  align="center">
                    </el-table-column>
                    <el-table-column prop="address" label="类型" align="center">
                    </el-table-column>
                     <el-table-column prop="address" label="国籍" align="center">
                    </el-table-column>
                     <el-table-column prop="address" label="专业" align="center">
                    </el-table-column>
                     <el-table-column prop="address" label="是否在职" align="center">
                    </el-table-column>
                    <el-table-column prop="address" label="民族" align="center">
                    </el-table-column>
                    <el-table-column prop="address" label="学位类型" align="center">
                    </el-table-column>
                    <el-table-column prop="address" label="状态" align="center">
                    </el-table-column>
                    <el-table-column  label="操作" width="120" align="center">
                       <template slot-scope="scope">
                           <el-button  @click.native.prevent="doctorRow('see',scope.$index, tableData)" type="text" size="small"> 查看
                           </el-button>
                           <el-button  @click.native.prevent="doctorRow('edit',scope.$index, tableData)" type="text" size="small"> 编辑
                           </el-button>
                        </template>
                    </el-table-column>
                </el-table>
        </el-card>
         <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span style="margin: 0 10px;">硕士生</span>
                <el-button class="button-el"   @click="doctorAdd()"  type="primary" plain> 新增 </el-button>
                <el-button class="button-el"   type="primary" plain> 导出 </el-button>
            </div>
            <!-- <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
            </div> -->
                <el-table :data="tableData" max-height="285" border style="width: 100%">
                   <el-table-column type="index" width="50" label="编号" align="center">
                    </el-table-column>
                    <el-table-column prop="date" label="学生编码" width="180" align="center">
                    </el-table-column>
                    <el-table-column prop="name" label="入学时间"  align="center">
                    </el-table-column>
                    <el-table-column prop="address" label="类型" align="center">
                    </el-table-column>
                     <el-table-column prop="address" label="国籍" align="center">
                    </el-table-column>
                     <el-table-column prop="address" label="专业" align="center">
                    </el-table-column>
                     <el-table-column prop="address" label="是否在职" align="center">
                    </el-table-column>
                    <el-table-column prop="address" label="民族" align="center">
                    </el-table-column>
                    <el-table-column prop="address" label="学位类型" align="center">
                    </el-table-column>
                    <el-table-column prop="address" label="状态" align="center">
                    </el-table-column>
                    <el-table-column  label="操作" width="120" align="center">
                       <template slot-scope="scope">
                           <el-button  @click.native.prevent="doctorRow('see',scope.$index, tableData)" type="text" size="small"> 查看
                           </el-button>
                           <el-button  @click.native.prevent="doctorRow('edit',scope.$index, tableData)" type="text" size="small"> 编辑
                           </el-button>
                        </template>
                    </el-table-column>
                </el-table>
        </el-card>

        <el-dialog :title="doctorTitle"  :visible.sync="dialogVisible" width="690px" >
             <div class="title-form" v-if="doctorTabe">
                <el-tabs v-model="learnName" @tab-click="handleClick">
                  <el-tab-pane label="单个添加" name="single"></el-tab-pane>
                  <el-tab-pane label="批量导入" name="batch"></el-tab-pane>
                </el-tabs>
             </div>
             <el-form v-if="learnName=='single'"  :model="learnForm" :rules="learn" ref="learnForm" label-width="100px"   class="demo-ruleForm" >
                  <el-row>
                    <el-col :span="12">
                        <el-form-item label="学生编码:" prop="name">
                            <span>123123442</span>
                        </el-form-item>
                    </el-col>
                  </el-row>
                 <el-row>
                    <el-col :span="12">
                        <el-form-item label="学生姓名:" prop="name">
                            <el-input  v-if="doctorType" v-model="learnForm.name" class="maxwidth"></el-input>
                            <span  v-if="!doctorType">{{learnForm.sex}}</span>
                        </el-form-item>
                    </el-col>
                     <el-col :span="12">
                        <el-form-item label="类型:" prop="sex">
                            <el-select v-if="doctorType" v-model="learnForm.sex" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                            <span  v-if="!doctorType">{{learnForm.sex}}</span>
                        </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="12">
                        <el-form-item label="学习方式:" prop="name">
                              <el-select v-if="doctorType" v-model="learnForm.sex" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                            <span  v-if="!doctorType">{{learnForm.sex}}</span>
                          </el-form-item>
                    </el-col>
                     <el-col :span="12">
                        <el-form-item label="状态:" prop="sex">
                            <el-select v-if="doctorType" v-model="learnForm.sex" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                            <span  v-if="!doctorType">{{learnForm.sex}}</span>
                        </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="12">
                        <el-form-item label="国籍:" prop="name">
                              <el-select v-if="doctorType" v-model="learnForm.sex" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                            <span  v-if="!doctorType">{{learnForm.sex}}</span>
                         </el-form-item>
                    </el-col>
                     <el-col :span="12">
                        <el-form-item label="民族:" prop="sex">
                            <el-select v-if="doctorType" v-model="learnForm.sex" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                            <span  v-if="!doctorType">{{learnForm.sex}}</span>
                        </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="12">
                        <el-form-item label="专业:" prop="name">
                              <el-select v-if="doctorType" v-model="learnForm.sex" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                            <span  v-if="!doctorType">{{learnForm.sex}}</span>
                        </el-form-item>
                    </el-col>
                     <el-col :span="12">
                        <el-form-item label="是否在职:" prop="sex">
                            <el-select v-if="doctorType" v-model="learnForm.sex" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                            <span  v-if="!doctorType">{{learnForm.sex}}</span>
                        </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="12">
                        <el-form-item  label="学位类型:" prop="name">
                              <el-select v-if="doctorType" v-model="learnForm.sex" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                            <span  v-if="!doctorType">{{learnForm.sex}}</span>
                        </el-form-item>
                    </el-col>
                     <el-col :span="12">
                        <el-form-item label="入学时间:" prop="sex">
                            <el-select v-if="doctorType" v-model="learnForm.sex" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                            <span  v-if="!doctorType">{{learnForm.sex}}</span>
                        </el-form-item>
                    </el-col>
                  </el-row>
              </el-form>
              <div v-else>
                 <el-button type="primary" @click="dialogVisible = false">导入</el-button>
              </div>
          <span slot="footer" class="dialog-footer" v-if="doctorType">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
      </el-dialog>
  </div>
</template>

<script>
export default {
  name: '',
  data(){
    return {
      learnName:'single',
        dialogVisible:false,
        doctorTitle:'',
        doctorType:true,
        doctorTabe:true,
        learnForm:{sex: '王小虎',          name: '王小虎',
},
        learn:{},
         tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
    }
  },
  components: {},
  created(){},
  mounted(){
     console.log(23333333333354452323)
},
  methods: {
    doctorAdd(){
    this.dialogVisible = true
    this.doctorType=true
    this.doctorTabe=true
    this.doctorTitle="添加学书信息"
    },
    doctorRow(state){
      this.dialogVisible = true
      this.doctorTabe=false
      if(state=='see'){
      this.doctorType=false
      this.doctorTitle="查看学书信息"
      }
      if(state=='edit'){
        this.doctorType=true
      this.doctorTitle="编辑学书信息"
      }
    },
     handleClick(tab, event) {
        console.log(tab, event);
      }
  }
}
</script>
<style>
 .studentTab .el-form-item{
   margin-bottom: 20px;
}
</style>
<style  scoped>
.studentTab {
    margin-top: 10px;
    height: auto;
}
.head {
    width: 100%;
    height: 60px;
    margin-bottom: 10px;
}
.head-left {
    width: 400px;
    height: 60px;
    margin-left: 30px;
    float: left;
}
.box-card {
    width: 95%;
    margin: auto;
    margin-bottom: 20px;
  }
.box-card .button-el{
  margin: 0 20px;
}
.top-card{
  margin-top: 60px;
}
.maxwidth {
    max-width: 215px;
}
.demo-ruleForm{
  width: 600px;
  margin: 0 auto;
}
.title-form{
  width: 616px;
}
</style>

