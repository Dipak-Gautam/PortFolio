import React from "react";
import Carousel from "react-bootstrap/Carousel";

const VirtualPatro = () => {
  return (
    <>
      <div className="projecthead">
        <div className="container col-xxl-8 px-1 ">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <Carousel>
                <Carousel.Item>
                  <img
                    src="VirtualPatro/vp1.png"
                    alt=""
                    width="600"
                    height="400"
                    loading="lazy"
                    style={{ borderRadius: "10px" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="VirtualPatro/vp2.png"
                    alt=""
                    width="500"
                    height="400"
                    loading="lazy"
                    style={{ borderRadius: "10px" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="VirtualPatro/vp3.png"
                    alt=""
                    width="500"
                    height="400"
                    loading="lazy"
                    style={{ borderRadius: "10px", marginRight: "5px" }}
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                Virtual-Patro
              </h1>
              <p className="lead">
                Virtual Patro is one of the online/offline calendars authorized
                by the Government of Nepal, Ministry of Culture, Tourism, and
                Civil Aviation, Nepal Panchanga Nirnayak Samitee. Virtual Patro
                started as a web application for personal and organizational
                purposes, offering features such as : Date Converter , personal
                event manager, calander support for more than 100 years,(Bibaha,
                Bartabanda, Rudri, Pasni, Suva) Muhurat, (Daily, monthly, and
                yearly) horoscopes with responsive and user friendly design.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  type="button"
                  className="btn btn-success btn-lg px-4 me-md-2"
                >
                  <a
                    href="https://virtualpatro.com/"
                    target="/blank"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Preview
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="hrdivison" />
    </>
  );
};

export default VirtualPatro;
