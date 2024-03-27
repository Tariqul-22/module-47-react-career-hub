import { useLoaderData, useParams } from "react-router-dom";
import ContactInformation from "../Contact Information/ContactInformation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utilities/localStorage";


const JobDetails = () => {
    // Don't Recommended
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);

    const job = jobs.find(job => job.id === idInt);
    console.log(job);
    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information } = job

    const handleApplyNow = () =>{
        saveJobApplication(idInt);
        toast('Applied Successfully..')
    }
    return (
        <div>
            <p className="text-2xl font-bold text-center py-16">job Details</p>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-2/3 space-y-3">
                    <p><span className="font-bold">Job Description: </span>{job_description}</p>
                    <p><span className="font-bold">Job Responsibility: </span>{job_responsibility}</p>
                    <p className="font-bold">Educational Requirements: </p>
                    <p>{educational_requirements}</p>
                    <p className="font-bold">Experiences: </p>
                    <p>{experiences}</p>

                </div>
                <div className="md:w-1/3">
                    <div className="p-6 bg-indigo-50">
                        <div className="space-y-2">
                            <h3 className="font-bold">Job Details</h3>
                            <hr />
                            <p><span className="font-semibold">Salary: </span>{salary}</p>
                            <p><span className="font-semibold">Job Title: </span>{job_title}</p>
                        </div>
                        <div className="mt-6">
                            <ContactInformation info={contact_information}></ContactInformation>
                        </div>
                    </div>
                    <button onClick={handleApplyNow} className="btn btn-primary w-full mt-5">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;