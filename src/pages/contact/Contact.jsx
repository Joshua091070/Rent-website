import Back from "../../components/header/Back"
import HeaderImage from "../../images/pricing.jpg"
import "../contact/contact.css"

const Contact = () => {
  return (
    <>
      <section className="contact">
        <Back name="Contact Us" title="Get Helps & Friendly Support" cover={HeaderImage}/>

        <div className="container shadow">
          <form action="">
            <h4>Fillup the Form</h4>
            <div>
              <input type="text" placeholder="Name" name='' id='' />
              <input type="text" placeholder="Email" name='' id='' />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button className="btn">Submit Request</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact