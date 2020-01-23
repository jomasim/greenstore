import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowForward from '@material-ui/icons/ArrowForward';
import veges from '../../assets/images/vg.png'
import './card.css';


export default function RecipeReviewCard() {
    return (
        <div className="card">
            <div className="card-header">
                <span className="card-title">Vegetables</span>
            </div>
            <div className="card-content">
                <div className="media">
                    <img src={veges}  alt="...loading"/>
                </div>
                <div className="card-text">
                    <p>
                        Kales,
                        Spinach,
                        Managu,
                        Cabbages,
                    </p>
                </div>
            </div>
            <div className="card-footer">
                <Button
                    variant="contained"
                    className="more-btn"
                    endIcon={<ArrowForward />}
                >
                    View more
                </Button>
            </div>
        </div>
    );
}
