<template>
    <div class="manageCenter">
        <div class="header">
        <el-tabs  v-model="activeName"  type="border-card"  @tab-click="handleClick">
            <el-tab-pane label="超级管理员" name="supermanage"></el-tab-pane>
            <el-tab-pane label="管理员"  name="manage"></el-tab-pane>
            <el-tab-pane label="操作员" name="operate"></el-tab-pane>
        </el-tabs>
         </div>
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
                    <el-table-column prop="date" label="姓名" width="180" align="center">
                    </el-table-column>
                    <el-table-column prop="name" label="教师编码"  align="center">
                    </el-table-column>
                    <el-table-column prop="address" label="身份证号" align="center">
                    </el-table-column>
                     <el-table-column prop="address" label="性别" align="center">
                    </el-table-column>
                     <el-table-column prop="address" label="手机号" align="center">
                    </el-table-column>
                    <el-table-column  label="操作" width="120" align="center" v-if="activeName!='supermanage'">
                       <template slot-scope="scope">
                           <el-button  @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small"> 查看
                           </el-button>
                           <el-button  @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small"> 编辑
                           </el-button>
                        </template>
                    </el-table-column>
                    <el-table-column  label="操作" width="280" align="center" v-if="activeName=='supermanage'">
                       <template slot-scope="scope">
                           <el-button  @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small"> 查看
                           </el-button>
                           <el-button  @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small"> 编辑
                           </el-button>
                           <el-button   size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除
                             </el-button>
                            <el-button  size="mini"  type="primary" plain @click="handleEdit(scope.$index, scope.row)">设置管理员
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
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {
        activeName:'supermanage',
        keyword: '',
        region: '',
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
        pageSize: 10,
        totalItems: 0,
        currentPage: 1,
        };
    },
    components: {},
    created() {},
    mounted() {},
    methods: {
    handleClick(tab, event) {
        console.log(tab, event);
        console.log(this.activeName)
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
};
</script>
<style>
.manageCenter .el-tabs__content {
    display: none;
}
.manageCenter .el-pagination {
    display: inline-block;
    float: right;
}
</style>
<style  scoped>
.manageCenter {
    border: 1px solid #ebeef5;
    background-color: #fff;
    color: #303133;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    width: 98%;
}
.manageCenter .input {
    max-width: 215px;
}
.manageCenter .search{
    padding-top: 50px;
}
.box-card {
    width: 95%;
    margin: auto;
    margin-bottom: 50px;
    margin-top: 10px;
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
</style>
