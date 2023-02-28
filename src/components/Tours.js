import React from "react";
import Title from "./Title";

const Tours = ({ tours }) => {
  return (
    <>
      {" "}
      <section className="section" id="tours">
      <Title {...{text:"featured", strongText:"tours"}} />

        <div className="section-center featured-center">
          {tours.map((tour,i) => (
            <article className="tour-card" key={i}>
              <div className="tour-img-container">
                <img src={tour.img} className="tour-img" alt="" />
                <p className="tour-date">{tour.date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{tour.destination}</h4>
                </div>
                <p>{tour.description}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {tour.country}
                  </p>
                  <p>{`${tour.duration} Days`}</p>
                  <p>{`from $${tour.price}`}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Tours;
