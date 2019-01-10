import React from 'react';
import {BarChart} from 'react-easy-chart';

class StatsChart extends React.Component{
  render(){
    return(
      <BarChart style={{width: "100%", height: "100%"}}
        axes
        data={[
          {indexLabel: 'One', x: 'A', y: 20},
          {indexLabel: 'Two', x: 'B', y: 30},
          {indexLabel: 'Three', x: 'C', y: 40},
          {indexLabel: 'One', x: 'D', y: 20},
          {indexLabel: 'One', x: 'E', y: 40},
          {indexLabel: 'One', x: 'F', y: 25},
          {indexLabel: 'One', x: 'G', y: 5}
        ]}
      />
    );
  }
}

export default StatsChart;
