// @flow
import { Container, Row, Col } from 'reactstrap';

export const JustifyCenterLayout = ({ children, className }) => {
  return (
    <Container className="bg-white h-100">
      <Row className="h-100 align-items-center justify-content-center">
        <Col sm={8} md={6} lg={5} className={className}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};
