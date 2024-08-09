
import Image from "next/image";

export default function CompaniesSection() {
    return (
      
        <div className="max-w-9xl mx-auto flex flex-col items-center bg-gradient-to-r from-blue-200 to-blue-100 px-5 py-24 lg:flex-row">
                   <div className="mx-auto px-5 py-24 lg:px-24">
                <div className="my-10 flex w-full flex-col text-center">
                  <h2 className="mb-5 text-2xl font-bold text-black lg:text-3xl">
                    Companías y agrupaciones que confiaron en nosotros
                  </h2>
                </div>
                <div
                  className="
                grid grid-cols-2
                gap-16
                text-center
                lg:grid-cols-6"
                >
                  <div className="hidden items-center justify-center lg:inline-block">
                    <Image
                      src="/logoAlltagsAutoExclusive.svg"
                      alt="Segment"
                      className="block h-24 object-contain bg-white/45 p-2 rounded-md"
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="hidden items-center justify-center lg:inline-block">
                    <Image
                      src="/LogoONG.svg"
                      alt="Segment"
                      className="block h-24 object-contain bg-white/45 p-2 rounded-md"
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/logoAlltagsAuto.svg"
                      alt="Segment"
                      className="block h-24 object-contain bg-white/45 p-2 rounded-md"
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/segment.png"
                      alt="Segment"
                      className="block h-24 object-contain bg-white/45 p-2 rounded-md"
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="hidden items-center justify-center lg:inline-block">
                    <Image
                      src="/segment.png"
                      alt="Segment"
                      className="block h-24 object-contain bg-white/45 p-2 rounded-md"
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="hidden items-center justify-center lg:inline-block">
                    <Image
                      src="/segment.png"
                      alt="Segment"
                      className="block h-24 object-contain bg-white/45 p-2 rounded-md"
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
                <div className="  flex w-full justify-center  text-center">
                  <button
                    className="
                    bg-blue-800
                    hover:bg-blue-700
                    text-white
                    font-bold
                    rounded
                    transition
                    my-12
                    
                    px-8
                    py-3
                    text-lg
                    
                "
                  >
                    Ver más
                  </button>
                </div>
              </div>
            </div>
    )
}
