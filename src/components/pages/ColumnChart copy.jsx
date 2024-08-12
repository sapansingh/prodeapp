import React from 'react';
import Chart from 'react-apexcharts';
function ColumnChart({datachart,year}) {
const columnChartOptions = {
  chart: {
    type: 'bar',
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '40%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sept','Oct','Nov','Dec'],
  },
  yaxis: {
    title: {
      text: 'Penalty '+year+' Data'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "Rs " + val 
      }
    }
  }
};

const columnChartData=()=> [{
  name: 'Penalty',
  data: datachart
}];


  return (
    <div className="column-chart">
      <Chart
        options={columnChartOptions}
        series={columnChartData()}
        type="bar"
        height={350}
      />
    </div>
  );
}

export default ColumnChart;
