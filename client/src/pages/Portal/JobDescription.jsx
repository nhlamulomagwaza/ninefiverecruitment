import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";
import PagesHeader from "../../components/SingleJobHeader";
import "../../styles/pages/jobdesciption.scss";
import MoonLoader from "react-spinners/MoonLoader";
import { NineFiveContext } from "../../store/AppContext";
import toast from "react-hot-toast";
const JobDescription = () => {
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const { jobId } = useParams(); // Get the jobId from the URL parameters
  const { candidateprofile, authUserToken } = useContext(NineFiveContext);
  const [loading, setLoading] = useState(false);

  const [setApplied] = useState(false);
  const fetchJobData = async () => {
    const response = await fetch(`https://ninefiverecruitment.onrender.com/api/jobsportal/getjob/${jobId}`);
    const data = await response.json();
    setJob(data.job);
    console.log(data.job);
  };

  useEffect(() => {
    fetchJobData();
  }, []);

  const withdrawApplication = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://ninefiverecruitment.onrender.com/api/jobsportal/withdrawapplication/${jobId}/${candidateprofile?._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authUserToken}`,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        toast.success("Application withdrawn successully");
        setLoading(false);
        setApplied(false); // Updating the applied state to reflect the job application withdrawal
        setTimeout(() => {
          navigate("/jobsportal");
        }, 1500);
      }

      console.log(data);
      if (!response.ok) {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };


  const redirectToSignUp= ()=>{

    let confirmRedirect= confirm('No candidate profile found, would you like to create your profile now?');

    if(confirmRedirect){

      navigate('/uploadresume');
    }else return;

    
  }
  const applyForJob = async () => {

    if(!candidateprofile || !authUserToken){
      return redirectToSignUp();
    }
    try {
      setLoading(true);
      const response = await fetch(
        `https://ninefiverecruitment.onrender.com/api/jobsportal/apply/${jobId}/${candidateprofile?._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authUserToken}`,
          },
        }
      );
      const data = await response.json();

      if (response.ok) {
        toast.success("Successfully applied to the job");
        setLoading(false);
        setTimeout(() => {
          navigate("/jobsportal");
        }, 1500);
      }

      console.log(data);
      if (!response.ok) {
       // return toast.error(data.message);
      }

      if (data.message === "You have already applied for this job" || response.status === 400) {
        setApplied(true);
           setLoading(false);
        let widthDrawApplicationConfirm = confirm(
          "You have already applied for this job, Would you like to withdraw the application instead?"
        );
        if (widthDrawApplicationConfirm) {
          withdrawApplication();
        } else {
          alert("No problem then");
          navigate("/jobsportal");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* HEADER */}

      <PagesHeader />

      {/* CONTENT */}

      <section className="jobdescription">
        {job ? (
          <div className="jobdescription-content">
            <div className="jobdescription-header">
              <div className="job-info">
                <h1 className="job-title">{job?.title}</h1>
                <p className="job-company">{job?.company}</p>
                <div className="job-locations">
                  <p className="location">{job?.location}</p>{" "}
                  <p className="remote">{job?.remote ? "Remote" : "On-Site"}</p>
                </div>
              </div>

              <div className="job-cta">
                <div
                  className="apply-now-btn"
                  onClick={() => applyForJob()}
                  style={{ margin: "auto" }}
                >
                  {loading ? (
                    <ScaleLoader color="white" height={10} />
                  ) : (
                    "Apply Now"
                  )}
                </div>
              </div>
            </div>

            <div className="job-description-details">
              <p>{job?.description}</p>
            </div>
          </div>
        ) : (
          <div
            className="spinner"
            style={{
              margin: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "2rem",
              marginTop: "2rem",
            }}
          >
            <MoonLoader color="#2430D7" size={45} />
          </div>
        )}
        <div className="back-to-portal">
          <button
            className="back-to-portal-btn"
            onClick={() => navigate("/jobsportal")}
          >
            Back
          </button>
        </div>
      </section>
    </>
  );
};

export default JobDescription;
