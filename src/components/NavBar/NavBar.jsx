import { Link } from "react-router";
function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/new-product"> Create New Products</Link>
    </div>
  );
}

export default Navbar;
