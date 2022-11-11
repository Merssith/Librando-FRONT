import React from "react";
import ProgressBar from "../commons/ProgressBar";

const PlaceOrder = () => {
  return (
    <section>
      <div className="jumbotron p-1 bg-color3 rounded">
        <h5 className="mt-2">
          <ProgressBar step1 step2 step3/>
        </h5>
      </div>
      </section>
  )
}

export default PlaceOrder