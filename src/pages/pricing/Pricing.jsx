import Back from "../../components/header/Back"
import Price from "../../components/Price"
import HeaderImage from "../../images/pricing.jpg"
import "./pricing.css"

const Pricing = () => {
  return (
    <>
      <section className="pricing">
        <Back name="30 days money bank guarantee" title="No Extra Fees. Friendly Support" cover={HeaderImage} />

        <div className="recent">
            <Price/>
        </div>
      </section>
    </>
  )
}

export default Pricing