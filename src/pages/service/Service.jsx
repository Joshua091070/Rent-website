import Features from '../../components/Features'
import Back from '../../components/header/Back'
import HeaderImage from "../../images/services.jpg"

const Service = () => {
  return (
    <>
      <section className="service">
          <Back name="Services" title="Services - All Services" cover={HeaderImage}/> 

          <div className="feature">
            <Features/>
          </div>
      </section>
    </>
  ) 
}

export default Service
