import { useState, useEffect } from 'react';
import EmptyList from '../../components/common/EmptyList';
import SearchBar from '../../components/Home/SearchBar';
import { Link } from 'react-router-dom';

const Home = () => {
  const [teachings, setTeachings] = useState([]);
  const [filteredTeachings, setFilteredTeachings] = useState([]); 
  const [searchKey, setSearchKey] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('https://picsum.photos/v2/list?page=5&limit=30', {
        method: 'GET',
        mode: 'cors',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setTeachings(data);
      setFilteredTeachings(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  const handleSearchResults = () => {
    const allTeachings = teachings;
    const filteredTeachings = allTeachings.filter((teaching) => {
      // Check if teaching and its category are defined
      return teaching && teaching.category && teaching.category.toLowerCase().includes(searchKey.toLowerCase().trim());
    });
    setFilteredTeachings(filteredTeachings);
  };
  

  const handleClearSearch = () => {
    setFilteredTeachings(teachings);
    setSearchKey('');
  };

  console.log(filteredTeachings.length)
  return (
    <div>
      {/* Search Bar */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchSubmit}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      {/* Blog List & Empty View */}
      {!filteredTeachings.length ? (
        <EmptyList /> 
      ) : (
        <ul className='flex gap-6 justify-center flex-wrap w-fit m-auto mb-10'>
          {filteredTeachings.map(({ id, author, download_url }) => (
            <li key={id} className='h-fit flex flex-col gap-2 border border-gray-100 p-2 rounded-md'>
              {/* cover */}
              <img src={download_url} alt={author} style={{ maxWidth: '400px' }} />
              {/* header & tag */}
              <span className='flex flex-col gap-2'>
                <p className='bg-gradient-to-r from-red-500 via-red-400 to-red-300 w-fit px-3 py-1 rounded-sm text-sm text-white '>Study</p>
                <h2 className='text-xl'>How you can study your bible</h2>
              </span>
              {/* description */}
              <p className='text-gray-400 text-base'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
                <br/> 
                quasi veritatis similique sint libero ipsam porro perspiciatis 
                <br/>
                voluptatibus molestias ut nesciunt, fugiat laudantium
              </p>

              {/* views and author */}
              <section className='flex justify-between items-center'>
                <section className='flex items-center gap-3'>
                <img src={download_url} className='w-10 h-10 rounded-full' />
                <span className='flex flex-col gap-1'>
                  <p className='text-base font-semibold text-my-black' >{author}</p>
                  <p className='text-xs text-gray-500'>Dec 24th, 2023</p>
                </span>
                </section>

                <Link to={`/teachings/${id}`} className='flex flex-col gap-5'>
                  <p className='underline text-xs text-gray-600 cursor-pointer'>View</p>
                </Link>
              </section>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
