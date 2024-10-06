import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';





const MainCharts = () => {
    const data = [
        {
          name: 'Page A',
          uv2: 4000,
          pv2: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv2: 3000,
          pv2: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv2: 2000,
          pv2: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv2: 2780,
          pv2: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv2: 1890,
          pv2: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv2: 2390,
          pv2: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv2: 3490,
          pv2: 4300,
          amt: 2100,
        },
      ];


  return (
    <div style={{width:"100%",height:"500px"}}>
         <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={100}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv2" stroke="#fd6529" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv2" stroke="#758696" />
        </LineChart>
      </ResponsiveContainer>
    
    </div>
  )
}

export default MainCharts