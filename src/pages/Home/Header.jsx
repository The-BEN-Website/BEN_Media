import HeaderImage from "../../assets/HeaderImg.svg";
// import UpperImg from "../../assets/UpperImg.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";


const Header = () => {
  return (
    <section className="flex flex-col items-end">
      {/* <LazyLoadImage
        src={UpperImg}
        alt="Upper Image"
        className="hidden sm:block sm:w-1/3"
      /> */}

      <section className="w-full flex justify-center ">
        <section className="w-11/12 flex flex-col sm:flex-row items-center gap-10">
          <LazyLoadImage
            src={HeaderImage}
            alt="Header Image"
            className="w-1/2 md:w-1/3"
          />
          <h2 className="p-5 capitalize text-xl">At Believers Equipping Network, we are committed to empowering individuals on their spiritual journey, providing valuable resources to deepen their understanding of who they are in christ, and fostering a community that supports each other in the pursuit of a purposeful life in Christ</h2>
        </section>
      </section>
    </section>
  )
}

export default Header