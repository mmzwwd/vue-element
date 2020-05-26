let u = {}
    //获取cookie
u.getCookie = function(name) {
        var arr,
            reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
        if ((arr = document.cookie.match(reg))) {
            var token = unescape(arr[2])
            return token
        } else {
            return null
        }
    }
    //设置cookie
u.setCookie = function(c_name, value, expiredays) {
        var exdate = new Date()
        exdate.setDate(exdate.getDate() + expiredays)
        document.cookie = c_name + '=' + escape(value) + (expiredays == null ? '' : ';expires=' + exdate.toGMTString())
    }
    //删除cookie
u.delCookie = function(name) {
        var exp = new Date()
        exp.setTime(exp.getTime() - 1)
        var cval = getCookie(name)
        if (cval != null)
            document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
    }
    //router方法,路由跳转(query方法传参数)
u.routerTo = function(path, params = {}) {
        window.$router.push({
            path: path,
            query: params
        })
    }
    //router方法,路由跳转(parames方法传参数)
u.routerToParams = function(path, params = {}) {
        window.$router.push({
            path: path,
            params: params
        })
    }
    //router方法,路由重定向（query方法传参数）
u.routerReplace = function(path, params = {}) {
        window.$router.replace({
            path: path,
            query: params
        })
    }
    //filter方法,筛选数组是否有符合条件的key值,返回bool
u.selectTitle = function(arr, param) {
        var bool = false
        if (arr != undefined) {
            arr.filter((value, key, arr) => {
                if (value['title'] == param) {
                    bool = true
                }
            });
        }
        return bool;
    }
    //
u.timestamp = function(row, col, cellValue, index) {
        return u.foryear(parseInt(cellValue))
    }
    // 时间戳改时间 (年-月-日)
u.foryear = function(now, l = '-') {
    if (now == undefined) {
        return ''
    }
    if (typeof now == 'string') {
        now = parseInt(now)
    }
    now = new Date(now)
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let date = now.getDate()
    if (month < 10) {
        month = '0' + month
    }
    if (date < 10) {
        date = '0' + date
    }
    return year + l + month + l + date
}

