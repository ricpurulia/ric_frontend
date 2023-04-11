import React from "react";
import DefultImage from "../Assets/Image/defult-image.jpg";
import bannerImage from "../Assets/Image/banner-image.png";
import Events from "./Events";
import "../Assets/Css/Home.css"; 

export default function Home() {

  return (
    <div>
       
      {/* header profile */}
      <header>
        {/* home banner */}
        <div className="banner">
          <div className="content" data-aos="fade-right">
            <div>WELCOME!</div>
            <div>
              TO <span className="font">RIC</span>
            </div>

            <h1 className="code">This club belongs to coders and developers</h1>
          </div>
          <div className="background" data-aos="fade-down">
            <img className="homeImg" src={bannerImage} alt="" />
          </div>
        </div>
      </header>

     <Events/>

      {/* Why to join RIC */}
      <section className="why-to-join-ric">
        <div
          className="container-fluid text-white p-5 my-5"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-easing="ease-in-sine"
        >
          <div className="row">
            <div className="col-sm-4 align-items-center d-flex ">
              <div className="py-3" data-aos="fade-right">
                <img className="why-to-join-ric-img" src={DefultImage} alt="" />
              </div>
            </div>
            <div
              className="col-sm-12 col-lg-8"
              data-aos="fade-left"
             
            >
              <div className="ric-text fs-1">
                Why to join <strong className="text-black "> RIC? </strong>
              </div>
              <p>
                <strong>REASON:</strong> Our mission lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitat lorem20
                
              </p>
              <br />
              <p>
                <strong>MISSION:</strong> Our vision Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Anout us */}
      <section className="about-us container my-5">
        <div className="text-center font-800 my-4" data-aos="zoom-in">
          <h1 className="fw-bold fs-1">About Us</h1>
        </div>
        <div className="container mb-5" data-aos="fade-right">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
          possimus, placeat nihil doloribus beatae aliquam. Illo sapiente, quo,
          maxime sed dolor tempore veritatis minima amet, excepturi temporibus
          ad? Impedit, magnam quam porro deleniti laborum quia, ea est minus
          obcaecati officiis error nemo voluptas atque tenetur ullam animi
          voluptatem cumque corporis excepturi dolor. Facilis doloremque iusto,
          asperiores nemo beatae possimus voluptatibus dolorem in laudantium
          aliquam. Impedit dolorem aliquam aperiam dolores odio ut sed unde
          atque totam quas adipisci quod consectetur, ipsa odit quam accusamus
          veritatis temporibus minima fugiat aliquid mollitia maiores ipsum.
          Minima neque quod eius architecto! Officiis, maxime atque. Deserunt?
        </div>

        <div></div>
      </section>

      {/* Contact Us */}
      <section className="contact-us container bg-light py-4 mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="title col-12 col-lg-8">
              <h2 className="mbr-section-title align-center pb-3 mbr-fonts-style display-2">
                CONTACT US
              </h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className=" col-lg-8">
              <form>
                <div className="row row-sm-offset">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-control-label">Name</label>
                      <input type="text" className="form-control" name="name" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-control-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-control-label">Phone</label>
                      <input type="tel" className="form-control" name="phone" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-control-label">Message</label>
                  <textarea
                    type="text"
                    className="form-control"
                    name="message"
                    rows="7"
                  ></textarea>
                </div>
                <div className="text-center fs-2 mt-3 ">
                  <button className="contact-button text-white border border-white rounded-pill px-4">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
