import React from "react";

const Card = ({ options }) => {
  return (
    <div className="bg-white border rounded-10 pt-9 pl-10 pr-10 pb-8 mr-5 mr-lg-9">
      
      <div className="">
        <p className="font-size-5 line-height-28 text-dark-cloud mr-xl-5">
          {options.content}
        </p>
        <div className="d-flex flex-row justify-content-start align-items-center mb-8">
        <div className="circle-48 mr-4">
          <img src={options.image} alt="" />
        </div>
        <h4 className="font-size-6 mb-0 text-dark-cloud">{options.user}</h4>
        </div>
        
      </div>
    </div>
  );
};

export default Card;
