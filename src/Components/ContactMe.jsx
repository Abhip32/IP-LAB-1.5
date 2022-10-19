import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {BsInstagram,BsFacebook,BsLinkedin,BsTwitter} from 'react-icons/bs'
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function ContactMe() {
  return (
    <div>
    <Container>
    <div style={{display:"flex",gap:"20px",alignItems:"center",padding:"20px",backgroundColor:"#8500be",color:"white",borderRadius:"20px"}}>
      <img style={{width:"100px",height:"100px",borderRadius:"100px"}} src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wJTIwdHlwaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"/>
      <h3 style={{fontWeight:"700"}}>Give Your Feedback</h3>
    </div>
      <Row style={{margin:"1vw",padding:"2vw",backgroundColor:"whitesmoke",height:"450px"}}>
        <Col sm={5}>
            <div>
            <h3>Made by Abhishek Patil</h3>
            <br/>
            <h5>Stay Connected</h5>
            <br/>
            <div style={{display:"flex",gap:"1.5vw"}}>
                <BsInstagram size={40}/>
                <BsFacebook size={40}/>
                <BsTwitter size={40}/>
                <BsLinkedin size={40}/>

            </div>
            </div></Col>
        <Col sm={7}>
        <div>
        <Form>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><b>Name</b></Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><b>Email address</b></Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><b>Feedback</b></Form.Label>
      <FloatingLabel
        controlId="floatingTextarea"
        label="Feedback"
        className="mb-3"
      >
        <Form.Control as="textarea" placeholder="Leave a comment here" />
      </FloatingLabel>
     
      </Form.Group>
      <Button style={{backgroundColor:"#8500be",padding:"10px",borderRadius:"20px"}} type="submit">
        Submit 
      </Button>
    </Form>
            </div>
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default ContactMe