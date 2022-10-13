import "./Card.css";

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

export default Card;
