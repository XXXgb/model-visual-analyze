<template>
  <div class="style-config-box">
    <Collapse v-model="value2">
      <Panel name="1">
        标题
        <div slot="content" class="collapse-content-box">
          <Row :gutter="5">
            <Col span="24" class="style-config-col">
              <Input placeholder="模块名称" v-model="form.titleForm.title" />
            </Col>
            <Col span="6" class="style-config-col">
              <ColorPicker v-model="form.titleForm.color" transfer recommend />
            </Col>
            <Col span="8" class="style-config-col">
              <InputNumber v-model="form.titleForm.fontSize"></InputNumber>
            </Col>
            <Col span="10" class="style-config-col">
              <Select v-model="form.titleForm.fontType">
                <Option value="sans-serif">默认</Option>
                <Option value="Microsoft YaHei">微软雅黑</Option>
                <Option value="宋体">宋体</Option>
                <Option value="monospace">monospace</Option>
                <Option value="Arial">Arial</Option>
                <Option value="Courier New">Courier New</Option>
                <Option value="serif">Serif</Option>
              </Select>
            </Col>
            <Col span="24" class="style-config-col" style="display: flex;justify-content: space-between;">
              <span style="line-height: 32px;">对齐</span>
              <RadioGroup v-model="form.titleForm.align" type="button" button-style="solid">
                <Radio label="left" value=""><i class="iconfont icon-alignleft"></i></Radio>
                <Radio label="center" value="center"><i class="iconfont icon-aligncenter"></i></Radio>
                <Radio label="right" value="right"><i class="iconfont icon-ALIGNRIGHT"></i></Radio>
              </RadioGroup>
            </Col>
          </Row>
        </div>
      </Panel>
      <Panel name="2">
        图表样式
        <div slot="content" class="collapse-content-box">
          <Row :gutter="5">
            <Col span="24" class="style-config-col" style="display: flex;justify-content: space-between;">
              <span>形状</span>
              <RadioGroup v-model="form.chartStyleForm.shape">
                <Radio label="more">多柱</Radio>
                <Radio label="pile">堆叠</Radio>
              </RadioGroup>
            </Col>
            <Col span="24" class="style-config-col" style="display: flex;justify-content: space-between;">
              <span>方向</span>
              <RadioGroup v-model="form.chartStyleForm.direction">
                <Radio label="level">水平</Radio>
                <Radio label="vertical">垂直</Radio>
              </RadioGroup>
            </Col>
          </Row>
        </div>
      </Panel>
      <Panel name="3">
        绘图区
        <div slot="content" class="collapse-content-box">
          <Row :gutter="5">
            <Col span="24" class="style-config-col" style="display: flex;justify-content: space-between;">
              <span style="line-height: 32px;">网格线</span>
              <div>
                <Checkbox v-model="form.plottingForm.levelSplitLine">水平</Checkbox>
                <Checkbox v-model="form.plottingForm.verticalSplitLine">垂直</Checkbox>
              </div>
            </Col>
            <Col span="24" class="style-config-col">
              <Select v-model="form.plottingForm.lineType">
                <Option value="solid" label="实线">
                  <span>实线</span>
                  <span style="float:right;color:#000;font-size: 20px;">
                    <i class="iconfont icon-solid"></i>
                  </span>
                </Option>
                <Option value="dashed" label="虚线">
                  <span>虚线</span>
                  <span style="float:right;color:#000;font-size: 20px;">
                    <i class="iconfont icon-dashed"></i>
                  </span>
                </Option>
                <Option value="dotted" label="点">
                  <span>点</span>
                  <span style="float:right;color:#000;font-size: 20px;">
                    <i class="iconfont icon-dottedline"></i>
                  </span>
                </Option>
              </Select>
            </Col>
            <Col span="10" class="style-config-col">
              <span>背景</span>
              <ColorPicker v-model="form.plottingForm.backgroundColor" transfer recommend />
            </Col>
            <Col span="10" class="style-config-col">
              <span>边框</span>
              <ColorPicker v-model="form.plottingForm.borderColor" transfer recommend />
            </Col>
          </Row>
        </div>
      </Panel>
      <Panel name="4">
        X轴
        <div slot="content" class="collapse-content-box">
          <Row :gutter="5">
            <Col span="24" class="style-config-col" style="display: flex;justify-content: space-between;">
              <Checkbox v-model="form.xForm.showXAxis">坐标轴</Checkbox>
              <Checkbox v-model="form.xForm.xAxisTurn">坐标轴反转</Checkbox>
            </Col>
            <Col span="6" class="style-config-col">
              <ColorPicker v-model="form.xForm.xAxisBorderColor" transfer recommend />
            </Col>
            <Col span="8" class="style-config-col">
              <Select v-model="form.xForm.xAxisBorderWidth">
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="3">4</Option>
                <Option value="3">5</Option>
                <Option value="3">6</Option>
                <Option value="3">7</Option>
                <Option value="3">8</Option>
                <Option value="3">9</Option>
                <Option value="3">10</Option>
              </Select>
            </Col>
            <Col span="10" class="style-config-col">
              <Select v-model="form.xForm.xAxisBorderType">
                <Option value="solid" label="实线">
                  <span>实线</span>
                  <span style="float:right;color:#000;font-size: 20px;">
                    <i class="iconfont icon-solid"></i>
                  </span>
                </Option>
                <Option value="dashed" label="虚线">
                  <span>虚线</span>
                  <span style="float:right;color:#000;font-size: 20px;">
                    <i class="iconfont icon-dashed"></i>
                  </span>
                </Option>
                <Option value="dotted" label="点">
                  <span>点</span>
                  <span style="float:right;color:#000;font-size: 20px;">
                    <i class="iconfont icon-dottedline"></i>
                  </span>
                </Option>
              </Select>
            </Col>
            <Col span="24" class="style-config-col">
              <Checkbox v-model="form.xForm.showLabelFont">显示标签文字</Checkbox>
            </Col>
            <Col span="6" class="style-config-col">
              <ColorPicker v-model="form.xForm.labelFontColor" transfer recommend />
            </Col>
            <Col span="8" class="style-config-col">
              <Select v-model="form.xForm.labelFontSize">
                <Option value="10">10</Option>
                <Option value="12">12</Option>
                <Option value="14">14</Option>
                <Option value="16">16</Option>
                <Option value="18">18</Option>
                <Option value="20">20</Option>
                <Option value="24">24</Option>
                <Option value="28">28</Option>
                <Option value="28">32</Option>
                <Option value="28">36</Option>
                <Option value="28">40</Option>
                <Option value="28">48</Option>
                <Option value="28">56</Option>
                <Option value="28">64</Option>
              </Select>
            </Col>
            <Col span="10" class="style-config-col">
              <Select v-model="form.xForm.labelFontTypt">
                <Option value="sans-serif">默认</Option>
                <Option value="Microsoft YaHei">微软雅黑</Option>
                <Option value="宋体">宋体</Option>
                <Option value="monospace">monospace</Option>
                <Option value="Arial">Arial</Option>
                <Option value="Courier New">Courier New</Option>
                <Option value="serif">Serif</Option>
              </Select>
            </Col>
            <Col span="24" class="style-config-col" style="display: flex;justify-content: space-between;">
              <span style="line-height: 32px;">文字方向</span>
              <RadioGroup v-model="form.xForm.textDirection">
                <Radio label="0">水平</Radio>
                <Radio label="-90">垂直</Radio>
              </RadioGroup>
            </Col>
          </Row>
        </div>
      </Panel>
      <Panel name="5">
        Y轴
        <div slot="content" class="collapse-content-box">
          <Row :gutter="5">
            <Col span="24" class="style-config-col" style="display: flex;justify-content: space-between;">
              <Checkbox v-model="form.yForm.showYAxis">坐标轴</Checkbox>
              <Checkbox v-model="form.yForm.yAxisTurn">坐标轴反转</Checkbox>
            </Col>
            <Col span="6" class="style-config-col">
              <ColorPicker v-model="form.yForm.yAxisBorderColor" transfer recommend />
            </Col>
            <Col span="8" class="style-config-col">
              <Select v-model="form.yForm.yAxisBorderWidth">
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="3">4</Option>
                <Option value="3">5</Option>
                <Option value="3">6</Option>
                <Option value="3">7</Option>
                <Option value="3">8</Option>
                <Option value="3">9</Option>
                <Option value="3">10</Option>
              </Select>
            </Col>
            <Col span="10" class="style-config-col">
              <Select v-model="form.yForm.yAxisBorderType">
                <Option value="solid" label="实线">
                  <span>实线</span>
                  <span style="float:right;color:#000;font-size: 20px;">
                    <i class="iconfont icon-solid"></i>
                  </span>
                </Option>
                <Option value="dashed" label="虚线">
                  <span>虚线</span>
                  <span style="float:right;color:#000;font-size: 20px;">
                    <i class="iconfont icon-dashed"></i>
                  </span>
                </Option>
                <Option value="dotted" label="点">
                  <span>点</span>
                  <span style="float:right;color:#000;font-size: 20px;">
                    <i class="iconfont icon-dottedline"></i>
                  </span>
                </Option>
              </Select>
            </Col>
            <Col span="24" class="style-config-col">
              <Checkbox v-model="form.yForm.showLabelFont">显示标签文字</Checkbox>
            </Col>
            <Col span="6" class="style-config-col">
              <ColorPicker v-model="form.yForm.labelFontColor" transfer recommend />
            </Col>
            <Col span="8" class="style-config-col">
              <Select v-model="form.yForm.labelFontSize">
                <Option value="10">10</Option>
                <Option value="12">12</Option>
                <Option value="14">14</Option>
                <Option value="16">16</Option>
                <Option value="18">18</Option>
                <Option value="20">20</Option>
                <Option value="24">24</Option>
                <Option value="28">28</Option>
                <Option value="28">32</Option>
                <Option value="28">36</Option>
                <Option value="28">40</Option>
                <Option value="28">48</Option>
                <Option value="28">56</Option>
                <Option value="28">64</Option>
              </Select>
            </Col>
            <Col span="10" class="style-config-col">
              <Select v-model="form.yForm.labelFontTypt">
                <Option value="sans-serif">默认</Option>
                <Option value="Microsoft YaHei">微软雅黑</Option>
                <Option value="宋体">宋体</Option>
                <Option value="monospace">monospace</Option>
                <Option value="Arial">Arial</Option>
                <Option value="Courier New">Courier New</Option>
                <Option value="serif">Serif</Option>
              </Select>
            </Col>
            <Col span="24" class="style-config-col">
              <span>文字方向</span>
              <RadioGroup v-model="form.yForm.textDirection">
                <Radio label="0">水平</Radio>
                <Radio label="-90">垂直</Radio>
              </RadioGroup>
            </Col>
          </Row>
        </div>
      </Panel>
      <Panel name="6">
        图例
        <div slot="content" class="collapse-content-box">
          <Row :gutter="5">
            <Col span="24" class="style-config-col">
              <Checkbox v-model="form.legendForm.show">显示图例</Checkbox>
            </Col>
            <Col span="6" class="style-config-col">
              <ColorPicker v-model="form.legendForm.fontColor" transfer recommend />
            </Col>
            <Col span="8" class="style-config-col">
              <InputNumber v-model="form.legendForm.fontSize"></InputNumber>
            </Col>
            <Col span="10" class="style-config-col">
              <Select v-model="form.legendForm.fontType">
                <Option value="sans-serif">默认</Option>
                <Option value="Microsoft YaHei">微软雅黑</Option>
                <Option value="宋体">宋体</Option>
                <Option value="monospace">monospace</Option>
                <Option value="Arial">Arial</Option>
                <Option value="Courier New">Courier New</Option>
                <Option value="serif">Serif</Option>
              </Select>
            </Col>
            <Col span="24" class="style-config-col" style="display: flex;justify-content: space-between;">
              <span style="line-height: 32px;">位置</span>
              <RadioGroup v-model="form.legendForm.direction" type="button" button-style="solid">
                <Radio label="top" value="top">上</Radio>
                <Radio label="bottom" value="bottom">下</Radio>
                <Radio label="left" value="left">左</Radio>
                <Radio label="right" value="right">右</Radio>
              </RadioGroup>
            </Col>
          </Row>
        </div>
      </Panel>
      <Panel name="7">
        背景和边框
        <div slot="content" class="collapse-content-box">
          <Row :gutter="5">
            <Col span="12" class="style-config-col">
              <span>背景颜色</span>
              <ColorPicker v-model="form.nodeStyleForm.backgroundColor" transfer recommend />
            </Col>
            <Col span="12" class="style-config-col">
              <span>圆角</span>
              <InputNumber v-model="form.nodeStyleForm.borderRadius"></InputNumber>
            </Col>
            <Col span="24" class="style-config-col" style="display: flex;justify-content: space-between;">
              <span>边框</span>
              <Checkbox v-model="form.nodeStyleForm.boxShadow" style="margin-left: auto;">阴影</Checkbox>
            </Col>
            <Col span="6" class="style-config-col">
              <ColorPicker v-model="form.nodeStyleForm.borderColor" transfer recommend />
            </Col>
            <Col span="8" class="style-config-col">
              <Select v-model="form.nodeStyleForm.borderWidth">
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
                <Option value="5">5</Option>
              </Select>
            </Col>
            <Col span="10" class="style-config-col">
              <Select v-model="form.nodeStyleForm.borderType">
                <Option value="solid" label="实线">
                  <span>实线</span>
                  <span style="float:right;color:#000;font-size: 20px;">
                    <i class="iconfont icon-solid"></i>
                  </span>
                </Option>
                <Option value="dashed" label="虚线">
                  <span>虚线</span>
                  <span style="float:right;color:#000;font-size: 20px;">
                    <i class="iconfont icon-dashed"></i>
                  </span>
                </Option>
                <Option value="dotted" label="点">
                  <span>点</span>
                  <span style="float:right;color:#000;font-size: 20px;">
                    <i class="iconfont icon-dottedline"></i>
                  </span>
                </Option>
              </Select>
            </Col>
          </Row>
        </div>
      </Panel>
      <Panel name="8">
        提示信息
        <p slot="content"></p>
      </Panel>
    </Collapse>
  </div>
