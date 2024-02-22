import { FaArrowAltCircleRight } from "react-icons/fa";

const AdminProject = ({ image, text }) => {
	return (
		<div className="p-3 shadow-xl rounded-xl w-[300px]">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-semibold">Recent Projects</h2>
				<button className="text-primary text-base flex items-center gap-2">
					View All <FaArrowAltCircleRight />
				</button>
			</div>

			<div className="p-3 border border-black rounded-lg m-3">
				<div>
					<img className="flex m-auto rounded-lg aspect-square w-full" src={image} alt="" />
				</div>
				<div className="text-base leading-5 py-2">{text}</div>
			</div>
		</div>
	);
};

export default AdminProject;
