import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import useResetPassword from "../../hook/auth/reset-password-hook";

const RsetPasswordPage = () => {
  const [
    password,
    confirmPassword,
    ,
    OnChangePassword,
    OnChangeConfirmPassword,
    onSubmit,
  ] = useResetPassword();

  return (
    <Container style={{ minHeight: "690px" }}>
      <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login">ادخل كلمه السر الجديده</label>
          <input
            value={password}
            onChange={OnChangePassword}
            placeholder="ادخل كلمه السر الجديدة"
            type="password"
            className="user-input my-3 text-center mx-auto"
          />
          <input
            value={confirmPassword}
            onChange={OnChangeConfirmPassword}
            placeholder="تاكيد كلمه السر الجديدة"
            type="password"
            className="user-input my-3 text-center mx-auto"
          />

          <button onClick={onSubmit} className="btn-login mx-auto mt-2">
            حفظ
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default RsetPasswordPage;
