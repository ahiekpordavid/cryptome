import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Charts = () => {
  const data = [
    { date: "Dec 14", price: 10450 },
    { date: "Dec 15", price: 10680 },
    { date: "Dec 16", price: 10900 },
    { date: "Dec 17", price: 11450 },
    { date: "Dec 18", price: 10800 },
    { date: "Dec 19", price: 10500 },
  ];
  return (
    <div className="w-full h-full bg-white rounded-lg p-7 ">
      <div>
        <h2 className=" text-md text-blue-500 border-b-1 border-blue-500 mb-4">
          Bitcoin
        </h2>
        <div className="flex flex-col items-center w-full py-2">
            <p className="text-3xl"><small className="text-slate-500">$</small>78,473.38</p>
            <p className="text-slate-500">Bitcoin Price</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis
            domain={["dataMin - 500", "dataMax + 500"]}
            tickFormatter={(value) =>
              `$${new Intl.NumberFormat().format(value)}`
            }
          />

          <Tooltip />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{ stroke: "#3b82f6", strokeWidth: 2, r: 5 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
