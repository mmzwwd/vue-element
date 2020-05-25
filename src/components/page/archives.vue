<template>
  <div class="archives">
    <el-tabs type="border-card">
      <el-tab-pane label="基本信息">
        <basic-tab> </basic-tab>
      </el-tab-pane>
      <el-tab-pane label="职业信息">
        <vocation-tab></vocation-tab>
      </el-tab-pane>
      <el-tab-pane label="科研信息">角色管理</el-tab-pane>
      <el-tab-pane label="学书信息">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import basicTab from "./archives/basicTab";
import vocationTab from "./archives/vocationTab";

export default {
  components: { basicTab,vocationTab },
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
