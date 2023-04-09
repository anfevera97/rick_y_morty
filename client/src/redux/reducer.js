import {
	GET_CHARACTER_DETAIL,
	CLEAN_DETAIL,
	GET_FAVORITES,
	REMOVE_FAVORITES,
	ADD_FAVORITE,
} from "./actions";

const initialState = {
	characterDetail: {},
	myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CHARACTER_DETAIL:
			return {
				...state,
				characterDetail: action.payload,
			};

		case CLEAN_DETAIL:
			return {
				...state,
				characterDetail: {},
			};

		case ADD_FAVORITE:
			return {
				...state,
				myFavorites: [...state.myFavorites, action.payload],
			};

		case GET_FAVORITES:
			return {
				...state,
				myFavorites: action.payload,
			};

		case REMOVE_FAVORITES:
			return {
				...state,
				myFavorites: state.myFavorites.filter((char) => char.id !== action.payload),
			};

		default:
			return { ...state };
	}
};

export default rootReducer;
