import React from 'react'
import './Home.scss'
import Slide from '../../components/slide/Slide'
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedby/TrustedBy'
import CatCard from '../../components/catCard/CatCard'
import {cards} from '../../data'
const Home = () => {
  return (
 
<>
<div>
        <Featured />
        <TrustedBy />
      
        <Slide slidesToShow={5} arrowScroll={4}>

          {cards.map(card=>(
            <CatCard key={card.id} item={card}/>
          ))}
        </Slide>

    {/* <h1>A whole world of freelance talent at your fingertips</h1>
    <div className="title ">
      <img src='./download.jpeg' alt='' />
      The best for every budget
      </div> 
      <p>
        Find high-quality service at every price point. No hourly rates, 
        just project-based pricing.
      </p>
      <h1>A whole world of freelance talent at your fingertips</h1>
    <div className="title ">
      <img src='./download.jpeg' alt='' />
      The best for every budget
      </div> 
      <p>
        Find high-quality service at every price point. No hourly rates, 
        just project-based pricing.
      </p>
    </div>
    <div className="item">
    <video src='./video.mp4' controls></video>
    </div> */}
     <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p >
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              24/7 support
            </div>
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item">
          <video src='./video.mp4' controls></video>
          </div>
  </div>
</div>
<div className="features" dark>
  <div className="container">
    <h1>Fiverr Business</h1>
    <h3>A business solution designed for teams</h3>
    <p>Upgrade to a cureated experience packed with tools and benefits, dedicated to businesses </p>
    <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.</p>
         
    <h3>A business solution designed for teams</h3>
    <p>Upgrade to a cureated experience packed with tools and benefits, dedicated to businesses </p>
    <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.</p>
  </div>
  <button type='button' className='button'>Explore fiver business</button>
</div>
</>
  );
}

export default Home