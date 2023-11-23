import liff from "@line/liff";
import logo from "./logo.svg";
import "./App.css";

function App() {
	liff
		.init({ liffId: "2001820290-d9ojVkVZ" })
		.then(() => {
			if (!liff.isLoggedIn()) {
				console.log("Not LoggedIn");
				liff.login();
			} else {
				console.log("Already LoggedIn");
				liff.sendMessages([{ type: "test", test: "Hello, World" }]);
				console.log("Send Message");
			}
		})
		.catch((err) => {
			console.log("初始化失敗");
		});

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
