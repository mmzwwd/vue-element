<template>
    <div>
        <el-card class="box-card">
            <p>系统介绍</p>
            <div class="text item" style="margin-top: 20px;">本系统为地质科学院教师电子档案管理系统，系内部档案，归内部人员使用。</div>
            <div class="text item">第一次进入系统需修改密码，请保存好登录用户名及密码，如忘记密码，请联系管理员重置密码。重置后的密码为123456</div>
            <div class="text item">系统遇到任何问题，请及时跟管理员沟通。</div>
            <div class="text item">祝工作愉快！</div>
        </el-card>
    </div>
</template>
<style>
.el-card__body{
    padding-left: 100px;
    padding-top: 88px;
}
.box-card  .text {
    font-size: 16px;
}

.item {
    padding: 18px 0;
}

.box-card {
    width: 98%;
    position: absolute;
    height: 97%;
}
.box-card p{
    font-size: 20px;
}
</style>