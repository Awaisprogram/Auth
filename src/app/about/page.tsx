import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import i1 from '../Image/isr-img.jpeg'
import i2 from '../Image/ssg-img.jpeg'
import i3 from '../Image/ssr-image.png'

function AboutSection() {
  return (
    <> 
    <Navbar/>
    <section className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-extrabold text-blue-900 mb-4">
            Understanding ISR, SSG, and SSR
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover the three pillars of modern web development. Learn how 
            Incremental Static Regeneration (ISR), Static Site Generation (SSG), 
            and Server-Side Rendering (SSR) optimize your sites performance 
            and scalability in unique ways.
          </p>
        </header>

        {/* ISR Section */}
        <div className="flex flex-col md:flex-row items-center mb-20">
          <div className="md:w-1/2">
            <Image
              src={i1}
              alt="Incremental Static Regeneration"
              className="rounded-xl shadow-xl w-full object-cover transition-transform duration-300 hover:scale-105"
              width={400}
              height={400}
            />
          </div>
          <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
            <h2 className="text-4xl font-semibold text-blue-800 mb-6">
              Incremental Static Regeneration
            </h2>
            <p className="text-gray-600 text-lg leading-loose">
              ISR allows static content updates after the build process. It blends 
              the speed of static sites with dynamic updates, making it ideal for 
              use cases like product catalogs and blogs.
            </p>
          </div>
        </div>

        {/* SSG Section */}
        <div className="flex flex-col md:flex-row items-center mb-20 md:flex-row-reverse">
          <div className="md:w-1/2">
            <Image
              src={i2}
              alt="Static Site Generation"
              className="rounded-xl shadow-xl w-full object-cover transition-transform duration-300 hover:scale-105"
              width={800}
              height={800}
            />
          </div>
          <div className="md:w-1/2 md:pr-12 mt-8 md:mt-0">
            <h2 className="text-4xl font-semibold text-blue-800 mb-6">
              Static Site Generation
            </h2>
            <p className="text-gray-600 text-lg leading-loose">
              SSG generates pages during the build process, ensuring fast 
              load times. This approach is perfect for static websites like portfolios, 
              documentation, and landing pages.
            </p>
          </div>
        </div>

        {/* SSR Section */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <Image
              src={i3}
              alt="Server-Side Rendering"
              className="rounded-xl shadow-xl w-full object-cover transition-transform duration-300 hover:scale-105"
              width={400}
              height={400}
            />
          </div>
          <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
            <h2 className="text-4xl font-semibold text-blue-800 mb-6">
              Server-Side Rendering
            </h2>
            <p className="text-gray-600 text-lg leading-loose">
              SSR renders pages dynamically for every request, ensuring real-time 
              data freshness. Its the best choice for applications like e-commerce 
              sites and dashboards that require dynamic, personalized data.
            </p>
          </div>
        </div>

        {/* Call-to-Action */}
        <footer className="mt-20 text-center">
          <button className="bg-gradient-to-r from-blue-800 to-blue-500 text-white px-10 py-4 rounded-full text-lg font-medium hover:from-blue-600 hover:to-blue-400 transition-transform duration-300 hover:scale-105 shadow-lg">
            Explore More
          </button>
        </footer>
      </div>
    </section>
    <Footer/>
    </>
  );
}

export default AboutSection;
