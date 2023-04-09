import { Route, Routes, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import Cards from "./Components/Cards";
import Detail from "./Components/Detail";
import Login from "./Components/Login";
import ModalPE from "./Components/ModalPE";
import Favorites from "./Components/Favorites";



function App() {
	const [characters, setCharacters] = useState([]);
	const [access, setAccess] = useState(false);
	const [visibleModal, setVisibleModal] = useState(true)
	const navigate = useNavigate();

	
	
	const onSearch = (id) => {
		const URL_BASE = "http://localhost:3001";

		if (characters.find((char) => char.id === id)) {
			return setVisibleModal(false);
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
		<div className="">
			<NavBar onSearch={onSearch} />
			<Routes>
				<Route path="/" element={<Login onSubmit={login} />} />
				<Route
					path="/home"
					element={<Cards characters={characters} onClose={onClose} />}
				/>
				<Route path="/detail/:detailId" element={<Detail />} />
				<Route path="/favorites" element={<Favorites />} />
			</Routes>
			<ModalPE visible={visibleModal} setVisible={setVisibleModal}/>
		</div>
	);
}

export default App;
