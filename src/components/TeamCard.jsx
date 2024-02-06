import { Link } from "react-router-dom";

const TeamCard = ({ name, title, route, text, image }) => {
	return (
		<Link to={route} className="h-[450px] w-[300px] rounded-xl flex flex-col shadow-lg">
			<div className="relative">
				<img src={image} alt="" className="rounded-t-xl" />
				<span className="absolute bg-primary p-1 px-2 rounded-md right-3 top-3 text-white text-lg">{title}</span>
			</div>

      <div className="px-4 p-2 font-semibold">{name}</div>
      <div className="p-4 font-thin">{text}... <span className="text-primary">See more</span></div>
		</Link>
	);
};

export default TeamCard;
