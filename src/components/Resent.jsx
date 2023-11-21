import Heading from "../UI/Heading"
import "../pages/home/home.css"
import "../pages/home/recent.css"

import ResentCard from "../UI/ResentCard"

const Property = () => {
  return (
    <section className="resent">
        <div className="container resent__container">
            <Heading title="Resent Property Listed" subtitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum libero ad, dicta animi blanditiis rem?"></Heading>
            <ResentCard/>
        </div>

        
    </section>
  )
}

export default Property