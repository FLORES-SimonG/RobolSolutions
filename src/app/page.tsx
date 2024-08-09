import Image from "next/image";
import CompaniesSection from "@/components/CompaniesSection";
import OurServiceSection from "@/components/OurServiceSection";
import AboutUsSection from "@/components/AboutUsSection";

export default function Home() {
  return (
    <>
      <div className="grotesk max-w-8xl mx-auto">
        <section className="w-full text-black">
          <div className=" min-w-min min-h-lvh flex  items-center justify-center ">
            <div className="">
              <h2 className="max-w-xl lg:text-7xl text-3xl font-bold leading-none text-black inline-block">
                Diseñamos ideas brillantes.
              </h2>

              <p className=" max-w-2xl text-xl font-semibold text-gray-700">
                Y acompañamos <span className=" underline font-bold ">tu</span>{" "}
                proyecto a la transformación digital.
              </p>
            </div>
            {/* <div className="mb-20 mt-44 hidden w-full flex-col lg:mt-12 lg:inline-block lg:w-3/6 ">
              <Image
                src="https://images.pexels.com/photos/34580/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="image"
                height={750}
                width={1260}
                className="
                lg:w-5/7
               
                hidden
                
                rounded 
                object-cover
                object-center
                lg:inline-block 
              
              "
              />
            </div>
            <div className="my-20 inline-block w-full flex-col lg:mt-0 lg:hidden lg:w-2/5">
              <Image
                src="https://images.pexels.com/photos/34580/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="image"
                height={200}
                width={336}
              />
            </div> */}
          </div>
          
          <div className="mx-auto px-5 pt-32 pb-24 lg:px-24">
            <div className="my-3 flex w-full flex-col text-left lg:text-center">
              <h2 className="bold mb-8 text-4xl font-bold leading-tight text-black lg:text-6xl">
                Eleva tus ideas, <br className="hidden lg:inline-block" />
                conéctate con el mundo.
              </h2>
            </div>
            <div className="flex w-full flex-col text-left lg:text-center">
              <h3 className="text-2xl text-black">
                Te ayudaremos a desarrollar tu proyecto a lo más alto para que
                <br className="hidden lg:inline-block" />
                puedas obtener:
              </h3>
            </div>
            <div className="flex w-full flex-row justify-center pt-24 text-center">
              <span className="underline-blue px-8 text-xl font-semibold text-black">
                Más ventas
              </span>
              <span className="underline-blue px-8 text-xl font-semibold text-black">
                Nuevos clientes
              </span>
              <span className="underline-blue px-8 text-xl font-semibold text-black">
                1er lugar en Google
              </span>
              <span className="underline-gray px-6 text-xl font-semibold text-black">
                Más consultas
              </span>
              <span className="underline-gray px-6 text-xl font-semibold text-black">
                Mayores ganancias
              </span>
            </div>
          </div>
          <div className="invisible mx-auto flex max-w-6xl p-3 pb-32 lg:visible lg:px-2">
            <Image
              src="https://images.pexels.com/photos/8117534/pexels-photo-8117534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="img"
              width={800}
              height={800}
            />
          </div>
          <CompaniesSection />
          {/* <OurServiceSection/> */}
          <div className="bg-white text-black">
            <AboutUsSection />
            <div className="mt-32">
              <div className="mx-auto flex flex-col px-5 py-24 text-left lg:flex-row">
                <div className="hidden lg:inline-block lg:w-full lg:max-w-xl">
                  <Image
                   src="https://images.pexels.com/photos/5717716/pexels-photo-5717716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                   alt="img"
                    width={650}
                    height={400}
                  />
                </div>
                <div className="flex flex-col pt-0 text-left lg:w-1/2 lg:flex-grow lg:items-start lg:pl-24 lg:pt-24">
                  <h2 className="mb-4 text-4xl font-bold leading-none sm:text-5xl">
                    Eu diam in magna blandit sit magna dolor proin velit.
                  </h2>
                  <p className="mb-8 font-semibold leading-relaxed text-black">
                    Lorem ipsum ac neque, consectetur adipiscing elit. Nibh
                    neque, ut purus donec sed donec semper ac vestibulum. Mi
                    urna, facilisis arcu, auctor elit. Ut nunc non aenean netus
                    ut.
                  </p>
                </div>
                <div className="inline-block lg:hidden lg:w-full lg:max-w-xl">
                  <Image
                    src="/placeholder.png"
                    alt="img"
                    width={800}
                    height={800}
                  />
                </div>
              </div>
            </div>
            <div className="my-24 p-4 text-black">
              <div className="max-w-9xl mx-auto flex flex-col items-center bg-gradient-to-r from-blue-200 to-blue-100 px-5 py-24 lg:flex-row">
                <div className="flex flex-col items-center pb-16 pl-0 text-center lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-start lg:pl-12 lg:pr-24 lg:text-left">
                  <h2 className="pb-4 text-2xl font-bold leading-tight lg:text-4xl">
                    Lorem ipsum mi at amet, consecteturadipiscing elit. Mattis.
                  </h2>
                  <p className="text-md mb-8 lg:text-xl">
                    Lorem ipsum praesent amet, consectetur adipiscing elit.
                    Cursus ullamcorper id tristique tincidunt. Tincidunt feugiat
                    at mi feugiat hendrerit. Ac faucibus accumsan, quis lacus,
                    lectus eget bibendum. At praesent quisque sollicitudin
                    fusce.
                  </p>
                </div>
                <div className="w-4/7 pr-12 lg:w-2/5">
                  <Image
                    src="/placeholder.png"
                    className="hidden object-cover object-center lg:inline-block"
                    alt="image"
                    width={800}
                    height={800}
                  />
                  <Image
                    src="/placeholder.png"
                    className="inline-block object-cover object-center lg:hidden"
                    alt="image"
                    width={800}
                    height={800}
                  />
                </div>
              </div>
            </div>
            <div className="mx-auto">
              <div className="max-w-8xl mx-auto px-5 py-24 lg:px-24 flex flex-col justify-center items-center">
                <div className="my-6 flex w-full flex-col text-left lg:text-center">
                  <h3 className="mb-8 text-5xl font-bold text-black">
                    Dui tellus quis magna id ultricies eu sed.
                  </h3>
                  <h3 className="mb-12 px-0 text-lg font-semibold text-gray-900 lg:px-52">
                    Lorem ipsum accumsan arcu, consectetur adipiscing elit.
                    Aliquet vestibulum molestie amet, maecenas id amet. Ipsum
                    accumsan arcu, aenean viverra penatibus quis. Laoreet.
                  </h3>
                </div>
                <Image
                  src="/placeholder.png"
                  alt="img"
                  width={800}
                  height={800}
                />
              </div>
            </div>
            <div className="text-black">
              <div className="max-w-8xl mx-auto flex flex-col px-5 py-48 text-black lg:flex-row">
                <div className="lg:mb-0 lg:w-full lg:max-w-xl  flex items-center justify-center bg-red-500">
                  <Image
                    className="rounded object-cover object-center "
                    alt="image"
                    src="/logoMate.svg"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="items-left flex flex-col pt-16 text-left lg:w-1/2 lg:flex-grow lg:items-start  lg:pl-48 lg:text-left">
                  <h2 className="mb-2 text-lg leading-tight text-gray-700 sm:text-lg">
                    Viverra enim diam gravida risus nisl.
                  </h2>
                  <h2 className="mb-6 text-lg font-bold sm:text-lg">
                    Lectus eu.
                  </h2>
                  <h2 className="mb-4 text-3xl font-bold sm:text-3xl">
                    Lorem ipsum accumsan arcu, consectetur adipiscing elit. Sed
                    eget enim vel.
                  </h2>
                  <a
                    href="/"
                    className="underline-blue mt-12 text-lg font-bold leading-relaxed"
                  >
                    Ut convallis massa.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
