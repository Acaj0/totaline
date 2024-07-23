import NavBar from "@/components/NavBar";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <NavBar></NavBar>
      <div className="">
        <div className="flex lg:flex-row flex-col min-w-fill h-[700px] md:bg-[url(/loja.png)] bg-no-repeat bg-cover bg-top">
          <div className="flex flex-col ">
            <div className="flex text-center w-screen justify-center items-center">
              <h1 className="text-8xl font-sans text-white drop-shadow-2xl backdrop-blur-md rounded-md p-2">
                A maior do estado do Mato Grosso!
              </h1>
            </div>
            <div className="bg-black mx-36 mt-5 w-[600px] h-[700px] text-black justify-center text-center pt-1 px-1">
              <div className="bg-white min-w-full min-h-full p-5">
                <h2 className="text-2xl font-sans text-left mx-5 text-balance">
                  Descubra nossa ampla variedade de ar condicionados de alta
                  eficiência energética e desempenho superior. Seja para
                  enfrentar os dias mais quentes ou garantir um clima agradável
                  o ano todo, temos a solução perfeita para você. Com tecnologia
                  de ponta e marcas renomadas, oferecemos produtos que combinam
                  conforto, economia e sustentabilidade.
                </h2>
                <h1 className="mt-5">
                  __________________________________________________________
                </h1>
                <h2 className="text-2xl mt-5">
                  Revenda Oficial das maiores do mercado.
                </h2>
                <div className="flex justify-center gap-6 mt-5">
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
                    <AspectRatio ratio={10 / 4}>
                      <Image
                        src={"/gree.png"}
                        fill
                        alt="logo da loja"
                        className="rounded-md object-cover"
                      />
                    </AspectRatio>
                  </div>
                  <div className="w-[100px]">
                    <AspectRatio ratio={10 / 4}>
                      <Image
                        src={"/elgin.png"}
                        fill
                        alt="logo da loja"
                        className="rounded-md object-cover"
                      />
                    </AspectRatio>
                  </div>
                  <div className="w-[100px]">
                    <AspectRatio ratio={10 / 4}>
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
      </div>
    </main>
  );
}
