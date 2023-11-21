import Back from "../../components/header/Back"
import HeaderImage from "../../images/about.jpg"
import Heading from "../../UI/Heading"
import "./about.css"

const About = () => {
  return (
    <>
      <section className="about">
        <Back name="about Us" title="About Us - Who We Are?" cover={HeaderImage}/>

        <div className="container flex">
          <div className="left row">
            <Heading title="Our Agency Story" subtitle="Check out our company story and work process"/>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aspernatur veniam beatae accusamus cumque illum, maiores ea repellendus velit expedita repellat, numquam facilis officiis dignissimos totam? Laboriosam odit, dolorum quidem, assumenda ratione officiadam delectus est. Odio officia a deserunt tempora!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aspernatur veniam beatae accusamus cumque illum, maiores ea repellendus velit expedita repellat, numquam facilis officiis dignissimos totam? Laboriosam odit, dolorum quidem, assumenda ratione officia maiores tenetur atque beatae incidunt vero, expedita praesentium voluptatum quieserunt tempora!</p>
            <button className="btn2">More About Us</button>
          </div>
          <div className="right row">
            <img src="./images/immio.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default About