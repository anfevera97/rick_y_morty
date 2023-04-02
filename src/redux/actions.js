export const GET_CHARACTER_DETAIL = "GET_CHARACTER_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";


export const getCharacterDetail = (id) => {
	return function (dispatch) {
		const URL_BASE = "http://localhost:3001";

		fetch(`${URL_BASE}/detail/${id}`)
			.then((response) => response.json())
			.then((data) => dispatch({ type: GET_CHARACTER_DETAIL, payload: data }));
	};
};

export const cleanDetail = () => {
	return { type: CLEAN_DETAIL };
};
