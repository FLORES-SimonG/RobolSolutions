

import Image from "next/image";

export default function OurServiceSection() {
    return(
        <div className=" bg-white ">
            <div className="text-black h-screen">
              <div
                className="
              max-w-9xl
              mx-auto
              flex
              flex-col
              items-center
              justify-center
              px-5
            "
              >
                <div className="mr-0 mb-6 w-full py-4 text-center lg:w-2/3">
                  <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
                    Ofrecemos calidad y eficiencia.
                  </h2>
                  <p className="mb-4 text-lg leading-relaxed">
                    Nuestro equipo internacional está conformado por
                    profesionales con experiencia en el desarrollo de software y
                    aplicaciones web. Nos especializamos en la creación de
                    soluciones digitales a medida para empresas y organizaciones
                    de todo tipo.
                  </p>
                  <a href="/" className="underline-blue font-semibold">
                    Más sobre nosotros
                  </a>
                </div>
                <Image
                  className="
              mb-24
              rounded
              object-cover object-center
              "
              src="https://images.pexels.com/photos/5717716/pexels-photo-5717716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="img"
                  width={630}
                  height={325}
                />

                <Image
                  className="
              mb-24
              inline-block
              w-5/6
              rounded
              object-cover object-center
              lg:hidden
              lg:w-4/6 
            "
            src="https://images.pexels.com/photos/5717716/pexels-photo-5717716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="img"
                  width={200}
                  height={200}
                />
              </div>
            </div>
            
          </div>
    )}