import PropTypes from "prop-types";

/* Importing the components from the recharts library. */
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Rectangle } from "recharts";

// Import CSS
import "./BarChart.css";

/**
 * It returns React Component that displays a bar chart.
 * @param {Array} data The data containing day (string), kilogram (number) and calories (number)
 * @returns A React component
 */
function displayBarChart({ data }) {
    const userActivityData = [];

    /* A for loop that is iterating through the data array and pushing the data into the
    userActivityData array to match the mockup. */
    for (let i = 0; i < data.length; i++) {
        userActivityData.push({
            index: i + 1,
            kilogram: data[i].kilogram,
            calories: data[i].calories,
        });
    }

    /**
     * It returns a span element with a value passed to it. Used for the barchart's legend.
     * @param {string} value The name and unit of each data
     * @returns A span element
     */
    const CustomLegend = (value) => {
        return (
            <span
                style={{
                    color: "#74798C",
                    fontSize: "14px",
                    lineHeight: "24px",
                    paddingLeft: "12px",
                    marginRight: "Opx",
                }}
            >
                {value}
            </span>
        );
    };

    /**
     * If the tooltip is active and there is a payload, returns a div with the value and unit of the two bars.
     * @param {boolean} active
     * @param {Array} payload
     * @returns A div with two p tags
     */
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

    /**
     * CustomCursor is a function that takes in parameters called x, y and height to display a gray rectangle.
     * @param {number} x The coordinates x
     * @param {number} y The coordinates y
     * @param {number} height The height of the rectangle
     * @returns A rectangle
     */
    const CustomCursor = ({ x, y, height }) => {
        return <Rectangle fill="#C4C4C4" opacity={0.5} x={x + 25} y={y} width={60} height={height} />;
    };

    return (
        <div id="barchart">
            <span id="barchart-title">Activité quotidienne</span>

            <ResponsiveContainer width="90%" height="95%">
                <BarChart data={userActivityData} barSize={7}>
                    <CartesianGrid vertical={false} stroke="#DEDEDE" strokeDasharray="2 2" />
                    <XAxis
                        dataKey="index"
                        tick={{ fill: "#9B9EAC", fontSize: "14" }}
                        tickLine={false}
                        tickSize={16}
                        stroke={"#DEDEDE"}
                        padding={{ left: -50, right: -50 }}
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
                        tickMargin={15}
                    />
                    <YAxis dataKey="calories" yAxisId={1} hide={true} domain={["dataMin - 5", "dataMax + 5"]} />
                    <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} wrapperStyle={{ outline: "none" }} />
                    <Legend
                        verticalAlign="top"
                        align="right"
                        iconType="circle"
                        iconSize={8}
                        height={30}
                        wrapperStyle={{ paddingTop: "2%", paddingBottom: "5%" }}
                        formatter={CustomLegend}
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

displayBarChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            day: PropTypes.string,
            kilogram: PropTypes.number,
            calories: PropTypes.number,
        })
    ).isRequired,
};

export default displayBarChart;
