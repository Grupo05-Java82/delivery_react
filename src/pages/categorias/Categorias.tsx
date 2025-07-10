
import { Link } from 'react-router-dom'
import ListarCategorias from '../../components/categorias/listarcategorias/ListarCategorias'
import { GrAdd } from "react-icons/gr";

function Categorias() {


	return (
		<div className='h-full bg-gradient-to-b w-full from-[#F4BF4F] from-2% to-[#F1EDD2] flex flex-col gap-15'>

			<div className='flex flex-col justify-center items-center  gap-5 pt-19'>

				<div className='flex justify-center items-center font-bold text-7xl'>
					<p className=''>Categorias</p>
				</div>

				<div className='flex justify-end pr-10 pt-10'>
					<Link
						to="/cadastrarcategoria"
						className="">
						<button
							className="w-[10rem]
						bg-[#262401]
						flex justify-center
						text-white
						py-4
						px-2
						items-center
						gap-2
						hover:scale-110
						hover:cursor-pointer
						transition
						duration-200">
							<p>Nova Categoria</p>
							<GrAdd />
						</button>
					</Link>
				</div>
			</div>

			<div className='pl-50'>
				<ListarCategorias />
			</div>

		</div>


	)
}

export default Categorias