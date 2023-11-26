import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsFillBagHeartFill } from 'react-icons/bs'

const Cards = ({ img, title, star, reviews, newPrice, prePrice}) => {
  return (
    <>
     <section className='card'>
          <img className='card_img' src={img} alt={title} />
          <div className="card_details">
            <h3 className="card_title">{title}</h3>
            <section className='card_reviews'>
            {star}  {star}  {star}  {star}
              <span className='total_reviews'>{reviews}</span>
            </section>
            <section className='card_price'>
              <div className="price">
                <del> ${prePrice}</del> ${newPrice}
              </div>

              <div className="bag">
                <BsFillBagHeartFill className='bag_icons' />
              </div>


            </section>

          </div>

        </section>

    </>
  )
}

export default Cards