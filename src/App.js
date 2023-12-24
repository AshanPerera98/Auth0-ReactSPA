import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";

function App() {
  return (
    <div className="App">
      <h1>Auth0 Authentication</h1>
      <LoginButton />
      <LogoutButton />
    </div>
  );
}

export default App;
