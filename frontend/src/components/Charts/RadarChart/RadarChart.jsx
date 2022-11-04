import PropTypes from "prop-types";

/* Importing the components from the recharts library. */
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";

// Import CSS
import "./RadarChart.css";

/**
 * It returns React Component that displays a radar chart.
 * @param {Array} data The data containing value (number) and kind (number)
 * @returns A React component
 */
function displayRadarChart({ data }) {
    const userPerformanceData = [];
    const kindName = ["Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensité"];

    /* In this loop, we push the kind name corresponding to the value. */
    for (let i = 0; i < data.length; i++) {
        userPerformanceData.push({
            kind: kindName[i],
            value: data[i].value,
        });
    }

    return (
        <div id="radarchart">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="70%"
                    data={userPerformanceData}
                    fill="#FFFFFF"
                    startAngle={30}
                    endAngle={-330}
                >
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis dataKey="kind" tick={{ fontSize: "8" }} />
                    <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

displayRadarChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.number,
            kind: PropTypes.number,
        })
    ).isRequired,
};

export default displayRadarChart;
