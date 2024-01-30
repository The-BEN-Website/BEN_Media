import Img from "../../assets/photo.jpg"
const Banner = () => {
  // key = 36c51d08021748ddaa2f57785caedb1e
  return (
    <section className="w-10/12 mx-auto">
      <section className=" w-full h-fit flex flex-col md:flex-row items-center gap-10">
        <img src={Img} className="w-full md:w-1/2 rounded-md"/>

        <section className="flex flex-col gap-5 md:w-1/2">
          <section className='flex items-center gap-3'>
              <img src={Img} className='w-7 h-7 rounded-full' />
              <span className='flex gap-4 items-center'>
                <p className='text-xs font-semibold text-my-black' >Pastor Esosa </p>
                <p>|</p>
                <p className='text-xs text-gray-500'>Dec 24th, 2023</p>
              </span>
          </section>

          <h1 className="text-4xl">Tongues and Interpretation</h1>

          <p className="text-lg text-wrap text-justify" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consequuntur eveniet repudiandae adipisci veniam reiciendis ullam soluta, debitis, culpa, magnam assumenda nostrum voluptatem voluptates dolorum alias natus odio! Cum, culpa!
          </p>

          <span className="flex justify-between">
            <p className="bg-red-500 text-white w-fit p-2 text-xs rounded-md">Study</p>
            <p  className="underline cursor-pointer">Read more</p>
          </span>

        </section>
      </section>
    </section>
  )
}

export default Banner