<template>
  <Row :gutter="10" style="width: 600px;" class="connect-type-row">
    <Col span="6" v-for="(item, index) in imagePosition" style="margin-bottom: 10px;">
      <Card :bordered="false" class="connect-type-card" @click.native="selectConnectType(item.name)">
        <div class="connect-type-img" :style="{backgroundPositionX: item.x,backgroundPositionY: item.y}"></div>
        <div class="connect-type-name">{{item.name}}</div>
      </Card>
    </Col>
  </Row>
  <!--<ul style="width: 600px;clear: both;" class="connect-type-row">
    <li style="width: 140px;margin: 0 5px 10px 5px;float: left;" v-for="(item, index) in imagePosition">
      <Card>
        <div class="connect-type-img" :style="{backgroundPositionX: item.x,backgroundPositionY: item.y}"></div>
        <div class="connect-type-name">{{item.name}}</div>
      </Card>
    </li>
  </ul>-->
</template>

<script>

export default {
  data () {
    return {
      imagePosition: [
        {
          name: 'Excel',
          x: '0px',
          y: '0px'
        },
        {
          name: 'MySQL',
          x: '-140px',
          y: '0px'
        },
        {
          name: 'Hive',
          x: '-280px',
          y: '0px'
        },
        {
          name: 'Oracle',
          x: '-420px',
          y: '0px'
        },
        {
          name: 'Apache Kylin',
          x: '-560px',
          y: '0px'
        },
        {
          name: 'Spark SQL',
          x: '-700px',
          y: '0px'
        },
        {
          name: 'Cheetah',
          x: '-840px',
          y: '0px'
        },
        {
          name: 'Apache Impala',
          x: '-980px',
          y: '0px'
        },
        {
          name: 'MonetDB',
          x: '-1120px',
          y: '0px'
        },
        {
          name: 'SQL Server',
          x: '-1260px',
          y: '0px'
        },
        {
          name: 'Db2',
          x: '-1400px',
          y: '0px'
        },
        {
          name: 'HANA',
          x: '-1540px',
          y: '0px'
        },
        {
          name: 'GreenPlum',
          x: '-1680px',
          y: '0px'
        },
        {
          name: 'Transwarp Inceptor',
          x: '-1820px',
          y: '0px'
        },
        {
          name: 'CVS',
          x: '-1960px',
          y: '0px'
        },
        {
          name: 'teradata',
          x: '-2100px',
          y: '0px'
        },
        {
          name: 'prestodb',
          x: '-2240px',
          y: '0px'
        },
        {
          name: 'PostgreSQL',
          x: '-2380px',
          y: '0px'
        },
        {
          name: 'Vertica',
          x: '-2520px',
          y: '0px'
        },
      ]
    }
  },
  methods: {
    selectConnectType(name){
      this.$emit('selectConnectType',name)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .connect-type-row{
    .connect-type-img{
      width: 140px;
      height: 100px;
      background-image: url("../assets/images/sqlLogo.png");
    }
    .connect-type-name{
      width: 140px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border-left: 1px solid #ddd;
      border-right: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      border-radius: 4px;
    }
    /deep/ .ivu-card-body{
      padding: 0;
      width: 140px;
    }
    .ivu-card{
      width: 140px;
    }
    .connect-type-card:hover{
      cursor: pointer;
    }
  }

</style>
