
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'



function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      
          <Form className="d-flex">
            <Form.Control 
              type="search"
              placeholder="Search"
              className="me-5 search"
              aria-label="search  "
                  />
                  <i class="bi bi-bell"></i>
          </Form>

      </Container>
    </Navbar>
  );
}

export default NavBar;