import { Link } from 'react-router-dom'
import type Categoria from '../../../models/Categoria'
import { MdDelete } from "react-icons/md"
import { FaPencilAlt } from "react-icons/fa"

interface CardCategoriaProps {
    categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriaProps) {
    return (
        <div className='w-65 flex flex-col rounded-2xl overflow-hidden bg-[#FEF8EA] hover:scale-115 hover:shadow-2xl hover:cursor-pointer transition duration-200 '>

            <div className="flex justify-between  px-14 py-3">
                <Link to={`/editarcategoria/${categoria.id}`}
                    className=' hover:scale-125 transition duration-200
                        flex items-center'>
                    <FaPencilAlt />
                </Link>

                <Link to={`/deletarcategoria/${categoria.id}`} className='hover:scale-125 transition duration-200
                    flex items-center'>
                    <MdDelete />
                </Link>

            </div>

            <img
                src={categoria.imagem}
                alt={`Foto de ${categoria}`}
                className="w-60 h-60  mx-auto mb-4 object-cover"
            />

            <div className='font-bold text-xl flex items-center justify-center'>
                {categoria.descricao}
            </div>

        </div>
    )
}

export default CardCategorias