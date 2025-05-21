import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-3">
          <div className="flex items-center">
            <span className="font-bold text-xl text-white">Banking Future</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-white hover:text-blue-400">
              Главная
            </Link>
            <Link to="/about" className="text-white hover:text-blue-400">
              О нас
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
