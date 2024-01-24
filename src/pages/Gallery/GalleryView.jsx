import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ImageView = () => {
  const { imageId } = useParams();
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        // Use a separate variable to avoid closure issues
        const id = imageId;
        const response = await axios.get(`https://picsum.photos/id/${id}/info`);
        setImage(response.data);
      } catch (error) {
        console.error('Error fetching image details:', error);
      }
    };

    fetchImage();
  }, [imageId]);

  if (!image) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Image Detail</h2>
      <img src={image.download_url} alt={image.author} style={{ maxWidth: '400px' }} />
      <p>Author: {image.author}</p>
      <p>Description: {image.description}</p>
    </div>
  );
};

export default ImageView;
