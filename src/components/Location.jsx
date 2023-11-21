import { location } from '../Data'
import Heading from '../UI/Heading'
import "../pages/home/location.css"

const Location = () => {
  return (
    <section className="location">
        <div className="container location__container">
            <Heading title="Explore By Location" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima culpa ea dolorum, praesentium sunt nemo?ipsum dolor sit amet consectetur adipisicin"/>


            <div className="content">
                {
                    location.map((items, index) => {
                        return (
                            <div className="box" key={index}>
                                <img src={items.cover} alt={items.name} />
                                <div className="overlay">
                                    <h5>{items.name}</h5>
                                    <p className='flex'>
                                        <label>{items.Villas}</label>
                                        <label>{items.Offices}</label>
                                        <label>{items.Apartments}</label>
                                    </p>
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

export default Location