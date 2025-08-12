import { Link } from "react-router-dom";

const BaseLink = ({ name }) => {
  return (
    <Link
      to="/shop"
      className="inline-block px-6 py-3 text-lg hover:text-accent transition"
    >
      <span className="relative underline underline-offset-10 decoration-2">
        {name}
      </span>
    </Link>
  );
};

export default BaseLink;
