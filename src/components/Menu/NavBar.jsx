import { Nav, Navbar } from 'react-bootstrap';
import itemListContainer from './itemListContainer.jsx';
import osvaldoLogo from './osvaldoLogo.png';
import CartIcon from './CarWidget'



const NavBar = () => {
    return (
        <>
            <header className="encabezado container-sm">
                <img id="logoOsvaldo" src={osvaldoLogo} alt="imagen consecionario" height="80px" width="180px" />
                
                <Navbar className="encGaleria__nav container">
                    <div className="container">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse>
                            <Nav className="d-flex justify-content-between w-100">
                                <Nav.Link type="button" to="/">Home</Nav.Link>
                                <Nav.Link type="button" to="/nosotros">Nosotros</Nav.Link>
                                <Nav.Link type="button" to="/stock">Stock</Nav.Link>
                                <Nav.Link type="button" to="/contactanos">Contactanos</Nav.Link>
                                <Nav.Link type="button" to="/galeria">Galería</Nav.Link>
                                <Nav.Link type="button" to="/">{<CartIcon/>}</Nav.Link>
                                
                            </Nav>
                        </Navbar.Collapse>
                        
                    </div>
                </Navbar>
                <itemListContainer/>
                
            </header>
        </>
    );
}


export default NavBar;

