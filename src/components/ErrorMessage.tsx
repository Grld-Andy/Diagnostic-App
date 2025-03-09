import React, { PropsWithChildren } from "react";

const ErrorMessage = ({ children }: PropsWithChildren) => {
  if (!children) return null;

  return <h1 className="text-red-500">{children}</h1>;
};

export default ErrorMessage;
