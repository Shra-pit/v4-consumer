import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import bgVideo from "../../assets/videos/v4_video.mp4"
import Container from 'react-bootstrap/Container'
import Login from './components/Login'

const Dashboard = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={12}>
                        <video id="background-video" autoPlay loop muted playsInline>
                            <source src={bgVideo} type='video/mp4' />
                        </video>
                    </Col>
                    <Col lg={12}>
                        <Login />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Dashboard;