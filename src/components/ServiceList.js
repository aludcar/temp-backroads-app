import React from "react";
import Title from "./Title";
import Service from './Service';


const ServicesList = ({services}) => {
  return (
    <>
      {" "}
      <section className="section services" id="services">
      <Title {...{text:"our", strongText:"services"}} />
        <div className="section-center services-center">
        {
          services.map((service,i) =>(
            <Service key={i} {...service}/>
          ))
        }
        </div>
      </section>
    </>
  );
};

export default ServicesList;