</template>

<script>

export default {
  data () {
    return {
      color4: '#19be6b',
      value2: [1],
      form: this.$store.state.currentNode ? this.$store.state.nodeData[this.$store.state.currentNode.id].chartStyle : {
        xForm: {
          showXAxis: false,
          xAxisTurn: false,
          xAxisBorderType: '',
          xAxisBorderWidth: '',
          xAxisBorderColor: '',
          showLabelFont: false,
          labelFontTypt: '',
          labelFontSize: '',
          labelFontColor: '',
          textDirection: '',
        },
        yForm: {
          showYAxis: false,
          yAxisTurn: false,
          yAxisBorderType: '',
          yAxisBorderWidth: '',
          yAxisBorderColor: '',
          showLabelFont: false,
          labelFontTypt: '',
          labelFontSize: '',
          labelFontColor: '',
          textDirection: '',
        },
        titleForm: {
          title: '',
          color: '#fff',
          fontSize: 20,
          fontType: '',
          align: 'center'
        },
        plottingForm: {
          levelSplitLine: false,
          verticalSplitLine: false,
          lineColor: '',
          lineType: '',
          backgroundColor: '',
          borderColor: ''
        },
        legendForm: {
          show: false,
          fontColor: '',
          fontSize: 12,
          fontType: '',
          direction: ''
        },
        nodeStyleForm: {
          backgroundColor: '',
          borderRadius: 0,
          boxShadow: false,
          borderColor: '',
          borderWidth: '',
          borderType: ''
        },
        chartStyleForm: {
          shape: 'more',
          direction: 'level'
        }
      }

    }
  },
  watch: {
    '$store.state.currentNode':function (val) {
      if (val) {
        this.form = this.$store.state.nodeData[val.id].chartStyle;
      } else {
        this.form = {
          xForm: {
            showXAxis: false,
            xAxisTurn: false,
            xAxisBorderType: '',
            xAxisBorderWidth: '',
            xAxisBorderColor: '',
            showLabelFont: false,
            labelFontTypt: '',
            labelFontSize: '',
            labelFontColor: '',
            textDirection: '',
          },
          yForm: {
            showYAxis: false,
            yAxisTurn: false,
            yAxisBorderType: '',
            yAxisBorderWidth: '',
            yAxisBorderColor: '',
            showLabelFont: false,
            labelFontTypt: '',
            labelFontSize: '',
            labelFontColor: '',
            textDirection: '',
          },
          titleForm: {
            title: '',
            color: '#fff',
            fontSize: 20,
            fontType: '',
            align: 'center'
          },
          plottingForm: {
            levelSplitLine: false,
            verticalSplitLine: false,
            lineColor: '',
            lineType: '',
            backgroundColor: '',
            borderColor: ''
          },
          legendForm: {
            show: false,
            fontColor: '',
            fontSize: 12,
            fontType: '',
            direction: ''
          },
          nodeStyleForm: {
            backgroundColor: '',
            borderRadius: 0,
            boxShadow: false,
            borderColor: '',
            borderWidth: '',
            borderType: ''
          },
          chartStyleForm: {
            shape: 'more',
            direction: 'level'
          }
        };
      }
    },
  },
  mounted(){

  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.style-config-box{
  height: 100%;
  overflow: auto;
  background-color: #f5f5f5;
  .side-right-draggable{
    background-color: #4a90e2;
    color: #fff;
    margin: 5px 0;
    border-radius: 10px;
    display: flex;
    align-items: center;
    text-align: center;
  }
  .draggable-box{
    min-height: 20px;
    span{
      display: inline-block;
      min-height: 100%;
      width: 100%;
      letter-spacing: 2px;
    }
  }
  .side-right-draggable:hover{
    cursor: pointer;
  }
  .side-right-nodata{
    text-align: center;
    border-radius: 10px;
    background-color: #fff;
  }
  /deep/ .ivu-collapse-content{
    background-color: #f5f5f5;
  }

  .style-config-col{
    margin: 2px 0;
  }
}
</style>
