import React from 'react';
import {Bar} from 'react-chartjs-2';

class Charts extends React.Component{
  render(){
    const data = {
      labels: ["M", "T", "W", "T", "F", "S", "S"],
      datasets: [{
        label: 'Article1',
        data: [12, 19, 3, 17, 28, 24, 7],
        backgroundColor: "rgba(153,255,51,1)"
      }, {
        label: 'Article2',
        data: [30, 29, 5, 5, 20, 3, 10],
        backgroundColor: "rgba(255,153,0,1)"
      }]
    }

    const options = {
      scales: {
        xAxes: [{ stacked: true }],
        yAxes: [{ stacked: true }]}
    }

    return(
      <div className="chart-container">
        <Bar data={data} width={200} height={200} options={options} />
      </div>
    );
  }
}

export default Charts;
