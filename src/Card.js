import React from "react";
function Card(props) {
  return (
    <>
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">

            {/* plan is title of card */}
            <h5 class="card-title text-muted text-uppercase text-center">
              {props.data.plan}
            </h5>
            
            {/*this line  is price of card */}
            <h6 class="card-price text-center">{props.data.price}</h6> <hr />
            <ul className="fa-ul">
              {props.data.features.map((feature) => {
                return (
                  <li className={feature.isEnabled ? "" : "text-muted"}>
                    <span className="fa-li">
                      <i className={`fa ${
                          feature.isEnabled ? "fa-check" : "fa-times"
                        }`}
                      ></i>
                    </span>
                    {feature.name}
                  </li>
                );
              })}
            </ul>
            <button
              href="#"
              className="btn btn-block btn-primary text-uppercase w-100"
            >
              Button
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
