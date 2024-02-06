import Go from "../assets/icons/Go.svg";

const BtnPrimary = ({ text, arrow, white }) => {
	return (
		<button className={white? "bg-primary rounded-lg shadow-sm flex items-center p-2 px-4 gap-2 hover:opacity-80 transition-all text-white" : "bg-primary rounded-lg shadow-sm flex items-center p-2 px-4 gap-2 hover:opacity-80 transition-all"}>
			{text} {arrow && <img src={Go} alt="" className="inline w-8 " />}
		</button>
	);
};

export default BtnPrimary;
