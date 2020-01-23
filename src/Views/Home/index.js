import React from 'react'
import LocationIcon from '@material-ui/icons/LocationOn'
import ClockIcon from '@material-ui/icons/TimerOutlined';
import Grid from '@material-ui/core/Grid';
import ItemCard from '../../components/ItemCard';
import AppBar from '../../components/AppBar'
import './home.css';


const home = () => {
    return (
        <div>
            <AppBar />
            <div className="image-container" >
                <span className="nearest"><LocationIcon />  Nearest store: Kasarani </span>
                <span className="delivery">  <ClockIcon /> Delivery in 2 hours</span>
            </div>
            <Grid container spacing={2} className="grid-container">
                <Grid item >
                    <ItemCard className="item-card" />
                </Grid>
                <Grid item >
                    <ItemCard className="item-card" />
                </Grid>
                <Grid item >
                    <ItemCard className="item-card" />
                </Grid>
                <Grid item >
                    <ItemCard className="item-card" />
                </Grid>
                <Grid item >
                    <ItemCard className="item-card" />
                </Grid>
                <Grid item >
                    <ItemCard className="item-card" />
                </Grid>
            </Grid>
            <Grid container className="footer-container" >

                <h3> Get in Touch </h3>
                <small>Westalands, Nairobi 0100 Block A</small>
                <small>Infogreen@gmail.com</small>
                <hr className="line"/>
                <span className="quick-links">Quick Links</span>
            </Grid>
        </div>
    )
}
export default home;