// Components
import HomeAnimatedPage from "../components/homepage/HomeAnimatedPage";
import Categories from "../components/homepage/Categories";
import Hero from "../components/homepage/Hero";
import TopRatedWorkshops from "../components/homepage/TopRatedWorkshops";
import Banner from "../components/homepage/Banner";

function Home() {
  return (
    <div className="homepage w-full flex gap-6 flex-col items-center transition-all duration-300">
      <Hero />
      <Categories />
      <TopRatedWorkshops />
      <Banner />
    </div>
  );
}

export default Home;
