import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutMe() {
  return (
    <div style={{display:"flex",gap:"20px",margin:"3vw"}}>
        <Card>
        <Card.Header as="h3" style={{backgroundColor:"#8500be",color:"white",fontWeight:"700",padding:"2vw"}}>BASIC INFO</Card.Header>
        <Card.Body>
        <Container style={{alignItems:"center",padding:"1vw"}}>
            <Row>
                <Col sm={4}>
                <div style={{width:"100%"}}>
                    <Image src="https://abhip32.github.io/IP-LAB-1.1/Assets/profile-pic%20(2).png" style={{width:"100px",height:"90px",borderRadius:"100px"}}/>
                    <br/>
                    <br/>
                    <h6> Name : Abhishek Patil</h6>
                    <h6>  Email : 2020.firsename.lastname@ves.ac.in</h6>
                    <h6> Mobile No : 1234567890 </h6>
                </div>
                </Col>
                <Col sm={8} style={{marginTop:"2vw"}}>
                    <p>
                    My name is <b>Abhishek Patil</b>. I have just over a year of experience as a junior software engineer with First Technology. In my short time there, I've already contributed to over a dozen projects and assisted with managing one project for one of the firm's long-time clients. Prior to this role, I completed a two-year internship with Mobile First, where I honed my mobile app development skills. Ideally, I would like to continue to specialize in mobile software engineering, an area where I know your firm excels. Thank you.
                    </p></Col>
            </Row>
      </Container>
        </Card.Body>
        </Card>
    </div>
   
    
  );
}

export default AboutMe;