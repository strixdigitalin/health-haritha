import React from "react";

function GoodHealth() {
  const healthObject = JSON.stringify({ status: "healthy" });
  const healthObject2 = JSON.stringify({ status: "unhealthy" });
  return (
    <div>
      Json 1<div>{healthObject}</div>
      <div style={{ marginTop: "20px" }}>
        Json2 <div>{healthObject2}</div>
      </div>
    </div>
  );
}

export default GoodHealth;
