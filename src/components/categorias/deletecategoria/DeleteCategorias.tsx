/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

// import { RotatingLines } from 'react-loader-spinner'

import type Categoria from '../../../models/Categoria'
import { buscar, deletar } from '../../../services/Service'
import { AuthContext } from '../../../contexts/AuthContext'
import { ToastAlerta } from '../../../utils/ToastAlerta'

function DeletarCategoria() {
	const navigate = useNavigate()

	const [isLoading, setIsLoading] = useState<boolean>(false)

	const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

	const { usuario, handleLogout } = useContext(AuthContext)
	const token = usuario.token

	const { id } = useParams<{ id: string }>()

	async function buscarCategoriaPorId(id: string) {
		try {
			await buscar(`/categorias/${id}`, setCategoria, {
				headers: { Authorization: token },
			})
		} catch (error: any) {
			if (error.toString().includes('401')) {
				handleLogout()
			}
		}
	}

	useEffect(() => {
		if (token === '') {
			ToastAlerta('Você precisa estar logado!', 'info')
			navigate('/')
		}
	}, [token])

	useEffect(() => {
		if (id !== undefined) {
			buscarCategoriaPorId(id)
		}
	}, [id])

	async function deletarCategoria() {
		setIsLoading(true)

		try {
			await deletar(`/categorias/${id}`, {
				headers: { Authorization: token },
			})

			ToastAlerta('Categoria excluído com sucesso!', 'sucesso')
		} catch (error: any) {
			if (error.toString().includes('401')) {
				handleLogout()
			} else {
				ToastAlerta('Erro ao Excluir a categoria!', 'erro')
				console.error(error)
			}
		}

		setIsLoading(false)
		retornar()
	}

	function retornar() {
		navigate('/categorias')
	}

	return (
		<div className='min-h-screen w-full bg-gradient-to-b from-[#F4BF4F] from-2% to-[#F1EDD2]'>

			<div className="container w-1/3 mx-auto flex flex-col items-center justify-center pt-10 gap-5">
				<h1 className="text-5xl text-center font-bold my-4">Deletar Categoria</h1>
				<p className="text-center text-2xl font-semibold mb-4 pb-15">
					Você tem certeza de que deseja apagar a categoria a
					seguir?
				</p>
				<div className="w-65 h-auto shadow-2xl flex flex-col items-center rounded-2xl border-[#F4BF4F] border overflow-hidden hover:scale-125 transition duration-200 hover:shadow-amber-700">

					<header className="py-2 w-full flex items-center justify-center bg-[#F4BF4F] text-black font-bold text-2xl">
						{categoria.descricao}
					</header>

					<p className="p-8 text-3xl bg-[#FEF8EA] h-full border-b border-[#F4BF4F]">
						<img src={categoria.imagem} alt="foto da categoria" className='w-60 h-60 object-cover' />
					</p>

					<div className="flex py-2 gap-20 bg-[#F4BF4F] w-full justify-center">
						<button
							className="hover:scale-120 hover:cursor-pointer transition duration-150 hover:text-red-600"
							onClick={retornar}
						>
							Não
						</button>

						<button
							className="hover:scale-120 hover:cursor-pointer transition duration-150 hover:text-green-700"
							onClick={deletarCategoria}
						>
							<span>Sim</span>
						</button>
					</div>

				</div>
			</div>
		</div>

	)
}
export default DeletarCategoria