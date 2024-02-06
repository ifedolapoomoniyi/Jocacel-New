import Navbar from "../components/Navbar";
import TeamImg from "../assets/TeamImg.png";
import BtnPrimary from "../components/BtnPrimary";
import Buildings from "../assets/icons/Buildings.svg";
import Footer from "../components/Footer";

const Fakeye = () => {
	return (
		<div className="text-xl">
			<Navbar />

			<div className="relative flex flex-row gap-2 m-10">
				{/* Absolutely positioned styling */}
				<div className="flex flex-col">
					<img src={Buildings} alt="" className="absolute left-3 top-4 z-0"/>
					<img src={Buildings} alt="" className="absolute right-2 top-2"/>
					<img src={Buildings} alt="" className="absolute bottom-3 right-2/4"/>
					<img src={Buildings} alt="" className="absolute bottom-3 right-3"/>
					<img src={Buildings} alt="" className="absolute bottom-5 right-1/3"/>
					<img src={Buildings} alt="" className="absolute bottom-1/3 left-1/3"/>
					<img src={Buildings} alt="" className="absolute bottom-2 left-4"/>
					<img src={Buildings} alt="" className="absolute top-5 left-[30%]"/>
				</div>

				<div className="flex-1">
					<div className="text-2xl font-semibold p-3">Abolarin Fakeye</div>
					<div>
						<img src={TeamImg} alt="" className="z-10"/>
					</div>
				</div>

				<div className="flex-1">
					<BtnPrimary text="Executive Director" white/>
					<div className="flex flex-col gap-5 pt-5">
						<p>
							I’m trying to decide on Body text to use. But
							anyway, reach out to us for all your construction
							needs you me, we ar I’m trying to decide on Body
							text to use. But anyway, reach out to us for all
							your construction needs you me, we arI’m trying to
							decide on Body text to use.
						</p>
						<p>
							But anyway, reach out to us for all your
							construction needs you me, we arI’m trying to decide
							on Body text to use. But anyway, reach out to us for
							all your construction needs you me, we ar I’m trying
							to decide on Body text to use. But anyway, reach out
							to us for all your construction needs you me, we ar
							I’m trying to decide on Body text to use.
						</p>
						<p>
							But anyway, reach out to us for all your
							construction needs you me, we ar I’m trying to
							decide on Body text to use. But anyway, reach out to
							us for all your construction needs you me, we ar I’m
							trying to decide on Body text to use. But anyway,
							reach out to us for all your construction needs you
							me, we ar I’m trying to decide on Body text to{" "}
						</p>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Fakeye;
