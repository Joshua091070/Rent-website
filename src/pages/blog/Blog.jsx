
import Back from "../../components/header/Back"
import ResentCard from "../../UI/ResentCard"
import HeaderImage from "../../images/about.jpg"
import "./blog.css"

const Blog = () => {
  return (
    <>
      <section className="blog">
        <Back name="Blog" title="Blog Grid - Our Blogs" cover={HeaderImage} />

        <div className="recent container">
            <ResentCard/>
        </div>
      </section>
    </>
  )
}

export default Blog