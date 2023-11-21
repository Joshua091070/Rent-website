import MainHeader from "../../components/MainHeader"
import Features from "../../components/Features"
import Property from "../../components/Resent"
import Awards from "../../components/Awards"
import Location from "../../components/Location"
import "./home.css"
import Team from "../../components/Team"
import Price from "../../components/Price"


const Home = () => {
  return (
    <>
        <MainHeader/>
        <Features/>
        <Property/>
        <Awards/>
        <Location/>
        <Team/>
        <Price/>
    </>
  )
}

export default Home