import "./User.css";

/**
 * It returns a React component that displays the user name and a message in the dashboard.
 * @returns A React component
 */
function User({ userName }) {
    return (
        <section id="user">
            <h1 id="user-title">
                Bonjour <span id="user-name">{userName}</span>
            </h1>
            <p id="user-status">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </section>
    );
}

export default User;
