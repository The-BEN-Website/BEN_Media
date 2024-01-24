import Header from './Gallery/Header';
import GalleryList from './Gallery/GalleryList';

const App = () => {
  return (
      <div className='flex flex-col gap-14'>
        <Header />
        <GalleryList />
      </div>
  );
};

export default App;
