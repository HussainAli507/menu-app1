// components/FeedbackCards.js
import React from 'react';
import Image from 'next/image';
const feedbacks = [
  {
    id: 1,
    author: 'John Doe',
    comment: 'Excellent service! The team was very professional and responsive.',
    rating: 5,
    image: '/user.jpg', // Replace with the actual image path
  },
  {
    id: 2,
    author: 'Jane Smith',
    comment: 'Amazing experience. Fast delivery and quality products.',
    rating: 4,
    image: '/user.jpg', // Replace with the actual image path
  },
  {
    id: 3,
    author: 'Sam Johnson',
    comment: 'Satisfied with the service. Will definitely recommend to others.',
    rating: 4.5,
    image: '/user.jpg', // Replace with the actual image path
  },
];


const FeedbackCards = () => {
  const backgroundImageUrl = '/Fback.jpeg';
  return (
    <>
    <div style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', padding: '20px' }}>
   
      <div className=' justify-between text-center'>
        <h1 className='font-bold text-xl m-5 text-yellow-500'>Feedback dos nossos clientes</h1>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center m-10">
        {feedbacks.map((feedback) => (
          <div key={feedback.id} className="max-w-md p-8 bg-yellow-300 hover:bg-yellow-200 hover:transation-all duration-300 delay-75 hover:translate-y-3 rounded-full shadow-md">
            <div className="mb-4 flex justify-center">
              <img src={feedback.image} alt={`User ${feedback.id}`} className="w-16 h-16 object-cover rounded-full" />
            </div>
            <div className="text-center">
              <h3 className="text-lg mt-5 font-semibold">{feedback.author}</h3>
              <p className="text-gray-600 mb-4">{feedback.comment}</p>
              <div className="flex items-center justify-center">
                <span className="text-yellow-500">{'★'.repeat(Math.round(feedback.rating))}</span>
                <span className="text-gray-500 ml-2">{feedback.rating}</span>
              </div>
            </div>
          </div>
        ))}
        <a href="https://www.google.es/maps/place/Muro+do+Bacalhau/@41.1401707,-8.6148366,17z/data=!4m8!3m7!1s0xd2465d3408b47a5:0x5d5be2e00b9cadd!8m2!3d41.1401707!4d-8.6148366!9m1!1b1!16s%2Fg%2F11rxqvm7b3?entry=ttu">
        <div className="md:hidden text-center">
          <button className='bg-yellow-300 hover:bg-yellow-200 text-gray-800 px-6 py-4 mt-4 rounded-md md:block'>Adicionar Avaliação</button>
        </div>
        </a>
      </div>
      </div>
    </>
  );
};

export default FeedbackCards;


