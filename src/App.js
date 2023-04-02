import { Route, Routes, useNavigate, useLocation } from "react-router";
import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import Cards from "./Components/Cards";
import Detail from "./Components/Detail";
import Login from "./Components/Login";

function App() {
	const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

	const onSearch =  (id) => {
		const URL_BASE = "http://localhost:3001";

		if (characters.find((char) => char.id === id)) {
			return alert("Ese personaje ya esta, Jerry!");
		}

		fetch(`${URL_BASE}/onsearch/${id}`)
			.then((response) => response.json())
			.then((data) => {
				if (data.name) {
					setCharacters((oldChars) => [...oldChars, data]);
				} else {
					alert("Ese personaje aún no sale en la serie");
				}
			});
	};
  

	const onClose = (id) => {
		setCharacters(characters.filter((char) => char.id !== id));
	};

	const username = "anfevera97@gmail.com";
	const password = "p1";

	function login(userData) {
		if (userData.password === password && userData.username === username) {
			setAccess(true);
			navigate("/home");
		} else {
			alert("Credenciales incorrectas");
		}
	}

	useEffect(() => {
		!access && navigate("/");
	}, [access, navigate]);


	return (
    <body className="bg-[url(C:\Users\RYZEN\Desktop\rick_and_morty_v2\front\src\img\space-4749302_1280.jpg)] bg-fixed bg-cover brightness-70">
		<div className="flex h-screen">
			<NavBar onSearch={onSearch} />
			<Routes>
        <Route path="/" element={<Login onSubmit={login} />} />
				<Route
					path="/home"
					element={<Cards characters={characters} onClose={onClose} />}
				/>
        <Route path="/detail/:detailId" element={<Detail />} />
			</Routes>
		</div>
    </body>
	);
}

export default App;

