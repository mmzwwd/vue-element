<template>
    <div class="login-wrap">
        <div class="ms-login" v-if="forgetShow">
            <div class="ms-title">中国地质科学院研究生导师数据库管理系统</div>
            <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="param.username" placeholder="username">
                        <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        type="password"
                        placeholder="password"
                        v-model="param.password"
                        @keyup.enter.native="submitForm()"
                    >
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </div>
                <p class="login-tips">
                    忘记密码，请点此处
                    <el-button type="text" @click="forget">找回密码</el-button>
                </p>
            </el-form>
        </div>
        <div class="wj-login" v-if="!forgetShow">
            <div class="wj-title">
                <el-form :model="signIn" ref="numberForm" class="demo-signIn">
                    <el-steps
                        :active="active"
                        finish-status="success"
                        simple
                        style="margin-top: 30px"
                    >
                        <el-step title="手机找回密码"></el-step>
                        <el-step title="输入新密码"></el-step>
                        <el-step title="修改成功"></el-step>
                    </el-steps>
                    <div class="wj-content">
                        <el-form-item prop="phone" v-show="active==0">
                            <el-input
                                type="phone"
                                v-model="signIn.phone"
                                prefix-icon="el-icon-phone"
                                placeholder="请输入手机号"
                                maxlength="11"
                                clearable
                            ></el-input>
                        </el-form-item>
                        <el-form-item prop="Code" v-show="active==0">
                            <el-row>
                                <el-col :span="12">
                                    <el-input
                                        type="Code"
                                        placeholder="验证码"
                                        size="small"
                                        maxlength="6"
                                        v-model="signIn.Code"
                                        oninput="this.value=this.value.replace(/\D/g,'')"
                                        onafterpaste="this.value=this.value.replace(/\D/g,'')"
                                    ></el-input>
                                </el-col>
                                <el-col :span="12">
                                    <div class="clickCode">
                                        <el-button
                                            disabled
                                            style="font-size:14px;margin-left: 50px;"
                                            v-if="codeMsg!='获取验证码'"
                                        >{{countdowns+codeMsg}}</el-button>
                                        <el-button
                                            @click="getCode()"
                                            style="font-size:14px;margin-left:50px;"
                                            v-if="codeMsg=='获取验证码'"
                                        >{{countdowns+codeMsg}}</el-button>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-button type="primary" plain style="margin-top:30px;" @click="next">下一步</el-button>
                    </div>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import { login } from '../../api/index';
import util from '@/utils/check';
import md5 from 'js-md5';
import Cookies from "js-cookie";
export default {
    data: function() {
        return {
            active: 0,
            codeDisabled: false, // 是否禁用按钮
            countdow: 60, //60秒
            countdowns: '', //验证码秒数
            timers: null, // 定时器
            codeMsg: '获取验证码', //按钮上的文字

            forgetShow: true,
            param: {
                username: 'admin',
                password: '123123'
            },
            signIn: {
                phone: '18810563078',
                Code: ''
            },
            numberForm: {},
            rules: {
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
            }
        };
    },
    methods: {
        forget() {
            this.forgetShow = false;
        },
        next() {
            if (this.active++ > 2) this.active = 0;
        },
        getCode() {
            if (this.signIn.phone !== '') {
                let Data = {
                    mobile: this.signIn.phone,
                    type: 3
                };
                login(Data).then(res => {
                    if (res.data.code == '200') {
                        this.$message({
                            message: '已发送短信',
                            type: 'success',
                            center: true,
                            duration: '1000'
                        });
                        if (!this.timers) {
                            this.timers = setInterval(() => {
                                if (this.countdow > 0 && this.countdow <= 60) {
                                    this.countdow--;
                                    if (this.countdow !== 0) {
                                        this.codeMsg = '' + '重新获取';
                                        this.countdowns = this.countdow + 'S';
                                        console.log(this.codeMsg);
                                    } else {
                                        clearInterval(this.timers);
                                        this.codeMsg = '获取验证码';
                                        this.countdowns = '';
                                        this.countdow = 30;
                                        this.timers = null;
                                        this.codeDisabled = false;
                                    }
                                }
                            }, 1000);
                        }
                    } else {
                        this.$message({
                            message: res.data.msg,
                            center: true,
                            duration: '1000'
                        });
                    }
                });
            } else {
                this.$message({
                    message: '请输入正确的手机号',
                    duration: '1000'
                });
            }
        },
        submitForm() {
            console.log(md5(this.param.password))
            this.$refs.login.validate(valid => {
                if (valid) {
                    Cookies.set('theme',1)
                    this.$message.success('登录成功');
                    var now = new Date();
                    var time = now.getTime() + 1000*60*30;
                    console.log(time)
                    //{ expires:new Date(time) }
                    localStorage.setItem('ms_username', this.param.username);
                    Cookies.set('ms_username',this.param.username)
                    this.$router.push('/');
                } else {
                    this.$message.error('请输入账号和密码');
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
};
</script>

<style scoped>
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(../../assets/img/login-bg.jpg);
    background-size: 100%;
}
.ms-title {
    width: 100%;
    line-height: 70px;
    text-align: center;
    font-size: 20px;
    color: #409eff;
    border-bottom: 1px solid #ddd;
    font-weight: 600;
}
.wj-title {
    width: 88%;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    margin: 0 auto;
}
.ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 520px;
    margin: -190px 0 0 -260px;
    border-radius: 5px;
    background: #fff;
    overflow: hidden;
}
.wj-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 720px;
    height: 360px;
    margin: -180px 0 0 -360px;
    border-radius: 5px;
    background: #fff;
    overflow: hidden;
}
.ms-content {
    padding: 50px 98px;
}
.wj-content {
    padding: 50px 165px;
}
.login-btn {
    text-align: center;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
.login-tips {
    font-size: 12px;
    line-height: 30px;
    color: rgba(16, 16, 16, 1);
}
</style>