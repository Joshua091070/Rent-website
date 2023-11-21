import React from 'react'
import { list } from '../Data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AiFillHeart } from "react-icons/ai"
import { FaLocationDot } from "react-icons/fa6"


const ResentCard = () => {  
  
  return <>
        <div className="resent_card">
            {
                list.map((val, index) => {
                    const {cover, category, location, name, price, type} = val;
                    return (
                        <div className="box" key={index}>
                            <div className="img">
                                <img src={cover} alt="" />
                            </div>
                            <div className="text">
                                <div className="category flex">
                                    <span style={{background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
                                    <i className='fa fa-heart'>{<AiFillHeart/>}</i>
                                </div>
                                <h4>{name}</h4>
                                <p>
                                    <i className='fa fa-loction-dot'></i>{<FaLocationDot/>}{location}
                                </p>
                            </div>
                            <div className="button flex">
                                <div>
                                    <button className='btn btn6'>{price}</button>
                                    <label htmlFor="">/sqft</label>
                                </div>
                                <span>{type}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </>
  
}

export default ResentCard