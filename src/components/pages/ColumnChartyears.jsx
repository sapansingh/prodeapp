import React from 'react';
import Chart from 'react-apexcharts';
function ColumnChartyear({names,datas}) {
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
    categories: names,
  },
  yaxis: {
    title: {
      text: 'Penalty'
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
  data: datas
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

export default ColumnChartyear;
