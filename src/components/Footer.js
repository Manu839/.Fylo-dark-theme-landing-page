import logo from "../images/logo.svg";
import phone from "../images/icon-phone.svg";
import email from "../images/icon-email.svg";
import location from "../images/icon-location.svg";
import twitter from "../images/svgviewer-png-output.png";
import facebook from "../images/svgviewer-png-output (1).png";
import instagram from "../images/svgviewer-png-output (2).png";

const Footer = () => {
  return (
    <footer className="bg-dark-blue-footer px-6 xl:px-20 pt-32 pb-12 xl:py-28 flex justify-center items-center ">
      <div className="grid align-middle md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 pt-20">
        <div>
          <img src={logo} />
          <div className="flex mt-10 md:mt-6 gap-6">
            <img className="xl:w-1/12 w-[5%] h-9 pt-2 " src={location} />
            <p className="w-2/3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
              ut sequi labore laudantium pariatur mollitia.
            </p>
          </div>
        </div>
        <div className="xl:pt-[70px] md:pt-16 mt-4 xl:ml-24">
          <div className="flex gap-6 mb-6">
            <img src={phone} />
            <p>+1-543-123-4567</p>
          </div>
          <div className="flex gap-6">
            <img className="w-[6%] xl:w-[12%]" src={email} />
            <p>example@fylo.com</p>
          </div>
        </div>
        <div className="pt-16 xl:ml-20">
          <ul>
            <li>About Us</li>
            <li className="py-4 xl:py-2">Jobs</li>
            <li>Press</li>
            <li className="pt-4 xl:pt-2">Blog</li>
          </ul>
        </div>
        <div className="pt-12 md:pt-16 xl:pt-16 ">
          <ul>
            <li>Contact Us</li>
            <li className="py-4">Terms</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className="flex justify-center md:ml-10 mx-auto md:mx-0  mt-24  2xl:mt-0 gap-4 w-[10%] ">
          <img className="h-10 w-auto" src={facebook} />
          <img className="h-10" src={twitter} />
          <img className="h-10" src={instagram} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;