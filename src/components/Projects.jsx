import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Projects = () => {
  return (
    <>
      <div className="projecthead">
        <div className="container col-xxl-8 px-4 ">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <Carousel>
                <Carousel.Item>
                  <img
                    src="QuickShopping/productdisplay.png "
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
                    src=" QuickShopping/productdetail.png"
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
                    src="QuickShopping/cart.png"
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
                Quick Shopping
              </h1>
              <p className="lead">
                Quick Shopping is an e-commerce platform developed using React,
                enabling users to browse products, add them to a cart, and
                securely checkout. The platform includes features like product
                search, category filters, and a responsive design for seamless
                user experience across devices."
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  type="button"
                  className="btn btn-secondary btn-lg px-4 me-md-2"
                >
                  <a
                    href="https://github.com/Dipak-Gautam/Quick-Shopping"
                    target="/blank"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Get Code
                  </a>
                </button>
                {/* <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="hrdivison" />
    </>
  );
};

export default Projects;
