import React from "react";
import cars from '../images/cars.jpeg'
import "./hero.css"

function Hero () {
    
    return (
      <>
      <div className="hero">
      <img src={cars} alt="text"/>
      <div className="logo">
        <svg width="256" height="114" data-name="Laag 1" viewBox="0 0 256 114"><path d="M195.91 113.98c-34 0-58.34-25.32-58.34-56.62v-.31c0-31.29 24.69-56.93 58.66-56.93s58.34 25.32 58.34 56.62v.31c0 31.29-24.69 56.93-58.66 56.93zm33.34-56.93c0-18.87-13.84-34.6-33.34-34.6s-33 15.41-33 34.29v.31c0 18.87 13.84 34.6 33.34 34.6s33-15.41 33-34.29zM0 113.98V0h24.21v114zM48.73 113.98V0h24.22v114z"></path><rect x="98.13" y="89.82" width="24.16" height="24.16" rx="12.08" fill="#2fe0a0"></rect></svg>
        </div>
      </div>
      </>  
    );
  }
  
export default Hero