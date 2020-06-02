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
	<div style="line-height: 48px;" >
		<el-form @submit.native.prevent>
		<div   v-for="(tag,index) in dynamicTags"
            :key="index" style="display: inline-block;">
			 <!-- v-if="tag.date==2" -->
		<el-tag
           closable size="medium"
            :disable-transitions="false"
            @click="editTag(tag,index)"
            @close="handleClose(tag)">
			<span v-if="index!=num">{{tag.name}}</span>
			<input
                class="custom_input"
                type="text" v-model="words"
                v-if="index==num"
                ref="editInput"
				@click.stop=""
                @keyup.enter="$event.target.blur"
                @blur="handleInput(tag,index)"
				:style="{width:texts(words)}" maxlength="50" >
		</el-tag>
		<!-- <el-tag v-else style="margin-left: 11px;" size="medium">{{tag.name}}</el-tag> -->
			</div>
		<el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="small"
			maxlength="50"
            @keyup.enter.native="$event.target.blur"
            @blur="handleInputConfirm">
		</el-input>
		<el-button
            v-else
            class="button-new-tag"
            size="small"
            @click="showInput">{{theme}}</el-button>
			</el-form>

	</div>
</template>

<script>
import {countrySave,countryUpdate,countryDelete } from '@/api/index';

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
				words: '',
				selectName:"",
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
		mounted(){
        //    this.aa()
		},
		methods: {
			aa(){
			console.log(this.dynamicTags)
			},
			// 数组去重
			unique(arr) {
				let x = new Set(arr);
				return [...x];
			},
			handleClose(tag) {
				console.log('删除',tag)
           var parame = new FormData();
               parame.append("id",tag.id );
				switch (this.labeltypes) {
						case '国籍':
						countryDelete(parame).then(res => {
							if(res.code==200){
							this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
							}
						})
						break;
					}
			},
			showInput() {
				this.inputVisible = true;
				this.$nextTick(_ => {
					this.$refs.saveTagInput.$refs.input.focus();
				});
			},
			handleInputConfirm() {
				console.log('新增')
				let  data={
					name:this.inputValue
				}
				if(this.inputValue){
					switch (this.labeltypes) {
						case '国籍':
						countrySave(data).then(res => {
							if(res.code==200){
							this.$emit('toFather')
							}
							this.inputVisible = false;
							this.inputValue = '';
						})
						break;
					}
				}else{
					this.inputVisible = false;
					this.inputValue = '';
				}

			},
			editTag(tag, index) {
				console.log(tag)
				this.selectName=tag.name
				this.num = index;
				this.$nextTick(_ => {
					this.$refs.editInput[0].focus();
				});
				this.words = tag.name;
			},
			handleInput(tag, index) {
				console.log('修改',tag)
				let words = this.words;
				if (words) {
					this.dynamicTags[index].name = words;
				}
				this.dynamicTags = this.dynamicTags;
				if(this.selectName!=tag.name){
                    switch (this.labeltypes) {
						case '国籍':
						countryUpdate(tag).then(res => {
							this.words = '';
							this.num = -1;
						})
						break;
					}
				}else{
					this.words = '';
				    this.num = -1;
				}

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