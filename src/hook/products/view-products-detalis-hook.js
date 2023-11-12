import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOneProduct,
  getProductLike,
} from "../../redux/actions/productsAction";
import mobile from "../../images/mobile.png";
import { getOneCategory } from "../../redux/actions/categoryAction";
import { getOneBrand } from "../../redux/actions/brandAction";

const useViewProductsDetalis = (prodID) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneProduct(prodID));
  }, []);

  const oneProducts = useSelector((state) => state.allproducts.oneProduct);
  const oneCategory = useSelector((state) => state.allCategory.oneCategory);
  const oneBrand = useSelector((state) => state.allBrand.oneBrand);
  const productLike = useSelector((state) => state.allproducts.productLike);
  //to show products item
  let item = [];
  if (oneProducts && oneProducts.data) item = oneProducts.data;
  else item = [];

  useEffect(() => {
    if (item && item.category) dispatch(getOneCategory(item.category));
    if (item && item.brand) dispatch(getOneBrand(item.brand));
    if (item && item.category) dispatch(getProductLike(item.category));
  }, [item]);

  //to view images gallery
  let images = [];
  if (item && item.images)
    images = item.images.map((img) => {
      return { original: img };
    });
  else {
    images = [{ original: `${mobile}` }];
  }

  //to show category item
  let cat = [];
  if (oneCategory && oneCategory.data) cat = oneCategory.data;
  else cat = [];

  //to show brand item
  let brand = [];
  if (oneBrand && oneBrand.data) brand = oneBrand.data;
  else brand = [];

  let prod = [];
  if (productLike) prod = productLike.data;
  else prod = [];
  return [item, images, cat, brand, prod];
};

export default useViewProductsDetalis;
