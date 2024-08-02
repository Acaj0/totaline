"use client";
import { Fale } from "@/components/Fale";
import NavBar from "@/components/NavBar";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-clip h-screen w-screen snap-mandatory snap-y overflow-x-clip overflow-y-scroll over scroll-smooth duration-1000">
      {" "}
      <section id="1" className="md:snap-end overflow-clip">
        <NavBar />
        <div className="">
          <div className="flex lg:flex-row md:justify-end flex-col md:h-[600px] md:mx-1 lg:bg-[url(/hor.gif)] bg-[url(/0731.gif)] border-4 border-black bg-no-repeat bg-cover bg-center">
            <div className="flex flex-col">
              <div className="invisible lg:visible bg-black md:mx-20  mt-[32px] md:w-[500px] md:h-[560px] text-black flex text-center pt-1 px-1">
                <div className="bg-white min-w-full h-[600px] p-5 flex flex-col items-center">
                  <h2 className="text-xl font-sans text-left mx-5 ">
                    Bem-vindo à Duzzi Climatização, líder em climatização e
                    refrigeração no estado de Mato Grosso, com 10 lojas
                    estrategicamente localizadas para melhor atendê-lo.
                    Garantimos um atendimento excepcional e soluções precisas
                    para todas as suas necessidades.
                  </h2>
                  <Fale></Fale>
                  <div className="h-1 rounded-md w-[250px] md:w-[400px] border boder-black mt-8 bg-black/100 text-white">
                    1
                  </div>
                  <h2 className="text-2xl mt-5">
                    Revenda Oficial das maiores do mercado.
                  </h2>
                  <div className="flex justify-center gap-6 mt-8">
                    <div className="w-[100px]">
                      <AspectRatio ratio={10 / 4}>
                        <Image
                          src={"/midea-logo.png"}
                          fill
                          alt="logo da loja"
                          className="rounded-md object-cover"
                        />
                      </AspectRatio>
                    </div>
                    <div className="w-[100px]">
                      <AspectRatio ratio={8 / 4}>
                        <Image
                          src={"/gree.png"}
                          fill
                          alt="logo da loja"
                          className="rounded-md object-cover"
                        />
                      </AspectRatio>
                    </div>
                    <div className="w-[100px]">
                      <AspectRatio ratio={7 / 4}>
                        <Image
                          src={"/elgin.png"}
                          fill
                          alt="logo da loja"
                          className="rounded-md object-cover"
                        />
                      </AspectRatio>
                    </div>
                    <div className="w-[100px]">
                      <AspectRatio ratio={9 / 4}>
                        <Image
                          src={"/fuji.png"}
                          fill
                          alt="logo da loja"
                          className="rounded-md object-cover"
                        />
                      </AspectRatio>
                    </div>
                  </div>
                  <div className="w-[200px] mt-3">
                    <AspectRatio ratio={10 / 4}>
                      <Image
                        src={"/total.jpg"}
                        fill
                        alt="logo da loja"
                        className="rounded-md object-cover"
                      />
                    </AspectRatio>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:hidden bg-white items-centermin-w-full h-[560px] p-5 flex flex-col items-center">
            <h2 className="text-xl font-sans mx-5 text-left text-balance">
              Bem-vindo à Duzzi Climatização, líder em climatização e
              refrigeração no estado de Mato Grosso, com 10 lojas
              estrategicamente localizadas para melhor atendê-lo. Garantimos um
              atendimento excepcional e soluções precisas para todas as suas
              necessidades.
            </h2>
            <Fale></Fale>
            <div className="h-1 rounded-md w-[250px] md:w-[400px] border boder-black mt-8 bg-black/100 text-white">
              1
            </div>
            <h2 className="text-2xl mt-5 text-center">
              Revenda Oficial das maiores do mercado.
            </h2>
            <div className="flex justify-center gap-6 mt-8">
              <div className="w-[60px]">
                <AspectRatio ratio={10 / 4}>
                  <Image
                    src={"/midea-logo.png"}
                    fill
                    alt="logo da midea"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[60px]">
                <AspectRatio ratio={8 / 4}>
                  <Image
                    src={"/gree.png"}
                    fill
                    alt="logo da gree"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[60px]">
                <AspectRatio ratio={7 / 4}>
                  <Image
                    src={"/elgin.png"}
                    fill
                    alt="logo da elgin"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[60px]">
                <AspectRatio ratio={9 / 4}>
                  <Image
                    src={"/fuji.png"}
                    fill
                    alt="logo da fujitsu"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
            <div className="w-[150px] mt-5">
              <AspectRatio ratio={10 / 4}>
                <Image
                  src={"/total.jpg"}
                  fill
                  alt="logo da totaline"
                  className="rounded-md object-cover"
                />
              </AspectRatio>
            </div>
          </div>
          <div className="flex flex-col w-full items-center mt-20 md:mt-0">
            <div className="h-1 md:hidden rounded-md w-[250px] md:w-[400px] border boder-black bg-black/100 text-white">
              1
            </div>
            <div className=" md:h-48 w-full items-center flex flex-col lg:flex-row justify-center md:mt-10 p-2 gap-20 lg:gap-5">
              {" "}
              <a></a>
              <div className="md:h-36 md:w-96 items-center justify-center flex">
                {" "}
                <div className="flex flex-col items-center">
                  Ar condicionado
                  <div className="group relative w-[150px] mt-3 flex transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                    <AspectRatio ratio={4 / 4}>
                      <Image
                        src={"/ar2.webp"}
                        fill
                        alt="foto do ar"
                        className="rounded-md object-cover"
                      />
                    </AspectRatio>
                    <div className="absolute bottom-1 fill-white hidden group-hover:flex flex-row gap-2 justify-center w-full h-8 p-2 bg-black ease-in-out group-hover:-translate-y-0 transition duration-700">
                      <a className="text-white md:text-xs text-xs">
                        Fale Conosco
                      </a>
                      <svg
                        className="w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                      </svg>
                    </div>
                  </div>{" "}
                </div>
              </div>
              <div className="h-36 w-96 items-center justify-center flex">
                {" "}
                <div className="flex flex-col items-center w-[200px] text-center">
                  Peças para Refrigeração e Linha Branca
                  <div className="group relative w-[150px] flex transition ease-in-out delay-50 hover:-translate-y-0 hover:scale-110 duration-300 cursor-pointer">
                    <AspectRatio ratio={4 / 4}>
                      <Image
                        src={"/peca3.jpg"}
                        fill
                        alt="pecas"
                        className="rounded-md object-cover"
                      />
                    </AspectRatio>
                    <div className="absolute bottom-1 fill-white hidden group-hover:flex flex-row gap-2 justify-center w-full h-8 p-2 bg-black ease-in-out group-hover:-translate-y-2 transition duration-700">
                      <a className="text-white md:text-xs text-xs">
                        Fale Conosco
                      </a>
                      <svg
                        className="w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                      </svg>
                    </div>
                  </div>{" "}
                </div>
              </div>
              <div className="h-36 w-96 items-center justify-center flex">
                {" "}
                <div className="flex flex-col items-center md:mt-0 mt-10">
                  Climatizadores de Ar
                  <div className="group relative w-[150px] mt-3 flex transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                    <AspectRatio ratio={4 / 4}>
                      <Image
                        src={"/clima.jpg"}
                        fill
                        alt="climatizador"
                        className="rounded-md object-cover"
                      />
                    </AspectRatio>
                    <div className="absolute bottom-1 fill-white hidden group-hover:flex flex-row gap-2 justify-center w-full h-8 p-2 bg-black ease-in-out group-hover:-translate-y-0 transition duration-700">
                      <a className="text-white md:text-xs text-xs">
                        Fale Conosco
                      </a>
                      <svg
                        className="w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                      </svg>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="h-10 hidden items-end mx-10 lg:flex flex-col justify-center bg-white">
            {" "}
            <svg
              className="animate-bounce"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M256 464a208 208 0 1 1 0-416 208 208 0 1 1 0 416zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM128 256l0 32L256 416 384 288l0-32-80 0 0-128-96 0 0 128-80 0z" />
            </svg>
          </div>
        </div>
      </section>
      <section
        id="2"
        className="overflow-clip bg-white h-screen flex p-1 m-1 mt-20 md:mt-5 md:snap-end"
      >
        <div className="bg-white items-center h-full flex flex-col justify-top w-full overflow-clip">
          <h1 className="text-4xl  mt-20 italic">Nossa Historia</h1>
          <div className="items-center flex justify-center h-72 md:w-[800px]  mt-10">
            <div className="flex justify-center items-center relative gap-6 md:w-[520px] h-44">
              <div className="w-[200px] absolute md:inset-x-0 md:-rotate-12 md:inset-y-0 inset-y-00 transform transition ease-in-out duration-700 hover:scale-125 hover:z-50 z-3 ">
                <AspectRatio ratio={4 / 5}>
                  <Image
                    src={"/a.jpg"}
                    fill
                    alt="Foto"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[200px] absolute md:inset-x-40 md:-inset-y-10 inset-y-32 z-1 transform transition  ease-in-out duration-700 hover:scale-125 hover:z-10">
                <AspectRatio ratio={4 / 5}>
                  <Image
                    src={"/b.jpg"}
                    fill
                    alt="Foto"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[200px] y absolute md:inset-x-80 md:rotate-12 md:inset-y-0 inset-y-64 z-2 transform ease-in-out transition duration-700 hover:scale-125 hover:z-3">
                <AspectRatio ratio={4 / 5}>
                  <Image
                    src={"/c.jpg"}
                    fill
                    alt="Foto "
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
