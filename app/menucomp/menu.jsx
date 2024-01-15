import React from "react";
import Image from "next/image";

const Card = ({ imageUrl }) => {
  return (
    <section className="text-gray-600 body-font bg-cover bg-center  bg-[url('/bg1.jpg')]">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl text-center title-font text-yellow-600 font-bold mb-4">Bem-vindo ao Muro do Bacalhau.</h1>
        </div>

        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto p-4 sm:mb-2 -mx-2">
          <a href="/starters" className="p-2 sm:w-1/2 w-full hover:transation-all duration-300 delay-75 hover:translate-x-3 block">
            <div className="bg-gray-100 hover:bg-yellow-500 rounded-xl flex p-4 md:py-4 h-full items-center shadow-md">
              <div className="flex-shrink-0 bg-slate-700 rounded-full">
                <Image
                  src="/burger.jpg"
                  alt="Card Image"
                  width={30}
                  height={30}
                  className="w-12 h-12 object-cover"
                />
              </div>
              <span className="title-font font-medium px-4">Starters</span>
            </div>
          </a>

          <a href="/meal" className="p-2 sm:w-1/2 w-full hover:transation-all duration-300 delay-75 hover:translate-x-3 block">
            <div className="bg-gray-100 hover:bg-yellow-500 rounded-xl flex p-4 h-full shadow-md items-center">
              <div className="flex-shrink-0 bg-slate-700 rounded-full">
                <Image
                  src="/burger.jpg"
                  alt="Card Image"
                  width={30}
                  height={30}
                  className="w-12 h-12 object-cover"
                />
              </div>
              <span className="title-font font-medium px-4">Main Meal</span>
            </div>
          </a>

          <a href="/desert" className="p-2 sm:w-1/2 w-full hover:transation-all duration-300 delay-75 hover:translate-x-3 block">
            <div className="bg-gray-100 rounded-xl hover:bg-yellow-500 shadow-md flex p-4 h-full items-center">
              <div className="flex-shrink-0 bg-slate-700 rounded-full">
                <Image
                  src="/burger.jpg"
                  alt="Card Image"
                  width={30}
                  height={30}
                  className="w-12 h-12 object-cover"
                />
              </div>
              <span className="title-font text-2xl font-medium px-4">Dessert</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Card;
