<template>
  <div class="system">
    <el-tabs type="border-card"  v-model="systemName"  @tab-click="handleClick" >
      <el-tab-pane label="基本信息" name="basic" :key="'basic'">
        <basic-tab v-if="systemName=='basic'"> </basic-tab>
      </el-tab-pane>
      <el-tab-pane label="职业信息"  name="occupation" :key="'occupation'" >
        <vocation-tab v-if="systemName=='occupation'"></vocation-tab>
      </el-tab-pane>
      <el-tab-pane label="科研信息" name="section" :key="'section'">
        <scienc-tab  v-if="systemName=='section'"></scienc-tab>
      </el-tab-pane>
      <el-tab-pane label="学生信息" name="student" :key="'student'">
        <student-tab  v-if="systemName=='student'"></student-tab>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import basicTab from "./system/basicTab";
import vocationTab from "./system/vocationTab";
import sciencTab from "./system/sciencTab";
import studentTab from "./system/studentTab";

export default {
  components: { basicTab,vocationTab,sciencTab,studentTab },
  name: '',
  data(){
    return {
            systemName: 'basic',

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
.system .el-tabs__item{
      padding: 0 40px !important;
}
.system{
  width: 98%;
}
</style>

