function Orders() {
  return (
    <div className="Orders">
      <div>
        <div className="flex justify-center items-center my-5 gap-x-3">
          <h1 className="font-semibold text-2xl uppercase text-white text-center font-mono bg-teal-500 px-10 rounded-md">
            Listado de Ordenes
          </h1>
          <a href="/" className="border-2 border-teal-500 flex justify-center items-center text-teal-500">
            <span class="material-icons">add</span>
          </a>
        </div>
      </div>
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg mb-10 mx-10">
        <table class="w-full text-sm text-center text-gray-200 dark:text-gray-200">
          <thead class="text-xs text-white uppercase bg-teal-600">
            <tr>
              <th scope="col" class="py-3 px-6">
                # Servicio
              </th>
              <th scope="col" class="py-3 px-6">
                Fecha
              </th>
              <th scope="col" class="py-3 px-6">
                Ciudad Entrega
              </th>
              <th scope="col" class="py-3 px-6">
                Direccion Entrega
              </th>
              <th scope="col" class="py-3 px-6">
                Estado
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <td class="py-4 px-6">
                <a
                  href="#"
                  class="font-medium text-teal-600 dark:text-teal-500 hover:underline"
                >
                  1
                </a>
              </td>
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-200 whitespace-nowrap"
              >
                01/01/2021
              </th>
              <td class="py-4 px-6">Santa Marta</td>
              <td class="py-4 px-6">Calle 1 #2-3</td>
              <td class="py-4 px-6">Guardado</td>
            </tr>

            <tr class="bg-white border-b dark:bg-teal-900 dark:border-gray-700">
              <td class="py-4 px-6">
                <a
                  href="#"
                  class="font-medium text-teal-600 dark:text-teal-500 hover:underline"
                >
                  2
                </a>
              </td>
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-200 whitespace-nowrap"
              >
                01/01/2021
              </th>
              <td class="py-4 px-6">Barranquilla</td>
              <td class="py-4 px-6">Calle 4 #5-6</td>
              <td class="py-4 px-6">Cancelado</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Orders;
