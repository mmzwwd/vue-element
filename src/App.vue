<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
import Cookies from "js-cookie";
import "./assets/css/main.css";
export default {
    created() {
      console.log(Cookies.get('theme'))
      // if(Cookies.get('theme')=='1'){
      // import("./assets/css/theme-green/color-green.css");
      // }else{
      //  import("./assets/css/color-dark.css");
      // }
    },
}
</script>
<style>

    @import "./assets/css/main.css";
    @import "./assets/css/color-dark.css";     /*深色主题
    @import "./assets/css/theme-green/color-green.css";   浅绿色主题 */

 * {
  margin: 0;
  padding: 0;
}
body,
html {
  min-height: 100%;
}
#app {
  font-family: "MicrosoftYaHei";
  /* text-align: center; */
  color: #2c3e50;
  min-height: 100%;
}
</style>
