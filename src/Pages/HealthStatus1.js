import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHealthStatus } from "../Utils/CallApi";

function HealthStatus1() {
  const { id } = useParams();
  const [healthStatus, setHealthStatus] = useState("");
  useEffect(() => {
    getHealthStatus(id, (res) => {
      console.log(res);
      setHealthStatus(JSON.stringify(res));
    });
  }, []);

  return <div>{healthStatus}</div>;
}

export default HealthStatus1;
