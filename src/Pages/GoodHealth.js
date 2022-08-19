import React from "react";

function GoodHealth() {
  const healthObject = [
    { id: 1, healthStatus: "healthy" },
    { id: 2, healthStatus: "healthy" },
    { id: 3, healthStatus: "healthy" },
    { id: 4, healthStatus: "healthy" },
  ];
  return (
    <div>
      {healthObject.map((item) => {
        return (
          <div>
            <div> {`{`} </div>
            <div> id : {item.id}</div>
            <div>status : {item.healthStatus} </div>
            <div>{`}`} </div>
          </div>
        );
      })}
    </div>
  );
}

export default GoodHealth;
