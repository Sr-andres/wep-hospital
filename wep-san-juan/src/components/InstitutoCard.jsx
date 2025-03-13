import { Link } from "react-router-dom";
import "./InstitutoCard.css";

const InstitutoCard = ({ title, image, link }) => {
  return (
    <Link to={link} className="instituto-card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-overlay">
        <h3>{title}</h3>
        <span className="arrow">→</span>
      </div>
    </Link>
  );
};

export default InstitutoCard;