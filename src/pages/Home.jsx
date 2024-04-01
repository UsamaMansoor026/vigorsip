import React from "react";
import img1 from "../assets/gallery1.jpg";
import img2 from "../assets/gallery2.jpeg";
import img3 from "../assets/gallery4.jpeg";
import img4 from "../assets/gallery6.jpeg";
import img5 from "../assets/gallery5.jpg";
import leaf from "../assets/leaf.png";
import logo from "../assets/logo.svg";
import Button from "../components/Button";

/* Social Icons */
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

/* Contact Icons */
import { BsTelephone } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

import { products, cartItems } from "../components/Product";
import "../css/cardFlip.css";
import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="flex flex-col justify-center lg:flex-row lg:justify-between gap-4 lg:gap-10 mt-[100px]">
        <div className="relative flex-1 flex justify-center lg:justify-start pl-3">
          <img
            className="hidden lg:block h-[300px] lg:h-[500px] w-[300px] object-cover border border-white p-1 rounded-md z-0"
            src={img1}
            alt=""
          />
          <img
            className="w-full md:w-[80%] lg:w-[80%] aspect-auto md:aspect-[1/0.7] lg:aspect-[2/1.5] object-cover border border-white p-1 rounded-md z-10 relative lg:absolute lg:left-16 lg:top-10"
            src={img2}
            alt=""
          />
        </div>

        {/* Right Portion */}
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start lg:justify-start mt-10">
          <h1 className="text-3xl md:text-4xl font-semibold lg:text-5xl mt-10 mb-3.5">
            Coffee for every day
          </h1>
          <p className="text-gray-800 w-[70%] text-justify text-sm">
            It is very important for the customer to pay attention to the
            adipiscing process. It may be pleasure for the sake of pleasure or
            something, but the blinded suffer from choice
          </p>
          <div className="mt-9 w-[80%] md:w-[300px]">
            <Button>Coffee catalog</Button>
          </div>
        </div>
      </section>

      {/* Little Parallax Section */}
      <div className="parallaxSection relative mt-[70px] py-[90px]">
        {/* Mask Image */}
        <div className="absolute left-0 right-0 top-0 bottom-0 w-full h-full bg-black/45 z-10"></div>
        <h1 className="text-white font-semibold text-center md:text-3xl lg:text-5xl relative z-20">
          PRODUCTION AND ONLINE STORE <br />
          FRESHLY ROASTED COFFEE
        </h1>
      </div>

      {/* Cards */}
      <div className="my-[70px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7  px-3 md:px-8 lg:px-16">
        {products.map((product) => (
          <article className="flipCard" key={product.id}>
            <div className="flipContent">
              <div className="front">
                <img
                  className="w-full rounded-xl aspect-square object-cover"
                  src={product.img}
                  alt={product.title}
                />
              </div>
              <div className="back">
                <h2 className="text-center text-3xl font-semibold my-4 text-white">
                  {product.title}
                </h2>
                <p className="text-black/90 text-sm px-8 text-justify">
                  {product.desc}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/*  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-28 lg:gap-0 mt-[70px]">
        <div>
          <img className="w-full object-cover" src={img3} alt="" />
        </div>
        <div className="relative flex flex-col justify-center items-center px-[30px]">
          <img
            className="opacity-25 w-[100px] md:w-[350px] lg:w-[500px] absolute left-[50%] -translate-x-[50%]"
            src={logo}
            alt=""
          />
          <h2 className="text-xl font-semibold md:font-normal md:text-3xl text-black/85 w-[100%] md:w-[80%] lg:w-[60%] text-center lg:text-left">
            Let the consequences of the truth be followed, repel the things that
            are, let him flee!
          </h2>
          <p className="my-2 text-gray-700 capitalize">Lisa Manoban</p>
        </div>
      </div>

      {/* Cart Section */}
      <h1 className="mt-[100px] text-center uppercase text-5xl text-black/85">
        Choose a Favourite
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-8 my-16 px-8">
        {cartItems.map((item) => (
          <article key={item.id}>
            <div className="cartCard relative">
              <img
                className="w-full object-cover h-[320px]"
                src={item.img}
                alt={item.name}
              />
              <p className="absolute right-2 bottom-3 uppercase bg-white text-sm py-1 px-2 tracking-[3px]">
                {item.tag}
              </p>
              <div className="cartButton absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <Button>Add to Cart</Button>
              </div>
            </div>
            <div className="text-center my-2">
              <h1 className="uppercase font-semibold tracking-[2px] text-xl">
                {item.name}
              </h1>
              <h4>{item.price}$</h4>
            </div>
          </article>
        ))}
      </div>

      {/* Image Gallery */}
      <Gallery />

      {/* About Us */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-0 place-items-center mt-[80px] px-8">
        <div className="flex justify-center lg:block">
          <img className="w-full md:w-[75%] object-cover" src={img4} alt="" />
        </div>
        <div className="relative flex flex-col justify-center items-center">
          <img
            className="absolute hidden lg:flex -left-[90px] z-0 opacity-85 w-[40%]"
            src={leaf}
            alt=""
          />
          <h1 className="uppercase font-semibold text-black/90 text-3xl md:text-5xl lg:text-4xl tracking-[5px] mt-4">
            about us
          </h1>
          <br />
          <p className="text-black/85 z-10 w-full md:w-[80%] text-justify md:text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quia
            sit necessitatibus quasi, perspiciatis animi exercitationem
            assumenda delectus, magnam rerum vero.
          </p>
          <br />
          <p className="text-black/85 w-full md:w-[80%] text-justify md:text-center">
            istinctio dolores alias vero ut consequatur quasi ad quas? Earum
            quia sit necessitatibus quasi, perspiciatis animi.
          </p>
          <br />
          {/* Socail Icons */}
          <div className="flex items-center gap-2">
            <span className="text-balance bg-black/85 hover:bg-black duration-200 text-white p-3.5 rounded-full cursor-pointer">
              <FaFacebookF />
            </span>
            <span className="ext-balance bg-black/85 hover:bg-black duration-200 text-white p-3.5 rounded-full cursor-pointer">
              <FaTwitter />
            </span>
            <span className="text-balance bg-black/85 hover:bg-black duration-200 text-white p-3.5 rounded-full cursor-pointer">
              <FaInstagram />
            </span>
          </div>
        </div>
      </div>

      {/* Contact Us */}
      <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-4 gap-9 lg:gap-5 mt-[80px]">
        <div>
          <h2 className="capitalize text-center lg:text-left font-semibold text-3xl text-black/90">
            Call us
          </h2>
          <p className="flex items-center gap-3 my-2 font-semibold text-black/70">
            <span>
              <BsTelephone />
            </span>
            <span>+1234-567-2625</span>
          </p>
        </div>
        <div>
          <h2 className="capitalize text-center lg:text-left font-semibold text-3xl text-black/90">
            our location
          </h2>
          <p className="flex items-center gap-3 my-2 font-semibold text-black/70">
            <span>
              <IoHomeOutline />
            </span>
            <span>350 5th Ave, New York, NY 10118</span>
          </p>
        </div>
        <div>
          <h2 className="capitalize text-center lg:text-left font-semibold text-3xl text-black/90">
            write us
          </h2>
          <p className="flex items-center gap-3 my-2 font-semibold text-black/70">
            <span>
              <MdOutlineEmail />
            </span>
            <span>vigorsip26@gmail.com</span>
          </p>
        </div>
        <div>
          <h2 className="capitalize text-center lg:text-left font-semibold text-3xl text-black/90">
            follow us
          </h2>
          <p className="flex items-center gap-3 my-2 font-semibold text-black/70">
            <span>
              <FaInstagram />
            </span>
            <span>@vigorsip26</span>
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-[80px] contactSection py-[70px] grid place-items-center">
        <form
          className="bg-transparent backdrop-blur-2xl px-8 md:px-[70px] lg:px-[120px] w-full lg:w-[70%] py-16"
          action="/"
        >
          <h1 className="text-center font-semibold text-3xl text-white uppercase tracking-[3px] mb-5">
            Leave a message
          </h1>
          {/* Name and Email */}
          <div className="grid grid-cols-1 gap-4">
            <div className="my-3 flex flex-col md:flex-row items-center gap-7">
              <input
                className="bg-transparent border-b-white border-t-0 border-x-0 px-3 py-1.5 w-full border outline-none caret-white text-white placeholder-white font-light"
                type="text"
                placeholder="Name..."
                required
              />
              <input
                className="bg-transparent border-b-white border-t-0 border-x-0 px-3 py-1.5 w-full border outline-none caret-white text-white placeholder-white font-light"
                type="email"
                placeholder="Email..."
                required
              />
            </div>
            <textarea
              className="bg-transparent border border-white px-3 py-1.5 outline-none caret-white text-white w-full placeholder-white font-light min-h-[110px] md:min-h-[160px]"
              placeholder="Leave your Message"
            ></textarea>
          </div>
          <div className="flex items-center justify-center my-3">
            <input
              className="text-white bg-black/85 cursor-pointer px-6 py-3 w-full md:w-[300px] hover:text-black/85 hover:bg-white duration-200 font-semibold uppercase text-sm"
              type="submit"
              value="Book Now"
            />
          </div>
        </form>
      </div>

      {/* Our Blog */}
      <div className="mt-[70px] mb-16">
        <h1 className="text-center text-black/90 uppercase text-4xl tracking-[3px] mb-6">
          read our blog
        </h1>
        <div className="flex flex-col px-8 md:px-[70px] lg:px-[170px]">
          <div>
            <img
              className="w-full aspect-[3/2] md:aspect-[3/1.2] object-cover"
              src={img5}
              alt=""
            />
          </div>
          <div className="mt-7">
            <p className="text-black font-semibold">
              April 13, 2025 / Cocktails
            </p>
            <h3 className="text-black/90 text-3xl md:text-4xl my-4">
              Delicious desserts with your own hands
            </h3>
            <p className="text-black/75 text-sm md:text-base mb-4">
              It is very important for the customer to pay attention to the
              adipiscing process. The pains of the accusers are the very debts
              of the body of the truth. If any one should be indebted to the
              flattery of the times, the pleasures of the present will be
              reserved for some of them. With less pain, wiser.
            </p>
            <span className="uppercase text-black/90 font-bold text-xl cursor-pointer border border-b-black">
              read more
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 text-center flex justify-center items-cen p-8">
        <p className="text-gray">Template by Mobirise</p>
      </div>
    </main>
  );
};

export default Home;
