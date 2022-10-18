import React from "react";
import { ResponsiveContainer, RadialBar, RadialBarChart, PolarAngleAxis } from "recharts";
import "./RadialBarChart.css";

function displayRadialBarChart({ data }) {
    const score = data * 100;
    const userScore = [{ value: score, fill: "#FF0000" }];

    return (
        <div id="radialbarchart">
            <p id="radialbarchart-title">Score</p>
            <p id="radialbarchart-score">
                <span id="score-bold">{score}%</span> de votre objectif
            </p>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    data={userScore}
                    innerRadius="70%"
                    startAngle={90}
                    endAngle={450} // (360 + 90)
                    barSize={10}
                >
                    <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                    <RadialBar dataKey="value" cornerRadius="50%" />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default displayRadialBarChart;
