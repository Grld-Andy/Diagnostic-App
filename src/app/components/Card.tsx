import { PropsWithChildren } from "react";

const Card = ({ children }: PropsWithChildren) => {
  if (!children) return null;
  
  return (
    <div className="bg-white p-5 border border-black/50 rounded-md">
      {children}
    </div>
  );
};

export default Card;
