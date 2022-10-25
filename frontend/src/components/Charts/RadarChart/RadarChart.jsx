import PropTypes from "prop-types";

/* Importing the components from the recharts library. */
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";

// Import CSS
import "./RadarChart.css";

/**
 * It returns React Component that displays a radar chart.
 * @param {Array} data The data containing value (number) and kind (number).
 * @param {Object} kind An object containing the names of the kinds (string).
 * @returns A React component.
 */
function displayRadarChart({ data, kind }) {
    const userPerformanceData = [];
    const kindName = [];

    /* In this loop, we push the data into the kindName array with he corresponding kind name. */
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

displayRadarChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.number,
            kind: PropTypes.number,
        })
    ).isRequired,
    kind: PropTypes.object.isRequired,
};

export default displayRadarChart;
