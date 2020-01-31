import React from "react";
import Button from "@material-ui/core/Button";
import ArrowForward from "@material-ui/icons/ArrowForward";
import "./card.css";

export default function ItemCard({ data, handleNavigate }) {
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-title">{data.category || ""}</span>
      </div>
      <div className="card-content">
        <div className="media">
          <img src={data.image} alt="...loading" className="product-image" />
        </div>
        <div className="card-text">
          <p>{data.samples.join(",") || ""}</p>
        </div>
      </div>
      <div className="card-footer">
        <Button
          variant="contained"
          className="more-btn"
          endIcon={<ArrowForward />}
          onClick={() => handleNavigate()}
        >
          View more
        </Button>
      </div>
    </div>
  );
}
