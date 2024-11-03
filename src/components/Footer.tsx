import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import React from "react";

export default function Footer() {
  const stores = [
    {
      name: "Matriz",
      address: "Av. Miguel Sutil, 2265 - Areão, Cuiabá - MT",
      phone: "(65) 3624-1990",
    },
    {
      name: "Porto",
      address: "Av. Mário Correa, 319, Porto - Cuiabá - MT",
      phone: "(65) 3623-3452",
    },
    {
      name: "CPA",
      address: "R. Cocã, 27, CPA 4, 1° Etapa - Cuiabá - MT",
      phone: "(65) 3646-4969",
    },
    {
      name: "Sinop",
      address: "R. das Orquídeas 1045, Res. Sul - Sinop - MT",
      phone: "(66) 3532-2220",
    },
    {
      name: "Rondonópolis",
      address: "R. Barão do Rio Branco, 1941, Rondonópolis - MT",
      phone: "(66) 3423-7550",
    },
    {
      name: "Várzea Grande",
      address: "Av. Gov. Júlio Campos, 3033, Jd Gloria I. Várzea Grande",
      phone: "(65) 3029-2329",
    },
    {
      name: "Primavera do Leste",
      address: "Rua Guanabara N. 520 Centro, Primavera do Leste - MT",
      phone: "(66) 3497-3540",
    },
    {
      name: "Campo Verde",
      address: "Av. Sen Antônio Fobtana S/N Jardim C. verde, Campo Verde - MT",
      phone: "(66) 99982-2726",
    },
  ];

  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Nossas Lojas</h3>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              {stores.map((store, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-medium">
                    Duzzi Refrigeração - {store.name}
                  </h4>
                  <p className="flex items-start text-sm">
                    <MapPin className="mr-2 h-5 w-5 flex-shrink-0" />
                    {store.address}
                  </p>
                  <p className="flex items-center text-sm">
                    <Phone className="mr-2 h-5 w-5" />
                    {store.phone}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contato</h3>
            <p className="flex items-center">
              <Mail className="mr-2 h-5 w-5" />
              duzziclimatizacao@gmail.com
            </p>
            <div>
              <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                  aria-label="WhatsApp"
                >
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                  aria-label="Google"
                >
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>
            &copy; {new Date().getFullYear()} Duzzi Climatização. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}
