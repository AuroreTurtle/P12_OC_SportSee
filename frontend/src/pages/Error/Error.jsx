import "./Error.css";

/**
 * It returns a React component that displays an error message if the user ID is not found.
 * @returns A React component
 */
function Error() {
    return (
        <div id="error">
            <span>404</span>
            <p>Oups ! La page que vous demandez n'existe pas.</p>
        </div>
    );
}

export default Error;
