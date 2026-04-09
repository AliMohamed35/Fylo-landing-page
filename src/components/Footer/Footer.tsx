import location from "../../images/icon-location.svg";
import email from "../../images/icon-email.svg";
import phone from "../../images/icon-phone.svg";
import logo from "../../images/logo.svg";

function Footer() {
  const firstCol = ["About Us", "Jobs", "Press", "Blog"];
  const secondCol = ["Contact Us", "Terms", "Privacy"];

  return (
    <footer className="bg-[#0b1524] pb-10 px-6 md:px-16 lg:px-20 pt-5">
      {/* Logo */}
      <div className="mb-8">
        <img src={logo} alt="Fylo" className="w-36" />
      </div>

      <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-6 text-white">
        {/* Location */}
        <div className="flex gap-4 md:max-w-sm">
          <img src={location} alt="" className="w-5 h-5 mt-1 shrink-0" />
          <p className="text-sm text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>

        {/* Phone & Email */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <img src={phone} alt="" className="w-5 h-5 shrink-0" />
            <p className="text-sm text-gray-300">+1-543-123-4567</p>
          </div>
          <div className="flex items-center gap-4">
            <img src={email} alt="" className="w-5 h-5 shrink-0" />
            <p className="text-sm text-gray-300">example@fylo.com</p>
          </div>
        </div>

        {/* First links column */}
        <ul className="flex flex-col gap-3">
          {firstCol.map((col, index) => (
            <li key={index}>
              <a
                href="#"
                className="text-sm text-gray-300 hover:text-white hover:font-bold transition-all"
              >
                {col}
              </a>
            </li>
          ))}
        </ul>

        {/* Second links column */}
        <ul className="flex flex-col gap-3">
          {secondCol.map((col, index) => (
            <li key={index}>
              <a
                href="#"
                className="text-sm text-gray-300 hover:text-white hover:font-bold transition-all"
              >
                {col}
              </a>
            </li>
          ))}
        </ul>

        {/* Social icons */}
        <div className="flex gap-3">
          {/* Facebook */}
          <a
            href="#"
            className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:border-white hover:text-white transition-all group"
          >
            <svg
              className="w-4 h-4 fill-gray-300 group-hover:fill-white transition-all"
              viewBox="0 0 320 512"
            >
              <path d="M80 299.3V512h116V299.3h86.5l18-97.8H196V142.5c0-27.2 7.5-45.8 46.6-45.8H384V8.4C377.1 7.3 348.5 0 313.5 0 207.9 0 135.7 66 135.7 187.2v114.3H80z" />
            </svg>
          </a>
          {/* Twitter */}
          <a
            href="#"
            className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:border-white hover:text-white transition-all group"
          >
            <svg
              className="w-4 h-4 fill-gray-300 group-hover:fill-white transition-all"
              viewBox="0 0 512 512"
            >
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.32-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
            </svg>
          </a>
          {/* Instagram */}
          <a
            href="#"
            className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:border-white hover:text-white transition-all group"
          >
            <svg
              className="w-4 h-4 fill-gray-300 group-hover:fill-white transition-all"
              viewBox="0 0 448 512"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
