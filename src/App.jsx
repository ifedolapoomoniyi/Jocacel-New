import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Fakeye from "./pages/Fakeye";
import Contact from "./pages/Contact";
import Catalogue from "./pages/Catalogue";
import Property from "./pages/Property";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/team" element={<Team />} />
					<Route path="/team/abolarin-fakeye" element={<Fakeye />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/real-estate" element={<Catalogue />} />
					<Route path="/real-estate/:propertyname" element={<Property/>} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
