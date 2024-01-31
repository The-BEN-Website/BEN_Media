import { useState, useEffect } from 'react';
import EmptyList from '../../components/common/EmptyList';
import { Link } from 'react-router-dom';

const Songs = () => {
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]); 

  const fetchData = async () => {
    try {
      const Key = "36c51d08021748ddaa2f57785caedb1e"
      const response = await fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${Key}`, {
        method: 'GET',
        mode: 'cors',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data)
      setSongs(data.articles);
      setFilteredSongs(data.articles);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='w-10/12 mx-auto flex flex-col gap-5'>
        <h1 className='text-4xl font-medium '>BEN Songs</h1>
      {/* Blog List & Empty View */}
      {!filteredSongs.length ? (
        <EmptyList /> 
      ) : (
        <ul className='grid grid-cols-1 w-full lg:w-fit xl:grid-cols-2 gap-14 mx-auto mb-10' >
          {filteredSongs.map(({ id, author, description, title, urlToImage, publishedAt, url }) => (
            <li key={id} className='h-fit flex items-center gap-3 rounded-md py-3 '>
              {/* cover */}
              <img src={urlToImage} alt={author} className='w-1/2 h-full' />
              {/* header & tag */}
              <section className='w-1/2 flex flex-col gap-10'>
                <span className='flex flex-col gap-2 px-3'>
                    <h2 className='text-lg font-semibold'>{title}</h2>
                </span>
                {/* views and author */}
                <section className='flex justify-between items-center px-3'>
                    <section className='flex items-center gap-3'>
                        <img src={urlToImage} className='w-10 h-10 rounded-full' />
                        <span className='flex flex-col gap-1'>
                        <p className='text-sm font-semibold text-my-black' >{author}</p>
                        <p className='text-xs text-gray-500'>{publishedAt}</p>
                        </span>
                    </section>

                    <Link to={`${url}`} className='flex flex-col gap-5'>
                    <p className='text-xs bg-my-red px-3 py-2 text-white rounded-md cursor-pointer'>Download</p>
                    </Link>
                </section>
              </section>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Songs;
