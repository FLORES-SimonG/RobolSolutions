

import Image from "next/image";

export default function AboutUsSection() {
    return (
        <div className="mx-auto flex flex-col items-center px-5 pt-56 lg:flex-row">
        <div className="mb-16 flex flex-col text-left lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-start  lg:pr-6">
          <h2 className="mb-4 text-4xl font-bold leading-none sm:text-5xl">
            Ofrecemos calidad y eficiencia.
          </h2>
          <p className="font-3xl mb-8 font-semibold leading-relaxed">
          Nuestro equipo internacional está conformado por profesionales con experiencia en el desarrollo de software y aplicaciones web. Nos especializamos en la creación de soluciones digitales a medida para empresas y organizaciones de todo tipo.
          </p>
        </div>
        <div className="lg:w-full lg:max-w-2xl">
          <Image
            src="https://images.pexels.com/photos/5717716/pexels-photo-5717716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="img"
            width={650}
            height={400}
          />
        </div>
      </div>
    );
  }