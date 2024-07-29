import React from "react";
import Carousel from "react-bootstrap/Carousel";

const ProjectsNegative = () => {
  return (
    <>
      <div className="projecthead ">
        <div className="container col-xxl-8 px-1 ">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <Carousel>
                <Carousel.Item>
                  <img
                    src="adoptme/home.jpg"
                    alt=""
                    width="400"
                    height="500"
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
                    src="adoptme/petdetail.jpg"
                    alt=""
                    width="400"
                    height="500"
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
                    src="adoptme/addpet.jpg"
                    alt=""
                    width="400"
                    height="500"
                    loading="lazy"
                    style={{
                      borderRadius: "10px",
                      marginRight: "5px",
                      margin: "auto",
                      alignContent: "center",
                    }}
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
                AdoptMe-Rehome a Pet
              </h1>
              <p className="lead">
                The AdoptMe-Rehome a Pet, is an Android-based mobile application
                that aims to facilitate the adoption of pets. The application
                provides a platform for rescue groups and individual pet owners
                to showcase their pets and connect with potential adopters. The
                primary goal of this application is to encourage responsible pet
                ownership and to reduce the number of abandoned pets.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  type="button"
                  className="btn btn-secondary btn-lg px-4 me-md-2"
                >
                  <a
                    href="https://github.com/Dipak-Gautam/adoptMe-Android-main"
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
    </>
  );
};

export default ProjectsNegative;
