<!--
v-model="tagList"  标签内容，tagList为数组或者字符串，字符串每个标签以逗号隔开
theme="+ New Tag"  新增按钮名称，默认为+ New Tag
created(){   字符串转数组，定义在父组件
	if(typeof this.tagList =='string'){
		this.tagList = this.tagList.split(',');
	}
},
-->
<template>
	<div style="line-height: 48px;">
		<el-tag
            v-for="(tag,index) in dynamicTags"
            :key="index" closable size="medium"
            :disable-transitions="false"
            @click="editTag(tag,index)"
            @close="handleClose(tag)">
			<span v-if="index!=num">{{tag}}</span>
			<input
                class="custom_input"
                type="text" v-model="words"
                v-if="index==num"
                ref="editInput"
				@click.stop=""
                @keyup.enter="handleInput(tag,index)"
                @blur="handleInput(tag,index)"
				:style="{width:texts(words)}" maxlength="29" >
		</el-tag>
		<el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm">
		</el-input>
		<el-button
            v-else
            class="button-new-tag"
            size="small"
            @click="showInput">{{theme}}</el-button>
	</div>
</template>

<script>
	export default {
		name: 'star-input-tag',
		model: {
			prop: 'tagList',
			event: 'input',
		},
		props: {
			tagList: {
				type: Array,
				default () {
					return []
				}
			},
			labeltype: "",
			theme: {
				type: String,
				default: '+ 新标签'
			}
		},
		watch: {
			labeltype: function(val) {
			this.labeltypes = val;
			console.log(this.labeltypes)
			},
	    },
		data() {
			return {
				inputVisible: false,
			    labeltypes:this.labeltype,
				inputValue: '',
				num: -1,
				words: ''
			}
		},
		computed: {
			dynamicTags: {
				get() {
					return this.tagList;
				},
				set(tagList) {
					this.$emit('input', tagList);
				}
			},
			texts () {
				return function (value) {
					console.log(value)
					if (value == '' || value == 0) {
					return '50px'
					} else {
					return String(value).length * 13 + 'px'
					}
				}
			}
		},
		methods: {
			// 数组去重
			unique(arr) {
			const res = new Map();
			return arr.filter((arr) => !res.has(arr.id) && res.set(arr.id, 1))
			},
			handleClose(tag) {
				console.log(tag)
				console.log(this.labeltypes)
				this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
			},
			showInput() {
				this.inputVisible = true;
				this.$nextTick(_ => {
					this.$refs.saveTagInput.$refs.input.focus();
				});
			},
			handleInputConfirm() {
				console.log('新增')
				let inputValue = this.inputValue;
				if (inputValue) {
					this.dynamicTags.push(inputValue);
				}
				this.dynamicTags = this.unique(this.dynamicTags);
				this.inputVisible = false;
				this.inputValue = '';
			},
			editTag(tag, index) {
				console.log(tag)
				this.num = index;
				this.$nextTick(_ => {
					this.$refs.editInput[0].focus();
				});
				this.words = tag;
			},
			handleInput(tag, index) {
				console.log(1111111111111111)
				let words = this.words;
				if (words) {
					this.dynamicTags[index] = words;
				}
				this.dynamicTags = this.unique(this.dynamicTags);
				this.words = '';
				this.num = -1;
			}
		}
	}
</script>
<style scoped>
	.el-tag+.el-tag {
		margin-left: 10px;
	}
	.button-new-tag {
		margin-left: 10px;
		height: 32px;
		line-height: 30px;
		padding-top: 0;
		padding-bottom: 0;
	}
	.input-new-tag {
		width: 90px;
		margin-left: 10px;
		vertical-align: bottom;
	}
	.custom_input {
		width: 50px;
	    height: 28px;
        line-height: 28px;
		outline: none;
		border: transparent;
		background-color: transparent;
		font-size: 12px;
		color: #B59059;
	}
	.el-tag--medium{
	   margin-left: 11px;
	}
</style>