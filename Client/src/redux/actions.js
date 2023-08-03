import { ADD_FAVORITES, DELETE_FAVORITE, FILTER, ORDER } from "./actions-types";

// export const addFavorite = (character) => {
//     return {
//         type: ADD_FAVORITES,
//         payload: character
//     }
// }

export const addFavorite = (character) => {
    try {
        const endpoint ='http:localhost:3001/rickandmorty/fav';
        return async (dispatch) => {
            const { data } = await axios.post (endpoint, character)
            return dispatch({
                type: ADD_FAVORITES,
                payload:data,
            });
        };
    }

    catch(error {
        return {error: error.message}        
    });

}


export const deleteFavorite = (id)=> {
    return {
        type: DELETE_FAVORITE,
        payload: id
    }
}

export const filter = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const order = (id)=> {
    return {
        type: ORDER,
        payload: id
    }
}