import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="bg-white border-b border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center  mx-auto p-4 ">
          <div>
            <span className='px-2 py-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-200 rounded-lg text-white'>hyper://</span>byte
        </div>
      </div>
    </nav>
  </div>
  )
}

export default Header