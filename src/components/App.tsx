import { useState } from "react";
import LinkList from "./LinkList";
import "../styles/App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<LinkList />
		</>
	);
}

export default App;
