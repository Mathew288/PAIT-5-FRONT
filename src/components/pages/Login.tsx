import './Login.css'

function Login(){
    return (
        <section className="flex flex-row h-[100%]">
            <section id="image-side" className="w-[60%] flex flex-col items-center justify-center">
                <h1 className='text-white text-3xl text text-center'>Somos lo mejor en calidad</h1>
                <span className='text-gray-400 text-sm text text-center'>Inicia sesión para acceder a todas nuestras funcionalidades</span>
            </section>

            <form id="form-login" className="w-[40%] h-full flex flex-col items-center justify-center p-10">
                <input type="text" placeholder="Usuario" className="" />
                <input type="password" placeholder="Contraseña" />


                <button>
                    Iniciar sesión
                </button>
                <a href="" className="text-center">¿Has olvidado tu contraseña?</a>
            </form>

        </section>
    );
}

export default Login;