import Heading from "../UI/Heading"
import { team } from "../Data"
import Card from "../UI/Card"
import { FaCheckCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6"
import { FaPhone } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

import "../pages/home/team.css"


const Team = () => {
    return (
        <section className="team">
            <div className="container team__container">
                <Heading title="Our Featured Agents" subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit Ipsam, dolores!"/>

                <div className="content">
                    {
                        team.map((val, index) => {
                            return <Card className="card" key={index}>
                                <button className="btn-b">{val.list} Listings</button>
                                <div className="details">
                                    <div className="img">
                                        <img src={val.cover} alt={val.name}  />
                                        <i>{<FaCheckCircle/>}</i>
                                    </div>
                                    <i></i>
                                    <label htmlFor=""><i>{<FaLocationDot/>}</i>{val.address}</label>
                                    <h4>{val.name}</h4>

                                    {/* <ul>{val.icon.map((icon, index) => {
                                            <li key={index} className="team-icon"><i>{icon}</i></li>
                                        })}
                                    </ul> */}

                                    <ul className="flex detail-ul">
                                        <i>{<FaFacebookF/>}</i>
                                        <i>{<FaLinkedin/>}</i>
                                        <i>{<FaTwitter/>}</i>
                                        <i>{<FaInstagram/>}</i>
                                    </ul>
                                    <div className="flex">
                                        <button className="btn">Message</button>
                                        <button className="btn-a">{<FaPhone/>}</button>
                                    </div>
                                </div>
                            </Card>
                        })
                    }
                </div>
            </div>
        </section>
    )
}
export default Team
