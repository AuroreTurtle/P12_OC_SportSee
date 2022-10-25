import PropTypes from "prop-types";

// Import CSS
import "./Card.css";

/**
 * It returns a react component that displays a card with data.
 * @param {string} icon The icon of the card
 * @param {number} total The nutient total of the card
 * @param {string} unit The unit of data
 * @param {string} type The type of nutrient
 * @returns A React component
 */
function Card({ icon, total, unit, type }) {
    return (
        <div className="card">
            <img src={icon} alt="Icône" />
            <div className="card-data">
                <span className="card-number">
                    {total} {unit}
                </span>
                <p className="card-type">{type}</p>
            </div>
        </div>
    );
}

Card.propTypes = {
    icon: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default Card;
