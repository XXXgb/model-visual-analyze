export default {
  processBar(data,tableData){
    let fackTable = tableData;
    let title = {
      text: '柱状图'
    };
    let xAxis = data.dimensionality.map((item1,index1)=>{
      return {
        type: 'category',
        data: fackTable.map((item2)=>{return item2[item1.name]}),
        offset: Number(index1+1)
      }
    });
    let yAxis = data.measurement.map((item1,index1)=>{
      return {
        type: 'value',
        offset: 0,
        name: '总值'
      };
    });
    let series = data.measurement.map((item1,index1)=>{
      return {
        name: item1.name,
        data: fackTable.map((item2)=>{return item2[item1.name]}),
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: '#F9E31C'
        },
        itemStyle: {
          normal: {
            color: function(params) {
              //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
              let colorList = ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83', '#ca8622'];
              if(data.chartConfig.color){
                return [data.chartConfig.color]
              }else{
                return colorList[params.dataIndex]
              }
            }
          }
        }
      }

    });
    let option = {
      title: title,
      xAxis: xAxis,
      yAxis: yAxis,
      legend:{
        show: true
      },
      series: series
    };
    return option;
  },

  processLine(data,tableData){
    let fackTable = tableData;
    let title = {
      text: '折线图'
    };
    let xAxis = data.dimensionality.map((item1,index1)=>{
      return {
        type: 'category',
        boundaryGap: false,
        data: fackTable.map((item2)=>{return item2[item1.name]})
      }
    });
    let yAxis = data.measurement.map((item1,index1)=>{
      return {
        type: 'value'
      }
    });
    let series = data.measurement.map((item1,index1)=>{
      return {
        name: item1.name,
        type: 'line',
        stack: '总量',
        data: fackTable.map((item2)=>{
          return item2[item1.name];
        })
      }
    });
    let legend = {
      data: data.measurement.map((item1,index1)=>{
        return item1.name
      })
    }
    let option = {
      title: title,
      tooltip: {
        trigger: 'axis'
      },
      legend: legend,
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: xAxis,
      yAxis: yAxis,
      series: series
    };
    return option;
  }
}
