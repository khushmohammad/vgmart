import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-success">
      <Container>
        <Navbar.Brand className="text-light">
          <Link href="/" className="nav-link ">
            VG Mart
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
              <Link className="text-light nav-link" href={"/"}>
                Home
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link className="text-light nav-link" href={"/item-list"}>
                Item List
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="text-light nav-link" href={"/add-item"}>
                Add Item
              </Link>
            </Nav.Item>
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
