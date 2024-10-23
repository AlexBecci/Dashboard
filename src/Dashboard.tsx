import { FiHome, FiUsers, FiSettings, FiPieChart, FiSearch, FiBell, FiMenu } from 'react-icons/fi'
const data = [
    {
        "id_premio": 106,
        "orden_premio": 6,
        "descripcion_premio": "Gift Card $100",
        "cantidad": 30,
        "monto": "100.00",
        "costo": "70.00",
        "duracion_dias": 90,
        "frecuencia_dias": 10,
        "doble_canje": 0,
        "fecha_desde": "2024-08-15",
        "fecha_hasta": "2024-11-15",
        "estado_premio": "ACTIVO",
        "id_campana": 206,
        "nombre_campana": "Campaña Back to School",
        "codigo_meta": "META222",
        "mails_enviados": 400,
        "mails_vencidos": 60,
        "reclamados": 110,
        "sorteados": 250,
        "convertidos": 130,
        "canjeados_en_sala": 120
    },
    {
        "id_premio": 107,
        "orden_premio": 7,
        "descripcion_premio": "Entradas Concierto",
        "cantidad": 25,
        "monto": "800.00",
        "costo": "600.00",
        "duracion_dias": 45,
        "frecuencia_dias": 15,
        "doble_canje": 1,
        "fecha_desde": "2024-09-15",
        "fecha_hasta": "2024-12-30",
        "estado_premio": "ACTIVO",
        "id_campana": 207,
        "nombre_campana": "Campaña Musical",
        "codigo_meta": "META333",
        "mails_enviados": 550,
        "mails_vencidos": 70,
        "reclamados": 90,
        "sorteados": 180,
        "convertidos": 140,
        "canjeados_en_sala": 130
    },
    {
        "id_premio": 108,
        "orden_premio": 8,
        "descripcion_premio": "Bono de Compras $150",
        "cantidad": 40,
        "monto": "150.00",
        "costo": "100.00",
        "duracion_dias": 30,
        "frecuencia_dias": 7,
        "doble_canje": 0,
        "fecha_desde": "2024-10-10",
        "fecha_hasta": "2025-01-10",
        "estado_premio": "ACTIVO",
        "id_campana": 208,
        "nombre_campana": "Campaña de Invierno",
        "codigo_meta": "META444",
        "mails_enviados": 300,
        "mails_vencidos": 50,
        "reclamados": 75,
        "sorteados": 160,
        "convertidos": 110,
        "canjeados_en_sala": 100
    },
    {
        "id_premio": 109,
        "orden_premio": 9,
        "descripcion_premio": "Experiencia Gourmet",
        "cantidad": 15,
        "monto": "2500.00",
        "costo": "2000.00",
        "duracion_dias": 60,
        "frecuencia_dias": 20,
        "doble_canje": 0,
        "fecha_desde": "2024-08-01",
        "fecha_hasta": "2024-10-31",
        "estado_premio": "ACTIVO",
        "id_campana": 209,
        "nombre_campana": "Campaña Gastronómica",
        "codigo_meta": "META555",
        "mails_enviados": 200,
        "mails_vencidos": 25,
        "reclamados": 50,
        "sorteados": 100,
        "convertidos": 60,
        "canjeados_en_sala": 55
    },
    {
        "id_premio": 110,
        "orden_premio": 10,
        "descripcion_premio": "Tour de Aventura",
        "cantidad": 10,
        "monto": "3000.00",
        "costo": "2500.00",
        "duracion_dias": 120,
        "frecuencia_dias": 30,
        "doble_canje": 1,
        "fecha_desde": "2024-09-01",
        "fecha_hasta": "2025-01-01",
        "estado_premio": "ACTIVO",
        "id_campana": 210,
        "nombre_campana": "Campaña Aventura",
        "codigo_meta": "META666",
        "mails_enviados": 800,
        "mails_vencidos": 100,
        "reclamados": 120,
        "sorteados": 400,
        "convertidos": 250,
        "canjeados_en_sala": 240
    },
    {
        "id_premio": 111,
        "orden_premio": 11,
        "descripcion_premio": "Suscripción a Revista",
        "cantidad": 100,
        "monto": "60.00",
        "costo": "50.00",
        "duracion_dias": 365,
        "frecuencia_dias": 0,
        "doble_canje": 0,
        "fecha_desde": "2024-11-01",
        "fecha_hasta": "2025-11-01",
        "estado_premio": "ACTIVO",
        "id_campana": 211,
        "nombre_campana": "Campaña Cultural",
        "codigo_meta": "META777",
        "mails_enviados": 200,
        "mails_vencidos": 10,
        "reclamados": 80,
        "sorteados": 300,
        "convertidos": 100,
        "canjeados_en_sala": 90
    },
    {
        "id_premio": 112,
        "orden_premio": 12,
        "descripcion_premio": "Entradas para el Teatro",
        "cantidad": 35,
        "monto": "1200.00",
        "costo": "800.00",
        "duracion_dias": 30,
        "frecuencia_dias": 14,
        "doble_canje": 0,
        "fecha_desde": "2024-10-15",
        "fecha_hasta": "2025-01-15",
        "estado_premio": "ACTIVO",
        "id_campana": 212,
        "nombre_campana": "Campaña Teatral",
        "codigo_meta": "META888",
        "mails_enviados": 300,
        "mails_vencidos": 50,
        "reclamados": 60,
        "sorteados": 150,
        "convertidos": 90,
        "canjeados_en_sala": 85
    },
    {
        "id_premio": 113,
        "orden_premio": 13,
        "descripcion_premio": "Clase de Cocina",
        "cantidad": 20,
        "monto": "500.00",
        "costo": "350.00",
        "duracion_dias": 45,
        "frecuencia_dias": 20,
        "doble_canje": 0,
        "fecha_desde": "2024-11-10",
        "fecha_hasta": "2025-02-10",
        "estado_premio": "ACTIVO",
        "id_campana": 213,
        "nombre_campana": "Campaña Culinaria",
        "codigo_meta": "META999",
        "mails_enviados": 150,
        "mails_vencidos": 20,
        "reclamados": 40,
        "sorteados": 90,
        "convertidos": 55,
        "canjeados_en_sala": 50
    },
    {
        "id_premio": 114,
        "orden_premio": 14,
        "descripcion_premio": "Aventura en Paracaídas",
        "cantidad": 5,
        "monto": "5000.00",
        "costo": "4000.00",
        "duracion_dias": 180,
        "frecuencia_dias": 30,
        "doble_canje": 1,
        "fecha_desde": "2024-12-01",
        "fecha_hasta": "2025-06-01",
        "estado_premio": "ACTIVO",
        "id_campana": 214,
        "nombre_campana": "Campaña Aventura Extrema",
        "codigo_meta": "META000",
        "mails_enviados": 600,
        "mails_vencidos": 100,
        "reclamados": 10,
        "sorteados": 50,
        "convertidos": 40,
        "canjeados_en_sala": 30
    }
]
export function Dashboard() {
    return (
        <div className="flex h-screen bg-gray-100" >
            {/* Sidebar */}
            < aside className="hidden md:flex flex-col w-64 bg-white shadow-md" >
                <div className="flex items-center justify-center h-20 border-b">
                    <h1 className="text-xl font-bold text-gray-800">Mi Dashboard</h1>
                </div>
                <nav className="flex-grow">
                    <ul className="px-4 py-4 space-y-2">
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg">
                                <FiHome className="mr-3" /> Inicio
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg">
                                <FiUsers className="mr-3" /> Usuarios
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg">
                                <FiPieChart className="mr-3" /> Análisis
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg">
                                <FiSettings className="mr-3" /> Configuración
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside >

            {/* Main Content */}
            < div className="flex-1 flex flex-col overflow-hidden" >
                {/* Top Bar */}
                < header className="flex items-center justify-between p-4 bg-white shadow-md" >
                    <button className="md:hidden text-gray-500 focus:outline-none">
                        <FiMenu className="h-6 w-6" />
                    </button>
                    <div className="flex items-center">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Buscar..."
                                className="w-64 pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                            <FiBell className="h-6 w-6" />
                        </button>
                        <img
                            src="https://via.placeholder.com/40"
                            alt="Profile"
                            className="h-8 w-8 rounded-full ml-4"
                        />
                    </div>
                </header >

                {/* Dashboard Content */}
                <div className='overflow-auto'>
                    {data.map((dt, index) => (
                        <main className="flex-1  bg-gray-100 p-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Resumen de Campañas</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {/* Stat Cards */}
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Nombre</h3>
                                    <p className="text-3xl font-bold text-blue-600">{dt.nombre_campana}</p>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-lg font-semibold text-gray-700 mb-2">descripcion_premio</h3>
                                    <p className="text-3xl font-bold text-green-600">{dt.descripcion_premio}</p>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Reclamados</h3>
                                    <p className="text-3xl font-bold text-red-600">10</p>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Premios Activos</h3>
                                    <p className="text-3xl font-bold text-orange-600">5</p>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Premios Sorteados</h3>
                                    <p className="text-3xl font-bold text-purple-600">50</p>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Canjeados en Sala</h3>
                                    <p className="text-3xl font-bold text-yellow-600">30</p>
                                </div>
                                <h3 className="text-xl col-span-4 font-semibold text-gray-800 mb-4">Actividad Reciente</h3>
                                {/* Stat Cards */}
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Mails Enviados</h3>
                                    <p className="text-3xl font-bold text-blue-600">600</p>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Mails Vencidos</h3>
                                    <p className="text-3xl font-bold text-green-600">100</p>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Convertidos</h3>
                                    <p className="text-3xl font-bold text-yellow-600">40</p>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Doble Canje</h3>
                                    <p className="text-3xl font-bold text-purple-600">Sí</p>
                                </div>
                            </div>
                        </main>
                    ))}
                </div>
            </div >
        </div >
    )
}