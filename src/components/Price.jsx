import Heading from "../UI/Heading"
import { price } from "../Data"
import Card from "../UI/Card"
import "../pages/home/price.css"
import PriceCard from "../UI/PriceCard"


const Price = () => {
    return (
        <section className="price">
            <div className="container price__container">
                <Heading title="Select Your Package" subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis culpa eligendi corporis aliquam unde reiciendis iste veritatis illum nulla doloribus?"/>

                <PriceCard/>
            </div>
        </section>
    )
}

export default Price