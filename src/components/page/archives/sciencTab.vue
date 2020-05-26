<template>
  <div class='sciencTab'>
       <div class="head">
            <div class="head-left">
                <p style="line-height: 40px;font-size: 18px;">教师科研信息</p>
            </div>
            <div class="head-right">
                <div style="margin-top:25px">
                    <el-button type="primary" @click="submitForm('jobForm')">导出</el-button>
                </div>
            </div>
        </div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span style="margin: 0 10px;">发表学术论文情况</span>
                <el-button class="button-el"   type="primary" plain> 新增 </el-button>
                <el-button class="button-el"   type="primary" plain> 导出 </el-button>
            </div>
            <!-- <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
            </div> -->
                <el-table :data="tableData" max-height="285" border style="width: 100%">
                    <el-table-column type="index" width="50" label="编号" align="center">
                    </el-table-column>
                    <el-table-column prop="date" label="发表日期" width="180" align="center">
                    </el-table-column>
                    <el-table-column prop="name" label="论文题目"  align="center">
                    </el-table-column>
                    <el-table-column prop="address" label="本人排名" align="center">
                    </el-table-column>
                     <el-table-column prop="address" label="是否通讯作者" align="center">
                    </el-table-column>
                     <el-table-column prop="address" label="刊物名称" align="center">
                    </el-table-column>
                     <el-table-column prop="address" label="刊物类别" align="center">
                    </el-table-column>
                    <el-table-column  label="操作" width="120" align="center">
                       <template slot-scope="scope">
                           <el-button  @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small"> 查看
                           </el-button>
                           <el-button  @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small"> 编辑
                           </el-button>
                        </template>
                    </el-table-column>
                </el-table>
        </el-card>
        <el-card class="box-card top-card">
            <div slot="header" class="clearfix">
                <span style="margin: 0 10px;">获专利情况</span>
                <el-button class="button-el"   type="primary" plain> 新增 </el-button>
                <el-button class="button-el"   type="primary" plain> 导出 </el-button>
            </div>
            <!-- <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
            </div> -->
                <el-table :data="tableData" max-height="285" border style="width: 100%">
                    <el-table-column type="index" width="50" label="编号" align="center">
                    </el-table-column>
                    <el-table-column prop="date" label="授权时间" width="180" align="center">
                    </el-table-column>
                    <el-table-column prop="name" label="专利名称"  align="center">
                    </el-table-column>
                    <el-table-column prop="address" label="专利号" align="center">
                    </el-table-column>
                     <el-table-column prop="address" label="本人排名" align="center">
                    </el-table-column>
                     <el-table-column prop="address" label="专利类别" align="center">
                    </el-table-column>
                    <el-table-column  label="操作" width="120" align="center">
                       <template slot-scope="scope">
                           <el-button  @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small"> 查看
                           </el-button>
                           <el-button  @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small"> 编辑
                           </el-button>
                        </template>
                    </el-table-column>
                </el-table>
        </el-card>
        <el-card class="box-card top-card">
            <div slot="header" class="clearfix">
                <span style="margin: 0 10px;">其他成果情况（专著、报告、技术转化等）</span>
                <el-button class="button-el"   type="primary" plain> 新增 </el-button>
                <el-button class="button-el"   type="primary" plain> 导出 </el-button>
            </div>
            <!-- <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
            </div> -->
                <el-table :data="tableData" max-height="285" border style="width: 100%">
                    <el-table-column type="index" width="50" label="编号" align="center">
                    </el-table-column>
                    <el-table-column prop="date" label="获得成果时间" width="180" align="center">
                    </el-table-column>
                    <el-table-column prop="name" label="成果名称"  align="center">
                    </el-table-column>
                    <el-table-column prop="address" label="成果类型" align="center">
                    </el-table-column>
                     <el-table-column prop="address" label="是否通讯作者" align="center">
                    </el-table-column>
                     <el-table-column prop="address" label="刊物名称" align="center">
                    </el-table-column>
                     <el-table-column prop="address" label="刊物类别" align="center">
                    </el-table-column>
                    <el-table-column  label="操作" width="120" align="center">
                       <template slot-scope="scope">
                           <el-button  @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small"> 查看
                           </el-button>
                           <el-button  @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small"> 编辑
                           </el-button>
                        </template>
                    </el-table-column>
                </el-table>
        </el-card>
        <el-card class="box-card top-card">
            <div slot="header" class="clearfix">
                <span style="margin: 0 10px;">获奖情况</span>
                <el-button class="button-el"   type="primary" plain> 新增 </el-button>
                <el-button class="button-el"   type="primary" plain> 导出 </el-button>
            </div>
            <!-- <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
            </div> -->
                <el-table :data="tableData" max-height="285" border style="width: 100%">
                    <el-table-column type="index" width="50" label="编号" align="center">
                    </el-table-column>
                    <el-table-column prop="date" label="获奖时间" width="180" align="center">
                    </el-table-column>
                    <el-table-column prop="name" label="获奖成果名称"  align="center">
                    </el-table-column>
                    <el-table-column prop="address" label="奖项名称" align="center">
                    </el-table-column>
                    <el-table-column prop="address" label="本人排名" align="center">
                    </el-table-column>
                     <el-table-column prop="address" label="颁奖单位" align="center">
                    </el-table-column>
                     <el-table-column prop="address" label="获奖类别" align="center">
                    </el-table-column>
                    <el-table-column  label="操作" width="120" align="center">
                       <template slot-scope="scope">
                           <el-button  @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small"> 查看
                           </el-button>
                           <el-button  @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small"> 编辑
                           </el-button>
                        </template>
                    </el-table-column>
                </el-table>
        </el-card>
          <el-card class="box-card top-card">
            <div slot="header" class="clearfix">
                <span style="margin: 0 10px;">本人为第一负责人承担项目情况</span>
                <el-button class="button-el"   type="primary" plain> 新增 </el-button>
                <el-button class="button-el"   type="primary" plain> 导出 </el-button>
            </div>
            <!-- <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
            </div> -->
                <el-table :data="tableData" max-height="285" border style="width: 100%">
                    <el-table-column type="index" width="50" label="编号" align="center">
                    </el-table-column>
                    <el-table-column prop="date" label="项目立项日期" width="180" align="center">
                    </el-table-column>
                    <el-table-column prop="name" label="项目结题日期"  align="center">
                    </el-table-column>
                    <el-table-column prop="address" label="项目编号" align="center">
                    </el-table-column>
                    <el-table-column prop="name" label="项目名称"  align="center">
                    </el-table-column>
                    <el-table-column prop="address" label="项目来源" align="center">
                    </el-table-column>
                    </el-table-column>
                    <el-table-column prop="name" label="项目状态"  align="center">
                    </el-table-column>
                    <el-table-column prop="address" label="项目总经费" align="center">
                    </el-table-column>
                    <el-table-column prop="address" label="实际到账可支配经费" align="center">
                    </el-table-column>
                    <el-table-column  label="操作" width="120" align="center">
                       <template slot-scope="scope">
                           <el-button  @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small"> 查看
                           </el-button>
                           <el-button  @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small"> 编辑
                           </el-button>
                        </template>
                    </el-table-column>
                </el-table>
        </el-card>
  </div>
</template>

<script>
export default {
  name: '',
  data(){
    return {
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
  mounted(){},
  methods: {}
}
</script>
<style  scoped>
.sciencTab {
    margin-top: 10px;
    height: auto;
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
</style>
