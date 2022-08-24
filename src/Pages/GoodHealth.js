import React from "react";
import Healthy from "../Healthy.json";
import Unhealthy from "../Unhealthy.json";

function GoodHealth() {
  
  const healthObject = JSON.stringify({ status: "healthy" });
  const healthObject2 = JSON.stringify({ status: "unhealthy" });

  console.log(Healthy);

  return (
    <div>
      Json 1<div>{JSON.stringify(Healthy)}</div>
      <div style={{ marginTop: "20px" }}>
        Json2 <div>{JSON.stringify(Unhealthy)}</div>
      </div>
    </div>
  );
}

export default GoodHealth;
