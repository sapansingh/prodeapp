import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const Piecharts = ({bartype,size,name,colorrt}) => {
  const [series] = useState([size]);
  const [options] = useState({
    chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "50",
          }
        },
      },
      labels: [name],
      colors: [colorrt], // Set the radial bar color here
      fill: {
        type: 'solid', // Can also use 'gradient' for gradient colors
      },
    
  });

  return (
    <div>
      <div id="chart">
        <Chart options={options} series={series} type={bartype} width={380} />
      </div>
     
    </div>
  );
};

export default Piecharts;

// Ensure the DOM has an element with the id 'app'
