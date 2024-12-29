import React from "react";

const PlanCard = ({
  name,
  price,
  originalPrice,
  discount,
  paymentType,
  extra,
  description,
  status,
  links,
  imgUrl,
}) => {
  return (
    <div className="w-1/2 border-[1px] py-6 px-4 rounded-lg border-[--grays-mauve-alpha-3]">
      <img className="w-[60px] mb-4" src={imgUrl} alt="plan-img" />

      <div className="card-plan-content">
        <div className="text-sm mb-2 text-[--grays-mauve-11]">{name}</div>

        <div className="plan-price flex items-center gap-2">
          <div className="text-[--grays-mauve-12] text-xl font-bold">
            {price}
          </div>
          <div className=" text-[--grays-mauve-8] text-xl line-through">
            {originalPrice}
          </div>

          <div className="pill rounded-full w-fit bg-[--teal-alpha-4] text-[--teal-alpha-11] text-xs px-2 ">
            {discount}
          </div>
        </div>
        <small className="text-xs text-[--grays-mauve-9]">{paymentType}</small>

        <div className="separator my-4"></div>

        <small className="text-xs text-[--grays-mauve-9]">{extra}</small>

        <div className="separator my-4"></div>

        <small className="text-xs mb-4 inline-block leading-none text-[--grays-mauve-9]">
          {description}
        </small>

        
          <button className={
            ` ${status === "active" ? "text-[--grays-mauve-7] bg-[--grays-mauve-alpha-2]" : "text-[--grays-mauve-12] bg-[--blue-9]" } mb-4 rounded-lg text-xs w-full  px-4 py-1.5 `
          }>
            {
                status === "active" ? "Active" :"Buy now"
            }
          </button>
        

        <button className=" border-[1px] border-[--grays-mauve-4] text-[--grays-mauve-11] rounded-lg text-xs w-full  px-4 py-1.5 ">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
