import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import a1 from "../assets/a1.webp";
import a2 from "../assets/a2.png";
const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#f8f5f2] min-h-screen">
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 rounded-3xl p-6 md:p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-xl">
            <div className="text-white max-w-xl">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Crafting Premium Digital
                <span className="text-yellow-400">
                  {" "}Experiences
                </span>
              </h1>

              <p className="text-base md:text-lg text-gray-100 mb-8">
                We create premium digital experiences that blend
                creativity, innovation, and elegance to deliver
                exceptional value to our customers.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
                  Explore Products
                </button>
                <button className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
                  Our Legacy
                </button>
              </div>
            </div>
            <div className="w-full lg:w-auto">
              <img src={a1} alt="About"
                className="w-full lg:w-[500px] h-[250px] md:h-[350px] object-cover rounded-2xl shadow-lg" />
            </div>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <img src={a2} alt="Our Story"
                className="w-full h-[300px] md:h-[500px] object-cover rounded-2xl shadow-lg" />
            </div>
            <div>
              <span className="text-purple-600 font-semibold uppercase tracking-wider">
                About Us </span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-4">
                The journey of a thousand miles began with a
                single stitch of perfection. We started with
                a vision to bring premium quality products and
                unforgettable experiences to our customers.
              </p>
              <p className="text-gray-600 text-base md:text-lg mb-8">
                Founded in the heart of innovation, our brand
                continues to evolve while staying true to our
                values of excellence, craftsmanship, and trust.
              </p>
              <div className="flex flex-wrap gap-8 md:gap-12">
                <div>
                  <h3 className="text-4xl font-bold text-purple-600">
                    28+
                  </h3>
                  <p className="text-gray-600">
                    Years Experience
                  </p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-purple-600">
                    50K+
                  </h3>
                  <p className="text-gray-600">
                    Happy Customers
                  </p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-purple-600">
                    Global
                  </h3>
                  <p className="text-gray-600">
                    Presence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;