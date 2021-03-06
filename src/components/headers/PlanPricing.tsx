import React from "react";

const PlanPricingHeader = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Insurance Plan Pricing
          </h2>
          <p className="mt-5 text-xl text-gray-500">
            Find the right plan for your specific needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanPricingHeader;
