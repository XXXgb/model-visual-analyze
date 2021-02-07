<template>
  <div class="dm-config">
    <div class="dm-status">
      <Radio v-model="radioValue" :disabled="flag === 1">直连</Radio>
      <CheckboxGroup v-model="checkboxValue">
        <Checkbox label="报告"  :disabled="flag === 1"></Checkbox>
        <Checkbox label="大屏"  :disabled="flag === 1"></Checkbox>
      </CheckboxGroup>
    </div>
    <div class="dm-table">
      <Row :gutter="20">
        <Col span="24" style="margin: 0 0 20px 0;">
          <wide-table :wideTableHeight="wideTableHeight"></wide-table>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
import WideTable from '@/components/wideTable'
export default {
  props: ['flag'],
  components: {
    WideTable
  },
  data () {
    return {
      checkboxValue: ['报告','大屏'],
      radioValue: true,
      cardList: [
        {id:'sheet1'},
        {id:'sheet2'},
        {id:'sheet3'},
        {id:'sheet4'},
        {id:'sheet5'},
        {id:'sheet6'},
        {id:'sheet7'},
        {id:'sheet8'},
        {id:'sheet9'},
        {id:'sheet10'},
        {id:'sheet11'},
        {id:'sheet12'},
      ],
      wideTableHeight: '230'
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.dm-config{
  background-color: #F5F5F5;
  box-sizing: border-box;
  & .dm-status{
    height: 40px;
    display: flex;
    align-items: center;
    background-color: #FFF;
    padding: 0 20px;
  }
  & .dm-table{
    margin: 10px;
    padding: 10px;
    height: 250px;
    background-color: #FFF;
  }
  /*添加父级伪类，解决dm-table外边距溢出的问题*/
  &::after{
    display: table;
    content: "";
  }
  & .dm-table .dm-table-list{
    border-left: 2px solid #103ffa;
    background-color: #f5f5f5;
    text-align: left;
    padding: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
