const initialState = {
    favorites : JSON.parse(localStorage.getItem('favorites')) || []};


const favoriteReducer = (state = initialState, action) => {
    switch(action.type){
        case 'toggle_favorite':
            const {payload: repoId} = action;
            const isFavorite = state.favorites.includes(repoId);
            const favorites = isFavorite ? state.favorites.filter(id => id !== repoId) :
                                    [...state.favorites, repoId];

            return {
                ...state,
                favorites,
            };

            default:
                return state;
    }
};

export default favoriteReducer;