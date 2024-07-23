'use client'
import { Fale } from "@/components/Fale";
import NavBar from "@/components/NavBar";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <NavBar></NavBar>
      <div className="">
        <div className="flex lg:flex-row flex-col min-w-fill h-[600px] md:bg-[url(/duzzi.png)] border-4 aspect-[24/9] border-black bg-no-repeat bg-cover bg-center">
          <div className="flex flex-col items-end">
            <div className="flex text-center w-screen justify-center items-center"></div>
            <div className="bg-black mx-20 mt-[32px] w-[500px] h-[700px] text-black flex text-center pt-1 px-1">
              <div className="bg-white min-w-full h-[560px] p-5 flex flex-col items-center">
                <h2 className="text-xl font-sans text-justify mx-5 text-balance ">
                  Descubra nossa ampla variedade de ar condicionados de alta
                  eficiência energética e desempenho superior. Seja para
                  enfrentar os dias mais quentes ou garantir um clima agradável
                  o ano todo, temos a solução perfeita para você.
                </h2>
                <Fale></Fale>
                <div className="h-1 rounded-md w-[400px] border boder-black mt-8 bg-black/100 text-white">
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
        <div className="w-screen h-48 items-center flex flex-col justify-center bg-red-400"> <a>asdasd</a>

        </div>
        <div className="w-screen h-10 items-center flex flex-col justify-center bg-blue-400"> <a>asdasd</a>

        </div>
      </div>
    </main>
  );
}
