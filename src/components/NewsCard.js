import React from "react";
import Box from "@material-ui/core/Box";

import Card from "@material-ui/core/Card";

const NewsCard = ({ data, pattern, onDismiss }) => {
  return (
    <React.Fragment>
      <div className="card" elevation={0}>
        <h1>
          <a href={data.url}>{data.title}</a>
        </h1>
        <div>
          <span style={{ width: "30%" }}>-by {data.author}</span>
        </div>
        <div id="meta">
          <span style={{ width: "10%" }}>Comments: {data.num_comments}</span>
          <span style={{ width: "10%" }}>points: {data.points}</span>
        </div>
        <Button onClick={() => onDismiss(data.objectID)}>X</Button>
      </div>
      
    </React.Fragment>
  );
};

const Button = ({ onClick, className = "", children }) => (
  <button onClick={onClick} className="dismissbtn" type="button">
    {children}
  </button>
);

export default NewsCard;
