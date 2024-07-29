import Image from "next/image";

export default function Header() {
  return (
    <div className="flex flex-row items-center justify-between px-4     ">
      <a href="/" className="text-3xl font-bold text-black align-middle">
        <Image src="/logo.svg" alt="Robol Solutions" width={200} height={200} />
      </a>
      <div className="hidden gap-12  align-middle  xl:flex">
        <a href="/" className=" text-xl text-black">
          Home
        </a>
        <a href="/" className=" text-xl text-black">
          Proyectos
        </a>
        <a href="/" className=" text-xl text-black">
          Sobre nosotros
        </a>
        <a href="/" className="text-xl text-black">
          Nuestros objetivos
        </a>
      </div>

      {/* <div className="flex items-center">
          <div className="hidden py-1 text-right xl:inline-block">
         
            <a
              className="inline-flex items-center px-8 py-3 mt-2 text-lg font-semibold tracking-tighter text-white bg-blue-800"
              href="/"
            >
              Log in
            </a>
          </div>
          <button className="pl-4 ">
            <svg
              className="inline-block mr-auto text-black xl:hidden"
              width="33"
              height="50"
              viewBox="0 0 23 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.892578 10.8691H22.1058"
                stroke="black"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M0.892578 18.8691H22.1058"
                stroke="black"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M22.1066 14.8688H0.893399"
                stroke="black"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div> */}
    </div>
  );
}
