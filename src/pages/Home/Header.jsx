import HeaderImage from "../../assets/HeaderImg.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";


const Header = () => {
  return (
    <section className="flex flex-col items-end bg-my-black text-white">
      <section className="w-full flex justify-center ">
        <section className="w-11/12 flex flex-col lg:flex-row items-center gap-5">
          <LazyLoadImage
            src={HeaderImage}
            alt="Header Image"
            className="w-3/5 lg:w-1/3"
          />
          <h2 className="p-5 text-lg text-center md:text-2xl font-my_font lg:text-justify mb-10">At Believers Equipping Network, we are committed to empowering individuals on their spiritual journey, providing valuable resources to deepen their understanding of who they are in christ, and fostering a community that supports each other in the pursuit of a purposeful life in Christ</h2>
        </section>
      </section>
    </section>
  )
}

export default Header