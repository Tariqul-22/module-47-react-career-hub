import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utilities/localStorage";
import AppliedJobsCard from "../AppliedJobsCard/AppliedJobsCard";


const Applied = () => {
    const [appliedJobs, setAppliedJobs] = useState([])
    const [displayJobs, setDisplayJobs] = useState([])
    const jobs = useLoaderData();
    // console.log(jobs);

    const handleJobsFilter = filter => {
        if (filter === 'All') {
            setDisplayJobs(appliedJobs)
        }
        else if (filter === 'Remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs);
        }
        else if (filter === 'Onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsiteJobs);
        }
    }
    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobApplied = jobs.filter(job => storedJobIds.includes(job.id))
            console.log(jobApplied);
            setAppliedJobs(jobApplied);
            setDisplayJobs(jobApplied)
        }

    }, [jobs])
    return (
        <div>
            <p className="text-2xl font-bold text-center py-16">Applied Jobs : {appliedJobs.length}</p>
            <div>
                <details className="dropdown">
                    <summary className="m-1 btn">Filter</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleJobsFilter('All')}><a>All</a></li>
                        <li onClick={() => handleJobsFilter('Remote')}><a>Remote</a></li>
                        <li onClick={() => handleJobsFilter('Onsite')}><a>Onsite</a></li>
                    </ul>
                </details>
            </div>
            <div>
                {
                    displayJobs.map(appliedJob => <AppliedJobsCard key={appliedJob.id} appliedJob={appliedJob}></AppliedJobsCard>)
                }
            </div>
        </div>
    );
};

export default Applied;