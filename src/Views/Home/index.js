import React from 'react'
import Button from '@material-ui/core/Button';
import BasketIcon from '@material-ui/icons/ShoppingBasket'
import LocationIcon from '@material-ui/icons/LocationOn'
import ClockIcon from '@material-ui/icons/TimerOutlined'
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
import ItemCard from '../../components/ItemCard';

import './home.css';

const home = () => (
    <div>
        <div className="image-container" >
            <h1 className="title">Dummy Stores</h1>
            <Button variant="contained" className="basket" startIcon={<BasketIcon />} >
                <Badge color="error" badgeContent="2">
                </Badge>
                Basket
                </Button>
            <span className="nearest"><LocationIcon />  Nearest store: Kasarani </span>
            <span className="delivery">  <ClockIcon /> Delivery in 2 hours</span>
            <input name="search" placeholder="Search in Dummy market ..." className="search-btn"></input>
        </div>

        <div>
            <h2 className="category-title">Categories</h2>
            <Grid item xs={12} className="items-container">
                <ItemCard className="item-card" />
                <ItemCard className="item-card" />
            </Grid>
        </div>
    </div>
);
export default home;