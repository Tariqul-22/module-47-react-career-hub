import { SlLocationPin } from "react-icons/sl";
import { CgDollar } from "react-icons/cg";
import { Link } from "react-router-dom";

const FeaturedJob = ({ job }) => {
    console.log(job);
    const { id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job
    return (
        <div className="border border-solid border-stone-500 p-6 rounded-xl space-y-3">
            <img className="h-10" src={logo} alt="" />
            <h3 className="text-xl">{job_title}</h3>
            <p>{company_name}</p>
            <div className="flex gap-5">
                <button className="px-2 py-1 border border-red-500 rounded-md">{remote_or_onsite}</button>
                <button className="px-2 py-1 border border-red-500 rounded-md">{job_type}</button>
            </div>
            <div className="flex gap-4">
                <div className="flex gap-2 items-center">
                    <SlLocationPin />
                    <p>{location}</p>
                </div>
                <div className="flex gap-2 items-center">
                    <CgDollar />
                    <p>Salary : {salary}</p>
                </div>
            </div>
            <Link to={`/job/${id}`}>
                <button className="p-2 bg-violet-600 text-white rounded-lg">View Details</button>
            </Link>

        </div>
    );
};

export default FeaturedJob;