<template>
  <div class='fileFolder'>
          <div class="search">
            <el-form label-width="100px" class="demo-ruleForm">
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="姓名:">
                            <el-input
                                class="input"
                                v-model="keyword"
                                size="small"
                                placeholder="请输入"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="职称:">
                            <el-select v-model="region" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="性别:">
                            <el-select v-model="region" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                            <el-button type="primary" icon="el-icon-search" style="margin-left:50px;">搜索</el-button>
                            <el-button type="primary" icon="el-icon-search" style="margin-left:50px;"  @click="dialogVisible = true">高级搜索</el-button>
                    </el-col>
                </el-row>
                 <el-row>
                    <el-col :span="6">
                        <el-form-item label="研究方向:">
                            <el-input
                                class="input"
                                v-model="keyword"
                                size="small"
                                placeholder="请输入"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="状态:">
                            <el-select v-model="region" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="政治面貌:">
                            <el-select v-model="region" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
            <el-card class="box-card"  shadow="hover">
            <div slot="header" class="clearfix">
                <span style="margin: 0 10px;">发表学术论文情况</span>
                <el-button class="button-el"   type="primary" plain> 新增 </el-button>
                <el-button class="button-el"   type="primary" plain> 导出 </el-button>
               <span style="font-size: 12px;float:right; padding: 3px 0;margin: 0 50px;">共 <el-button  type="text" >16</el-button> 名教师信息
               </span>
            </div>
                <el-table :data="tableData"  border style="width: 100%">
                    <el-table-column type="index" width="50" label="编号" align="center">
                    </el-table-column>
                    <el-table-column prop="date" label="教师编号" width="180" align="center">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名"  align="center">
                    </el-table-column>
                    <el-table-column prop="address" label="性别" align="center">
                    </el-table-column>
                     <el-table-column prop="address" label="职称" aliapgn="center">
                    </el-table-column>
                     <el-table-column prop="address" label="政治面貌" align="center">
                    </el-table-column>
                    <el-table-column prop="address" label="学历" align="center">
                    </el-table-column>
                    <el-table-column prop="address" label="状态" align="center">
                    </el-table-column>
                    <el-table-column prop="address" label="研究方向" align="center">
                    </el-table-column>
                    <el-table-column  label="操作" width="120" align="center" >
                       <template slot-scope="scope">
                           <el-button  @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small"> 查看
                           </el-button>
                           <el-button  @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small"> 编辑
                           </el-button>
                        </template>
                    </el-table-column>
                </el-table>
                  <!-- 页码 -->
              <div class="pageblock">
                <el-button size="small" class="topage" @click="toPage">确定</el-button>
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[20,30]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="totalItems"></el-pagination>
              </div>
        </el-card>

        <el-dialog
          title="提示"
          :visible.sync="dialogVisible"
          width="710px">
           <div v-for="(item,index) in seniorData" class="dialog-dev">
                <el-select v-model="item.option" class="dialog-select">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
                <el-select v-model="item.range" class="dialog-select1">
                    <el-option label="等于" value="shanghai"></el-option>
                    <el-option label="大于" value="beijing"></el-option>
                    <el-option label="小于" value="beijing"></el-option>
                </el-select>
                <el-input class="dialog-input"  v-model="item.content" size="small" ></el-input>
                <span>
                <i class="el-icon-circle-close dialog-icon"  @click="highDdelete(index)" ></i>
                </span>
          </div>
          <div >
              <el-button type="primary" @click="highAdd()" icon="el-icon-plus" style="margin: 30px 0 0 220px;width: 120px;"></el-button>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogVisible = false,highSee()">搜索</el-button>
          </span>
        </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'fileFolder',
  data(){
    return {
      dialogVisible: false,
      keyword:'',
      region:'',
      pageSize: 10,
      totalItems: 0,
      currentPage: 1,
      seniorDatafit:[
        {
        option:"",
        range:"",
        content:""
        },
        {
          option:"",
          range:"",
          content:""
        },
        {
          option:"",
          range:"",
          content:""
        }
      ],
      seniorData:[{
        option:"",
        range:"",
        content:""
      },{
        option:"",
        range:"",
        content:""
      },{
        option:"",
        range:"",
        content:""
      }],
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
        }],


 }

  },
  components: {},
  created(){},
  mounted(){},
  methods: {
    highDdelete(index){
      this.seniorData.splice(index, 1);
    },
    highAdd() {
      let a={
          option:"",
          range:"",
          content:""
      }
      this.seniorData.push(a)
    },
    highSee(){
         this.seniorData=[]
         this.seniorData=JSON.parse(JSON.stringify(this.seniorDatafit))
         console.log(this.seniorDatafit)
         console.log(this.seniorData)

    },
    handleClick(tab, event) {
        console.log(tab, event);
      },
    toPage() {
      this.currentPage=1;
    //   this.supplierlist(this.pageSize, this.currentPage);
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.currentPage=1;
    //   this.supplierlist(this.pageSize,this.currentPage);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    //   this.supplierlist(this.pageSize, this.currentPage);
    }
  }
}
</script>
<style>
.fileFolder .el-tabs__content {
    display: none;
}
.fileFolder .el-pagination {
    display: inline-block;
    float: right;
}
</style>
<style  scoped>
.fileFolder {
    border: 1px solid #ebeef5;
    background-color: #fff;
    color: #303133;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    width: 98.8%;
}
.fileFolder .input {
    max-width: 215px;
}
.fileFolder .search{
    padding-top: 50px;
}

.box-card {
    width: 95%;
    margin: auto;
    margin-bottom: 50px;
    margin-top: 20px;
  }
.box-card .button-el{
  margin: 0 20px;
}
.manageCenter .header{
     width:279px;
     margin-top: 50px;
     margin-left: 60px;
}
/* // 翻页的效果 */
.pageblock {
    width: 100%;
    overflow: hidden;
    margin-top: 15px;
    padding-bottom: 15px;
}
.topage {
    float: right;
    margin-right: 40px;
    margin-left: 15px;
}
.dialog-select{
  width: 200px;
  margin: 0 10px;
}
.dialog-select1{
  width: 100px;
  margin: 0 10px;

}
.dialog-input{
  width: 200px;
  margin: 0 10px;
}
.dialog-icon{
  font-size: 22px;
  margin: 0 10px;
  color: #409EFF;
}
.dialog-dev{
  margin-top: 15px;
}
</style>
