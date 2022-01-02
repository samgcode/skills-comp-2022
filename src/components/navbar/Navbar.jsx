import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {
  const [open, setOpen] = useState(false)

  function handleClick() {
    setOpen(!open)
  }

  return (
    <div className="content-center mx-auto">
      <nav className="shadow-md w-full md:w-3/4 mx-auto">
        <div className="bg-white mt-8 w-full h-16 flex md:justify-between justify-end md:rounded md:w-3/4">
          <div className="text-black text-center align-middle my-auto md:block hidden ">
            <Link to="/Home" className="mx-5">Home</Link>
            <Link to="/Store" className="mx-5">Store</Link>
            <Link to="/Home" className="mx-5">Home</Link>
            <Link to="/Home" className="mx-5">Home</Link>
          </div>
          <button className="w-6 h-6 my-auto text-black mx-5 md:hidden" onClick={handleClick}>
            {open ?
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              : <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            }
          </button>
        </div>
        {open ?
          <div className="w-full flex flex-col text-black align-middle z-50 my-auto bg-whiterounded-b md:hidden">
            <Link to="/Home" className="mx-5 my-2">Home</Link>
            <Link to="/Store" className="mx-5 my-2">Store</Link>
            <Link to="/Home" className="mx-5 my-2">Home</Link>
            <Link to="/Home" className="mx-5 my-2">Home</Link>
          </div>
          : null
        }
      </nav>
    </div>
  )
}

export default Navbar