u.getdatetime = function(now, l = "-", m = ":") {
    now = new Date(now);
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let seconds = now.getSeconds()
    if (month < 10) {
        month = "0" + month;
    }
    if (date < 10) {
        date = "0" + date;
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return year + l + month + l + date + " " + hour + m + minute + m + seconds;
}

// 时间戳改时间 (时:分:秒)
u.fortime = function(now) {
        if (now == undefined) {
            return ''
        }
        if (typeof now == 'string') {
            now = parseInt(now)
        }
        now = new Date(now)
        let hour = now.getHours()
        let minute = now.getMinutes()
        let seconds = now.getSeconds()
        if (hour < 10) {
            hour = '0' + hour
        }
        if (minute < 10) {
            minute = '0' + minute
        }
        if (seconds < 10) {
            seconds = '0' + seconds
        }
        return hour + ':' + minute + ':' + seconds
    }
    //时间戳改日期+时间（年-月-日 时:分:秒）
u.forDateAndTime = function(time) {
        if (!time) {
            return ''
        }
        var date = new Date((+time) + 8 * 3600 * 1000);
        return date.toJSON().substr(0, 19).replace('T', ' ').replace(/-/g, '.');
    }
    //获取路由参数,query方法
u.getQuery = function(key) {
        let formattedParams = window.$router.currentRoute.query || {}
        if (key) {
            return formattedParams[key];
        } else {
            return formattedParams;
        }
    }
    //获取路由参数,Params方法
u.getParams = function(key) {
        let formattedParams = window.$router.currentRoute.params || {}
        if (key) {
            return formattedParams[key];
        } else {
            return formattedParams;
        }
    }
    //正则校验固定电话号码
u.validTelPhone = function(value) {
        let phoneReg = /0\d{2,3}-\d{7,8}/;
        if (!phoneReg.test(value)) {
            return false
        } else {
            return true
        }
    }
    //正则校验手机号
u.validMobilePhone = function(value) {
    let phoneReg = /1[3457869]\d{9}/;
    if (!phoneReg.test(value)) {
        return false
    } else {
        return true
    }
}
u.validMobilePhoneCallback = function(rule, value, callback) {
        if (!value) {
            return callback(new Error('手机号不能为空'));
        }
        let phoneReg = /1[3457869]\d{9}/;
        setTimeout(() => {
            if (!phoneReg.test(value)) {
                callback(new Error('手机号格式不正确'));
            } else {
                callback();
            }
        }, 1000);
    }
    //校验int型数字
u.validNumber = function(value) {
        if (!Number.isInteger(+value)) {
            return false
        } else {
            return true
        }
    }
    //验证float型数字
u.validFloatNumber = function(value) {
        let reg = /[\d.]/
        if (!reg.test(value)) {
            return false
        } else {
            return true
        }
    }
    //校验社会统一信用代码
u.validSocialCreditCode = function(value) {
        let codeReg = /[A-Za-z0-9]{18}/
        if (!codeReg.test(value)) {
            return false
        } else {
            return true
        }
    }
    //过滤字符串（社会统一信用代码）
u.replaceSocialCreditCode = function(value) {
        let reg = /[^0-9a-zA-Z]/g
        return value.replace(reg, "")
    }
    //校验邮箱地址
u.validEmail = function(value) {
        let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+((\.[a-zA-Z]{2,4}){1,2})$/
        if (!reg.test(value)) {
            return false
        } else {
            return true
        }
    }
    //过滤字符串（邮箱地址）
u.replaceEmail = function(value) {
        let reg = /[^@.A-Za-z0-9]/gim
        return value.replace(reg, "")
    }
    //中文验证
u.validChinese = function(value) {
        let reg = /[\u4E00-\u9FA5\uF900-\uFA2D]/
        if (reg.test(value)) {
            return true
        } else {
            return false
        }
    }
    //全角字符验证
u.validChineseCode = function(value) {
        let reg = /[\uFF00-\uFFEF]/
        if (reg.test(value)) {
            return true
        } else {
            return false
        }
    }
    //中文和大小写字母验证（多用于名称验证）
u.validChineseAndLetter = function(value) {
        let reg = /[^A-Za-z\u4e00-\u9fa5]+$/
        if (!reg.test(value)) {
            return false
        } else {
            return true
        }
    }
    //匹配空格
u.validEmpty = function(value) {
        let reg = /\s+/
        if (!reg.test(value)) {
            return false
        } else {
            return true
        }
    }
    //z数字和小数点
u.replaceFloat = function(value) {
  let reg = /[^.0-9]/gi
  return value.replace(reg, "")
}
    //过滤字符（除大小写字母和汉字）
u.replaceChineseAndLetter = function(value) {
        let reg = /[^A-Za-z\u4e00-\u9fa5]+$/gim
        return value.replace(reg, "")
    }
    //过滤（除数字0-9）
u.replaceNumber = function(value) {
        let reg = /[^0-9]/gi
        return value.replace(reg, "")
    }
    //过滤（除数字1-9）
u.replaceNumNot0 = function(value) {
        let reg = /[^1-9]/gi
        return value.replace(reg, "")
    }
    //过滤（除数字和-）
u.replaceFixPhone = function(value) {
    let reg = /[^-0-9]/gi
    return value.replace(reg, "")
}

u.replaceTotal = function(value) {
        let reg = /[^.0-9]/gi
        return value.replace(reg, "")
    }
    //过滤空格
u.replaceEmpty = function(value) {
        let reg = /\s+/gi
        return value.replace(reg, "")
    }
    //过滤除中文、全角括号、半角括号、大小写字母的其他字符
u.replaceChineseAndBracket = function(value) {
        let reg = /[^（）()A-Za-z\u4e00-\u9fa5]/gim
        return value.replace(reg, "")
    }
    //过滤字符，不可以输入0（float型数字，intNum：小数点前位数限制，num：小数点后位数限制）
u.replaceTotal = function(value, intNum, num) {
        var num = num || 2;
        var value = String(value).replace(/[^\d.]/g, ""); // 清除“数字”和“.”以外的字符
        while (value && value[0] == '.') {
            value = value.replace(/^\./g, ""); // 验证第一个字符是数字而不是.
        }
        // while (value[0] == 0) {
        //     value = value.replace(/^0/g, ""); // 验证第一个字符是数字而不是.
        // }
        if (value.indexOf('.') < 0) {
            let reg = new RegExp("(.{0," + intNum + "})", "g")
            value = value.match(reg)[0];
        } else {
            value = value.replace(/\.{2,}/g, "."); // 只保留第一个. 清除多余的
            value = value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
            value = value.replace(new RegExp("^(\\-)*(\\d+)\\.(\\d{0," + num + "}).*$", "gmi"), '$1$2.$3');
        }
        return value;
    }
    //可以输入0，过滤字符（float型数字，intNum：小数点前位数限制，num：小数点后位数限制）
u.replaceNum = function(value, intNum, num) {
        var num = num || 2;
        var value = String(value).replace(/[^\d.]/g, ""); // 清除“数字”和“.”以外的字符
        while (value && value[0] == '.') {
            value = value.replace(/^\./g, ""); // 验证第一个字符是数字而不是.
        }
        // while (value[0] == 0) {
        //     value = value.replace(/^0/g, ""); // 验证第一个字符是数字而不是.
        // }
        if (value.indexOf('.') < 0) {
            let reg = new RegExp("(.{0," + intNum + "})", "g")
            value = value.match(reg)[0];
        } else {
            value = value.replace(/\.{2,}/g, "."); // 只保留第一个. 清除多余的
            value = value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
            value = value.replace(new RegExp("^(\\-)*(\\d+)\\.(\\d{0," + num + "}).*$", "gmi"), '$1$2.$3');
        }
        return value;
    }
    //匹配中文、全角括号、半角括号、大小写字母
u.validChineseAndBracket = function(value) {
        let reg = /[（）()A-Za-z\u4e00-\u9fa5]/gim
        if (!reg.test(value)) {
            return false
        } else {
            return true
        }
    }
    //替换所有特殊符号
u.replaceSpecialSymbol = function(value) {
        let reg = /[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·～！@#¥%……&*（）——\-+={}|《》？：“”【】「」、；‘’，。、]/gim
        return value.replace(reg, "")
    }
    //匹配特殊符号
u.validSpecialSymbol = function(value) {
        let reg = /[^`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·～！@#¥%……&*（）——\-+={}|《》？：“”【】「」、；‘’，。、]/
        if (!reg.test(value)) {
            return false
        } else {
            return true
        }
    }
    //日期比较
u.compareDate = function(d1, d2) {
    return new Date(d1.replace(/-/g, '/')) > new Date(d2.replace(/-/g, '/'))
}
u.negativeNum = (value) => {
    let reg = /^\d+(\.{0,1}\d+){0,1}$/
    if (!reg.test(value)) {
        return false
    } else {
        return true
    }
}
u.numHundred = (value) => {
    let reg = /^99$|^(\d|[1-9]\d)(\.\d{1,2})*$/
    if (!reg.test(value)) {
        return false
    } else {
        return true
    }
}
u.positiveInt = (value) => {
    let reg = /^[0-9]*[1-9][0-9]*$/
    if (!reg.test(value)) {
        return false
    } else {
        return true
    }
}
u.twoDecimal = (value) => {
    let reg = /^((?:-?0)|(?:-?[1-9]\d*))(?:\.\d{1,2})?$/
    if (!reg.test(value)) {
        return false
    } else {
        return true
    }
}
u.validZipCode = (value) => {
        let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
        if (!reg.test(value)) {
            return false
        } else {
            return true
        }
    }
    //固定电话
u.validFixCode = (value) => {
        let reg = /^(\d{3,4}-)?\d{7,8}$/
        if (!reg.test(value)) {
            return false
        } else {
            return true
        }
    }
    //中文匹配
u.onlyChinese = (value) => {
    let reg = /^[\u4e00-\u9fa5]+$/
    if (!reg.test(value)) {
        return false
    } else {
        return true
    }
}
u.moreThanZero = (value) => {
    let reg = /^[1-9]\d*$/
    if (!reg.test(value)) {
        return false
    } else {
        return true
    }
}
u.validatePhone = (rule, value, callback) => {
        if (!value) {
            return callback(new Error('手机号不能为空'))
        } else {
            setTimeout(() => {
                if (!/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/.test(value)) {
                    callback(new Error('请输入正确的手机号'))
                } else {
                    callback()
                }
            }, 500)
        }
    }
    // 身份证号验证y
u.idCard = (rule, value, callback) => {
        let regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x|Y|y)$)/
        if (!regIdNo.test(value)) {
            callback(new Error('身份证号格式不正确'))
        } else {
            callback()
        }
    }
    //整数
u.validNumInt = (rule, value, callback) => {
        if (!value) {
            return callback()
        } else {
            setTimeout(() => {
                if (!u.validNumber(value)) {
                    callback(new Error('请输入整数'))
                } else {
                    callback()
                }
            }, 0)
        }
    }
    //正整数
u.numall = (rule, value, callback) => {
        if (value.length == 0) {
            return callback()
                // return callback(new Error("请输入车位数"));
        } else {
            setTimeout(() => {
                if (!/^([1-9]\d*|[0]{1,1})$/.test(value)) {
                    callback(new Error('请输入正整数'))
                } else {
                    callback()
                }
            }, 500)
        }
    }
    // 只能输入中文字段
u.chinese = (rule, value, callback) => {
        if (value.length == 0) {
            return callback()
        } else {
            setTimeout(() => {
                if (!/^[\u2E80-\u9FFF]+$/.test(value)) {
                    callback(new Error('请输入中文'))
                } else {
                    callback()
                }
            }, 500)
        }
    }
    // 验证正整数
u.validateParkingLot = (rule, value, callback) => {
    if (/^\s*$/.test(value)) {
        callback()
    } else {
        setTimeout(() => {
            if (!/^[0-9]*[1-9][0-9]*$/.test(value)) {
                callback(new Error('请输入正整数'))
            } else {
                callback()
            }
        }, 500)
    }
}
u.expirationDateInteger = (rule, value, callback) => {
        if (/^\s*$/.test(value)) {
            callback()
        } else {
            setTimeout(() => {
                if (!/^[0-9]*[1-9][0-9]*$/.test(value)) {
                    callback(new Error('请输入大于0的正整数'))
                } else {
                    callback()
                }
            }, 500)
        }
    }
    // 不能输入空格
u.valida = (rule, value, callback) => {
        if (value.length == 0) {
            return callback()
        } else {
            setTimeout(() => {
                if (!/^[^ ]{1,9999}$/.test(value)) {
                    return callback(new Error('不能输入空格'))
                } else {
                    return callback()
                }
            }, 500)
        }
    }
    // 不能输入空格 中间可以有空格
u.nospace = (rule, value, callback) => {
        if (value.length == 0) {
            return callback()
        } else if (value.length == 1) {
            if (value != ' ') {
                callback()
            } else {
                callback(new Error('不能输入空格'))
            }
        } else {
            setTimeout(() => {
                if (!/^[^ ]+[\s\S]*[^ ]+$/.test(value)) { //中间可以有空格
                    callback(new Error('不能输入空格'))
                } else {
                    callback()
                }
            }, 500)
        }
    }
    // 请输入0-99的数字
u.validatenum = (rule, value, callback) => {
        if (/^\s*$/.test(value)) {
            callback()
        } else {
            setTimeout(() => {
                if (!/^99$|^(\d|[1-9]\d)(\.\d{1,2})*$/.test(value)) {
                    return callback(new Error('请输入0-99的数字'))
                } else {
                    return callback()
                }
            }, 500)
        }
    }
    // 请输入0-30的数字
u.numRange = (rule, value, callback) => {
        if (/^\s*$/.test(value)) {
            callback()
        } else {
            setTimeout(() => {
                if (+value > 30 || +value < 1) {
                    return callback(new Error('请输入1-30的数字'))
                } else {
                    return callback()
                }
            }, 200)
        }
    }
    //去左右空格;
u.trim = (value) => {
        return value.replace(/(^\s*)|(\s*$)/g, "");
    }
    // 验证不可以输入空格,但可以为空
u.checkSpace = (rule, value, callback) => {
        let input = /^[\s]*$/
        if (value.length == 0) {
            return callback()
        } else if (input.test(value)) {
            return callback(new Error('请勿只输入空格！'))
        } else {
            return callback()
        }
    }
    // 不能输入负数
u.validatenum1 = (rule, value, callback) => {
        if (/^\s*$/.test(value)) {
            return callback()
        } else {
            setTimeout(() => {
                if (/^\d+(\.{0,1}\d+){0,1}$/.test(value)) {
                    return callback()
                } else {
                    return callback(new Error('请输入大于0的数'))
                }
            }, 500)
        }
    }
    //验证数字保留两位小数
u.validateOperatingArea = (rule, value, callback) => {
        if (/^\s*$/.test(value)) {
            callback()
        } else {
            setTimeout(() => {
                if (!/^((?:-?0)|(?:-?[1-9]\d*))(?:\.\d{1,2})?$/.test(value)) {
                    callback(new Error('数字,保留2位小数，请重新输入'))
                } else {
                    callback()
                }
            }, 500)
        }
    }
    //输入色值过滤字符
u.replaceColor = function(value) {
        let reg = /[^A-Za-z0-9]/g
        return value.replace(reg, "")
    }
    //颜色验证（6位）
u.validColor = (rule, value, callback) => {
    if (/^\s*$/.test(value)) {
        callback()
    } else {
        setTimeout(() => {
            var type = "^[0-9a-fA-F]{6}$";
            var re = new RegExp(type);
            if (value.match(re) == null) {
                callback(new Error('请输入颜色色号，6位、#16进制'))
                    // type = "^[rR][gG][Bb][\(]([\\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\\s]*,){2}[\\s]*(2[0-4]\\d|25[0-5]|[01]?\\d\\d?)[\\s]*[\)]{1}$";
                    // re = new RegExp(type);
                    // if (value.match(re) == null) {
                    //   callback(new Error('请输入RGB颜色色号或者6位、#16进制颜色色值'))
                    // } else {
                    //   callback()
                    // }
            } else {
                callback()
            }
        }, 500)
    }
}
u.notEmpty = (value) => {
    if (value == '') {
        return false
    } else {
        return true
    }
}

//获取字符串实际长度(英文一个字符，汉字两个字符)
u.checklength = (str) => {
    if (str.length != 0) return 0;
    return str.replace(/[^\x00-\xff]/g, "**").length
}
u.getNowFormatDate = () => {
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
    },
    // 请输入0-9的数字
    u.validatenums = (rule, value, callback) => {
        if (/^\s*$/.test(value)) {
            callback()
        } else {
            setTimeout(() => {
                if (!/^[0-9]{1}(\.[0-9]{1,2})?$/.test(value)) {
                    return callback(new Error('请输入0-9的数字并保留两位小数'))
                } else {
                    return callback()
                }
            }, 500)
        }
    },
    //英文和数字
    u.abcNum = (rule, value, callback) => {
        if (/^\s*$/.test(value)) {
            callback()
        } else {
            setTimeout(() => {
                if (!/^[A-Za-z0-9]+$/.test(value)) {
                    return callback(new Error('请输入英文或数字'))
                } else {
                    return callback()
                }
            }, 500)
        }
    },
    //小数点前4位小数点后2位 不为0
    u.getMoney=(rule, value, callback)=>{
        if (/^\s*$/.test(value)) {
            callback()
        }else{
            if (!/^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/.test(value)) {
                return callback(new Error('请输入大于0的数'))
            } else {
                if (value>=10000) {
                    return callback(new Error('请输入小于10000的数'))
                }else{
                    if (!/^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/.test(value)){
                        return callback(new Error('请保留2位小数'))

                    }else{
                        return callback()

                    }
                }
            }
        }
    }
     //小数点前4位小数点后2位 +0
     u.getMoneyf=(rule, value, callback)=>{
        if (/^\s*$/.test(value)) {
            callback()
        }else{
            if (!/^\d+(\.\d+)?$/.test(value)) {
                return callback(new Error('请输入大于等于0的数'))
            } else {
                if (value>=10000) {
                    return callback(new Error('请输入小于10000的数'))
                }else{
                    if (!/((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/.test(value)){
                        return callback(new Error('请保留2位小数'))

                    }else{
                        return callback()

                    }
                }
            }
        }
    }
    // 上面有一个相同名字的方法了
    // u.getdatetime = (now, l = "-", m = ":") => {
    //     now = new Date(now);
    //     let year = now.getFullYear();
    //     let month = now.getMonth() + 1;
    //     let date = now.getDate();
    //     let hour = now.getHours();
    //     let minute = now.getMinutes();
    //     // let seconds = now.getSeconds()
    //     if (month < 10) {
    //         month = "0" + month;
    //     }
    //     if (date < 10) {
    //         date = "0" + date;
    //     }
    //     if (hour < 10) {
    //         hour = "0" + hour;
    //     }
    //     if (minute < 10) {
    //         minute = "0" + minute;
    //     }
    //     return year + l + month + l + date;
    // }
export default u
