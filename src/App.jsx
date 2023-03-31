import React, { useEffect, useRef } from "react";
import "./App.css";
import "./style.css";
import "./style.js"
import { GrFacebookOption } from "react-icons/gr";
import {FiInstagram } from "react-icons/fi";
import { MdPhoneAndroid } from "react-icons/md";
import {BsTwitter} from "react-icons/bs"
import {
  IoIosArrowForward,
  IoIosArrowBack,
  IoMdArrowDropright,
} from "react-icons/io";
import logo from "../Coft/logo.png";
import Typed from "typed.js";

const App = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Breakfast !","Lunch","Dinner"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      
      
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="">
      <nav className="container mx-auto bg-white fixed top-0 z-40 shadow">
        <div className="navbar mb-2 items-center px-10 ">
          <div className="flex-none px-2 mx-2">
            <span className="text-center">
              <img src={logo} alt="logo" />
            </span>
          </div>
          <div className="flex-1 px-2 mx-2 ml-10 text-[#B38E6A] ">
            <div className="items-stretch hidden lg:flex text-[#B38E6A] gap-3">
              <a className="btn btn-ghost btn-sm rounded-btn rounded-b-none border-b-2 border-b-[#B38E6A] text-[14px] leading-4 capitalize ">
                Home
              </a>
              <a className="btn btn-ghost btn-sm rounded-btn  text-[14px] capitalize leading-4 font-normal">
                Events
              </a>
              <a className="btn btn-ghost btn-sm rounded-btn text-[14px] capitalize leading-4 font-normal tracking-wide">
                Menu
              </a>
              <a className="btn btn-ghost btn-sm rounded-btn text-[14px] capitalize leading-4 font-normal">
                About
              </a>
              <a className="btn btn-ghost btn-sm rounded-btn text-[14px] capitalize leading-4 font-normal">
                Services
              </a>
              <a className="btn btn-ghost btn-sm rounded-btn text-[14px] capitalize leading-4 font-normal">
                Teams
              </a>
              <a className="btn btn-ghost btn-sm rounded-btn text-[14px] capitalize leading-4 font-normal">
                Contact Us
              </a>
            </div>
          </div>
          <div className="flex-none ">
            <button className="btn btn-square btn-ghost text-[#B38E6A] ">
              <i className="text-[14px]">
                <GrFacebookOption />
              </i>
            </button>
          </div>
          <div className="flex-none">
            <button className="btn btn-square btn-ghost text-[#B38E6A]">
              <i className="text-[14px]">
                <BsTwitter/>
              </i>
            </button>
          </div>
          <div className="flex-none">
            <button className="btn btn-square btn-ghost text-[#B38E6A]">
              <i className="text-[14px]">
                <FiInstagram />
              </i>
            </button>
          </div>
        </div>
      </nav>
      <section className="mt-28">
        <div className=" ">
          <div className=" grid  grid-cols-2">
            <div className="grid  grid-cols-3">
              <div className=""></div>
              <div className="col-span-2  my-28 mr-10">
                <h1 className="font-light text-[14px] leading-4 tracking-[.2em]">
                  BREAKFAST
                </h1>
                <h1 className="font-medium text-[68px]  text-[#554833] w-72">
                  Welcome to coft
                </h1>
                <p className="text-[14px] font-medium  text-[#554833] tracking-[.01em] ml-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ullam, quia. Distinctio, laborum sequi? Fuga, sed.
                </p>
                <div className="mt-7 flex items-center ">
                  <button className="px-10 text-center py-4 text-white  bg-[#B38E6A] border-none rounded-none btn-bg ml-7 hover:bg-[#9a6938]">
                    <span className="font-normal leading-4 tracking-[.01em]">
                      Congregate
                    </span>
                  </button>
                  <button className="px-2 py-2 bg-[#B38E6A] rounded-full ml-7 hover:bg-[#9a6938]">
                    <i className="text-4xl text-white">
                      <IoMdArrowDropright />
                    </i>
                  </button>
                </div>
              </div>
            </div>
            <div className="">
              <div className="carousel w-full ">
                <div
                  id="slide1"
                  className="carousel-item duration-700 ease-in-out relative w-full"
                >
                  <img src="./coft/1.jpeg" className="h-[550px]" />
                  <div className="absolute   -translate-y-1/2 -bottom-8 left-0">
                    <a
                      href="#slide3"
                      className="btn btn-lg px-10  text-[#B38E6A] bg-white border-none hover:bg-[#9a6938] rounded-none"
                    >
                      <i>
                        <IoIosArrowBack />
                      </i>
                    </a>
                    <a
                      href="#slide2"
                      className="btn btn-lg px-10 bg-[#B38E6A] hover:bg-[#9a6938] border-none  rounded-none"
                    >
                      <IoIosArrowForward />
                    </a>
                  </div>
                </div>
                <div id="slide2" className="carousel-item  relative w-full">
                  <img
                    src="/coft/2.jpeg"
                    className="h-[550px] w-full overflow-clip"
                  />
                  <div className="absolute  transform -translate-y-1/2 -bottom-8 left-0">
                    <a
                      href="#slide1"
                      className="btn btn-lg px-10 text-[#B38E6A] bg-white border-none hover:bg-[#9a6938] rounded-none"
                    >
                      <IoIosArrowBack />
                    </a>
                    <a
                      href="#slide3"
                      className="btn btn-lg px-10 bg-[#B38E6A] hover:bg-[#9a6938] border-none  rounded-none"
                    >
                      <IoIosArrowForward />
                    </a>
                  </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                  <img src="./coft/3.jpeg" className="h-[550px] w-full" />
                  <div className="absolute  transform -translate-y-1/2 -bottom-8 left-0">
                    <a
                      href="#slide2"
                      className="btn btn-lg px-10  text-[#B38E6A] bg-white border-none hover:bg-[#9a6938] rounded-none"
                    >
                      <IoIosArrowBack />
                    </a>
                    <a
                      href="#slide1"
                      className="btn btn-lg px-10 bg-[#B38E6A] hover:bg-[#9a6938] border-none   rounded-none"
                    >
                      <IoIosArrowForward />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen">
        <div className="relative">
          <img
            src="./coft/Rectangle 2.png"
            className=" h-[400px] w-full"
            alt=""
          />
       
        <div className="flex justify-center items-center mx-auto w-full  -bottom-48 -left-32 absolute">
          <div className="">
            <span className="">
              <img
                src="/coft/merlene-goulet-ISFopTz7sBo-unsplash.jpg "
                className="w-[280px] h-[200px]"
                alt=""
              />
            </span>
          </div>
          <div className="ml-6 mt-6">
            <h1 className="text-[#554833] font-semibold text-[28px] leading-8">
            Free <span ref={el}></span>
            </h1>
            <h1 className="font-medium text-[21px] leading-7 mt-3 text-[#B38E6A]">
              Every 5th meals as a gift
            </h1>
          </div>
        </div>
        </div>
      </section>
      {/* menu */}
      <section className="h-screen">
        <div className="text-center mt-10 pt-10 w-2/5 mx-auto ">
          <p className=" tracking-[.08em] font-normal ">OUR MENU</p>
          <h1 className="font-semibold text-[28px] text-[#554833] mt-3">
            Special Menu
          </h1>
          <p className="font-normal text-[14px] text-[#554833] mt-3">
            Lorem ipsum dolor sit amet consectetur. Nunc etiam vulputate est
            risus elementum. Eget facilisis facilisi platea .
          </p>
        </div>
        <div className="flex justify-center gap-20 font-semibold text-[18px] text-[#554833]">
          <h1 className="line">Breakfast</h1>
          <h1 className="line line-through">Lunch</h1>
          <h1 className="line line-through">Evening</h1>
          <h1 className="line line-through">Dinner</h1>
        </div>
        <div className="flex  justify-center items-center gap-10 mt-10 ">
          <div className="">
            <div className="card card-img w-[190px] h-[190px] rounded-none bg-base-100 shadow-xl">
              <figure className="imghvr-push-up">
                <img
                  src="./coft/anna-bratiychuk-3w2AuRZeeSU-unsplash.jpg"
                  alt="Shoes"
                />
                <figcaption>
                  <h3 className="ih-fade-down ih-delay-sm font-bold ">
                    Ice-Cream(Choco coffee)
                  </h3>
                  <p className="ih-zoom-in ih-delay-md">
                    <p className="font-semibold text-[8px] mt-4">
                      Hello, I am bar nyar. This is a testing. Must open under
                      my photo. If you see, you success.
                      <p className="mt-4">$25</p>
                    </p>
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="">
            <div className="card  w-[190px] h-[190px] rounded-none bg-base-100 shadow-xl">
              <figure className="imghvr-push-up">
                <img
                  src="./coft/sincerely-media-jLQ9IQMqjSU-unsplash.jpg"
                  alt="Shoes"
                />
                <figcaption>
                  <h3 className="ih-fade-down ih-delay-sm font-bold ">
                    Ice-Cream(Choco coffee)
                  </h3>
                  <p className="ih-zoom-in ih-delay-md">
                    <p className="font-semibold text-[8px] mt-4">
                      Hello, I am bar nyar. This is a testing. Must open under
                      my photo. If you see, you success.
                      <p className="mt-4">$25</p>
                    </p>
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="">
            <div className="card  w-[190px] h-[190px] rounded-none bg-base-100 shadow-xl">
              <figure className="imghvr-push-up">
                <img
                  className=" h-[190px]"
                  src="./coft/shashi-chaturvedula-Nx067kSCoKg-unsplash.jpg"
                  alt="Shoes"
                />
                <figcaption>
                  <h3 className="ih-fade-down ih-delay-sm font-bold ">
                    Ice-Cream(Choco coffee)
                  </h3>
                  <p className="ih-zoom-in ih-delay-md">
                    <p className="font-semibold text-[8px] mt-4">
                      Hello, I am bar nyar. This is a testing. Must open under
                      my photo. If you see, you success.
                      <p className="mt-4">$25</p>
                    </p>
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="">
            <div className="card w-[190px] h-[190px] rounded-none bg-base-100 shadow-xl">
              <figure className="imghvr-push-up">
                <img
                  className="h-[190px]"
                  src="./coft/sofiya-levchenko-c07dv6i8P4Q-unsplash.jpg"
                  alt="Shoes"
                />
                <figcaption>
                  <h3 className="ih-fade-down ih-delay-sm font-bold ">
                    Ice-Cream(Choco coffee)
                  </h3>
                  <p className="ih-zoom-in ih-delay-md">
                    <p className="font-semibold text-[8px] mt-4">
                      Hello, I am bar nyar. This is a testing. Must open under
                      my photo. If you see, you success.
                      <p className="mt-4">$25</p>
                    </p>
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="text-center w-[450px] mx-auto ">
          <p className=" tracking-[.18em] font-normal">WELCOME</p>
          <h1 className="font-semibold text-[28px] text-[#554833] w-96 mx-auto mt-5">
            Private Dinning at Tasty Meals
          </h1>
          <p className="font-normal text-[14px] text-[#554833] mt-5">
            Lorem ipsum dolor sit amet consectetur. Nunc etiam vulputate est
            risus elementum. Eget facilisaa afasf st risus elementum. Eget
            facilisis platea.
          </p>
          <button className="px-10 mt-5 text-center py-4 text-white  bg-[#B38E6A] border-none rounded-none btn-bg  hover:bg-[#9a6938]">
            <span className="font-normal leading-4 tracking-[.01em]">
              Congregate
            </span>
          </button>
        </div>
        <div className="flex justify-center items-center mt-20 pt-10">
          <div className="">
            <div className="card w-[320px] h-[320px] bg-base-200 rounded-none shadow-md">
              <figure>
                <img
                  className="opacity-10 relative"
                  src="./coft/tea_cup_icon_leaf_lemon_slice_decor_6927551 1.png"
                  alt="tea"
                />
              </figure>
              <div className="card-body rounded-none absolute ">
                <div className="mt-28 w-64 mx-auto ml-20">
                  <p className="text-[#B38E6A] tracking-[0.27em] ">
                    MADE WITH LOVE
                  </p>
                  <h2 className="card-title text-[25px] leading-7 font-semibold text-[#9B6938] mt-5 tracking-[0.08em]">
                    New Desserts & Drinks
                  </h2>
                </div>
              </div>
              <div className="flex justify-end ">
                <button className="btn btn-lg px-10  text-[#B38E6A] bg-white border-none hover:bg-[#9a6938] rounded-none">
                  <i>
                    <IoIosArrowBack />
                  </i>
                </button>
                <button className="btn btn-lg px-10 bg-[#B38E6A] hover:bg-[#9a6938] border-none  rounded-none">
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <div className="card w-[320px] h-[320px] card-img rounded-none bg-base-100 shadow-xl">
              <figure>
                <img
                  className="h-[320px]"
                  src="./coft/nguyen-tong-hai-van-Q1ImlWMxOIM-unsplash.jpg"
                  alt="tea"
                />
              </figure>
            </div>
          </div>
          <div className="">
            <div className="card card-img w-[320px] h-[320px] rounded-none bg-base-100 shadow-xl">
              <figure>
                <img
                  className="h-full"
                  src="./coft/Rectangle 15.png"
                  alt="tea"
                />
              </figure>
            </div>
          </div>
          <div className="">
            <div className="card card-img w-[320px] h-[320px] bg-base-200 rounded-none  shadow-md">
              <figure>
                <img
                  className="h-full"
                  src="./coft/unsplash_u9H8ND4GM2w.png"
                  alt="tea"
                />
              </figure>
              <div className="card-body rounded-none absolute mt-28 w-96 mx-auto ml-5">
                <p className="text-[#554833] font-medium text-[13px] ">
                  Full Milk Tea
                </p>
                <p className="font-normal text-[9px] text-[#554833] mt-5">
                  Hello, I am Milk Tea.I am tasty. Milk, White Chocolate, Cream,
                  Coconut.
                </p>
                <h2 className="text-[22px] font-medium mt-5">$18</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="">
            <img
              className="w-[640px] h-[430px] rotate-180 object-cover"
              src="./coft/jen-p-FoG8lotg7AA-unsplash.jpg"
              alt=""
            />
          </div>
          <div className="">
            <img
              className=" h-[430px]"
              src="./coft/jodie-morgan-v4IwVaaxoFo-unsplash.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
      {/* blog */}
      <section className="h-screen mt-28 ">
        <div className="grid grid-cols-4 relative ">
          <div className="col-span-2  ml-60 ">
            <p className="tracking-[0.18em] font-normal">OUR BLOG </p>
            <h1 className="font-semibold mt-3">Recent Posts</h1>
            <img className="mt-5" src="./coft/Rectangle 11.png" alt="" />
          </div>
          <div className="col-span-2  absolute right-0 left-[470px] mt-40">
            <div className="flex  ">
              <img src="./coft/Rectangle 12.png" alt="" />
              <div className="ml-8">
                <h2 className="text-[20px] text-[#554833] font-semibold w-60">
                  Secret Of Delicious Coffee
                </h2>
                <p className="secret-p mt-5 w-[273px]">
                  Lorem ipsum dolor sit amet consectetur. Nunc etiam vulputate
                  afasf st risus.
                </p>
                <button className="text-[13px] font-semibold text-[#554833] mt-8">
                  READ MORE
                </button>
              </div>
            </div>
            <div className="flex mt-8 ">
              <img src="./coft/Rectangle 13.png" alt="" />
              <div className="ml-8">
                <h2 className="text-[20px] text-[#554833] font-semibold w-60">
                  Top 5 Desserts Worth Trying
                </h2>
                <p className="secret-p mt-5 w-[273px]">
                  Lorem ipsum dolor sit amet consectetur. Nunc etiam vulputate
                  afasf st risus.
                </p>
                <button className="text-[13px] font-semibold text-[#554833] mt-8">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact */}
      <section className="h-screen mt-32">
        <div className="text-center ">
          <p className="contact my-7">CONTACT US</p>
          <h1 className="w-96 mx-auto leading-9 ">Book Your Congregate Today</h1>
          <p className="w-[431px] mx-auto my-7 lorem-text">
            Lorem ipsum dolor sit amet consectetur. Nunc etiam vulputate est
            risus elementum. Eget facilisaa afasf st risus elementum. Eget
            facilisis platea.
          </p>
          <button className="px-10 text-center py-4 text-white  bg-[#B38E6A] border-none rounded-none btn-bg  hover:bg-[#9a6938]">
            <span className="font-normal leading-4 tracking-[.01em] mb-10">
              Congregate
            </span>
          </button>
        </div>
        <div className="my-40">
          <img
            className="h-[400px] w-full object-cover"
            src="./coft/aneta-voborilova-PPVtidDYgvk-unsplash.jpg"
            alt=""
          />
        </div>
        <div className="grid grid-cols-10 ">
          <div className=""></div>
          <div className="col-span-2">
            <img src="./coft/logo.png" alt="" />
            <p className="tracking-[0.01em] text-[#554833] font-normal w-80 mt-5">
              Lorem ipsum dolor sit amet consectetur. Nunc etiam vulputate afasf
              st. Nunc etiam. consectetur.
            </p>
            <p className="tracking-[0.01em] text-[#554833] text-[14px] font-normal mt-7 mb-40">
              COFT C All Rights Reserved 2023
            </p>
          </div>
          <div className="col-span-2 ml-20">
            <h2 className="contact-info my-5">Contact Info</h2>
            <p className="flex items-center  my-5">
              <i className="text-[18px] text-[#B38E6A]">
                <MdPhoneAndroid />
              </i>
              <span className="text-[11px] text-[#554833] ml-2">+95 09265161697</span>
            </p>
            <p className="flex items-center my-5 ">
              <i className="text-[18px] text-[#B38E6A]">
                <MdPhoneAndroid />
              </i>
              <span className="text-[11px] text-[#554833] ml-2">+95 09265161697</span>
            </p>
            <p className="text-[13px] text-[#554833] ">ynbthecoft@gmail.com</p>
          </div>
          <div className="col-span-2 ml-20">
            <h2 className="contact-info mt-5">Opening Hours</h2>
            <p className="tracking-[0.01] font-medium text-[#554833] my-5">Mon - Fri  from 8am to 5pm</p>
            <p className="tracking-[0.01] font-medium text-[#554833] my-5">Saturday from 8am to 8pm</p>
            <p className="tracking-[0.01] font-medium text-[#554833] my-5">Sunday    from 8am to 8pm</p>
          </div>
          <div className="col-span-3 ml-10">
            <h2 className="contact-info mt-5">Follow our Acticity</h2>
            <p className="tracking-[0.01] font-medium text-[#554833] my-5">We are in social networks.</p>
            <div className="flex gap-4">
            <button className="btn btn-square btn-ghost rounded-full  shadow-md text-[#B38E6A] ">
              <i className="text-[18px]">
                <GrFacebookOption />
              </i>
            </button>
            <button className="btn btn-square btn-ghost rounded-full shadow-md  text-[#B38E6A]">
              <i className="text-[15px]">
                <BsTwitter />
              </i>
            </button>
            <button className="btn btn-square btn-ghost rounded-full  shadow-md text-[#B38E6A]">
              <i className="text-[15px]">
                <FiInstagram />
              </i>
            </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
