import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ImageList = () => {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=20');
        setImageList(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <ul className='flex flex-wrap gap-10 justify-center mb-10'>
        {imageList.map((image) => (
          <li key={image.id} >
            <Link to={`/gallery/${image.id}`} className='flex flex-col gap-5'>
              <img src={image.download_url} alt={image.author} style={{ maxWidth: '400px' }} />
              <h2>{image.author}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageList;
