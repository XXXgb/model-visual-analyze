import util from './util'
let color = ['#60acfc','#32d3eb','#5bc49f ','#feb64d','#ff7c7c','#9287e7','#27a1ea','#63d5b2','#d4ec59','#fed394'];
export default {

  // 柱状图--数据处理
  processBar(data,tableData){
    let fackTable = tableData;
    let title = {
      textStyle: {
        color: '#d9d9d9'  // 标题颜色
      },
      textAlign: "left"  // 标题对齐类型
    };
    let legend = {
      show: data.chartStyle.legendForm.show,  // 是否显示图例
      orient: data.chartStyle.legendForm.direction == 'top' || data.chartStyle.legendForm.direction == 'bottom' ? 'horizontal' : data.chartStyle.legendForm.direction == 'top' || data.chartStyle.legendForm.direction ? 'vertical' : '',
      align: "right",
      top: data.chartStyle.legendForm.direction == 'top' ? '0' : 'auto',
      bottom: data.chartStyle.legendForm.direction == 'bottom' ? '0' : 'auto',
      left: data.chartStyle.legendForm.direction == 'left' ? '0' : 'auto',
      right: data.chartStyle.legendForm.direction == 'right' ? '0' : 'auto',
      textStyle: {
        color: data.chartStyle.legendForm.fontColor,  // 图例颜色
        fontSize: data.chartStyle.legendForm.fontSize,
        fontFamily: data.chartStyle.legendForm.fontType
      },
    };
    let tooltip = {
      textStyle: {
        color: '#d9d9d9'
      }
    };
    let dataset = {
      dimensions: ['product'],
      source: []
    };
    let xAxis = {
      type: 'category',
      axisLine: {
        show: data.chartStyle.xForm.showXAxis,  // x轴线条是否显示
        lineStyle: {
          width: data.chartStyle.xForm.xAxisBorderWidth,  // x轴线条宽度
          type: data.chartStyle.xForm.xAxisBorderType,  // x轴线条类型
          color: data.chartStyle.xForm.xAxisBorderColor  // x轴线条颜色
        }
      },
      axisLabel: {
        show: data.chartStyle.xForm.showLabelFont,   // x轴文字是否显示
        fontFamily: data.chartStyle.xForm.labelFontTypt,   // x轴字体
        fontSize: data.chartStyle.xForm.labelFontSize,   // x轴文字大小
        color: data.chartStyle.xForm.labelFontColor,   // x轴文字颜色
        rotate: data.chartStyle.xForm.textDirection   // x轴文字方向
      },
      splitLine: {
        show: data.chartStyle.plottingForm.verticalSplitLine,  // x轴分割线是否显示
        lineStyle: {
          type: data.chartStyle.plottingForm.lineType  // x轴分割线类型
        }
      },
      inverse: data.chartStyle.xForm.xAxisTurn
    };
    let yAxis = {
      axisLine: {
        show: data.chartStyle.yForm.showYAxis,  // y轴线条是否显示
        lineStyle: {
          width: data.chartStyle.yForm.yAxisBorderWidth,  // y轴线条宽度
          type: data.chartStyle.yForm.yAxisBorderType,  // y轴线条类型
          color: data.chartStyle.yForm.yAxisBorderColor  // y轴线条颜色
        },
      },
      axisLabel: {
        show: data.chartStyle.yForm.showLabelFont,  // y轴文字是否显示
        fontFamily: data.chartStyle.yForm.labelFontTypt,  // y轴字体
        fontSize: data.chartStyle.yForm.labelFontSize,  // y轴文字大小
        color: data.chartStyle.yForm.labelFontColor,  // y轴文字颜色
        rotate: data.chartStyle.yForm.textDirection  // y轴文字方向
      },
      splitLine: {
        show: data.chartStyle.plottingForm.levelSplitLine,  // y轴分割线是否显示
        lineStyle: {
          type: data.chartStyle.plottingForm.lineType  // y轴分割线类型
        }
      },
      inverse: data.chartStyle.yForm.yAxisTurn
    };
    let grid = {
      show: true,  // 是否显示分割区
      backgroundColor: data.chartStyle.plottingForm.backgroundColor,  // 分割区背景颜色
      borderColor: data.chartStyle.plottingForm.borderColor,  // 分割区边框颜色
    };
    let series = [];
    for(let i=0;i<data.measurement.length;i++){
      dataset.dimensions.push(data.measurement[i].name);
    }
    for(let i=0;i<data.measurement.length;i++){
      series.push({
        type: 'bar',
        stack: data.chartStyle.chartStyleForm.shape == 'pile' ? '1' : ''
      })
    }

    for(let i=0;i<fackTable.length;i++){
      let d = {};
      for(let j=0;j<data.dimensionality.length;j++){
        d.product = fackTable[i][data.dimensionality[j].name];
        for(let z=0;z<data.measurement.length;z++){
          d[data.measurement[z].name] = fackTable[i][data.measurement[z].name];
        }
        dataset.source.push(d);
      }
    }

    console.log(dataset);
    let option = {
      title: title,
      color: color,
      legend: legend,
      tooltip: tooltip,
      grid: grid,
      xAxis: data.chartStyle.chartStyleForm.direction == 'level' ? xAxis : yAxis,  // 判断柱状图横向显示或纵向显示
      yAxis: data.chartStyle.chartStyleForm.direction == 'level' ? yAxis : xAxis,  // 判断柱状图横向显示或纵向显示
      series: series,
      dataset: dataset
    };
    console.log(option)
    return option;
  },

  // 折线图--数据处理
  processLine(data,tableData){
    let fackTable = tableData;
    let title = {
      textStyle: {
        color: '#d9d9d9'
      }
    };
    let legend = {
      data: [],
      textStyle: {
        color: '#d9d9d9'
      }
    };
    let tooltip = {
      trigger: 'axis',
      showContent: true,
      textStyle: {
        color: '#d9d9d9'
      }
    };
    let dataset = {
      dimensions: ['product'],
      source: []
    };
    let xAxis = {
      type: 'category',
      axisLine: {
        show: data.chartStyle.xForm.showXAxis,
        lineStyle: {
          width: data.chartStyle.xForm.xAxisBorderWidth,
          type: data.chartStyle.xForm.xAxisBorderType,
          color: data.chartStyle.xForm.xAxisBorderColor
        }
      },
      axisLabel: {
        show: data.chartStyle.xForm.showLabelFont,
        fontFamily: data.chartStyle.xForm.labelFontTypt,
        fontSize: data.chartStyle.xForm.labelFontSize,
        color: data.chartStyle.xForm.labelFontColor
      }
    };
    let yAxis = {
      gridIndex: 0,
      axisLine: {
        show: data.chartStyle.yForm.showYAxis,
        lineStyle: {
          width: data.chartStyle.yForm.yAxisBorderWidth,
          type: data.chartStyle.yForm.yAxisBorderType,
          color: data.chartStyle.yForm.yAxisBorderColor
        },
      },
      axisLabel: {
        show: data.chartStyle.yForm.showLabelFont,
        fontFamily: data.chartStyle.yForm.labelFontTypt,
        fontSize: data.chartStyle.yForm.labelFontSize,
        color: data.chartStyle.yForm.labelFontColor
      }
    };
    let series = [];
    for(let i=0;i<data.measurement.length;i++){
      dataset.dimensions.push(data.measurement[i].name);
    }
    for(let i=0;i<data.measurement.length;i++){
      series.push({
        type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}, name: data.measurement[i].name
      })
      legend.data.push(data.measurement[i].name)
    }
    for(let i=0;i<data.dimensionality.length;i++){

    }

    for(let i=0;i<fackTable.length;i++){
      let d = {};
      for(let j=0;j<data.dimensionality.length;j++){
        d.product = fackTable[i][data.dimensionality[j].name];
        for(let z=0;z<data.measurement.length;z++){
          d[data.measurement[z].name] = fackTable[i][data.measurement[z].name];
        }

        dataset.source.push(d);
      }
    }

    console.log(dataset);
    let option = {
      title: title,
      color: color,
      legend: legend,
      tooltip: tooltip,
      dataset: dataset,
      xAxis: xAxis,
      yAxis: yAxis,
      series: series
    };
    console.log(option);
    return option;
  },

  // 饼图--数据处理
  processPie(data,tableData){
    let fackTable = tableData;
    let title = {
      left: 'center',
      textStyle: {
        color: '#d9d9d9'
      }
    };
    let legend = {
      orient: 'vertical',
      left: 'left',
      textStyle: {
        color: '#d9d9d9'
      }
    };
    let tooltip = {
      trigger: 'item',
      textStyle: {
        color: '#d9d9d9'
      }
    };
    let dataset = {
      dimensions: ['product'],
      source: []
    };
    let series = [];
    for(let i=0;i<data.measurement.length;i++){
      dataset.dimensions.push(data.measurement[i].name);
    }
    for(let i=0;i<data.measurement.length;i++){
      series.push({
        name: data.measurement[i].name,
        type: 'pie',
        radius: '50%',
        center: [ '50%', '50%'],
        encode: {
          itemName: 'product',
          value: data.measurement[i].name
        },
      })
    }

    for(let i=0;i<fackTable.length;i++){
      let d = {};
      for(let j=0;j<data.dimensionality.length;j++){
        d.product = fackTable[i][data.dimensionality[j].name];
        for(let z=0;z<data.measurement.length;z++){
          d[data.measurement[z].name] = fackTable[i][data.measurement[z].name];
        }

        dataset.source.push(d);
      }
    }

    console.log(dataset);
    let option = {
      title: title,
      color: color,
      legend: legend,
      tooltip: tooltip,
      dataset: dataset,
      series: series,
    };
    console.log(option);
    return option;
  }
}
