import { useEffect, useState } from "react";

const User = () => {
  // Import learning for componentDidUmount similar for functional components
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Printing interval every second");
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="user-card">
      <h2>Name: Nikhil</h2>
      <h3>Location: Dublin</h3>
      <h4>Contact: nikhilasnikar@yahoo.com</h4>
    </div>
  );
};

export default User;
