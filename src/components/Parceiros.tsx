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
            <div className="grid place-items-center gap-1 grid-flow-row md:grid-cols-8 grid-cols-2">
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
