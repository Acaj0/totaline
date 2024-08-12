import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function Parceiros() {
  return (
    <Drawer>
      <DrawerTrigger>Parceiros</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="items-center text-center">
            Abaixo todos os nossos Parceiros
          </DrawerTitle>
          <DrawerDescription>
            <div className="grid place-items-center gap-4 grid-flow-row md:grid-cols-8 grid-cols-2">
              <div className="w-[100px]">
                <AspectRatio ratio={9 / 4}>
                  <Image
                    src={"/total.jpg"}
                    fill
                    alt="logo da totaline"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
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
              <div className="w-[100px]">
                <AspectRatio ratio={10 / 4}>
                  <Image
                    src={"/1.png"}
                    fill
                    alt="logo da loja"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[100px]">
                <AspectRatio ratio={8 / 4}>
                  <Image
                    src={"/2.png"}
                    fill
                    alt="logo da loja"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[100px]">
                <AspectRatio ratio={6 / 4}>
                  <Image
                    src={"/5.png"}
                    fill
                    alt="logo da loja"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[100px]">
                <AspectRatio ratio={9 / 4}>
                  <Image
                    src={"/6.png"}
                    fill
                    alt="logo da loja"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>

              <div className="w-[100px]">
                <AspectRatio ratio={10 / 4}>
                  <Image
                    src={"/7.png"}
                    fill
                    alt="logo da loja"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[100px]">
                <AspectRatio ratio={8 / 4}>
                  <Image
                    src={"/8.png"}
                    fill
                    alt="logo da loja"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[100px]">
                <AspectRatio ratio={6 / 4}>
                  <Image
                    src={"/9.png"}
                    fill
                    alt="logo da loja"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[100px]">
                <AspectRatio ratio={9 / 4}>
                  <Image
                    src={"/copeland.png"}
                    fill
                    alt="logo da loja"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>

              <div className="w-[100px]">
                <AspectRatio ratio={10 / 4}>
                  <Image
                    src={"/12.png"}
                    fill
                    alt="logo da loja"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[100px]">
                <AspectRatio ratio={8 / 4}>
                  <Image
                    src={"/13.png"}
                    fill
                    alt="logo da loja"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[100px]">
                <AspectRatio ratio={8 / 4}>
                  <Image
                    src={"/agetherm.png"}
                    fill
                    alt="logo da agetherm"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[100px]">
                <AspectRatio ratio={8 / 4}>
                  <Image
                    src={"/alado.png"}
                    fill
                    alt="logo da alado"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[100px]">
                <AspectRatio ratio={8 / 4}>
                  <Image
                    src={"/amatools.png"}
                    fill
                    alt="logo da amatools"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[100px]">
                <AspectRatio ratio={8 / 4}>
                  <Image
                    src={"/aquabios.png"}
                    fill
                    alt="logo da aquabios"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[100px]">
                <AspectRatio ratio={8 / 4}>
                  <Image
                    src={"/black_decker.png"}
                    fill
                    alt="logo da black_decker"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[100px]">
                <AspectRatio ratio={8 / 4}>
                  <Image
                    src={"/bosch.png"}
                    fill
                    alt="logo da bosch"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[100px]">
                <AspectRatio ratio={8 / 4}>
                  <Image
                    src={"/brastemp.png"}
                    fill
                    alt="logo da brastemp"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[100px]">
                <AspectRatio ratio={8 / 4}>
                  <Image
                    src={"/consul.png"}
                    fill
                    alt="logo da consul"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[100px]">
                <AspectRatio ratio={8 / 4}>
                  <Image
                    src={"/controlbox.png"}
                    fill
                    alt="logo da controlbox"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[80px]">
                <AspectRatio ratio={4 / 4}>
                  <Image
                    src={"/cp.png"}
                    fill
                    alt="logo da cp"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[80px]">
                <AspectRatio ratio={5 / 4}>
                  <Image
                    src={"/day brasil.png"}
                    fill
                    alt="logo da day brasil"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[80px]">
                <AspectRatio ratio={4 / 4}>
                  <Image
                    src={"/elco.png"}
                    fill
                    alt="logo da elco"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[100px]">
                <AspectRatio ratio={8 / 4}>
                  <Image
                    src={"/emicol.png"}
                    fill
                    alt="logo da emicol"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[100px]">
                <AspectRatio ratio={8 / 4}>
                  <Image
                    src={"/eos.png"}
                    fill
                    alt="logo da eos"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[100px]">
                <AspectRatio ratio={8 / 4}>
                  <Image
                    src={"/extruflex.png"}
                    fill
                    alt="logo da extruflex"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[100px]">
                <AspectRatio ratio={8 / 4}>
                  <Image
                    src={"/famabras.png"}
                    fill
                    alt="logo da famabras"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[100px]">
                <AspectRatio ratio={8 / 4}>
                  <Image
                    src={"/foxlux.png"}
                    fill
                    alt="logo da foxlux"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[100px]">
                <AspectRatio ratio={8 / 4}>
                  <Image
                    src={"/hulter.png"}
                    fill
                    alt="logo da hulter"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[100px]">
                <AspectRatio ratio={8 / 4}>
                  <Image
                    src={"/indusat.png"}
                    fill
                    alt="logo da indusat"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[70px]">
                <AspectRatio ratio={4 / 4}>
                  <Image
                    src={"/jrc.png"}
                    fill
                    alt="logo da jrc"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[100px]">
                <AspectRatio ratio={8 / 4}>
                  <Image
                    src={"/k11.png"}
                    fill
                    alt="logo da k11"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[100px]">
                <AspectRatio ratio={8 / 4}>
                  <Image
                    src={"/mastercool.png"}
                    fill
                    alt="logo da mastercool"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[100px]">
                <AspectRatio ratio={7 / 4}>
                  <Image
                    src={"/migrare.png"}
                    fill
                    alt="logo da migrare"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[100px]">
                <AspectRatio ratio={8 / 4}>
                  <Image
                    src={"/minipa.png"}
                    fill
                    alt="logo da minipa"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[100px]">
                <AspectRatio ratio={8 / 4}>
                  <Image
                    src={"/mor.png"}
                    fill
                    alt="logo da mor"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[100px]">
                <AspectRatio ratio={8 / 4}>
                  <Image
                    src={"/quimital.png"}
                    fill
                    alt="logo da quimital"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[100px]">
                <AspectRatio ratio={8 / 4}>
                  <Image
                    src={"/tectape.png"}
                    fill
                    alt="logo da tectape"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[70px]">
                <AspectRatio ratio={4 / 4}>
                  <Image
                    src={"/tecumseh.png"}
                    fill
                    alt="logo da tecumseh"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[60px]">
                <AspectRatio ratio={4 / 4}>
                  <Image
                    src={"/testo.png"}
                    fill
                    alt="logo da testo"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[80px]">
                <AspectRatio ratio={6 / 4}>
                  <Image
                    src={"/trineva.png"}
                    fill
                    alt="logo da trineva"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[100px]">
                <AspectRatio ratio={8 / 4}>
                  <Image
                    src={"/uni.png"}
                    fill
                    alt="logo da uni"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="w-[100px]">
                <AspectRatio ratio={8 / 4}>
                  <Image
                    src={"/vathisa.png"}
                    fill
                    alt="logo da vathisa"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Fechar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
