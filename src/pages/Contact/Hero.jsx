// import BackgroundImage from '../../assets/Home_assets/hero_Img1.webp'
// import { LazyLoadImage } from "react-lazy-load-image-component";

const Header = () => {

    return (
        <div className='flex items-center justify-center relative h-fit lg:h-fit w-11/12 mx-auto font-my_font mt-14'>
            <section className='w-full h-fit flex flex-col lg:flex-row flex-col-reverse sm:flex-col'>
                {/* main header content */}
                <div className = 'w-full flex flex-col items-center justify-center gap-3' >
                    <h2 className='text-black text-4xl lg:text-5xl font-bold font-my_font text-center md:text-start tracking-wide'>Contact Us Directly</h2>
                    <p className='tracking-widest text-black text-sm font-my_font w-2/3 text-center md:text-start'>
                    Looking for more information? Submit your information and BEN representative will follow up with you as soon as possible.
                    </p>
                    
                </div>
                {/* image */}
                {/* <LazyLoadImage src={BackgroundImage} className="w-10/12 sm:w-2/3 md:w-3/5 lg:w-1/2 h-fit flex items-center mx-auto lg:my-9" alt="" /> */}
            </section>
            
        </div>
    )
}

export default Header