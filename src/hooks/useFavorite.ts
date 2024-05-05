import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"; 
import { RootState } from "../component/state/store";
import { Product } from "../pages/HomePage";
import { addToList, updateFavorite } from "../component/state/favoriteSlice";

const useFavorite = (product: Product) => {
  const favoriteItems = useSelector(
    (state: RootState) => state.favorite.favoriteList
  );

  const favoriteItem = favoriteItems?.find((f) => f.product.id === product?.id);

  let [favorite, setFavorite] = useState(
    favoriteItem ? favoriteItem.isFavorite : false
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (favoriteItem) {
      setFavorite(favoriteItem ? favoriteItem.isFavorite : false);
    } else {
      setFavorite(false);
    }
  }, [favoriteItem]);

  const cartUpdate = () => {
    if (favoriteItem) {
      dispatch(
        updateFavorite({
          id: product.id,
          isFavorite: favorite,
        })
      );
    } else {
      dispatch(addToList({ product, isFavorite: favorite }));
    }
  };
  const handleSetFavorite = () => {
    setFavorite((favorite = !favorite));
    cartUpdate();
  };
 

  return {
    favorite,
    handleSetFavorite, 
  };
};

export default useFavorite;
