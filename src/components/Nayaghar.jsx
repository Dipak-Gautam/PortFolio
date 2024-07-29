import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Nayaghar = () => {
  return (
    <>
      <div className="projecthead">
        <div className="container col-xxl-8 px-1 ">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <Carousel>
                <Carousel.Item>
                  <img
                    src="nayaghar/nayagharhome.png"
                    alt=""
                    width="500"
                    height="400"
                    loading="lazy"
                    style={{ borderRadius: "10px" }}
                  />
                  {/* <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="nayaghar/nayagharlocation.png"
                    alt=""
                    width="500"
                    height="400"
                    loading="lazy"
                    style={{ borderRadius: "10px" }}
                  />
                  {/* <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="nayaghar/nayagharrecent.png"
                    alt=""
                    width="500"
                    height="400"
                    loading="lazy"
                    style={{ borderRadius: "10px", marginRight: "5px" }}
                  />
                  {/* <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption> */}
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                Naya-Ghar (Real-Estate website)
              </h1>
              <p className="lead">
                Naya ghar is a leading real estate and rental marketplace
                established to help customers with real estate services. We
                offer an online marketplace to buy or rent a house, apartment
                and land in Nepal. Not only that, our company allows you to gain
                knowledge about the latest prices of land, houses and apartment.
                Our professional staffs attempt to provide quality services at
                the best price.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  type="button"
                  className="btn btn-secondary btn-lg px-4 me-md-2"
                >
                  <a
                    href="https://github.com/Dipak-Gautam/real-estate-website-"
                    target="/blank"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Get Code
                  </a>
                </button>
                <button
                  type="button"
                  className="btn btn-success btn-lg px-4 me-md-2"
                >
                  <a
                    href="https://dipakgautam-nayaghar.netlify.app/"
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

export default Nayaghar;
