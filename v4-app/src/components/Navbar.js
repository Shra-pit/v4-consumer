import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from "./navbar.module.css";
import Logo from "../assets/logo.png"

const MenuBar = () => {
    const menuItems = [
        {
            id: 1,
            title: "Home"
        },
        {
            id: 2,
            title: "Broadband"
        },
        {
            id: 3,
            title: "Mobile"
        },
        {
            id: 4,
            title: "Pay My Bill"
        },
        {
            id: 5,
            title: "My Account"
        },
        {
            id: 6,
            title: "Help"
        },
        {
            id: 7,
            title: "Contact"
        },
    ]
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={Logo} alt="logo" className={styles.logo_image}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" style={{justifyContent:"end"}}>
                        <Nav>
                            {menuItems.map(({ title }) =>
                            (
                                <Nav.Link href="#v4consumer" className={styles.menu_links}>{title}</Nav.Link>

                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default MenuBar;