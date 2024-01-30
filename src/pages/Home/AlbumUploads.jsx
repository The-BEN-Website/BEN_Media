import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Uploads = () => {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=9');
        setImageList(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);


  return (
    <section className="w-11/12 mx-auto flex flex-col gap-10">
      <h1 className="font-my_font text-3xl font-bold">Latest Uploads</h1>
      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {imageList.map((image) => (
          <span key={image.id} className=''>
            <Link to={`/teachings/${image.id}`} className='flex flex-col gap-5'>
              <img src={image.download_url} alt={image.author} className="w-full rounded-md"/>
            </Link>
          </span>
        ))}
      </section>
    </section>
  )
}

export default Uploads