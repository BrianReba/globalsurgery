import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import primeraImagen from "../assets/img1.png";
import segundaImagen from "../assets/img2.png";
import terceraImagen from "../assets/img3.png";

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide relative inline-block text-center w-full">
          <img
            className="max-h-[350px] lg:max-h-[420px] w-full object-cover"
            src={primeraImagen}
            alt=""
          />
          <div className="absolute top-40 left-1">
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-200 font-poppins drop-shadow-2xl">
              Buscamos la <br></br>
              <div className="pl-16">
                <span className="font-playfair text-4xl sm:text-5xl text-gray-200 font-bold">
                  excelencia
                </span>
              </div>
            </h2>
          </div>
        </div>

        <div className="embla__slide embla__slide relative inline-block text-center w-full">
          <img
            className="max-h-[350px] lg:max-h-[420px] w-full object-cover"
            src={segundaImagen}
            alt=""
          />
          <div className="absolute top-28 left-2">
            <h2 className="text-2xl font-medium text-gray-200 font-poppins drop-shadow-2xl">
              Soluciones{" "}
              <div className="pl-20">
                <span className="font-playfair text-4xl text-gray-900 font-bold">
                  personalizadas
                </span>{" "}
              </div>
              <span className="font-playfair text-2xl text-gray-200 font-bold pl-28">
                y <span className="text-4xl">adaptables</span>
              </span>
            </h2>
          </div>
        </div>

        <div className="embla__slide embla__slide relative inline-block text-center w-full">
          <img
            className="max-h-[350px] lg:max-h-[420px] w-full object-cover"
            src={terceraImagen}
            alt=""
          />
          <div className="absolute top-10 left-16 ">
            <h2 className="text-3xl sm:text-4xl font-medium text-gray-200 font-poppins drop-shadow-2xl">
              Calidad{" "}
              <div className="pr-16">
                <span className="text-2xl sm:text-3xl ">Innovación</span>
              </div>
              <span className="font-playfair text-4xl sm:text-5xl text-yellow-500 font-bold">
                bienestar
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
