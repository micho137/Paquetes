function EditOrder() {
  return (
    <div className="AddOrder flex justify-center items-center">
      <form class="w-full max-w-sm my-40 ">
        <div className="flex justify-center items-center gap-x-5">
          <div class="md:flex md:items-center mb-6">
            <div class="">
              <label
                class="block uppercase text-xs text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-full-name"
              >
                Fecha
              </label>
            </div>
            <div class="">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                id="inline-full-name"
                type="date"
              />
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="">
              <label
                class="block uppercase text-xs text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-full-name"
              >
                Hora
              </label>
            </div>
            <div class="">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                id="inline-full-name"
                type="time"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mb-5">
          <div>
            <label
              class="block uppercase text-xs text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Estado
            </label>
          </div>
          <div class="">
              <select className="px-2 py-2 border rounded hover:border-teal-400 font-semibold text-gray-600">
                <option>Guardado</option>
                <option>Cancelado</option>
                <option>Cumplido</option>
              </select>
            </div>
        </div>
        <div className="grid grid-cols-4">
          <div className="">
            <div class="md:flex md:items-center mb-6 flex justify-center items-center flex-col">
              <div class="md:w-3/4 flex justify-center items-center flex-col">
                <input
                  class="bg-gray-200 text-center text-sm appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                  id="inline-full-name"
                  type="text"
                />
                <label
                  class="uppercase text-xs text-gray-500 font-bold mb-1 md:mb-0"
                  for="inline-full-name"
                >
                  Largo
                </label>
              </div>
            </div>
          </div>

          <div className="">
            <div class="md:flex md:items-center mb-6 flex justify-center items-center flex-col">
              <div class="md:w-3/4 flex justify-center items-center flex-col">
                <input
                  class="bg-gray-200 text-center text-sm appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                  id="inline-full-name"
                  type="text"
                />
                <label
                  class="uppercase text-xs text-gray-500 font-bold mb-1 md:mb-0"
                  for="inline-full-name"
                >
                  Ancho
                </label>
              </div>
            </div>
          </div>

          <div className="">
            <div class="md:flex md:items-center mb-6 flex justify-center items-center flex-col">
              <div class="md:w-3/4 flex justify-center items-center flex-col">
                <input
                  class="bg-gray-200 text-center text-sm appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                  id="inline-full-name"
                  type="text"
                />
                <label
                  class="uppercase text-xs text-gray-500 font-bold mb-1 md:mb-0"
                  for="inline-full-name"
                >
                  Alto
                </label>
              </div>
            </div>
          </div>

          <div className="">
            <div class="md:flex md:items-center mb-6 flex justify-center items-center flex-col">
              <div class="md:w-3/4 flex justify-center items-center flex-col">
                <input
                  class="bg-gray-200 text-center text-sm appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                  id="inline-full-name"
                  type="text"
                />
                <label
                  class="uppercase text-xs text-gray-500 font-bold mb-1 md:mb-0"
                  for="inline-full-name"
                >
                  Peso
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center gap-x-5 mb-4 w-full">
            <label
              class="w-32 uppercase text-xs text-gray-500 font-bold mb-1 md:mb-0"
              for="inline-full-name"
            >
              Direccion Recogida
            </label>
            <div className="w-full">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                id="inline-full-name"
                type="text"
              />
            </div>
          </div>

          <div className="flex justify-center items-center gap-x-5 mb-4 w-full">
            <label
              class="w-32 uppercase text-xs text-gray-500 font-bold mb-1 md:mb-0"
              for="inline-full-name"
            >
              Ciudad Recogida
            </label>
            <div className="w-full">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                id="inline-full-name"
                type="text"
              />
            </div>
          </div>

          <div className="flex justify-center items-center gap-x-5 mb-4 w-full">
            <label
              class="w-32 uppercase text-xs text-gray-500 font-bold mb-1 md:mb-0"
              for="inline-full-name"
            >
              Nombre Destinatario
            </label>
            <div className="w-full">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                id="inline-full-name"
                type="text"
              />
            </div>
          </div>

          <div className="flex justify-center items-center gap-x-5 mb-4 w-full">
            <label
              class="w-32 uppercase text-xs text-gray-500 font-bold mb-1 md:mb-0"
              for="inline-full-name"
            >
              Cedula Destinatario
            </label>
            <div className="w-full">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                id="inline-full-name"
                type="text"
              />
            </div>
          </div>

          <div className="flex justify-center items-center gap-x-5 mb-4 w-full">
            <label
              class="w-32 uppercase text-xs text-gray-500 font-bold mb-1 md:mb-0"
              for="inline-full-name"
            >
              Direccion Entrega
            </label>
            <div className="w-full">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                id="inline-full-name"
                type="text"
              />
            </div>
          </div>

          <div className="flex justify-center items-center gap-x-5 mb-4 w-full">
            <label
              class="w-32 uppercase text-xs text-gray-500 font-bold mb-1 md:mb-0"
              for="inline-full-name"
            >
              Ciudad Entrega
            </label>
            <div className="w-full">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                id="inline-full-name"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <a href="/Orders">
            <input
              class="cursor-pointer bg-white border border-red-600 hover:bg-red-700 hover:text-white text-red-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              value="Cancelar"
            />
          </a>
          <button className="bg-teal-500 rounded text-white font-bold px-4 py-2 hover:bg-teal-700">
            Editar Orden
          </button>
        </div>
      </form>
    </div>
  );
}
export default EditOrder;
