function Login() {
  return (
    <div className="Login">
      <div className="Login flex justify-center items-center">
        <form class="w-full max-w-sm my-40">
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label
                class="block uppercase text-xs text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-full-name"
              >
                Usuario
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                id="inline-full-name"
                type="text"
              />
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label
                class="block uppercase text-xs text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-password"
              >
                Contraseña
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                id="inline-password"
                type="password"
                placeholder="******************"
              />
            </div>
          </div>
          <div class="flex items-center justify-around">
            <button
              class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Iniciar Sesion
            </button>
            <a
              class="inline-block align-baseline font-bold text-sm text-teal-500 hover:text-teal-800"
              href="/Register"
            >
              No tienes cuenta?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
