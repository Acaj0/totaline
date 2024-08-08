"use client";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Sheet,
} from "./ui/sheet";
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

export default function NavBar() {
  return (
    <div className="">
      <div className="bg-white h-12 flex md:hidden justify-between items-center p-2">
        <a href="/">
          <div className="w-[40px]">
            <AspectRatio ratio={6 / 4}>
              <Image
                src={"/duzzi_climatiza.jpeg"}
                fill
                alt="logo do site"
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
        </a>
        <h1 className="italic text-xl text-black"></h1> <MobileNav />{" "}
      </div>

      <header className="hidden sticky top-0 z-50 mx-36 bg-white h-24 md:flex justify-between items-center gap-20 text-xl text-black">
        <div className="hidden bg-white h-24 w-full md:flex justify-between items-center ml-14 gap-20 text-xl text-black">
          <a href="/">
            <div className="w-[130px]">
              <AspectRatio ratio={6 / 4}>
                <Image
                  src={"/duzzi_climatiza.jpeg"}
                  fill
                  alt="logo da loja"
                  className="rounded-md object-cover"
                />
              </AspectRatio>
            </div>
          </a>
          <div className="flex items-center justify-center gap-10">
            <a
              className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100 text-2xl hover:text-blue-800"
              href="#2"
            >
              Nossa Historia
            </a>
            <a className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100 text-2xl hover:text-blue-800">
              <Drawer>
                <DrawerTrigger>Fornecedores</DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle className="items-center text-center">
                      Abaixo todos os nossos Fornecedores
                    </DrawerTitle>
                    <DrawerDescription>
                      <div className="flex justify-center gap-3 grid-cols-4 mt-10">
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
                      <div className="flex justify-center gap-3 mt-2 grid-cols-4">
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
                      </div>
                      <div className="flex justify-center gap-3 mt-2 grid-cols-4">
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
                              src={"/11.png"}
                              fill
                              alt="logo da loja"
                              className="rounded-md object-cover"
                            />
                          </AspectRatio>
                        </div>
                      </div>
                      <div className="flex justify-center gap-3 mt-2 grid-cols-4">
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
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" name="menu">
          <svg
            width="25"
            height="25"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="mt-10 flex flex-col gap-6 text-base font-semibold">
          <a href="#1">Inicio</a>
          <a className=" hover:text-blue-800" href="#2">
            Nossa Historia
          </a>
          <a className=" hover:text-blue-800">
            <Drawer>
              <DrawerTrigger>Fornecedores</DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle className="items-center text-center">
                    Abaixo todos os nossos Fornecedores
                  </DrawerTitle>
                  <DrawerDescription>
                    <div className="grid place-items-center  gap-1 grid-cols-2 grid-rows-2 mt-10">
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
                    <div className="grid place-items-center  gap-3 mt-2 grid-cols-2 grid-rows-2 ">
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
                    </div>
                    <div className="grid place-items-center gap-3 mt-2 grid-cols-2 grid-rows-2 ">
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
                            src={"/11.png"}
                            fill
                            alt="logo da loja"
                            className="rounded-md object-cover"
                          />
                        </AspectRatio>
                      </div>
                    </div>
                    <div className="grid place-items-center gap-3 mt-2 grid-cols-2 grid-rows-2 ">
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
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
};
