import Satich from "../../images/profile-1.jpg";
import Bruce from "../../images/profile-2.jpg";
import Iva from "../../images/profile-3.jpg";

interface Cards {
  content: string;
  image: string;
  fullName: string;
  title: string;
}
function Testimonials() {
  const cards: Cards[] = [
    {
      content:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collabration machine.",
      image: Satich,
      fullName: "Satish Patel",
      title: "Founder & CEO, Huddle",
    },
    {
      content:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collabration machine.",
      image: Bruce,
      fullName: "Bruce McKenzie",
      title: "Founder & CEO, Huddle",
    },
    {
      content:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collabration machine.",
      image: Iva,
      fullName: "Iva Boyd",
      title: "Founder & CEO, Huddle",
    },
  ];

  return (
    <>
      <section className="bg-[#181e2a] text-white flex flex-col justify-center gap-5 md:gap-15 items-center shadow-2xl px-10 pt-20 md:px-20 md:pt-40 md:flex-row ">
        {cards.map((card, index) => (
          <div key={index} className="bg-[#21293c] md:p-12 mb-20 rounded p-10 ">
            <div className="mb-5">{card.content}</div>

            <div className="flex gap-3">
              <img
                src={card.image}
                alt="avatar"
                className="rounded-full w-12.5 md:w-12.5 "
              />
              {/* NAMES */}
              <div className="flex flex-col">
                <h3>{card.fullName}</h3>
                <p className="text-gray-400">{card.title}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Testimonials;
