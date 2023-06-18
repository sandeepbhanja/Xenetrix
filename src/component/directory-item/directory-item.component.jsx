import './directory-item.style.scss';
import { useNavigate} from 'react-router-dom';
const DirectoryItem = (props) => {
  const { category } = props;
  const navigate = useNavigate();

  const OnNavigate = ()=>navigate(category.route);
  return (
    <div
      onClick={OnNavigate}
      className="directory-item-container"
      key={category.id}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${category.imageUrl})`,
        }}
      ></div>
      <div className="directory-item-body">
        <h2>{category.title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
