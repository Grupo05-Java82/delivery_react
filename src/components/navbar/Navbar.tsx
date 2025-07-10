import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { ToastAlerta } from "../../utils/ToastAlerta"
import { ShoppingCartIcon, UserIcon } from "@phosphor-icons/react"
import { useContext } from "react"


function Navbar() {

    const navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function logout(){
        handleLogout()
        ToastAlerta("O usuário foi desconectado com sucesso!", 'info')
        navigate("/")
    }
  return (
    <div>
         <div className='flex px-15 py-6 justify-between bg-gray-50'>
          <div className="pl-10">
            <Link to="/">
              <img
                src="https://ik.imagekit.io/8h7kfljfc/imgs/deliverylogo.png?updatedAt=1752066792229"
                alt="logo"
                className="h-20 rounded-full"
              />
            </Link>
          </div>

          <div className="flex justify-between items-center gap-8 text-xl pr-10">
            <Link to="/" className="hover:scale-105 transition-transform cursor-pointer">Home</Link>
            <Link to="/categorias" className="hover:scale-105 transition-transform cursor-pointer">Categorias</Link>
            <Link to="/oportunidades" className="hover:scale-105 transition-transform cursor-point">Produtos</Link>
            <Link to="/sobre" className="hover:scale-105 transition-transform cursor-pointer">Sobre</Link>
            <Link to="/usuarios" className="hover:scale-105 transition-transform cursor-pointer">Usuários</Link>
            <Link to='#'>
						<ShoppingCartIcon size={32} weight='bold' className="hover:scale-115 transition-transform cursor-pointer"/>
					</Link>          
					{!usuario.token && (
            <Link to='/login'>
              <UserIcon size={32} weight='bold' />
            </Link>
          )}
          {usuario.token && (
          <>
          {
              <UserIcon size={32} weight="bold" className="text-black hover:scale-110 transition-transform cursor-pointer" />
           }

            <button
              onClick={logout}
              className="hover:underline text-red-600 font-medium transition-transform cursor-pointer"
            >
              Sair
            </button>             
          </>           
            )}
          </div>
        </div>
    </div>
  )
  
}

export default Navbar;