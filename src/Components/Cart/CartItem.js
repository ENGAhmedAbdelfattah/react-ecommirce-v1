import React, { useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import mobile from "../../images/mobile.png";
import deleteicon from "../../images/delete.png";
import useDeleteCart from "../../hook/cart/delete-cart-hook";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "../../redux/actions/productsAction";
const CartItem = ({ item }) => {
  const [
    handelDeleteCart,
    show,
    handleClose,
    handleShow,
    handelDeleteItem,
    itemCount,
    onChangeCount,
    handeleUpdateCart,
  ] = useDeleteCart(item);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneProduct(item.product));
  }, []);
  const oneProducts = useSelector((state) => state.allproducts.oneProduct.data);
  // console.log("oneProducts.title", oneProducts.title);
  return (
    <Col xs="12" className="cart-item-body my-2 d-flex px-2">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <div className="font">تاكيد الحذف</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font">هل انتا متاكد من حذف المنتج من العربة</div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="success" onClick={handleClose}>
            تراجع
          </Button>
          <Button className="font" variant="dark" onClick={handelDeleteItem}>
            حذف
          </Button>
        </Modal.Footer>
      </Modal>

      <img
        width="160px"
        height="197px"
        src={oneProducts ? oneProducts.imageCover : mobile}
        alt=""
      />
      <div className="w-100">
        <Row className="justify-content-between">
          <Col sm="12" className=" d-flex flex-row justify-content-between">
            <div className="d-inline pt-2 cat-text">
              {(item &&
                oneProducts &&
                oneProducts.category &&
                oneProducts.category.name) ||
                ""}
            </div>
            <div
              onClick={handleShow}
              className="d-flex pt-2 "
              style={{ cursor: "pointer" }}
            >
              <img src={deleteicon} alt="" width="20px" height="24px" />
              <div className="cat-text d-inline me-2">ازاله</div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-2">
          <Col sm="12" className=" d-flex flex-row justify-content-start">
            <div className="d-inline pt-2 cat-title">
              {oneProducts ? oneProducts.title : ""}
            </div>
            <div className="d-inline pt-2 cat-rate me-2">
              {oneProducts ? oneProducts.ratingsAverage : 0}
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="mt-1">
            <div className="cat-text d-inline">الماركة :</div>
            <div className="barnd-text d-inline mx-1">
              {/* {oneProducts && oneProducts.brand ? oneProducts.brand.name : ""}{" "} */}
              {oneProducts && oneProducts.brand ? oneProducts.brand : ""}{" "}
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="mt-1 d-flex">
            {item.color === "" ? null : (
              <div
                className="color ms-2 border"
                style={{ backgroundColor: `${item.color}` }}
              ></div>
            )}
          </Col>
        </Row>

        <Row className="justify-content-between">
          <Col sm="12" className=" d-flex flex-row justify-content-between">
            <div className="d-inline pt-2 d-flex">
              <div className="cat-text mt-2  d-inline">الكميه</div>
              <input
                value={itemCount}
                onChange={onChangeCount}
                className="mx-2 text-center"
                type="number"
                style={{ width: "60px", height: "40px" }}
              />
              <Button onClick={handeleUpdateCart} className="btn btn-dark">
                تطبيق
              </Button>
            </div>
            <div className="d-inline pt-2 barnd-text">
              {item.price || 0} جنية
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default CartItem;
