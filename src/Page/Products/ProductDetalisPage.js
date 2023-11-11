import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import ProductDetalis from "../../Components/Products/ProductDetalis";
import RateContainer from "../../Components/Rate/RateContainer";
import useViewProductsDetalis from "./../../hook/products/view-products-detalis-hook";

const ProductDetalisPage = () => {
  const { id } = useParams();
  const [item, images, cat, brand, prod] = useViewProductsDetalis(id);
  try {
    if (prod) var items = prod.slice(0, 4);
  } catch (e) {}
  try {
    if (item) {
      var rateAvg = item.ratingsAverage;
      var rateQty = item.ratingsQuantity;
    }
  } catch (e) {}
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <Container>
        <ProductDetalis />
        <RateContainer rateAvg={rateAvg} rateQty={rateQty} />
        <CardProductsContainer products={items} title="منتجات قد تعجبك" />
      </Container>
    </div>
  );
};

export default ProductDetalisPage;
