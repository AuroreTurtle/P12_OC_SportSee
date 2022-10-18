import React from "react";
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";
import "./RadarChart.css";

function displayRadarChart({ data, kind }) {
    const userPerformanceData = [];
    const kindName = [];
    for (let i = 0; i < data.length; i++) {
        kindName.push(kind[i + 1]);
        userPerformanceData.push({
            kind: kindName[i],
            value: data[i].value,
        });
    }

    return (
        <div id="radarchart">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="48%" cy="50%" outerRadius="59%" data={userPerformanceData} fill="#FFFFFF">
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis dataKey="kind" tick={{ fontSize: "12" }} />
                    <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default displayRadarChart;
