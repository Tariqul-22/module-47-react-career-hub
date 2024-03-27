import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utilities/localStorage";
import AppliedJobsCard from "../AppliedJobsCard/AppliedJobsCard";


const Applied = () => {
    const [appliedJobs, setAppliedJobs] = useState([])
    const jobs = useLoaderData();
    // console.log(jobs);
    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if(jobs.length > 0){
            const jobApplied = jobs.filter(job => storedJobIds.includes(job.id))
            console.log(jobApplied);
            setAppliedJobs(jobApplied)
        }

    },[])
    return (
        <div>
            <p className="text-2xl font-bold text-center py-16">Applied Jobs : {appliedJobs.length}</p>

            <div>
                {
                    appliedJobs.map(appliedJob => <AppliedJobsCard key={appliedJob.id} appliedJob={appliedJob}></AppliedJobsCard>)
                }
            </div>
        </div>
    );
};

export default Applied;