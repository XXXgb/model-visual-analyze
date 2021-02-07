<template>
  <div class="connect-setting-wrapper">
    <div class="setting-title">基本设置</div>
    <Form :model="formValue" label-position="left" ref="formValidate" :rules="ruleValidate" :label-width="100" class="connect-setting-form">
      <FormItem label="数据源名称:" prop="dataOriginName">
        <Input v-model="formValue.dataOriginName"></Input>
      </FormItem>
      <FormItem label="服务器:" prop="server">
        <Input v-model="formValue.server"></Input>
      </FormItem>
      <FormItem label="端口:" prop="port">
        <Input v-model="formValue.port"></Input>
      </FormItem>
      <FormItem label="用户名:" prop="userName">
        <Input v-model="formValue.userName"></Input>
      </FormItem>
      <FormItem label="密码:" prop="password">
        <Input v-model="formValue.password"></Input>
      </FormItem>
      <FormItem label="" v-if="showButton">
        <Button type="primary">连接</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>

export default {
  props: ['addConnectType'],
  data () {
    return {
      formValue: {

      },
      ruleValidate: {
        dataOriginName: [
          { required: true, message: '数据源名称不能为空', trigger: 'blur' }
        ],
        server: [
          { required: true, message: '地址不能为空', trigger: 'blur' },
        ],
        port: [
          { required: true, message: '端口不能为空', trigger: 'blur' }
        ],
        userName: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      },
      showButton: false,
    }
  },
  watch: {
    'addConnectType': function (val) {
      this.showButton = true;
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
