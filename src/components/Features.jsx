import { featured } from "../Data"
import Heading from "../UI/Heading"
import Card from "../UI/Card"
import "../pages/home/home.css"

const Features = () => {
  return (
    <section className="featured">
        <div className="container featured__container">
            <Heading title="Featured Property Types" subtitle="Find All Types of Property."/>
        
            <div className="feature__boxes">
                {
                    featured.map(({cover, name, total}) => {
                        return <Card className="feature__box">
                                    <img src={cover} alt={name} />
                                    <h4>{name}</h4>
                                    <label>{total}</label>
                                </Card>
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Features