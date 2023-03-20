import { Link } from "react-router-dom";
import "./MainNavigation.css";

function MainNavigation() {
  return (
    <header className="header">
      <nav>
        <ul className="list">
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/products">List of Products</Link>
          </p>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
