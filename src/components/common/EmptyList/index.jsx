import './styles.css';
import EmptyGif from "../../../assets/empty.png"

const EmptyList = () => (
  <div className='emptyList-wrap'>
    <img src={EmptyGif} alt='empty' />
  </div>
);

export default EmptyList;
