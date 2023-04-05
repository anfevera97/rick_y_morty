const axios = require("axios");

const getCharDetail = async (id) => {
	const URL = "https://be-a-rym.up.railway.app/api";
	const KEY = "34585a748421.c988241ff4bb6de9b9a6";

	if (!id) throw Error();

	return axios.get(`${URL}/character/${id}?key=${KEY}`).then((response) => {
		const { id, name, species, gender, origin, status, image } = response.data;
		return { id, name, species, gender, origin, status, image };
	});
};

module.exports = getCharDetail;
