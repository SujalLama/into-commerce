import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Header() {
    
  return (
    <header className="flex items-center justify-between h-[80px]">
        <h1 className="font-bold">IntoSoft</h1>
        <Link to="/cart" >
            <FaCartShopping />
        </Link>
    </header>
  )
}
