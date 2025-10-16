import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5 className="text-uppercase mb-3">Food Ordering</h5>
            <p>
              Giao đồ ăn nhanh, ngon và tiện lợi.  
              Mọi lúc, mọi nơi – chỉ với vài cú click!
            </p>
          </Col>

          <Col md={4} className="mb-3">
            <h5 className="text-uppercase mb-3">Liên hệ</h5>
            <p>Email: support@foodapp.com</p>
            <p>Hotline: 0123 456 789</p>
            <p>Địa chỉ: 123 Nguyễn Trãi, Hà Nội</p>
          </Col>

          <Col md={4} className="mb-3">
            <h5 className="text-uppercase mb-3">Theo dõi chúng tôi</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-light text-decoration-none">
                <i className="bi bi-facebook"></i> Facebook
              </a>
              <a href="#" className="text-light text-decoration-none">
                <i className="bi bi-instagram"></i> Instagram
              </a>
            </div>
          </Col>
        </Row>

        <hr className="border-light" />
        <Row>
          <Col className="text-center">
            <small>© 2025 Food Ordering App</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
