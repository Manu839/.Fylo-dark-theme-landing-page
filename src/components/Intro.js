import intro from "../images/illustration-intro.png";

export const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="linear font-bold  px-16 py-3 rounded-full bg-blue mt-6 hover:opacity-50 transition-all duration-300"
    >
      {text}
    </button>
  );
};

const Intro = () => {
  return (
    <div className="bg-dark-blue-intro pt-8 md:pt-10 ">
      <div className="flex justify-center pb-8 items-center flex-col text-center">
        <img src={intro} className="w-9/12 md:w-1/2 lg:w-[35%] mb-6 " />
        <h2 className="text-2xl font-bold w-2/3 md:w-1/2 lg:w-[30%] font-raleway mb-4 md:mb-6">
          All your files in one secure location, accesible anywhere
        </h2>
        <p className="w-[60%] opacity-90 md:w-7/12 lg:w-1/4 ">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <Button text="Get started" />
      </div>
    </div>
  );
};

export default Intro;