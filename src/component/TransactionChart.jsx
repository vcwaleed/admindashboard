import React from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, BarChart, ResponsiveContainer } from 'recharts';

const data = [
  { "name": "Page A", "uv": 4000, "pv": 2400 },
  { "name": "Page B", "uv": 3000, "pv": 1398 },
  { "name": "Page C", "uv": 2000, "pv": 9800 },
  { "name": "Page D", "uv": 2780, "pv": 3908 },
  { "name": "Page E", "uv": 1890, "pv": 4800 },
  { "name": "Page F", "uv": 2390, "pv": 3800 },
  { "name": "Page G", "uv": 3490, "pv": 4300 }
];

function TransactionChart() {
  return (
    <div className="w-[90%] max-w-3xl mx-3  p-6 bg-white shadow-lg rounded-lg ">
      <ResponsiveContainer width="96%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TransactionChart;
