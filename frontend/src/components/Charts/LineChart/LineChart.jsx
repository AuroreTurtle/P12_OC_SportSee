import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import "./LineChart.css";

function displayLineChart({ data }) {
    const userSessionData = [];
    const days = ["L", "M", "M", "J", "V", "S", "D"];
    for (let i = 0; i < data.length; i++) {
        userSessionData.push({
            day: days[i],
            sessionLength: data[i].sessionLength,
        });
    }

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip-linechart">
                    <p>
                        {payload[0].value}
                        {payload[0].unit}
                    </p>
                </div>
            );
        }
    };

    return (
        <div id="linechart">
            <span id="linechart-title">Durée moyenne des sessions</span>
            <ResponsiveContainer width="100%" height="90%">
                <LineChart data={userSessionData} margin={{ top: 30, bottom: 5 }}>
                    <XAxis
                        dataKey="day"
                        axisLine={false}
                        tick={{ fill: "#FFFFFF", fontSize: "12", opacity: "0.5" }}
                        tickLine={false}
                        tickSize={16}
                        padding={{ left: 15, right: 15 }}
                    />
                    <YAxis hide={true} domain={[0, "dataMax + 30"]} />
                    <Tooltip
                        content={<CustomTooltip />}
                        cursor={{
                            stroke: "black",
                            strokeOpacity: 0.1,
                            strokeWidth: 50,
                        }}
                    />
                    <Line
                        type="monotone"
                        dataKey="sessionLength"
                        unit="min"
                        stroke="white"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 8 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default displayLineChart;
