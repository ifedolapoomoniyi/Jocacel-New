import BtnPrimary from "../components/BtnPrimary";
import Navbar from "../components/Navbar";
import TeamCard from "../components/TeamCard";
import TeamImg from "../assets/TeamImg.png";
import Footer from "../components/Footer";

const Team = () => {
	return (
		<div className="text-xl">
			<Navbar />

			<div className="team-hero text-white flex flex-col items-center justify-center h-screen">
				<h1 className="text-4xl font-bold px-10">About Us</h1>
				<div className="p-4">
					A very high value is attached to reliable and competent
					personnel. They are the greatest assets that we require
				</div>
				<BtnPrimary text={"Contact Us"} arrow />
			</div>

			{/* Meet the team */}
			<div className="p-10 flex flex-col gap-4">
				<h1 className="text-3xl font-bold text-center pb-4">
					Meet The Team
				</h1>
				<p>
					Training of all categories of our personnel is with high
					premium to keep all members well informed in their
					corresponding sections.
				</p>
				<p>
					KADAF Board of Directors currently comprises of a Chief
					Executive Officer, one Executive Director and Partners with
					other sectional heads like Civil/Structural Engineers,
					Mechanical Engineers, Electrical Engineers, Real Estate
					Surveyors, Draughts men, Town Planner, Land and
					Geo-informatics surveyors, Quantity Surveyors, HSE
					personnel, Steel Fabricators and other skilled and unskilled
					workers.
				</p>

				<p>
					We acquire more staffs in the firm as the number of our
					projects increases. We also partner with other construction
					firms, engineering firms and some architectural firms on
					various types of projects to ensure our quality and valuable
					delivery.
				</p>
			</div>

			{/* Team cards */}
			<div className="flex flex-row flex-wrap gap-5 items-center justify-center p-10">
				<TeamCard
					name={"Abolarin Fakeye"}
					title={"CEO"}
					route={"/team/abolarin-fakeye"}
					text={
						"A very high value is attached to reliable and competent personnel. They are the greatest assets that we require"
					}
					image={TeamImg}
				/>
				<TeamCard
					name={"Abolarin Fakeye"}
					title={"Executive Director"}
					route={"/"}
					text={
						"A very high value is attached to reliable and competent personnel. They are the greatest assets that we require"
					}
					image={TeamImg}
				/>
				<TeamCard
					name={"Abolarin Fakeye"}
					title={"CEO"}
					route={"/"}
					text={
						"A very high value is attached to reliable and competent personnel. They are the greatest assets that we require"
					}
					image={TeamImg}
				/>
				<TeamCard
					name={"Abolarin Fakeye"}
					title={"CEO"}
					route={"/"}
					text={
						"A very high value is attached to reliable and competent personnel. They are the greatest assets that we require"
					}
					image={TeamImg}
				/>
				<TeamCard
					name={"Abolarin Fakeye"}
					title={"CEO"}
					route={"/"}
					text={
						"A very high value is attached to reliable and competent personnel. They are the greatest assets that we require"
					}
					image={TeamImg}
				/>
			</div>

      <Footer/>
		</div>
	);
};

export default Team;
