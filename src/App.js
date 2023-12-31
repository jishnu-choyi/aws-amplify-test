import "./App.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function App({ signOut, user }) {
    return (
        <div>
            <h1>Hello {user.username}, Welcome!</h1>
            <button onClick={signOut}>Sign out</button>
        </div>
    );
}
export default withAuthenticator(App);
//export default App;
