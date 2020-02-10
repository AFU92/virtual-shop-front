import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import ProductCategoriesService from "../services/ProductCategoriesService";

class MyNavbar extends React.Component {
  state = {
    loading: true,
    error: null,
    data: []
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await ProductCategoriesService.get();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    return (
      <Link className="Navbar__brand" href="/">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Virtual Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {this.state.data.map(pCategory => {
                return <Nav.Link href={`${pCategory}`}>{pCategory}</Nav.Link>;
              })}
            </Nav>
            <Nav>
              <Nav.Link href="#login">Login</Nav.Link>
              <Nav.Link href="#car">Shop Car</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Link>
    );
  }
}

export default MyNavbar;
