import React from "react";
import { paymentIcons } from "./svg";

const SupportedPayment = () => {
  return (
    <div className="w-full ">
      <div className="text-[--grays-mauve-11] text-center mb-10 text-xs ">
        Supported payment methods
      </div>

      <div className="flex justify-between px-12">
        {paymentIcons.map((payment) => (
          <div className="flex-shrink-0">{payment.icon()}</div>
        ))}
      </div>
    </div>
  );
};

export default SupportedPayment;
