import iconAccess from "../../images/icon-access-anywhere.svg";
import iconSecurity from "../../images/icon-security.svg";
import iconCollaboration from "../../images/icon-collaboration.svg";
import iconAnyFile from "../../images/icon-any-file.svg";

interface Cards {
  title: string;
  para: string;
  icon: string;
}
function About() {
  const cards: Cards[] = [
    {
      title: "Access your files, anywhere",
      para: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
      icon: iconAccess,
    },
    {
      title: "Security you can trust",
      para: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
      icon: iconSecurity,
    },
    {
      title: "Real-time collaboration",
      para: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
      icon: iconCollaboration,
    },
    {
      title: "Store any type of file",
      para: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
      icon: iconAnyFile,
    },
  ];
  return (
    <section className="bg-[#181e2a] py-20 px-6">
      {/* CONTAINER - 2x2 Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
        {cards.map((card, index) => (
          <div key={index} className="flex items-center justify-center flex-col text-center">
            <img
              src={card.icon}
              alt={`${card.title} icon`}
              className="mb-6 h-20"
            />
            <h3 className="text-white text-xl font-bold mb-3">{card.title}</h3>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              {card.para}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
