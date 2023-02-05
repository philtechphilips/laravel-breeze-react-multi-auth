import React from 'react'
import { Navigate, Outlet, Link } from 'react-router-dom'
import useAuthContext from '../context/AuthContext'

const AuthLayout = () => {
    const { user, logout} = useAuthContext()
    return user ? <> <nav className="bg-indigo-900 text-white px-2 py-2.5 sm:px-4">
    <div
      className="container mx-auto flex flex-wrap items-center justify-between"
      bis_skin_checked="1"
    >
      <Link to='/' className="flex items-center">
        Laraveller
      </Link>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="
          ml-3
          inline-flex
          items-center
          rounded-lg
          p-2
          text-sm text-gray-500
          hover:bg-gray-100
          focus:outline-none focus:ring-2 focus:ring-gray-200
          dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
          md:hidden
        "
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="h-6 w-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        className="hidden w-full md:block md:w-auto"
        id="navbar-default"
        bis_skin_checked="1"
      >
        <ul
          className="
            mt-4
            flex flex-col
            rounded-lg
            p-4
            md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium
          "
        >
         
         <li>
            <Link
              to=""
                className="
                  block
                  rounded
                  py-2
                  pr-4
                  pl-3
                  text-gray-50
                  hover:bg-gray-700
                "
                >Home</Link>
            </li>


           {user?.role === "admin" ?  <li>
            <Link
              to="/admin"
                className="
                  block
                  rounded
                  py-2
                  pr-4
                  pl-3
                  text-gray-50
                  hover:bg-gray-700
                "
                >Admin</Link>
            </li>: <li>
            </li>}

            {user ? <><li>
            <button
                onClick={logout}
                className="
                  block
                  rounded
                  py-2
                  pr-4
                  pl-3
                  text-gray-50
                  hover:bg-gray-700
                "
                >Logout</button>
            </li></> : <><li>
            <Link
              to="/register"
                className="
                  block
                  rounded
                  py-2
                  pr-4
                  pl-3
                  text-gray-50
                  hover:bg-gray-700
                "
                >Register</Link>
            </li>


            <li>
            <Link
              to="/login"
                className="
                  block
                  rounded
                  py-2
                  pr-4
                  pl-3
                  text-gray-50
                  hover:bg-gray-700
                "
                >Login</Link>
            </li></>}
        </ul>
      </div>
    </div>
  </nav>
  <Outlet />
  </>  : <Navigate to="/login" />
}

export default AuthLayout