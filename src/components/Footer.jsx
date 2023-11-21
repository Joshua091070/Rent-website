import { footer } from "../Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className="footerContact">
          <div className="container">
              <div className="send flex">
                  <div className="text">
                      <h1>Do You Have Questions ?</h1>
                      <p>We'll help you to grow your career and growth</p>
                  </div>
                  <button className="btn5">COntact Us Today</button>
              </div>
          </div>
      </section>

      <footer>
                  <div className="container">
                      <div className="box">
                          <div className="logo">
                              <img src="../images/logo-light.png" alt="" />
                          </div>
                            <h2>Do You Need Help With Anything?</h2>
                            <p>Receive updates, hot deals, tutorials, discounts sent straight in your inbox every month</p>
                            
                            <div className="input flex">
                                <input type="text" placeholder="Email Address" name="" id="" />
                                <button className="btn">Subscribe</button>
                            </div>
                      </div>

                      {
                          footer.map((val) => (
                              <div>
                                  <h3>{val.title}</h3>
                                  <ul>
                                      {
                                          val.text.map((items) => (
                                            <li>{items.list}</li> 
                                          ))
                                      }
                                  </ul>
                              </div>
                          ))
                      }
                  </div>
                  <div className="legal">
                        <p>@2023 RentUP. Designed by Dev_Josh</p>
                  </div>
              </footer>
    </>
  )
}

export default Footer
