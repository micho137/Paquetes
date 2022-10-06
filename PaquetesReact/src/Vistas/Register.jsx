function Register() {
  return (
    <div className="Register justify-center flex items-center my-40">
      <form class="w-full max-w-lg">
        <div class="flex flex-wrap -mx-3">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Nombres
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Usuario
            </label>
            <input
              class="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
              for="grid-password"
            >
              Correo
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              type="email"
              placeholder="example@email.com"
            />
          </div>
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
              for="grid-password"
            >
              Contraseña
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder="******************"
            />
          </div>
        </div>
        <div class="flex items-center justify-between">
            <a href="/Login">
            <input class="cursor-pointer bg-white border border-red-600 hover:bg-red-700 hover:text-white text-red-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" value="Cancelar"/>
            </a>
            <button
              class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Crear
            </button>
          </div>
      </form>
    </div>
  );
}
export default Register;
