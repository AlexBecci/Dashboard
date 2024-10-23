import React from "react";

export function Dashboard2() {
    return (
        <div className="min-h-screen flex bg-gray-100">
            {/* Sidebar */}
            <div className="flex">
                <aside className="w-64 bg-white shadow-lg fixed  h-screen flex flex-col">{/* fixed */}
                    <div className="p-4 border-b">
                        <h1 className="text-xl font-bold text-teal-600">Dashboard</h1>
                    </div>
                    <nav className="p-4">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full p-2 mb-4 border rounded-md"
                        />
                        <ul>
                            <li className="mb-2">
                                <a href="#" className="flex items-center space-x-2 text-gray-700">
                                    <span>🏠</span>
                                    <span>Home</span>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex items-center space-x-2 text-gray-700">
                                    <span>📊</span>
                                    <span>Activity</span>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex items-center space-x-2 text-green-600">
                                    <span>📋</span>
                                    <span>Manage Tasks</span>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex items-center space-x-2 text-gray-700">
                                    <span>✉️</span>
                                    <span>Messages</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="p-4  absolute bottom-4 w-full ">
                        <h1 className="text-xl  text-center font-bold text-teal-600">Cerrar Sesion</h1>
                    </div>
                </aside>
            </div>

            {/* Main Content */}
            <main className="flex-1 ml-64 p-6 overflow-y-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Manage Tasks</h2>
                    <div className="flex space-x-2">
                        <button className="px-4 py-2 bg-gray-300 rounded-md">
                            Completed
                        </button>
                        <button className="px-4 py-2 bg-teal-500 text-white rounded-md">
                            Add New Task
                        </button>
                    </div>
                </div>

                {/* Task Lists */}
                <section>
                    {/* Today Section */}
                    <div className="mb-6">
                        <h3 className="text-lg font-bold mb-2">Today</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-3" />
                                    <span>Update team page</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="text-gray-500">Complete by 25/04/2014</span>
                                    <span className="px-2 py-1 bg-teal-500 text-white rounded-md">
                                        In progress
                                    </span>
                                </div>
                            </li>
                            <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-3" />
                                    <span>Design a new logo</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="text-gray-500">Complete by 10/04/2014</span>
                                    <span className="px-2 py-1 bg-gray-300 text-gray-700 rounded-md">
                                        Pending
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Tomorrow Section */}
                    <div>
                        <h3 className="text-lg font-bold mb-2">Tomorrow</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-3" />
                                    <span>Find a front end developer</span>
                                </div>
                            </li>
                            <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-3" />
                                    <span>Find a front end developer</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    {/* Today Section */}
                    <div className="mb-6">
                        <h3 className="text-lg font-bold mb-2">Today</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-3" />
                                    <span>Update team page</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="text-gray-500">Complete by 25/04/2014</span>
                                    <span className="px-2 py-1 bg-teal-500 text-white rounded-md">
                                        In progress
                                    </span>
                                </div>
                            </li>
                            <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-3" />
                                    <span>Design a new logo</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="text-gray-500">Complete by 10/04/2014</span>
                                    <span className="px-2 py-1 bg-gray-300 text-gray-700 rounded-md">
                                        Pending
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Tomorrow Section */}
                    <div>
                        <h3 className="text-lg font-bold mb-2">Tomorrow</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-3" />
                                    <span>Find a front end developer</span>
                                </div>
                            </li>
                            <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-3" />
                                    <span>Find a front end developer</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    {/* Today Section */}
                    <div className="mb-6">
                        <h3 className="text-lg font-bold mb-2">Today</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-3" />
                                    <span>Update team page</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="text-gray-500">Complete by 25/04/2014</span>
                                    <span className="px-2 py-1 bg-teal-500 text-white rounded-md">
                                        In progress
                                    </span>
                                </div>
                            </li>
                            <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-3" />
                                    <span>Design a new logo</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="text-gray-500">Complete by 10/04/2014</span>
                                    <span className="px-2 py-1 bg-gray-300 text-gray-700 rounded-md">
                                        Pending
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Tomorrow Section */}
                    <div>
                        <h3 className="text-lg font-bold mb-2">Tomorrow</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-3" />
                                    <span>Find a front end developer</span>
                                </div>
                            </li>
                            <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-3" />
                                    <span>Find a front end developer</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    {/* Today Section */}
                    <div className="mb-6">
                        <h3 className="text-lg font-bold mb-2">Today</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-3" />
                                    <span>Update team page</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="text-gray-500">Complete by 25/04/2014</span>
                                    <span className="px-2 py-1 bg-teal-500 text-white rounded-md">
                                        In progress
                                    </span>
                                </div>
                            </li>
                            <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-3" />
                                    <span>Design a new logo</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="text-gray-500">Complete by 10/04/2014</span>
                                    <span className="px-2 py-1 bg-gray-300 text-gray-700 rounded-md">
                                        Pending
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Tomorrow Section */}
                    <div>
                        <h3 className="text-lg font-bold mb-2">Tomorrow</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-3" />
                                    <span>Find a front end developer</span>
                                </div>
                            </li>
                            <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-3" />
                                    <span>Find a front end developer</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    {/* Today Section */}
                    <div className="mb-6">
                        <h3 className="text-lg font-bold mb-2">Today</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-3" />
                                    <span>Update team page</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="text-gray-500">Complete by 25/04/2014</span>
                                    <span className="px-2 py-1 bg-teal-500 text-white rounded-md">
                                        In progress
                                    </span>
                                </div>
                            </li>
                            <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-3" />
                                    <span>Design a new logo</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="text-gray-500">Complete by 10/04/2014</span>
                                    <span className="px-2 py-1 bg-gray-300 text-gray-700 rounded-md">
                                        Pending
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Tomorrow Section */}
                    <div>
                        <h3 className="text-lg font-bold mb-2">Tomorrow</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-3" />
                                    <span>Find a front end developer</span>
                                </div>
                            </li>
                            <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-3" />
                                    <span>Find a front end developer</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    {/* Today Section */}
                    <div className="mb-6">
                        <h3 className="text-lg font-bold mb-2">Today</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-3" />
                                    <span>Update team page</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="text-gray-500">Complete by 25/04/2014</span>
                                    <span className="px-2 py-1 bg-teal-500 text-white rounded-md">
                                        In progress
                                    </span>
                                </div>
                            </li>
                            <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-3" />
                                    <span>Design a new logo</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="text-gray-500">Complete by 10/04/2014</span>
                                    <span className="px-2 py-1 bg-gray-300 text-gray-700 rounded-md">
                                        Pending
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Tomorrow Section */}
                    <div>
                        <h3 className="text-lg font-bold mb-2">Tomorrow</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-3" />
                                    <span>Find a front end developer</span>
                                </div>
                            </li>
                            <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-3" />
                                    <span>Find a front end developer</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    {/* Today Section */}
                    <div className="mb-6">
                        <h3 className="text-lg font-bold mb-2">Today</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-3" />
                                    <span>Update team page</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="text-gray-500">Complete by 25/04/2014</span>
                                    <span className="px-2 py-1 bg-teal-500 text-white rounded-md">
                                        In progress
                                    </span>
                                </div>
                            </li>
                            <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-3" />
                                    <span>Design a new logo</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="text-gray-500">Complete by 10/04/2014</span>
                                    <span className="px-2 py-1 bg-gray-300 text-gray-700 rounded-md">
                                        Pending
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Tomorrow Section */}
                    <div>
                        <h3 className="text-lg font-bold mb-2">Tomorrow</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-3" />
                                    <span>Find a front end developer</span>
                                </div>
                            </li>
                            <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-3" />
                                    <span>Find a front end developer</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    {/* Today Section */}
                    <div className="mb-6">
                        <h3 className="text-lg font-bold mb-2">Today</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-3" />
                                    <span>Update team page</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="text-gray-500">Complete by 25/04/2014</span>
                                    <span className="px-2 py-1 bg-teal-500 text-white rounded-md">
                                        In progress
                                    </span>
                                </div>
                            </li>
                            <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-3" />
                                    <span>Design a new logo</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="text-gray-500">Complete by 10/04/2014</span>
                                    <span className="px-2 py-1 bg-gray-300 text-gray-700 rounded-md">
                                        Pending
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Tomorrow Section */}
                    <div>
                        <h3 className="text-lg font-bold mb-2">Tomorrow</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-3" />
                                    <span>Find a front end developer</span>
                                </div>
                            </li>
                            <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-3" />
                                    <span>Find a front end developer</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    {/* Today Section */}
                    <div className="mb-6">
                        <h3 className="text-lg font-bold mb-2">Today</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-3" />
                                    <span>Update team page</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="text-gray-500">Complete by 25/04/2014</span>
                                    <span className="px-2 py-1 bg-teal-500 text-white rounded-md">
                                        In progress
                                    </span>
                                </div>
                            </li>
                            <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-3" />
                                    <span>Design a new logo</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="text-gray-500">Complete by 10/04/2014</span>
                                    <span className="px-2 py-1 bg-gray-300 text-gray-700 rounded-md">
                                        Pending
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Tomorrow Section */}
                    <div>
                        <h3 className="text-lg font-bold mb-2">Tomorrow</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-3" />
                                    <span>Find a front end developer</span>
                                </div>
                            </li>
                            <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-3" />
                                    <span>Find a front end developer</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>


            {/* User Info */}
            <div className="absolute top-4 right-4 flex items-center space-x-2">
                <img
                    src="https://via.placeholder.com/40"
                    alt="User"
                    className="w-10 h-10 rounded-full"
                />
                <span>John Doe</span>
            </div>
        </div>
    );
};

