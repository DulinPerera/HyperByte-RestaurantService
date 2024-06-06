import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
      <span className='px-2 py-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-200 rounded-lg text-white'>hyper://</span>byte
      </Navbar.Brand>
      <Navbar.Collapse>
        <Navbar.Link >
            <Link to="/">
                Home
            </Link>
        </Navbar.Link>
        <Navbar.Link >
            <Link to="/form">
                Add New
            </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default Header