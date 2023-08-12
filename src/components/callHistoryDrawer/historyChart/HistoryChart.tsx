import {
  Cell,
  Label,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useTheme } from "@mui/material";
import { useEffect } from "react";

interface HistoryChartProps {
  success: number;
  failure: number;
}

export const HistoryChart = ({ success, failure }: HistoryChartProps) => {
  const theme = useTheme();
  const COLORS = [theme.palette.success.main, theme.palette.error.main];

  const chartData = [
    {
      name: "success",
      value: success,
    },
    {
      name: "failure",
      value: failure,
    },
  ];

  useEffect(() => {
    console.log(success);
    console.log(failure);
  });

  interface customChartLabelTypes {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
  }

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: customChartLabelTypes) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>
      {!chartData || chartData[0].value > 0 || chartData[1].value > 0 ? (
        <ResponsiveContainer className="container" height={"35%"} width="80%">
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              fill="#8884d8"
              label={renderCustomizedLabel}
              labelLine={false}
              innerRadius={30}
              animationDuration={0}
            >
              {" "}
              {chartData
                ? chartData.map((entry, index) => {
                    return (
                      <Cell
                        key={`cell-${entry.value}-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    );
                  })
                : null}
              <Label
                value={String(success + failure)}
                style={{ fill: "#fff" }}
                position="center"
              />
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      ) : null}
    </>
  );
};
