// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import YouTubeIcon from "@mui/icons-material/YouTube";
import Logo from '../assets/Logo1.webp'
const Footer = () => {
    return (
      <footer className="bg-my-black text-white border border-gray-300 border-l-0 border-r-0 border-b-0">
        <div className="mx-auto w-footer-width max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://www.believersequippingnetwork.org/" className="flex items-center">
                <img
                  src={Logo}
                  className="h-8 lg:h-16 mr-3 bg-white"
                  alt="BEN Logo"
                />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-bold text-my-red text-range-black uppercase  text-my-red ">
                  Get Involved
                </h2>
                <ul className="text-range-black text-sm font-light">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Newsletter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Enrolment
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-bold text-my-red text-range-black uppercase">
                  Contact
                </h2>
                <ul className="text-range-black text-sm font-light">
                  <li className="mb-4">
                    <a
                      href="https://www.figma.com/file/ecTaMNgRpMdIzgue9dPc9i/Main-file?type=design&node-id=701-5312&mode=design&t=iAfUC1kCxq0T3LmY-0"
                      className="hover:underline "
                    >
                      Figma
                    </a>
                  </li>
                  <li className='text-balance'>
                    <a
                      href="mailto:mediabelieversequippingnetwork@gmail.com"
                      className="hover:underline text-balance "
                    >
                      mediabelieversequipping<br/>network@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-bold text-my-red text-range-black uppercase">
                  Quick Links
                </h2>
                <ul className="text-range-black text-sm font-light">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-500 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-white sm:text-center lg:text-left flex flex-col gap-5 md:justify-between w-full">
              <a href="https://cobac-place.com/" className="hover:underline">
              © 2023{" "} by Believers Equipping Network:

                <i> Raising Godly Seeds❤️</i>
              </a>
              <p>
                Edo University Iyamho, Auchi, Edo State
              </p>
            </span>
          </div>
        </div>
      </footer>
    );
};

export default Footer;