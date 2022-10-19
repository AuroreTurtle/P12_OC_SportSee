import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import "./BarChart.css";

function displayBarChart({ data }) {
    const userActivityData = [];
    for (let i = 0; i < data.length; i++) {
        userActivityData.push({
            index: i + 1,
            kilogram: data[i].kilogram,
            calories: data[i].calories,
        });
    }

    const legendValue = (value) => {
        return (
            <span
                style={{
                    color: "#74798C",
                    fontSize: "14px",
                    lineHeight: "24px",
                    paddingLeft: "12px",
                }}
            >
                {value}
            </span>
        );
    };

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p>
                        {payload[0].value}
                        {payload[0].unit}
                    </p>
                    <p>
                        {payload[1].value}
                        {payload[1].unit}
                    </p>
                </div>
            );
        }
    };

    return (
        <div id="barchart">
            <span id="barchart-title">Activité quotidienne</span>

            <ResponsiveContainer width="90%" height="90%">
                <BarChart data={userActivityData} barSize={7}>
                    <CartesianGrid vertical={false} stroke="#DEDEDE" strokeDasharray="2 2" />
                    <XAxis
                        dataKey="index"
                        tick={{ fill: "#9B9EAC", fontSize: "14" }}
                        tickLine={false}
                        tickSize={16}
                        stroke={"#DEDEDE"}
                    />
                    <YAxis
                        dataKey="kilogram"
                        yAxisId={0}
                        orientation="right"
                        tick={{ fill: "#9B9EAC", fontSize: "14" }}
                        tickLine={false}
                        tickSize={30}
                        axisLine={false}
                        domain={["dataMin - 5", "dataMax + 5"]}
                    />
                    <YAxis dataKey="calories" yAxisId={1} hide={true} domain={["dataMin - 5", "dataMax + 5"]} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend
                        verticalAlign="top"
                        align="right"
                        iconType="circle"
                        iconSize={8}
                        height={47}
                        wrapperStyle={{ paddingTop: "2%", paddingBottom: "2%" }}
                        formatter={legendValue}
                    />
                    <Bar
                        dataKey="kilogram"
                        unit="kg"
                        yAxisId={0}
                        name="Poids (kg)"
                        fill="#282D30"
                        radius={[10, 10, 0, 0]}
                    />
                    <Bar
                        dataKey="calories"
                        unit="Kcal"
                        yAxisId={1}
                        name="Calories brûlées (kCal)"
                        fill="#E60000"
                        radius={[10, 10, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default displayBarChart;