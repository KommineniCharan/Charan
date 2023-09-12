import React, { useEffect, useRef } from "react";
import Header from "../header2/Header";
import { motion } from "framer-motion";
import Slider from "react-slick";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailLockIcon from "@mui/icons-material/MailLock";
import PermDataSettingIcon from "@mui/icons-material/PermDataSetting";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SpeedIcon from "@mui/icons-material/Speed";

const Hosting = () => {
  const settings3 = {
    // dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplaySpeed: 2000,
    // arrows: false,
    // className: "notes-slider",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings4 = {
    // dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplaySpeed: 2000,
    arrows: false,
    // className: "notes-slider",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="section-top">
        <Header />
        <div>
          <div className="hosting-banner">
            <div className="row">
              <div className="col-md-5">
                <div className="exp-hosting">
                  <motion.h2
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    Experience Real Uptime <br /> With Us!
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    If you are looking for an reliable web hosting provider for
                    optimal web performance, look no further!
                  </motion.p>

                  <motion.h3
                    href="#"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <a href="#">Explore</a>
                  </motion.h3>
                </div>
              </div>
              <div className="col-md-7">
                <img
                  className="img-fluid w-100"
                  src="assest/photos/hosting/hosting-banner.png"
                  alt="G-Rank"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="explore-plans">
            <motion.h2
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              Explore the web hosting plans!
            </motion.h2>

            <motion.h3
              href="#"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <a href="#">Click Here</a>
            </motion.h3>
          </div>
        </div>

        <div>
          <div className="features-sec">
            <div className="container">
              <div className="fea">
                <h2>Features</h2>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="box-left">
                    <div className="one-box">
                      <div className="icon-box">
                        <OpenInFullIcon />
                      </div>
                      <div className="content-box">
                        <h3>Scalability</h3>
                        <p>
                          As your business expands and attracts more visitors,
                          upgrading your hosting plan allows for increased
                          traffic, storage, and bandwidth, ensuring optimal
                          website performance during surges in traffic.
                        </p>
                      </div>
                    </div>

                    <div className="one-box">
                      <div className="icon-box">
                        <MailLockIcon />
                      </div>
                      <div className="content-box">
                        <h3>Security and Data Protection</h3>
                        <p>
                          As your business expands and attracts more visitors,
                          upgrading your hosting plan allows for increased
                          traffic, storage, and bandwidth, ensuring optimal
                          website performance during surges in traffic.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="box-right">
                    <div className="one-box">
                      <div className="icon-box">
                        <SupportAgentIcon />
                      </div>
                      <div className="content-box">
                        <h3>Technical Support</h3>
                        <p>
                          Experienced technical support for website hosting,
                          including troubleshooting, server maintenance, and
                          feature configuration. Having a knowledgeable
                          assistant saves time and effort.
                        </p>
                      </div>
                    </div>

                    <div className="one-box">
                      <div className="icon-box">
                        <PermDataSettingIcon />
                      </div>
                      <div className="content-box">
                        <h3>Reliability and Performance</h3>
                        <p>
                          A reliable server infrastructure and robust technical
                          support provide your website with minimal downtime and
                          optimal performance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="titleh2 mt60">
                <h2>Why Choose Us!</h2>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="whychoose-sec">
            <div className="container-fluid">
              <Slider {...settings4}>
                <div className="slider-div4">
                  <div className="op">
                    <img src="assest/photos/hosting/badge.png" alt="" />
                    <h2 className="slider-img4">Reliability and Uptime</h2>
                    <p>
                      High uptime guarantee, ideally 99.9% or higher. With good
                      reliability website can be accessible to visitors at all
                      times
                    </p>
                  </div>
                </div>

                <div className="slider-div4">
                  <div className="op">
                    <img src="assest/photos/hosting/high-speed.png" alt="" />
                    <h2 className="slider-img4">Performance and Speed</h2>
                    <p>
                      Fast loading times for a positive user experience and SEO
                      rankings.
                    </p>
                  </div>
                </div>

                <div className="slider-div4">
                  <div className="op">
                    <img src="assest/photos/hosting/scalability.png" alt="" />
                    <h2 className="slider-img4">Scalability</h2>
                    <p>
                      Offer scalable plans that allow you to easily upgrade as
                      your website's traffic and needs increase
                    </p>
                  </div>
                </div>

                <div className="slider-div4">
                  <div className="op">
                    <img src="assest/photos/hosting/secure-shield.png" alt="" />
                    <h2 className="slider-img4">Security Measures</h2>
                    <p>
                      Robust security features, including SSL certificates,
                      regular backups, and malware scanning to keep your website
                      and data safe.
                    </p>
                  </div>
                </div>

                <div className="slider-div4">
                  <div className="op">
                    <img src="assest/photos/hosting/control-panel.png" alt="" />
                    <h2 className="slider-img4">Control Panel</h2>
                    <p>
                      A user friendly control panel, such as cPanel or Plesk, to
                      manage your website and hosting settings more straight
                      forward and intuitive.
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>

        <div>
          <div className="bestprice-sec">
            <div className="container-fluid">
              <div className="titleh2w">
                <h2>Our Best Pricing Plan</h2>
                <p>
                  We know that everybody's needs are different. That's why{" "}
                  <br />
                  we've created a plan that'll work for you.
                </p>
              </div>

              <div className="row mt60">
                <div className="col-md-4">
                  <div className="price-box">
                    <div className="row bos">
                      <div className="col-md-6 pr0">
                        <div className="pt-pricebox-info">
                          <span className="pt-price-title"> Basic Plan </span>
                          <div className="dollar-price">
                            <h2 className="price">
                              <span className="dollar">&#x24;</span>
                              29.95
                            </h2>
                            <p className="pt-price-duration">/Per Year</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 pl0">
                        <ul className="pt-list-info">
                          <li>Domain</li>
                          <li>Hosting</li>
                          <li>Website Maintenance</li>
                          <li>SSL Certificate</li>
                          <li>Google Workspace</li>
                          <li>Google Marketing</li>
                          <li>24/7 Support</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="price-box">
                    <div className="row bos">
                      <div className="col-md-6 pr0">
                        <div className="pt-pricebox-info">
                          <span className="pt-price-title">
                            {" "}
                            Standard Plan{" "}
                          </span>
                          <div className="dollar-price">
                            <h2 className="price">
                              <span className="dollar">&#x24;</span>
                              35.95
                            </h2>
                            <p className="pt-price-duration">/Per Year</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 pl0">
                        <ul className="pt-list-info">
                          <li>Domain</li>
                          <li>Hosting</li>
                          <li>Website Maintenance</li>
                          <li>SSL Certificate</li>
                          <li>Google Workspace</li>
                          <li>Google Marketing</li>
                          <li>24/7 Support</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="price-box">
                    <div className="row bos">
                      <div className="col-md-6 pr0">
                        <div className="pt-pricebox-info">
                          <span className="pt-price-title"> Premium Plan </span>
                          <div className="dollar-price">
                            <h2 className="price">
                              <span className="dollar">&#x24;</span>
                              40.44
                            </h2>
                            <p className="pt-price-duration">/Per Year</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 pl0">
                        <ul className="pt-list-info">
                          <li>Domain</li>
                          <li>Hosting</li>
                          <li>Website Maintenance</li>
                          <li>SSL Certificate</li>
                          <li>Google Workspace</li>
                          <li>Google Marketing</li>
                          <li>24/7 Support</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Link section start */}
        <section>
          <div className="container-fluid">
            <div>
              <motion.h2
                className="branding-quick-link"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                Quick Links
                <p className="d-block"> For You</p>
              </motion.h2>
              <Slider {...settings3}>
                <div className="slider-div2">
                  <h1 className="slider-img2">Branding</h1>
                </div>
                <div className="slider-div2">
                  <h1 className="slider-img2">
                    Creative & <p className="d-block"> Content</p>
                  </h1>
                </div>
                <div className="slider-div2">
                  <h1 className="slider-img2">
                    Organic <p className="d-block"> marketing</p>
                  </h1>
                </div>

                <div className="slider-div2">
                  <h1 className="slider-img2">
                    Performance <p className="d-block"> marketing</p>
                  </h1>
                </div>
                <div className="slider-div2">
                  <h1 className="slider-img2">Social Media</h1>
                </div>
                <div className="slider-div2">
                  <h1 className="slider-img2">
                    Web <p className="d-block"> Development</p>
                  </h1>
                </div>
                <div className="slider-div2">
                  <h1 className="slider-img2">Domain</h1>
                </div>
                <div className="slider-div2">
                  <h1 className="slider-img2">
                    Web <p className="d-block"> Hosting</p>{" "}
                  </h1>
                </div>
                <div className="slider-div2">
                  <h1 className="slider-img2">Security</h1>
                </div>
                <div className="slider-div2">
                  <h1 className="slider-img2">Email</h1>
                </div>
              </Slider>
            </div>
          </div>
        </section>
        {/* Quick Link section end */}

        <section>
          <div className="performance-footerimg-div">
            <img
              className="img-fluid w-100"
              src="assest/photos/branding/branding-footer-img.png"
              alt="G-Rank"
            />
            <div className="performance-footer-div-text">
              <h1>Learn more about our sevices</h1>
              <div className="searchArea">
                <button type="submit" tabindex="2">
                  Explore
                </button>
                <div className="inputDiv">
                  <input type="text" id="inputField" tabindex="1" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div></div>
      </section>
    </>
  );
};

export default Hosting;
