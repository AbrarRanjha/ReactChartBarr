import "./chart.css";
import React from "react";
import {BarChart,XAxis,Bar,Label,LabelList, Tooltip } from "recharts";

const data = [
  {
    name: 2012,
    value:2.6
  },
  {
    name: 2013,
    value:3.90
  },
  {
    name: 2014,
    value:4.02
  },
  {
    name: 2015,
    value:4.13
  },
  {
    name: 2016,
    value:4.72
  },
  {
    name: 2017,
    value:6.29
  },
  {
    name: 2018,
    value:6.94
  },
  {
    name: 2019,
    value:7.35
  },
  

  

  
];

export default function App() {
  return (
    <>
     
    <h1>Soccer Transfer Fees Reach Record High</h1>
    <h4>Global spending on Soccer tranfer fees by year(billion U.S. dollars)
    </h4>
       <div style={{marginLeft:'20%',marginTop:'5%'}}>
      



        <BarChart 
  width={730} 
  height={250} 
  data={data} 
  margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
>
  <XAxis dataKey="name">
    <Label offset={0} position="insideBottom" />
  </XAxis>
 <Tooltip/>
  <Bar dataKey="value" fill="green">
    <LabelList dataKey="value" position="top" />
  </Bar>
</BarChart>


        
        </div>
    </>
  );
}
