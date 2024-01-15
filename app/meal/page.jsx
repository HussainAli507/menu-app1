import React from 'react';

function Burger() {
  return (
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
            <h1 className='md:text-2xl text-lg font-bold'>Choco na grelha  </h1>
            <span>molho de vinho verde e coentros</span>
          </div>
        </div>
        <div className="text-lg font-bold">€10</div> {/* Add the burger price here */}
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
            <h1 className='md:text-2xl text-lg font-bold'>Escabeche de leitão  </h1>
            <span>laranja, batata doce, pickle de mostarda e crackers</span>
          </div>
        </div>
        <div className="text-lg font-bold">€10</div> {/* Add the burger price here */}
      </div>


      <div className="flex justify-between items-center mb-4 border-b border-gray-500 pb-2">
        <div className="flex items-center">
          <img
            src="/burger.jpg" // replace with the actual image path
            alt="Burger Image"
            className="w-16 h-16 object-cover rounded-full mr-4"
          />
          <div>
            <h1 className='md:text-2xl text-lg font-bold'>Lombo de bacalhau fresco</h1>
            <span>batata, cebola, azeitona e molho de gema</span>
          </div>
        </div>
        <div className="text-lg font-bold">€15</div> {/* Add the burger price here */}
      </div>



      <div className="flex justify-between items-center mb-4 border-b border-gray-500 pb-2">
        <div className="flex items-center">
          <img
            src="/burger.jpg" // replace with the actual image path
            alt="Burger Image"
            className="w-16 h-16 object-cover rounded-full mr-4"
          />
          <div>
            <h1 className='md:text-2xl text-lg font-bold'>Atum de cebolada  </h1>
            <span>com batata grelhada</span>
          </div>
        </div>
        <div className="text-lg font-bold">€15</div> {/* Add the burger price here */}
      </div>


      <div className="flex justify-between items-center mb-4 border-b border-gray-500 pb-2">
        <div className="flex items-center">
          <img
            src="/burger.jpg" // replace with the actual image path
            alt="Burger Image"
            className="w-16 h-16 object-cover rounded-full mr-4"
          />
          <div>
            <h1 className='md:text-2xl text-lg font-bold'>Açorda de gambas  </h1>
            <span>fogaça, gema, coentros e molho picante</span>
          </div>
        </div>
        <div className="text-lg font-bold">€15</div> {/* Add the burger price here */}
      </div>


      <div className="flex justify-between items-center mb-4 border-b border-gray-500 pb-2">
        <div className="flex items-center">
          <img
            src="/burger.jpg" // replace with the actual image path
            alt="Burger Image"
            className="w-16 h-16 object-cover rounded-full mr-4"
          />
          <div>
            <h1 className='md:text-2xl text-lg font-bold'>Beringela à Algarvia   </h1>
            <span>cevadinha de tomate e ervas frescas</span>
          </div>
        </div>
        <div className="text-lg font-bold">€14.5</div> {/* Add the burger price here */}
      </div>


      <div className="flex justify-between items-center mb-4 border-b border-gray-500 pb-2">
        <div className="flex items-center">
          <img
            src="/burger.jpg" // replace with the actual image path
            alt="Burger Image"
            className="w-16 h-16 object-cover rounded-full mr-4"
          />
          <div>
            <h1 className='md:text-2xl text-lg font-bold'>Cachaço de porco ibérico  </h1>
            <span>à Alentejana com amêijoas e coentros</span>
          </div>
        </div>
        <div className="text-lg font-bold">€15</div> {/* Add the burger price here */}
      </div>


      <div className="flex justify-between items-center mb-4 border-b border-gray-500 pb-2">
        <div className="flex items-center">
          <img
            src="/burger.jpg" // replace with the actual image path
            alt="Burger Image"
            className="w-16 h-16 object-cover rounded-full mr-4"
          />
          <div>
            <h1 className='md:text-2xl text-lg font-bold'>Arroz de pato   </h1>
            <span>enchidos, alperce e queijo</span>
          </div>
        </div>
        <div className="text-lg font-bold">€15</div> {/* Add the burger price here */}
      </div>


      <div className="flex justify-between items-center mb-4 border-b border-gray-500 pb-2">
        <div className="flex items-center">
          <img
            src="/burger.jpg" // replace with the actual image path
            alt="Burger Image"
            className="w-16 h-16 object-cover rounded-full mr-4"
          />
          <div>
            <h1 className='md:text-2xl text-lg font-bold'>Novilho assado lentamente   </h1>
            <span>com grão de bico e hortelã</span>
          </div>
        </div>
        <div className="text-lg font-bold">€15</div> {/* Add the burger price here */}
      </div>
     
    </div>
  );
}

export default Burger;
