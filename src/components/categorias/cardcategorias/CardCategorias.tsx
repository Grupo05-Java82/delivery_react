import { Link } from 'react-router-dom'
import type Categoria from '../../../models/Categoria'
import { MdDelete } from "react-icons/md"
import { FaPencilAlt } from "react-icons/fa"

interface CardCategoriaProps{
    categoria: Categoria, 
    imagem: string;
}

function CardCategorias({ categoria, imagem }: CardCategoriaProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>
               {categoria.descricao}
            </header>
             {imagem ? (
        <img
          src={categoria.imagem}
          alt={`Foto de ${categoria}`}
          className="w-24 h-24  mx-auto mb-4 object-cover border-2 border-green-800"
        />
      ) : (
        <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
        </div>
      )}
            
            <div className="flex">
                <Link to={`/editarcategoria/${categoria.id}`} 
                    className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 
                        flex items-center justify-center py-2'>
                    <FaPencilAlt />
                </Link>

                <Link to={`/deletarcategoria/${categoria.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full 
                    flex items-center justify-center'>
                    <MdDelete />
                </Link>
            </div>

        </div>
    )
}

export default CardCategorias