import CarrosselMedio from '../../components/carroceishome/carrocelmedio/CarrocelMedio'
import CarrosselProdutos from '../../components/carroceishome/carrosselprodutos/CarrosselProdutos'


function Home() {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center gap-6 pb-20 bg-[#F1EDD2]">

        <article className="bg-gradient-to-b from-[#F4BF4F] from-50% to-[#F1EDD2] to-95% w-full px-4 ">
          <div className="flex justify-center gap-7">
            <section className="flex flex-col justify-center gap-4">
              <h1 className="text-6xl font-bold">Bem vindo ao Delivery</h1>
              <p className="text-6xl">voce pede,</p>
              <p className="text-6xl">nós entregamos!</p>

              <div className="pt flex justify-end items-center ">
                <p className="border border-[#FAEB20] shadow-xl py-2 px-8 rounded-md text-2xl bg-[#FAEB20]">Peça Aqui!</p>
              </div>
            </section>

            <section>
              <img className="w-[50vh] h-auto  animate-float-custom" src="https://ik.imagekit.io/gqta2uhtht/um-delicioso-hamburguer-no-estudio-removebg-preview%201%20(1).png?updatedAt=1752104960964" alt="amburg" />
            </section>
          </div>
        </article>

        <div className="w-full max-w-screen-xl px-4 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-poppins font-semibold text-lime-950 text-center py-4">Destaques das Pizzarias</h2>
          <CarrosselMedio />
        </div>

        <div className="w-full max-w-screen-xl px-4 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-poppins font-semibold text-center text-black/60 py-4">Conheça nossa linha de produtos</h2>
          <CarrosselProdutos />
        </div>

      </div>
    </>
  )
}

export default Home