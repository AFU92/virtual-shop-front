import React from "react";
import MyNavbar from "../components/MyNavbar";

function Layout(props) {
  return (
    <React.Fragment>
      <MyNavbar />
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
