import React from "react";
import { useState } from "react";


const Login = (props) => {
	const [form, setform] = useState({
		username: "",
		password: "",
	});



	const handleChange = (event) => {
		const { name, value } = event.target;
		setform({ ...form, [name]: value });

	};

	const handleSubmit = (event) => {
		event.preventDefault();
		props.onSubmit(form);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="grid place-content-center h-max w-max py-24 px-24 absolute top-[16%]  left-[35%] bg-amarilloLogin gap-10 rounded-xl">
				<label
					htmlFor="username"
					className="text-azul text-5xl font-rick drop-shadow-[3px_3px_#5cad4a]"
				>
					Username:
				</label>
				<input
					type="text"
					name="username"
					className="h-7 rounded-md"
					value={form.username}
					onChange={handleChange}
				/>


				<label
					htmlFor="password"
					className="text-azul text-5xl font-rick drop-shadow-[3px_3px_#5cad4a]"
				>
					Password:
				</label>
				<input
					type="password"
					name="password"
					className="h-7 rounded-md "
					value={form.password}
					onChange={handleChange}
				/>
				
				<button
					type="submit"
					className="bg-azul text-gray-100 rounded-full hover:shadow-[3px_3px_#5cad4a]"
					onClick={handleSubmit}
				>
					Login
				</button>
			</div>
		</form>
	);
};

export default Login;
