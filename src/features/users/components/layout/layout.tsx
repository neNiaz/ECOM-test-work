import React, { ReactNode } from "react";
import "./global.css";

interface GlobalLayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<GlobalLayoutProps> = ({ children }) => {
  return <div className="global-layout">{children}</div>;
};
