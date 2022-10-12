import "./Aside.css";
import Yoga from "../../assets/sports/yoga.svg";
import Swim from "../../assets/sports/swim.svg";
import Bike from "../../assets/sports/bike.svg";
import Fitness from "../../assets/sports/fitness.svg";

function Aside() {
    return (
        <aside>
            <div id="aside">
                <div></div>
                <ul>
                    <li className="aside-icon">
                        <img src={Yoga} alt="Icône Yoga" />
                    </li>
                    <li className="aside-icon">
                        <img src={Swim} alt="Icône Natation" />
                    </li>
                    <li className="aside-icon">
                        <img src={Bike} alt="Icône Vélo" />
                    </li>
                    <li className="aside-icon">
                        <img src={Fitness} alt="Icône Fitness" />
                    </li>
                </ul>
                <p id="aside-copyright">Copyright, SportSee 2020</p>
            </div>
        </aside>
    );
}

export default Aside;
