import { Link } from 'react-router-dom';

const Card = ({ img = './assets/soon.png', title, path, disabled }) => {
  return (
    <div className={`card ${disabled && 'disabled-link'}`}>
      <Link to={path}>
        <img src={img} alt='preview' />
        <h2 className='title'>{title}</h2>
      </Link>
    </div>
  );
};

export default Card;
