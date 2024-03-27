import { SlLocationPin } from "react-icons/sl";
import { CgDollar } from "react-icons/cg";
import { Link } from "react-router-dom";

const AppliedJobsCard = ({ appliedJob }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = appliedJob
    return (
        <div className="p-6 mt-5 border border-solid border-stone-500 rounded-xl flex justify-between items-center">
            <div className="flex gap-4">
                <div className="w-48 h-48 bg-red-50 flex justify-center items-center rounded-lg">
                    <img src={logo} alt="" />
                </div>
                <div className="space-y-3">
                    <h3 className="text-xl font-semibold">{job_title}</h3>
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
                </div>
            </div>
            <div>
                <Link to={`/job/${id}`}>
                    <button className="p-2 bg-violet-600 text-white rounded-lg">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default AppliedJobsCard;