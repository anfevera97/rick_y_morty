import axios from "axios";

export const GET_CHARACTER_DETAIL = "GET_CHARACTER_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const GET_FAVORITES = "GET_FAVORITES";
export const REMOVE_FAVORITES = "REMOVE_FAVORITES";
export const ADD_FAVORITE = "ADD_FAVORITE";

export const getCharacterDetail = (id) => {
	return async function (dispatch) {
		const URL_BASE = "http://localhost:3001";
		const response = await axios.get(`${URL_BASE}/detail/${id}`);
		dispatch({ type: GET_CHARACTER_DETAIL, payload: response.data });
	};
};

export const cleanDetail = () => {
	return { type: CLEAN_DETAIL };
};

export const getFavorites = () => {
	return async function (dispatch) {
		const URL_BASE = "http://localhost:3001";
		const response = await axios.get(`${URL_BASE}/rickandmorty/favorites`);
		dispatch({ type: GET_FAVORITES, payload: response.data });
	};
};

export const removeFavorite = (id) => {
	return { type: REMOVE_FAVORITES, payload: id };
};
