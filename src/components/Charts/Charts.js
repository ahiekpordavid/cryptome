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
    { date: "Oct 18", price: 68413.23 },
    { date: "Oct 19", price: 68364.89 },
    { date: "Oct 20", price: 69020.00 },
    { date: "Oct 21", price: 67376.81 },
    { date: "Oct 22", price: 67388.67 },
    { date: "Oct 23", price: 66878.36 },
  ];
  return (
    <div className="h-full bg-white rounded-lg p-10 ">
      <div>
        <h2 className=" text-md text-blue-500 border-b-1 border-blue-500 mb-4">
          Bitcoin
        </h2>
        <div className="flex flex-col items-center w-full py-2">
          <p className="text-3xl">
            <small className="text-slate-500">$</small>66,878.36
          </p>
          <p className="text-slate-500">Bitcoin Price</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis
            domain={[(dataMin) => dataMin - 500, (dataMax) => dataMax + 500]}
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
