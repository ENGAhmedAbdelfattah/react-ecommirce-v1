import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getAllBrand } from "../../redux/actions/brandAction";

const useHomeBrand = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBrand());
  }, []);
  //get last brand state from redux
  const brand = useSelector((state) => state.allBrand.brand);
  //get last loading state from redux
  const loading = useSelector((state) => state.allBrand.loading);

  return [brand, loading];
};

export default useHomeBrand;
