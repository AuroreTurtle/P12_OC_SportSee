import "./User.css";

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
