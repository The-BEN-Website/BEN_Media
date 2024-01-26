import Header from "./News/Header";
import Banner from "./News/Banner";
import NewsList from  "./News/NewsList"

const News = () => {
  return (
    <div className="flex flex-col gap-20">
        <Header />
        <Banner  />
        <NewsList />
    </div>
  )
}

export default News