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
          <div className="flex lg:flex-row md:justify-end flex-col md:h-[600px] lg:bg-[url(/hor.gif)] bg-[url(/0731.gif)] border-4 border-black bg-no-repeat bg-cover bg-center">
            <div className="flex flex-col">
              <div className="invisible lg:visible bg-black md:mx-20  mt-[100px] md:w-[400px] md:h-[496px] text-black flex text-center pt-1 px-1">
                <div className="bg-white min-w-full h-[600px] p-5 flex flex-col items-center">
                  <div className="w-72">
                    <AspectRatio ratio={5 / 4}>
                      <Image
                        src={"/3.jpeg"}
                        fill
                        alt="duzzi a maior do estado"
                        className="rounded-md object-cover"
                      />
                    </AspectRatio>
                  </div>
                  <Fale></Fale>
                  <div className="h-1 rounded-md w-[250px] md:w-[300px] border boder-black mt-8 bg-black/100 text-white">
                    1
                  </div>
                  <h2 className="text-xl mt-5">
                    Revenda Oficial das maiores do mercado.
                  </h2>
                  <div className="flex justify-center gap-3 mt-2">
                    <div className="w-[80px]">
                      <AspectRatio ratio={10 / 4}>
                        <Image
                          src={"/midea-logo.png"}
                          fill
                          alt="logo da loja"
                          className="rounded-md object-cover"
                        />
                      </AspectRatio>
                    </div>
                    <div className="w-[80px]">
                      <AspectRatio ratio={8 / 4}>
                        <Image
                          src={"/gree.png"}
                          fill
                          alt="logo da loja"
                          className="rounded-md object-cover"
                        />
                      </AspectRatio>
                    </div>
                    <div className="w-[80px]">
                      <AspectRatio ratio={7 / 4}>
                        <Image
                          src={"/elgin.png"}
                          fill
                          alt="logo da loja"
                          className="rounded-md object-cover"
                        />
                      </AspectRatio>
                    </div>
                    <div className="w-[80px]">
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
                </div>
              </div>
            </div>
          </div>
          <div className="lg:hidden bg-white items-centermin-w-full h-[560px] p-5 flex flex-col items-center">
            <AspectRatio ratio={5 / 4}>
              <Image
                src={"/3.jpeg"}
                fill
                alt="duzzi a maior do estado"
                className="rounded-md object-cover"
              />
            </AspectRatio>
            <Fale></Fale>

            <h2 className="text-2xl mt-20 text-center">
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
                      <a
                        className="text-white md:text-xs text-xs"
                        href="https://api.whatsapp.com/send?phone=556593333739"
                      >
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
                      <a
                        className="text-white md:text-xs text-xs "
                        href="https://api.whatsapp.com/send?phone=556593333739"
                      >
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
                      <a
                        className="text-white md:text-xs text-xs"
                        href="https://api.whatsapp.com/send?phone=556593333739"
                      >
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
        <div className="h-1 mx-20 rounded-md w-[250px] md:w-[400px] border boder-black mt-20 bg-black/100 text-white">
          1
        </div>
      </section>
      <section
        id="2"
        className="overflow-clip bg-white md:h-screen flex p-1 m-1 mt-10 md:mt-5 md:snap-end flex-col"
      >
        <div className="bg-white items-center p-1 flex flex-col justify-top w-full overflow- ">
          <h1 className="text-4xl  mt-10 italic text-center overflow-clip">
            Sobre a Duzzi Climatização
          </h1>
          <span className="md:mx-36 mt-5">
            Fundada em 14 de outubro de 2003 por Claudio Zafalon e seu filho
            Claudio Zafalon Filho, a Duzzi Climatização nasceu para atender uma
            necessidade crescente de soluções térmicas e de climatização no
            mercado. Com o passar dos anos, a empresa se consolidou como uma
            referência no setor, oferecendo uma ampla gama de produtos e
            serviços.
          </span>
          <span className="md:mx-36 mt-5">
            Especializamos-nos na venda de ar condicionado e materiais para sua
            instalação, além de peças para máquinas de lavar, climatizadores a
            base d’água, câmaras frias, peças e materiais para manutenção de
            geladeiras e freezers, e diversas ferramentas. Trabalhamos com
            marcas renomadas como Age Therm, Alado, Amatools, Aquabios, Black &
            Decker, Bosch, Braskoki, Brastemp, Consul, Controlbox, Copeland, CP
            Placas, Danfoss, Day Brasil, Electrolux, Elgin, Elitech, Embraco,
            Emicol, EOS, Extruflex, Famabras, Foxlux, Fujitsu, Full Gauge, Gree,
            Hulter, Indusat, JRC Diamantados, K11, Leco do Brasil, Mastercool,
            Midea, Migrare, Minipa, MOR, Performance Ind., Quimital, Springer
            Carrier, Suryha, Tecumseh, Tectape, Testo do Brasil, Trineva, Uni
            Refrigeração, Vathisa e Vulkan.
          </span>
          <span className="md:mx-36 mt-5">
            Contamos com mais de 80 funcionários dedicados, e somos uma empresa
            familiar que valoriza profundamente o atendimento ao cliente. Nossos
            vendedores possuem amplo conhecimento técnico, garantindo um
            atendimento ágil e sem complicações. Nos orgulhamos de oferecer
            preços competitivos e um serviço especializado e humanizado.
          </span>
          <span className="md:mx-36 mt-5">
            A Duzzi Climatização já foi reconhecida pela Midea Carrier como
            exemplo de parceiro da marca, evidenciando nosso compromisso com a
            qualidade e a excelência. Atendemos principalmente técnicos de
            refrigeração, mas também oferecemos nossas soluções para a população
            em geral. Começamos com uma pequena loja e hoje temos 10 pontos de
            venda espalhados pelo Mato Grosso, com a tendência de crescer cada
            vez mais. Nosso objetivo é continuar expandindo, sempre buscando
            aprimorar nosso atendimento e oferecer as melhores soluções para
            nossos clientes.
          </span>
          <span className="md:mx-36 mt-10">
            Venha nos conhecer e descubra por que a Duzzi Climatização é a
            escolha certa para suas necessidades de climatização e refrigeração.
          </span>
          <div className="items-center flex justify-center h-72 md:w-[800px]  mt-10">
            \
            <div className="flex justify-center items-center relative gap-6 md:hidden md:w-[520px] h-44">
              <div className="w-[200px] absolute md:inset-x-0 md:-rotate-12 md:inset-y-0 inset-y-00 transform transition ease-in-out duration-700 hover:scale-125 hover:z-50 z-3 ">
                <AspectRatio ratio={4 / 5}>
                  <Image
                    src={"/foto.jpeg"}
                    fill
                    alt="Foto"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
            <div className="md:flex justify-center items-center relative gap-6 hidden md:w-[520px] h-44">
              <div className="w-[200px] absolute md:inset-x-0 md:-rotate-12 md:inset-y-0 inset-y-00 transform transition ease-in-out duration-700 hover:scale-125 hover:z-50 z-3 ">
                <AspectRatio ratio={4 / 5}>
                  <Image
                    src={"/foto.jpeg"}
                    fill
                    alt="Foto"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[200px]  absolute md:inset-x-40 md:-inset-y-10 inset-y-32 z-1 transform transition  ease-in-out duration-700 hover:scale-125 hover:z-10">
                <AspectRatio ratio={4 / 5}>
                  <Image
                    src={"/foto2.jpeg"}
                    fill
                    alt="Foto"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[200px] absolute md:inset-x-80 md:rotate-12 md:inset-y-0 inset-y-64 z-2 transform ease-in-out transition duration-700 hover:scale-125 hover:z-3">
                <AspectRatio ratio={4 / 5}>
                  <Image
                    src={"/foto3.jpeg"}
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
      <footer className="bg-black/95 md:h-96 w-full items-center justify-start overflow-clip flex mt-5 md:mt-5 md:snap-end flex-col">
        <div className="md:w-[1500px] md:h-36 items-center justify-center flex bg-white">
          <div className=" bg-black/95 text-white h-full w-full">
            <h1 className="text-2xl mt-5">Nossas Lojas</h1>
            <div className="grid p-1 grid-flow-row grid-cols-1 md:grid-rows-2 md:grid-cols-3">
              <div>
                <h2 className="mt-5">Duzzi Refrigeração - Matriz</h2>
                <h3>Av. Miguel Sutil, 2265 - Areão, Cuiabá - MT, 78010-500</h3>
                <h4>(65)3624-1990</h4>
              </div>
              <div>
                <h2 className="mt-5">Duzzi Refrigeração - Porto</h2>
                <h3>Av. Mário Correa, 319, Porto - Cuiabá - MT</h3>
                <h4>(65)3623-3452</h4>
              </div>
              <div>
                <h2 className="mt-5">Duzzi Refrigeração - CPA</h2>
                <h3>R. Cocã, 27, CPA 4, 1° Etapa - Cuiabá - MT.</h3>
                <h4>(65)3646-4969</h4>
              </div>
              <div>
                <h2 className="mt-5">Duzzi Refrigeração - Sinop</h2>
                <h3>R. das Orquídeas 1045, Res. Sul - Sinop - MT</h3>
                <h4>(66)3532-2220</h4>
              </div>
              <div>
                <h2 className="mt-5">Duzzi Refrigeração - Rondonópolis</h2>
                <h3>R. Barão do Rio Branco, 1941, Rondonópolis - MT</h3>
                <h4>(66)3423-7550</h4>
              </div>
              <div>
                <h2 className="mt-5">Duzzi Refrigeração - Várzea Grande</h2>
                <h3>Av. Gov. Júlio Campos, 3033, Jd Gloria I. Várzea Grande</h3>
                <h4>(65)3029-2329</h4>
              </div>
            </div>
            <div className="mt-10 mb-5 flex-row flex gap-5">
              <a href="https://www.instagram.com/duzziclimatizacao?igsh=MXVncHJrdXZ2MWJ3ag%3D%">
                <svg
                  className="w-10 transition ease-in-out delay-50 hover:-translate-y-0 hover:scale-110 duration-300 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#ffffff"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
              </a>
              <a href="https://api.whatsapp.com/send?phone=556593333739">
                <svg
                  className="w-10 transition ease-in-out delay-50 hover:-translate-y-0 hover:scale-110 duration-300 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#ffffff"
                    d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                  />
                </svg>
              </a>
              <a href="https://www.google.com/maps?q=Duzzi+Totaline+Refrigeração+-+Av.+Miguel+Sutil,+2265+-+Areão,+Cuiabá+-+MT,+78010-500&ftid=0x939db1ceb6aed063:0x25d136339e6d2d34&entry=gps&lucs=,94231208,94224825,94227247,94227248,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_ep=CAISDTYuMTI3LjIuNzgxOTAYACCs3wEqYyw5NDIzMTIwOCw5NDIyNDgyNSw5NDIyNzI0Nyw5NDIyNzI0OCw0NzA3MTcwNCw0NzA2OTUwOCw5NDIxODY0MSw5NDIwMzAxOSw0NzA4NDMwNCw5NDIwODQ1OCw5NDIwODQ0N0ICQlI%3D&g_st=iw">
                <svg
                  className="w-10 transition ease-in-out delay-50 hover:-translate-y-0 hover:scale-110 duration-300 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                >
                  <path
                    fill="#ffffff"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
