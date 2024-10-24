import NavBar from "./components/NavBar/NavBar";
import Wilder from "./components/Wilder/Wilder";
import "./App.css";

function App() {
	return (
		<>
			<NavBar />
			<div className="wild-container">
				<Wilder name="Bob" crew="data" favorite="pouleyyyy" />
				<Wilder name="Antonio" crew="data" favorite="Savane" />
				<Wilder name="Marie" crew="dev" favorite="l'eau" />
				<Wilder name="Richard" crew="dev" favorite="la bière" />
				<Wilder name="April" crew="dev" favorite="manger" />
			</div>
		</>
	);
}

export default App;
