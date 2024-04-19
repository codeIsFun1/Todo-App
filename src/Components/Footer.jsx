import React from "react";
import design from "../Style/footer.module.css";
const Footer = ({ completedTodos, totalTodos }) => {
  return (
    <div className={design.footerContainer}>
      <span>Completed todos:{completedTodos}</span>
      <span>Total todos:{totalTodos}</span>
    </div>
  );
};

export default Footer;
