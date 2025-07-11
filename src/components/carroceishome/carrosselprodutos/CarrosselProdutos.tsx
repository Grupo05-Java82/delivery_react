/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import CardProdutoCarrossel from "../cardprodutocarrossel/CardProdutoCarrssel";
import { buscarTodosProdutos } from "../../../services/Service";
import type Produto from "../../../models/Produto";
import Loader from "../../ui/Loader";

export default function CarrosselProdutos() {
  const [produtos, setProdutos] = useState<{ imagem: string; titulo: string; preco: string }[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    async function carregarProdutos() {
      try {
        const resposta = await buscarTodosProdutos();
        const adaptados = resposta.map((produto: Produto) => ({
          imagem: produto.imagem || "https://placehold.co/231x193",
          titulo: produto.nome,
          preco: `R$ ${produto.preco.toFixed(2)}`,
        }));
        setProdutos(adaptados);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
        setProdutos([
          {
            imagem: "https://placehold.co/231x193?text=Pizza+Frango",
            titulo: "Pizza Frango com catupiry",
            preco: "R$ 45,00",
          },
          {
            imagem: "https://placehold.co/231x193?text=Calabresa",
            titulo: "Pizza Calabresa",
            preco: "R$ 40,00",
          },
          {
            imagem: "https://placehold.co/231x193?text=Marguerita",
            titulo: "Pizza Marguerita",
            preco: "R$ 42,00",
          },
          {
            imagem: "https://placehold.co/231x193?text=Portuguesa",
            titulo: "Pizza Portuguesa",
            preco: "R$ 47,00",
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    }

    carregarProdutos();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <motion.div
      className="w-full max-w-screen-xl relative mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Botões de navegação */}
      <div className="absolute -left-14 top-1/2 z-10 -translate-y-1/2">
        <button
          ref={prevRef}
          className="bg-gray-100 hover:bg-gray-300 rounded-full p-3 shadow-md"
        >
          <IoIosArrowBack />
        </button>
      </div>

      <div className="absolute -right-14 top-1/2 z-10 -translate-y-1/2">
        <button
          ref={nextRef}
          className="bg-gray-100 hover:bg-gray-300 rounded-full p-3 shadow-md"
        >
          <IoIosArrowForward />
        </button>
      </div>

      {/* Carrossel com espaçamento aumentado */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          (swiper.params.navigation as any).prevEl = prevRef.current;
          (swiper.params.navigation as any).nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        pagination={{ clickable: true }}
        spaceBetween={60} // Espaçamento padrão aumentado
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4},
          // 1536: { slidesPerView: 5, spaceBetween: 60 },
          // 1920: { slidesPerView: 6, spaceBetween: 60 },
          // 2560: { slidesPerView: 7, spaceBetween: 60 },
        }}
        className="py-10 px-4" // Adicionado padding horizontal
      >
        {produtos.map((produto, i) => (
          <SwiperSlide key={i} className="flex justify-center items-center p-5">
            <CardProdutoCarrossel {...produto} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}