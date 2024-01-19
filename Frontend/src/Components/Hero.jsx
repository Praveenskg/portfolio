import "animate.css/animate.min.css";
import HeroImg from "../assets/hero-img.png";
const Hero = () => {
  return (
    <>
      <section className="bg-primary px-5 text-white py-32">
        <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
          <div className="hero-info pb-5 md:pb-0 animate__animated animate__fadeInLeft">
            <h1 className="text-4xl lg:text-6xl ">
              Hi, <br />I am <span className="text-accent">P</span>raveen <br />
              Frontend Developer
            </h1>
            <p className="py-5 capitalize">
              I am proficient in JavaScript, React.js and Tailwind CSS
            </p>
            <a
              href="/#projects"
              className="btn bg-accent rounded-md border-2 border-indigo-600 text-white px-6 py-3 hover:bg-transparent"
            >
              See Projects
            </a>
          </div>
          <div className="hero-img animate__animated animate__fadeInRight">
            <img
              src={HeroImg}
              alt="coding illustration"
              className="lgw-[80%] ml-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
