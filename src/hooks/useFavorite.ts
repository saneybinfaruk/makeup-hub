import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../component/state/store";
import { Product } from "../pages/HomePage";
import { addToList, updateFavorite } from "../component/state/favoriteSlice";

const useFavorite = (product: Product) => {
  const favoriteItems = useSelector(
    (state: RootState) => state.favorite.favoriteList
  );

  const favoriteItem = favoriteItems?.find((f) => f.product.id === product?.id);

  const [favorite, setFavorite] = useState(
    favoriteItem ? favoriteItem.isFavorite : false
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (favoriteItem && favorite !== favoriteItem.isFavorite) {
      setFavorite(favoriteItem.isFavorite);
    }
  }, [favoriteItem, favorite]);

  const favoriteUpdate = (isFavorite: boolean) => {
    dispatch(
      favoriteItem
        ? updateFavorite({
            id: product.id,
            isFavorite,
          })
        : addToList({ product, isFavorite })
    );
  };
  const handleSetFavorite = () => {
    setFavorite((prevState) => !prevState);
    favoriteUpdate(!favorite);
  };

  return {
    favorite,
    handleSetFavorite,
  };
};

export default useFavorite;
