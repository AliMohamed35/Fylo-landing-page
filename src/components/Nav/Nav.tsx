import Logo from "../../images/logo.svg";

function NavBar() {
  // create dynamic array to add links better than being hardcoded
  const links: string[] = ["Features", "Teams", "Sign in"];

  return (
    <>
      <header>
        <nav className="px-6 md:px-16 py-5 md:py-7 flex justify-between items-center">
          {/* LOGO */}
          <div>
            <img src={Logo} alt="Fylo logo" className="w-20 md:w-auto" />
          </div>

          <ul className="flex text-white list-none gap-4 md:gap-6">
            {links.map((link, index) => (
              <li className="cursor-pointer text-xs md:text-sm hover:underline transition-all" key={index}>{link}</li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
