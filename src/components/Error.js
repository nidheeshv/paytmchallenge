import React from "react";

const Error = ({ message }) => {
  const defaultMessage = "Something went wrong. Please try again later.";
  return (
    <div className="text-center mt-20">{`Oops! ${
      message || defaultMessage
    }`}</div>
  );
};

export default Error;
