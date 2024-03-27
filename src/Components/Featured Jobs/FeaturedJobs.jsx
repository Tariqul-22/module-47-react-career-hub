import { useEffect, useState } from "react";
import FeaturedJob from "../Featured Job/FeaturedJob";


const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);
    const [dataLength, setDataLength] =useState(4)
    useEffect(() => {
        fetch('jobs.json')
            .then(ref => ref.json())
            .then(data => setFeaturedJobs(data))
    }, [])
    return (
        <div>
            <div className="text-center">
                <h3 className="text-5xl">Featured Jobs : {featuredJobs.length}</h3>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {
                    featuredJobs.slice(0, dataLength).map(job => <FeaturedJob key={job.id} job={job}></FeaturedJob>)
                }
            </div>
            <div className={featuredJobs.length === dataLength ? 'hidden' : 'mt-4 flex justify-center'}>
            <button
            onClick={() => setDataLength(featuredJobs.length)} 
            className="btn btn-primary ${featuredJobs.length ===}">View Details</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;