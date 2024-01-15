import React from 'react';

function Burger() {
  const imageUrl = '/foodbgg.jpg';
  return (

   <>
    <div className="max-w-screen-md mx-auto m-10 bg-yellow-400 p-4 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Menu</h2>

      <div className="flex justify-between items-center mb-4 border-b border-gray-500 pb-2">
        <div className="flex items-center">
          <img
            src="/burger.jpg" // replace with the actual image path
            alt="Burger Image"
            className="w-16 h-16 object-cover rounded-full mr-4"
          />
          <div>
            <h1 className='md:text-2xl text-lg font-bold'>Sopa de abóbora assada </h1>
            <span>rolos de queijo de cabra, amêndoa e chila</span>
          </div>
        </div>
        <div className="text-lg font-bold">€8.99</div> {/* Add the burger price here */}
      </div>

      {/* Repeat for other burger sections */}
      {/* ... */}

      <div className="flex justify-between items-center mb-4 border-b border-gray-500 pb-2">
        <div className="flex items-center">
          <img
            src="/burger.jpg"   // replace with the actual image path
            alt="Burger Image"
            className="w-16 h-16 object-cover rounded-full mr-4"
          />
          <div>
            <h1 className='md:text-2xl text-lg font-bold'>Setas com fricassé fumado </h1>
            <span>tosta, molho picante e crocante</span>
          </div>
        </div>
        <div className="text-lg font-bold">€9.5</div> {/* Add the burger price here */}
      </div>


      <div className="flex justify-between items-center mb-4 border-b border-gray-500 pb-2">
        <div className="flex items-center">
          <img
            src="/burger.jpg" // replace with the actual image path
            alt="Burger Image"
            className="w-16 h-16 object-cover rounded-full mr-4"
          />
          <div>
            <h1 className='md:text-2xl text-lg font-bold'>Croquete de bacalhau  </h1>
            <span>maionese de chouriço</span>
          </div>
        </div>
        <div className="text-lg font-bold">€10</div> {/* Add the burger price here */}
      </div>
    </div>
    </>
  );
}

export default Burger;
