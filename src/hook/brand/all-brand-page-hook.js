import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllBrand, getAllBrandPage } from "../../redux/actions/brandAction";

const useAllBrand = () => {
  const dispatch = useDispatch();
  //when first load
  useEffect(() => {
    dispatch(getAllBrand(4));
  }, []);

  //to get state from redux
  const brand = useSelector((state) => state.allBrand.brand);
  const loading = useSelector((state) => state.allBrand.loading);

  //to get page count
  let pageCount = 0;
  if (brand.paginationResult) pageCount = brand.paginationResult.numberOfPages;

  //when press pagination
  const getPage = (page) => {
    dispatch(getAllBrandPage(page));
  };

  return [brand, loading, pageCount, getPage];
};

export default useAllBrand;
