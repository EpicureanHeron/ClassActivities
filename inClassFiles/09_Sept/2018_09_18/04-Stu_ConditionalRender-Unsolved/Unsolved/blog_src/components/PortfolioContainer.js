import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = page => {
      switch(page) {
        case "Home":
            return <Home></Home>
            
        case "About":
             return <About></About>
             
        case "Blog":
            return <Blog></Blog>
             
        case "Contact":
             return <Contact></Contact>
            
        default:
           return <Home></Home>
       
    }
  }

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
       {this.renderPage(this.state.currentPage)}
        
      </div>
    );
  }
}

export default PortfolioContainer;
