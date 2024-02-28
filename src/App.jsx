import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Fakeye from "./pages/Fakeye";
import Contact from "./pages/Contact";
import Catalogue from "./pages/Catalogue";
import Property from "./pages/Property";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import TeamUpload from "./pages/TeamUpload";
import Projects from "./pages/Projects";
import GalleryDash from "./pages/GalleryDash";
import { RealEstateDash } from "./pages/RealEstateDash";

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
					<Route
						path="/real-estate/:propertyname"
						element={<Property />}
					/>
					<Route path="/login" element={<Login />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/dashboard/team" element={<TeamUpload />} />
					<Route path="/team/:id" element={<Fakeye />} />
					<Route path="/gallery" element={<Projects />} />
					<Route
						path="/dashboard/gallery"
						element={<GalleryDash />}
					/>
					<Route
						path="/dashboard/real-estate"
						element={<RealEstateDash />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
