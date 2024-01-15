import React from 'react';

function Burger() {
  return (

    <div
        className="max-w-screen-md mx-auto m-10 p-4 rounded-md shadow-md"
        style={{
          backgroundImage: 'url("/background1.jpeg")', // Replace with the actual image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: Add a semi-transparent white overlay
        }}
      >
    <div className="max-w-screen-md mx-auto m-10 bg-yellow-400 opacity-80 p-4 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Sobremesa</h2>

      <div className="flex justify-between items-center mb-4 border-b border-gray-500 pb-2">
        <div className="flex items-center">
          <img
            src="/burger.jpg" // replace with the actual image path
            alt="Burger Image"
            className="w-16 h-16 object-cover rounded-full mr-4"
          />
          <div>
            <h1 className='md:text-2xl text-lg font-bold'>Mousse de chocolate  </h1>
            <span>crocantes de avelã</span>
          </div>
        </div>
        <div className="text-lg font-bold">€7</div> {/* Add the burger price here */}
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
            <h1 className='md:text-2xl text-lg font-bold'>Bolo de Banana da Madeira   </h1>
            <span>caramelo quente e gelado de flôr de sal</span>
          </div>
        </div>
        <div className="text-lg font-bold">€7</div> {/* Add the burger price here */}
      </div>


      <div className="flex justify-between items-center mb-4 border-b border-gray-500 pb-2">
        <div className="flex items-center">
          <img
            src="/burger.jpg" // replace with the actual image path
            alt="Burger Image"
            className="w-16 h-16 object-cover rounded-full mr-4"
          />
          <div>
            <h1 className='md:text-2xl text-lg font-bold'>Dom Rodrigo</h1>
            <span>gema, cancla e amendôa</span>
          </div>
        </div>
        <div className="text-lg font-bold">€7</div> {/* Add the burger price here */}
      </div>



      <div className="flex justify-between items-center mb-4 border-b border-gray-500 pb-2">
        <div className="flex items-center">
          <img
            src="/burger.jpg" // replace with the actual image path
            alt="Burger Image"
            className="w-16 h-16 object-cover rounded-full mr-4"
          />
          <div>
            <h1 className='md:text-2xl text-lg font-bold'>Leite creme  </h1>
            <span>airoso, frutos vermelhos e telha crocante</span>
          </div>
        </div>
        <div className="text-lg font-bold">€7</div> {/* Add the burger price here */}
      </div>


      <div className="flex justify-between items-center mb-4 border-b border-gray-500 pb-2">
        <div className="flex items-center">
          <img
            src="/burger.jpg" // replace with the actual image path
            alt="Burger Image"
            className="w-16 h-16 object-cover rounded-full mr-4"
          />
          <div>
            <h1 className='md:text-2xl text-lg font-bold'>Gelados  </h1>
            <span>consulte sabores</span>
          </div>
        </div>
        <div className="text-lg font-bold">€4</div> {/* Add the burger price here */}
      </div>

     </div>
    </div>
  );
}

export default Burger;
