import React from "react";

function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 12;
  const closeHour = 22;

  //   if (hour >= openHour && hour <= closeHour) alert("We're currently open");
  //   else alert("We're currently close");

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We're currently open
    </footer>
  );
}

export default Footer;
