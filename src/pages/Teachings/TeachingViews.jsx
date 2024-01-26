import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

import AudioPlayer from "./Audio";


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
      <Link to={`/teachings`} className='underline text-base cursor-pointer'>
            Back
        </Link>
      
        <img src={image.download_url} alt={image.author} className='w-full rounded-md' />

        <h2 className='text-3xl font-bold'>Title</h2>
        <p className='text-gray-500'>
          <b className='text-my-black font-semibold text-base'> Description: </b> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vel nobis a explicabo quo obcaecati laboriosam, reprehenderit beatae eum rerum et voluptatum molestias nemo eveniet impedit? Temporibus quos quo eos aperiam. Nihil, officia velit nulla veniam id architecto sint? Laudantium, ab earum laboriosam quidem itaque sunt? Animi quisquam quis neque!
        </p>

        <section className='flex justify-between gap-5 w-full h-fit'>
          <AudioPlayer  />
        </section>
        
          <section className='flex items-center gap-3'>
                <img src={image.download_url} className='w-10 h-10 rounded-full' />
                <span className='flex flex-col gap-1'>
                  <p className='text-base font-semibold text-my-black' >{image.author}</p>
                  <p className='text-xs text-gray-500'>Dec 24th, 2023</p>
                </span>
            </section>

        </section>
    </div>
  );
};

export default ImageView;
