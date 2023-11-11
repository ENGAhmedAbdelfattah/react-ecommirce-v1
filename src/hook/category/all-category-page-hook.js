import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllCategory,
  getAllCategoryPage,
} from "../../redux/actions/categoryAction";

const useAllCategory = () => {
  const dispatch = useDispatch();
  //when first load
  useEffect(() => {
    const get = async () => {
      await dispatch(getAllCategory(8));
    };
    get();
  }, []);

  //to get state from redux
  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);

  //to get page count
  let pageCount = 0;
  try {
    if (category.paginationResult)
      pageCount = category.paginationResult.numberOfPages;
  } catch (e) {}
  //when press pagination
  const getPage = (page) => {
    dispatch(getAllCategoryPage(page));
  };

  return [category, loading, pageCount, getPage];
};

export default useAllCategory;
