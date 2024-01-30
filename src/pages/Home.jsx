import Header from "./Home/Header";
import Uploads from "./Home/AlbumUploads";
import Verse from "./Home/Verse";
import News from "./Home/News";

const Home = () => {
  return (
    <div className="flex flex-col gap-20">
        <Header />
        <Uploads />
        <Verse />
        <News />
    </div>
  )
}

export default Home