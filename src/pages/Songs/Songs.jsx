import { useState, useEffect } from 'react';
import axios from "axios";
import EmptyList from '../../components/common/EmptyList';
import { Link } from 'react-router-dom';

const Songs = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const apiUrl = `https://chainsaw.pythonanywhere.com/api`;

    axios
        .get(apiUrl)
        .then((response) => {
            console.log(response.data);
            setSongs(response.data);
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
        });
    }, []);

  return (
    <div className='w-10/12 mx-auto flex flex-col gap-5'>
        <h1 className='text-4xl font-medium '>BEN Songs</h1>
      {/* Songs List & Empty View */}
      {!songs.length ? (
        <EmptyList /> 
      ) : (
        <ul className='grid grid-cols-1 w-full lg:w-fit xl:grid-cols-2 gap-14 mx-auto mb-10' >
          {songs.map(({ id, synopsis, series, title, date }) => (
            <li key={id} className='h-fit flex items-center gap-3 rounded-md py-3 '>
              {/* cover */}
              <img src={synopsis} alt={synopsis} className='w-1/2 h-full' />
              {/* header & tag */}
              <section className='w-1/2 flex flex-col gap-10'>
                <span className='flex flex-col gap-2 px-3'>
                    <h2 className='text-lg font-semibold'>{title}</h2>
                </span>
                {/* views and synopsis */}
                <section className='flex justify-between items-center px-3'>
                    <section className='flex items-center gap-3'>
                        <img src={synopsis} className='w-10 h-10 rounded-full' />
                        <span className='flex flex-col gap-1'>
                        <p className='text-sm font-semibold text-my-black' >{series}</p>
                        <p className='text-sm font-semibold text-my-black' >{synopsis}</p>
                        <p className='text-xs text-gray-500'>{date}</p>
                        </span>
                    </section>

                    <Link to={`${series}`} className='flex flex-col gap-5'>
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
