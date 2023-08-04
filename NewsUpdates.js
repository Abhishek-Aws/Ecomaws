import React from 'react';
import './NewsUpdates.css';
// import Update1 from "./update1.png";
// import Update2 from "./update2.png";
// import Update3 from "./update3.png";

const NewsUpdates = () => {
  return (
    <div>
        <div className="newUpdate" style={{ marginBottom: '30px', marginTop: '30px' }}>
         <h2
        class="off_title3"
        style={{
              fontWeight: 600,
              color: "#2c2c2c",
              opacity: 0.11,
              position: "absolute",
              top: 0,
              left: "50%",
              fontStyle: "italic",
              transform: "translate(-50%, 0%)",
              WebkitTransform: 'translate(-50%, 0%)',
              fontSize: 55,
              fontFamily: "initial",
              lineHeight: 36,
        }}
      >
        Latest News
      </h2>
      <h3>New Updates</h3>
    </div>

    </div>
  )
}

export default NewsUpdates