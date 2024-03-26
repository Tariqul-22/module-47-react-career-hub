import Banner from "../Banner/Banner";
import FeaturedJobs from "../Featured Jobs/FeaturedJobs";
import JobCategoryList from "../JobCategoryList/JobCategoryList";


const Home = () => {
    return (
        <div>
            <h2>This is my home</h2>
            <Banner></Banner>
            <JobCategoryList></JobCategoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;