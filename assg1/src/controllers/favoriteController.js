import {useDispatch, useSelector} from "react-redux";
import { toggleFavorite } from "../redux/actions";

export const useFavorites =() => {
const dispatch = useDispatch();
 const favorites = useSelector(state => state.favorite.favorites);

const handleFavoriteClick=(repoId)=>{
    dispatch(toggleFavorite(repoId));
};

return {handleFavoriteClick, favorites};
}