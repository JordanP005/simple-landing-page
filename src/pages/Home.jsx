import React from "react";

function Home() {
  return (
    <div className="container">
      <div className="main-body">
        <div>
          <img className="head-logo" src="images/logo.svg" alt="logo" />
        </div>
        <div className="mid-div">
          <img src="images\illustration-mockups.svg" />

          <div className="text-div">
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion
            </p>
            <button>Register</button>
          </div>
        </div>
        <div className="footer-div">
          <div className="logo-box">
            <i class="fa-brands fa-facebook-f"></i>
          </div>
          <div className="logo-box">
            <i class="fa-brands fa-twitter"></i>
          </div>
          <div className="logo-box">
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
