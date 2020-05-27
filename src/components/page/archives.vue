<template>
  <div class="archives">
    <el-tabs type="border-card"  v-model="archivesName"  @tab-click="handleClick" >
      <el-tab-pane label="基本信息" name="basic" :key="'basic'">
        <basic-tab v-if="archivesName=='basic'"> </basic-tab>
      </el-tab-pane>
      <el-tab-pane label="职业信息"  name="occupation" :key="'occupation'" >
        <vocation-tab v-if="archivesName=='occupation'"></vocation-tab>
      </el-tab-pane>
      <el-tab-pane label="科研信息" name="section" :key="'section'">
        <scienc-tab  v-if="archivesName=='section'"></scienc-tab>
      </el-tab-pane>
      <el-tab-pane label="学生信息" name="student" :key="'student'">
        <student-tab  v-if="archivesName=='student'"></student-tab>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import basicTab from "./archives/basicTab";
import vocationTab from "./archives/vocationTab";
import sciencTab from "./archives/sciencTab";
import studentTab from "./archives/studentTab";
export default {
  components: { basicTab,vocationTab,sciencTab,studentTab },
  name: '',
  data(){
    return {
      archivesName: 'basic',
      }

  },
  created(){},
  mounted(){},
  methods: {
     handleClick(tab) {
    }
  }
}
</script>
<style  >
.archives .el-tabs__item{
      padding: 0 40px !important;
}
</style>
