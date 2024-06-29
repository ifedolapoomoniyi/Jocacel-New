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
import AddRealEstate from "./pages/AddRealEstate";
import ScrollToTop from "./utils/ScrollToTop";
import Director from "./pages/Director";
import Chief from "./pages/Chief";
import Lawyer from "./pages/Lawyer";
import Technical from "./pages/Technical"
import Partners from "./pages/Partners";

function App() {
	return (
		<>
			<BrowserRouter>
				<ScrollToTop></ScrollToTop>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/team" element={<Team />} />
					<Route path="/team/abolarin-fakeye" element={<Fakeye />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/real-estate" element={<Catalogue />} />
					<Route path="/partners" element={<Partners/>} />
					<Route
						path="/real-estate/:propertyname"
						element={<Property />}
					/>
					<Route path="/login" element={<Login />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/dashboard/team" element={<TeamUpload />} />
					<Route path="/team/:id" element={<Fakeye />} />

					{/* Team routes */}
					<Route path="/team/director" element={<Director />} />
					<Route path="/team/chief" element={<Chief />} />
					<Route path="/team/lawyer" element={<Lawyer />} />
					<Route path="/team/technical" element={<Technical/>} />

					<Route path="/gallery" element={<Projects />} />
					<Route
						path="/dashboard/gallery"
						element={<GalleryDash />}
					/>
					<Route
						path="/dashboard/real-estate"
						element={<RealEstateDash />}
					/>
					<Route
						path="/dashboard/add-real-estate"
						element={<AddRealEstate />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
