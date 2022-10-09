import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./Text.css"


function Text() {
  return (<>
    <section className='footer'>
      <div className='container'>
      <div className='footerdiv'> 
        <Form>
            <Row>
              <Col xs={1}>
                <button type='button' class="btn btn-lg btn-outline-dark">ESC</button>
              </Col>
                <Col xs={9}>
                  <Form.Control size="lg" type="email" placeholder="Write Message" />
                </Col>
                <Col xs={1}>
                <button type="button" class="btn btn-lg btn-outline-dark">+</button>
                </Col>
                <Col xs={1}>
                <button type="button" class="btn btn-lg btn-outline-dark" id='sendbutton'>Send</button>
                </Col>
            </Row>
          </Form>
        
      </div>
      </div>
    </section>
    </>
  );
}

export default Text;