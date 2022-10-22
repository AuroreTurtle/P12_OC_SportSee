/* Importing the components from the recharts library. */
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Rectangle } from "recharts";

// Import CSS
import "./LineChart.css";

/**
 * It returns React Component that displays a line chart.
 * @return  A React component
 */
function displayLineChart({ data }) {
    const userSessionData = [];
    const days = ["L", "M", "M", "J", "V", "S", "D"];

    /* Creating an array of objects with the day of the week and the session length. */
    for (let i = 0; i < data.length; i++) {
        userSessionData.push({
            day: days[i],
            sessionLength: data[i].sessionLength,
        });
    }

    /**
     * If the tooltip is active and there is a payload, returns a div with the value and unit.
     * @returns A div with a p tag.
     */
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

    /**
     * CustomCursor is a function that takes in a parameter called points and returns a black rectangle.
     * @returns A rectangle.
     */
    const CustomCursor = ({ points }) => {
        return <Rectangle fill="#000000" opacity={0.1} x={points[0].x} width={300} height={300} />;
    };

    return (
        <div id="linechart">
            <span id="linechart-title">Durée moyenne des sessions</span>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={userSessionData} margin={{ top: 30, bottom: 15 }}>
                    <XAxis
                        dataKey="day"
                        axisLine={false}
                        tick={{ fill: "#FFFFFF", fontSize: "12", opacity: "0.5" }}
                        tickLine={false}
                        tickSize={16}
                        padding={{ left: 15, right: 15 }}
                    />
                    <YAxis hide={true} domain={[0, "dataMax + 30"]} />
                    <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} wrapperStyle={{ outline: "none" }} />
                    <Line
                        type="monotone"
                        dataKey="sessionLength"
                        unit="min"
                        stroke="#FFFFFF"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 6 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default displayLineChart;
