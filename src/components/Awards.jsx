import { awards } from "../Data"
import Heading from "../UI/Heading"
import "../pages/home/home.css"
import "../pages/home/awards.css"

const Awards = () => {
  return (
    <section className="awards">
        <div className="container awards__container">
            <Heading title="Over 1,240,000+ Happy User Being With Us Still They Love Our Services" subtitle="Our Awards"/>

            <div className="content">
                {
                    awards.map((val, index) => {
                        return (
                            <div className="box" key={index}>
                                <div className="icon">
                                    <span>{val.icon}</span>
                                </div>
                                <div className="text">
                                    <h1>{val.num}</h1>
                                    <p>{val.name}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Awards