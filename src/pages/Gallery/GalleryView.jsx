import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const ImageView = () => {
  const { id } = useParams();
  const [image, setImage] = useState([]);


  useEffect(() => {
    const fetchImage = async () => {
      try {
        // Use a separate variable to avoid closure issues
        const Id = id;
        const response = await axios.get(`https://picsum.photos/id/${Id}/info`);
        setImage(response.data);
      } catch (error) {
        console.error('Error fetching image details:', error);
      }
    };

    fetchImage();
  }, [id]);

  if (!image) {
    return <div>Loading...</div>;
  }


  return (
    <div key={image.id} className='flex flex-col items-center mb-10 mt-10'>
      <section className='w-11/12 flex flex-col gap-5'>
        <span className='flex justify-between'>
          <Link to={`/gallery`} className='underline text-base cursor-pointer'>
            Back
          </Link>
          <h2 className='font-semibold text-3xl'>Title!</h2>
        </span>
      
        <img src={image.download_url} alt={image.author} className='w-full rounded-md' />
        <p className='text-gray-500'>
          <b className='text-my-black font-semibold text-base'> Description: </b> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vel nobis a explicabo quo obcaecati laboriosam, reprehenderit beatae eum rerum et voluptatum molestias nemo eveniet impedit? Temporibus quos quo eos aperiam. Nihil, officia velit nulla veniam id architecto sint? Laudantium, ab earum laboriosam quidem itaque sunt? Animi quisquam quis neque!</p>

        </section>
    </div>
  );
};

export default ImageView;
