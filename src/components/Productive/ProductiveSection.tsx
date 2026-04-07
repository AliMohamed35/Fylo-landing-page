import illustratorImage from "../../images/illustration-stay-productive.png";
import RightArrow from "../../images/icon-arrow.svg";

function ProdSection() {
  return (
    <>
      <section className="flex items-center justify-center gap-20 bg-[#181e2a] p-20  flex-col md:flex-row">
          {/* Left */}
        <div>
          <img src={illustratorImage} alt="Illustrator Image"/>
        </div>

          {/* Right */}
        <div className="text-white md:max-w-125  md:p-5">
          <h3 className="text-xl md:text-4xl font-bold">
            Stay productive, wherever your are.
          </h3>
          <p className="my-5">
            Never let location be an issue when accessing your files, Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="mb-5">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>

          <div className="flex gap-2 items-center">
            <a href="#" className="underline text-[#61e1d7]">
              See how Fylo works
            </a>

            <img src={RightArrow} alt="Arrow icon"/>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProdSection;
