<template>
  <div class="archives">
    <el-tabs type="border-card">
      <el-tab-pane label="基本信息">
        <basic-tab> </basic-tab>
      </el-tab-pane>
      <el-tab-pane label="职业信息">
        <vocation-tab></vocation-tab>
      </el-tab-pane>
      <el-tab-pane label="科研信息">
        <scienc-tab></scienc-tab>
      </el-tab-pane>
      <el-tab-pane label="学书信息">
        <student-tab></student-tab>
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
    return {}
  },
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style  >
.archives .el-tabs__item{
      padding: 0 40px !important;
}
</style>
