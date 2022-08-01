import React from 'react'
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from "fusioncharts/fusioncharts.charts"
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion"

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme)

function Chart(props) {
  const data = []
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  props.data.values.forEach(element => {
    const month = element.data.slice(3, 5)
    
    data.push({label: `${months[parseInt(month)-1]}/${element.data.slice(8, 11)}`, value: parseFloat(element.valor)})
  });

  const chartConfigs = {
    type: "column2d",
    width: "100%",
    height: "180%",
    dataFormat: "json",
    dataSource: {
      // Chart Configuration
      chart: {
        xAxisName: "Data", 
        yAxisName: "Valor", 
        theme: "fusion" 
      },
      // Chart Data - from step 2
      data: data
    }
  }

  return <ReactFC{...chartConfigs}/>
};

export default Chart