import LoginImg from "../assets/loginImg.png";
import Logo from "../assets/logo.png";

const Login = () => {
	return (
		<div className="flex flex-row h-screen overflow-hidden">
			<div className="p-5 flex-1 flex flex-col justify-center">
				<div>
					<img src={Logo} alt="" />
				</div>
				<h1 className="text-3xl font-bold py-5">Log In</h1>
				<div>
					Log in to your admin dashboard with your personal password
					and username
				</div>

				<form action="" className="flex flex-col max-w-[500px]">
					<label htmlFor="username" className="pt-5">
						Username
					</label>
					<input
						type="username"
						name="username"
						id="username"
						className="border-gray-300 border rounded-lg h-9 p-2"
					/>
					<label htmlFor="password" className="pt-5">
						Password
					</label>
					<input
						type="password"
						name=""
						id=""
						className="border-gray-300 border rounded-lg h-9 p-2"
					/>

					<button className="p-3 bg-primary text-white rounded-lg mt-7">Log In</button>
				</form>
			</div>

			<div className="flex-1 hidden md:block">
				<img
					src={LoginImg}
					className="w-full h-full object-cover"
					alt="Login page image"
				/>
			</div>
		</div>
	);
};

export default Login;
