import { Link } from "react-router-dom";
import './Navbar.css'
import logo from '../assets/logo.png';
import usuario from '../assets/usuario.png';
import { useLocation } from 'react-router-dom';

type PropsNavBar={
    loggedIn:boolean;
}

const NavBar:React.FC<PropsNavBar> = (props:PropsNavBar) => {

    const { pathname } = useLocation();


    return(
        <header className="bg-black flex flex-col p-5 items-center justify-between
        md:flex-row">
            <Link to='/' className="text-white">
                <img src={logo} alt="" className="h-[80px]"/>
            </Link>

            <nav className="flex gap-5 items-center justify-center">
                <ul className="flex flex-col items-center justify-center gap-1 sm:gap-5 m-5 sm:flex-row">

                    <li className={pathname=='/productos'?'item-selected list-item':'list-item'}>
                        <Link to='/productos' className="text-white">Productos</Link>
                    </li>
                    
                    <li className={pathname=='/categorias'?'item-selected list-item':'list-item'}>
                        <Link to='/categorias' className="text-white">Categorías</Link>
                    </li>
                    <li className={pathname=='/promociones'?'item-selected list-item':'list-item'}>
                        <Link to='/promociones' className="text-white">Últimas promociones</Link>
                    </li>

                    {props.loggedIn?(
                        <>
                            <li className={'list-item hover:bg-red-500'}>
                                <a className="text-white">Cerrar sesión</a>
                            </li>
                            <li className={'gap-3 flex flex-row w-fit items-center justify-center'}>
                                <img src={usuario} alt="" id="imagen-usuario" className="h-[40px]"/>
                                <Link to='/me' className="text-white">Nombre usuario</Link>
                            </li>
                        
                        </>
                        ):
                        <>
                            <li className={pathname=='/signup'?'item-selected list-item':'list-item'}>
                                <Link to='/signup' className="text-white">Registrarse</Link>
                            </li>
                            <li className={pathname=='/login'?'item-selected list-item':'list-item'}>
                                <Link to='/login' className="text-white">Iniciar sesion</Link>
                            </li>
                        </>               
                    }
                    



                   
            
                </ul>

            </nav>
        </header>
    )
}

export default NavBar;