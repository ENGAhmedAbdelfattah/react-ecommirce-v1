import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCoupon } from "../../redux/actions/couponAction";

const useCouponCard = (coupon) => {
  const dispatch = useDispatch();
  const dateString = coupon.expire;
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //const dispatch = useDispatch();

  const handelDelete = async () => {
    await dispatch(deleteCoupon(coupon._id));
    setShow(false);
    window.location.reload(false);
  };

  return [formatDate, dateString, show, handleClose, handleShow, handelDelete];
};

export default useCouponCard;
