import React from 'react';
import { Chart, Axis, Series, Tooltip, Cursor, Line } from "react-charts";

class ChartBooks extends React.Component{
  componentWillMount(){

  }

  render(){
    return(
      <div
        style={{
          width: "100%",
          height: "100%"
        }}
      >
        <Chart getLabel={series => series.specialLabel}
          series={{ type: 'bar' }}
          options = {{
            legend: {
              display: true,
              labels: {
                fontColor: 'rgb(0, 0, 0)'
              }
            }
          }}
          data={[
            {
              specialLabel: "Series 1",
              data: [[0, 1], [1, 2], [2, 4]]
            },
            {
              label: "Series 2",
              data: [[0, 3], [1, 1], [2, 5]]
            }
          ]}
          axes={[
            { primary: true, type: "ordinal", position: "bottom" },
            { type: "linear", position: "left", stacked: true }
          ]}
        />
      </div>
    )
  }
}

export default ChartBooks;
