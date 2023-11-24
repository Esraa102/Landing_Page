import "./navbar.css";

// eslint-disable-next-line react/prop-types
const Navbar = ({ classNav }) => {
  return (
    <ul className={classNav}>
      <li>
        <a href="#" className="link">
          Home
        </a>
      </li>
      <li>
        <a href="#" className="link">
          About
        </a>
      </li>
      <li>
        <a href="#" className="link">
          Features
        </a>
      </li>
      <li>
        <a href="#" className="link">
          Contact
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
