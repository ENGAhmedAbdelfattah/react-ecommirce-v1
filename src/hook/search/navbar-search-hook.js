import { useState, useEffect } from "react";
import useViewSearchProducts from "./../products/view-search-products-hook";

const useNavbarSearch = () => {
  const [items, pagination, onPress, getProduct] = useViewSearchProducts();
  const [searchWord, setSearchWord] = useState("");
  //when user type search word
  const OnChangeSearch = (e) => {
    localStorage.setItem("searchWord", e.target.value);
    setSearchWord(e.target.value);
    const path = window.location.pathname;
    if (path != "/products") {
      window.location.href = "/products";
    }
  };
  useEffect(() => {
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [searchWord]);
  return [OnChangeSearch, searchWord];
};

export default useNavbarSearch;
