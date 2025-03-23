"use client"

import React from 'react'
import styles from "./chart.module.css"
// import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
  {
    name: 'Sun',
    Visit: 4000,
    Click: 2400,
    
  },
  {
    name: 'Mon',
    Visit: 3000,
    Click: 1398,
    
  },
  {
    name: 'Tue',
    Visit: 2000,
    Click: 9800,
    
  },
  {
    name: 'Wed',
    Visit: 2780,
    Click: 3908,
    
  },
  {
    name: 'Thu',
    Visit: 1890,
    Click: 4800,
    
  },
  {
    name: 'Fry',
    Visit: 2390,
    Click: 3800,
    
  },
  {
    name: 'Sat',
    Visit: 3490,
    Click: 4300,
    
  },
];

function Chart() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Recap</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{background:"#151c2c", border:"none"}}/>
          <Legend />
          <Line type="monotone" dataKey="Visit" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="Click" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart