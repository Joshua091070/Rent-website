import { AiOutlineSearch } from "react-icons/ai"
import "../pages/home/home.css"

const MainHeader = () => {
  return (
    <header className="main__header">
        <div className="container main__header-container">
            <h1>Search Your Next Home</h1>
            <p>Find now & featured property located in your city</p>

            <div className="main__header-content">
                <div className="content">
                    <div className="content__text">
                        <span>City/Street</span>
                        <input type="text" placeholder="Location" />  
                    </div>
                    <div className="content__text">
                        <span>Property Type</span>
                        <input type="text" placeholder="Property Type" />
                    </div>
                    <div className="content__text">
                        <span>Price Range</span>
                        <input type="text" placeholder="Price Range" />
                    </div>
                    <div>
                        <h5>Advance Filter</h5>
                    </div>
                </div>
                <div className="search__area">
                    
                    <button className="main__header-btn btn"><AiOutlineSearch/></button>
                </div>
            </div>
        </div>
        
    </header>
  )
}

export default MainHeader