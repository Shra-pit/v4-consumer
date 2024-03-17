import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import styles from "../dashboard.module.css"

const Login = () => {
    return (
        <>
            <div className={styles.login_card}>
                <h3 className={styles.heading}>
                    Experience High Speed Broadband
                </h3>
                <div className={styles.input}>
                    <InputGroup className="mb-3">
                        <Form.Control
                        size="lg"
                            placeholder="Enter Your Postal Code.."
                            className={styles.postal}
                        />
                        <button className={styles.button}>
                            Go!
                        </button>
                    </InputGroup>

                    <Form.Control size="lg" type="text" placeholder="Landline Number (Recommended)" className={styles.postal} />
                </div>
                <div className={styles.click_span}>
                    <span >
                        By clicking 'Go!'
                        You're agreeing to V4Consumer reaching out
                        about broadband services. Explore more in our privacy policy."
                    </span>
                </div>
            </div>
        </>
    )

}
export default Login;