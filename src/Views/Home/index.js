import React, { Component } from "react";
import { connect } from "react-redux";
import LocationIcon from "@material-ui/icons/LocationOn";
import ClockIcon from "@material-ui/icons/TimerOutlined";
import Grid from "@material-ui/core/Grid";
import ItemCard from "../../components/ItemCard";
import AppBar from "../../components/AppBar";
import Sidenav from "../../components/Sidenav";
import "./home.css";
import fetchCategories from "../../actions/category";
import veges from "../../assets/images/vg.png";
import fruits from "../../assets/images/fruits.png";

class Home extends Component {
  state = {};
  componentDidMount() {
    const { getCategories } = this.props;
    getCategories({});
  }

  handleNavigate = () => {
    const { history } = this.props;
    history.push('/products')
  };

  render() {
    const items = [
      {
        id: "646463",
        category: "Vegetables",
        samples: ["kales", "spinach", "managu", "cabbage"],
        imageUrl: "",
        image: veges
      },
      {
        id: "63446463",
        category: "Fruits",
        samples: ["Mangoes", "Grapes", "Lemon", "Oranges"],
        imageUrl: "",
        image: fruits
      }
    ];
    return (
      <div className="main-container">
        <AppBar />
        <div className="image-container">
          <span className="nearest">
            <LocationIcon /> Nearest Pickup Point: Kasarani{" "}
          </span>
          <span className="delivery">
            {" "}
            <ClockIcon /> Delivery in 2 hours
          </span>
        </div>
        <Grid container spacing={2} className="grid-container">
          <Sidenav />
          <Grid container spacing={1} className="grid-main-content">
            {items &&
              items.map(item => {
                return (
                  <ItemCard
                    key={item.id}
                    className="item-card"
                    data={item}
                    handleNavigate={this.handleNavigate}
                  />
                );
              })}
          </Grid>
        </Grid>
        <Grid container className="footer-container">
          <h3> Get in Touch </h3>
          <small>Westalands, Nairobi 0100 Block A</small>
          <small>Infogreen@gmail.com</small>
          <hr className="line" />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({ category }) => ({
  category,
  isLoading: category.isLoading
});
const mapDispatchToProps = dispatch => ({
  getCategories: payload => dispatch(fetchCategories(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
