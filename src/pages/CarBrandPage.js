// src/pages/CarBrandPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const CarBrandPage = () => {
  const { brand } = useParams(); // Get the brand param from the URL

  const carDetails = {
    Mercedes: {
      description: "Mercedes-Benz is a global automobile marque and a division of Daimler AG. It is known for producing luxury vehicles, buses, coaches, and trucks.",
      image: "https://st4.depositphotos.com/3378121/21953/i/450/depositphotos_219537048-stock-photo-kerpen-germany-august-2018-steering.jpg",
    },
    BMW: {
      description: "BMW (Bayerische Motoren Werke AG) is a German multinational company that produces luxury vehicles and motorcycles. It's known for its performance and design.",
      image: "https://i.redd.it/v3crba3msor61.jpg",
    },
    Ferrari: {
      description: "Ferrari is an Italian luxury sports car manufacturer based in Maranello, Italy. Ferrari cars are known for their high performance and exclusivity.",
      image: "https://luxurylaunches.com/wp-content/uploads/2012/12/expensive-car-crash-4-thumb-550x429.jpg",
    },
    Pagani: {
      description: "Pagani Automobili S.p.A. is an Italian manufacturer of high-performance hypercars, known for their extreme attention to detail and craftsmanship.",
      image: "https://f1rstmotors.com/_next/image?url=https%3A%2F%2Ff1rst-motors.s3.me-central-1.amazonaws.com%2Fblog%2F1730565527453-blob&w=3840&q=75",
    },
    GTR: {
      description: "The Nissan GT-R is a high-performance sports car produced by Nissan, offering cutting-edge technology and speed at the top of the supercar class.",
      image: "https://wieck-nissanao-production.s3.us-west-1.amazonaws.com/releaseInlineImages/90cf3c27477ce38a360fc1053c2e058cb7a9989d",
    }
  };

  // Get the car details based on the brand param
  const brandDetails = carDetails[brand] || {};

  return (
    <div className="car-brand-page">
      <h1>{brand}</h1>
      {brandDetails.image ? <img src={brandDetails.image} alt={brand} /> : null}
      <p>{brandDetails.description || "Sorry, information about this brand is not available."}</p>
    </div>
  );
};

export default CarBrandPage;
