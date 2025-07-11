import { Link } from 'react-router-dom';
import FiltroProduto from '../../components/filtros/FiltroProduto';
import ListarProdutos from '../../components/produto/listarprodutos/ListarProdutos';

function Produtos() {
  return (
    <div className="w-full bg-orange-100 min-h-screen flex flex-col gap-10">

      {/* 🟨 Banner */}
      <div className="w-full bg-gradient-to-b from-[#F4BF4F] from-30% to-[#F1EDD2] flex justify-between items-center px-10 py-12">
        <h1 className="text-stone-800 text-4xl md:text-5xl font-bold font-poppins">
          Venha matar a sua fome!
        </h1>
        <div className="flex flex-col items-end gap-4">
         

          {/* Botão Adicionar */}
          <Link to="/cadastrarproduto">
            <button className="bg-lime-950 rounded-lg text-white px-6 py-3 font-medium text-base flex items-center gap-2 hover:cursor-pointer hover:bg-white hover:text-lime-950 hover:scale-110 hover:border border-lime-950 hover:shadow-2xl transition duration-280">
              Adicionar Novo
              <span className=" h-5"></span>
            </button>
          </Link>          
        </div>
      </div>

      {/* 🟧 Conteúdo principal */}
      <div className="flex flex-col lg:flex-row justify-between gap-8 px-10">
        {/* 🔹 Filtros à esquerda */}
        <aside className="w-full lg:max-w-[540px]">
          <h2 className="text-neutral-800 text-5xl mb-6">Encontre mais rápido</h2>
          <FiltroProduto />
        </aside>

        {/* 🟠 Produtos à direita */}
        <section className="flex-1">
          <ListarProdutos />
        </section>
      </div>
    </div>
  );
}

export default Produtos;
