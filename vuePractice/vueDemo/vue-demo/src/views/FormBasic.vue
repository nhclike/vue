<template>
	<div>
    <el-button @click="addDomain">新增域名</el-button>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">


      <el-form-item
        v-for="(court, index) in ruleForm.courts"
        :label="'法院' + index"
        :key="court.key"
        :prop="'courts.' + index + '.value'"
        :rules="{
      required: true, message: '法院不能为空', trigger: 'blur'
    }"
      >
        <el-input v-model="court.value"></el-input><el-button @click.prevent="removeCourt(court)">删除</el-button>
      </el-form-item>
      <el-form-item
        v-for="(domain, index) in ruleForm.domains"
        :label="'域名' + index"
        :key="domain.key"
        :prop="'domains.' + index + '.value'"
        :rules="{
      required: true, message: '域名不能为空', trigger: 'blur'
    }"
      >
        <el-input v-model="domain.value"></el-input><el-button @click.prevent="removeDomain(domain)">删除</el-button>
      </el-form-item>


      <el-form-item label="被执行人" prop="executeMember">
        <el-select v-model="ruleForm.executeMember" placeholder="被执行人">
          <el-option label="张三" value="shanghai"></el-option>
          <el-option label="李四" value="beijing"></el-option>
        </el-select>
      </el-form-item>


      <el-form-item label="发起时间" prop="startTime">
        <el-date-picker
          v-model="ruleForm.startTime"
          type="datetime"
          placeholder="选择日期时间">
        </el-date-picker>
      </el-form-item>


      <el-form-item label="描述" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
	</div>
</template>

<script>
  export default {
    data(){
      return{
        ruleForm: {
          domains: [{
            value: ''
          }],
          courts: [{
            value: ''
          }],
          startTime:'',
          executeMember: '',

          desc: ''
        },
        rules: {
          executeMember: [
            {required: true, message: '请选择被执行人', trigger: 'change'}
          ],
          startTime: [
            {required: true, message: '请选择发起时间', trigger: 'change'}
          ],

          desc: [
            {required: true, message: '请填写活动形式', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        console.log(formName)
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removeDomain(item) {
        var domainsIndex = this.ruleForm.domains.indexOf(item)
        if (domainsIndex !== -1) {
          this.ruleForm.domains.splice(domainsIndex, 1)
        }

      },
      removeCourt(item){
        var courtsIndex = this.ruleForm.courts.indexOf(item)
        if (courtsIndex !== -1) {
          this.ruleForm.courts.splice(courtsIndex, 1)
        }
      },
      addDomain() {
        this.ruleForm.domains.push({
          value: '',
          key: Date.now()+'domains'
        });
        this.ruleForm.courts.push({
          value: '',
          key: Date.now()+'courts'
        });
      }
    }
  }
</script>

<style>

</style>
