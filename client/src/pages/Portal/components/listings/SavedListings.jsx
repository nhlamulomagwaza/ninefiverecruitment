import { FaBookmark } from "react-icons/fa";
import "./listings.scss";
import moment from "moment/moment";
import toast from "react-hot-toast";
import Filter from "../filter/Filter";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { NineFiveContext } from "../../../../store/AppContext";
import MoonLoader from "react-spinners/MoonLoader";

const SavedListings = () => {
  const {
    loadingJobs,
    search,
    candidateprofile,
    authUserToken,
    authUser,
    setWantedToBookMark,
    wantedToBookMark,
    selectedCity,
    remoteOnly,
    secureLS,
  } = useContext(NineFiveContext);

  const navigate = useNavigate();
  const [savedJobs, setSavedJobs] = useState([]);
  const [jobsPerPage, setJobsPerPage] = useState(10); // Set initial number of jobs per page
  const handleLoadMore = () => {
    if (jobsPerPage < filteredJobs.length) {
      setJobsPerPage(jobsPerPage + 10); // Increase the number of jobs per page
    }
  };
  useEffect(() => {
    if (candidateprofile && authUserToken) {
      fetchSavedJobs();
    }
  }, [candidateprofile, authUserToken]);

  const fetchSavedJobs = async () => {
    try {
      const candidateId = candidateprofile?._id.toString().trim();
      const res = await fetch(`https://ninefiverecruitment.onrender.com/api/jobsportal/getsavedjobs/${candidateId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authUserToken}`,
        },
      });
      const data = await res.json();

      console.log(data);
      if (data.error) {
        throw new Error(data.error);
      }
      setSavedJobs(data.jobs);
    } catch (error) {
      console.error(error);
    }
  };

  const saveJob = async (jobId) => {
    try {
      if (savedJobs.some((job) => job._id === jobId)) {
        toast.error("Job has already been saved");
        return;
      }

      const candidateId = candidateprofile?._id.toString().trim();
      const res = await fetch(
        `/api/jobsportal/savejobs/${jobId}/${candidateId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${authUserToken}`,
          },
        }
      );

      const data = await res.json();
      console.log(data);
      if (data.error) {
        throw new Error(data.error);
      }

      if (!res.ok) {
        toast.error(data.message);
      } else if (res.ok) {
        toast.success("Job saved successfully");

        // Fetch saved jobs to update client state
        const savedJobsRes = await fetch(
          `/api/jobsportal/getsavedjobs/${candidateId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${authUserToken}`,
            },
          }
        );

        if (savedJobsRes.ok) {
          const savedJobsData = await savedJobsRes.json();
          setSavedJobs(savedJobsData.jobs);
        } else {
          console.error("Error fetching saved jobs:", savedJobsRes.status);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const unsaveJob = async (jobId) => {
    try {
      if (!savedJobs.some((job) => job._id === jobId)) {
        toast.error("Job has not been saved");
        return;
      }

      const candidateId = candidateprofile?._id.toString().trim();
      const res = await fetch(
        `/api/jobsportal/unsavejobs/${jobId}/${candidateId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${authUserToken}`,
          },
        }
      );

      const data = await res.json();
      console.log(data);
      if (data.error) {
        throw new Error(data.error);
      }

      if (!res.ok) {
        toast.error(data.message);
      } else if (res.ok) {
        toast.success("Job unsaved successfully");

        // Update savedJobs state
        const updatedSavedJobs = savedJobs.filter((job) => job._id !== jobId);
        setSavedJobs(updatedSavedJobs);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleBookmarkClick = (jobId) => {
    if (candidateprofile && authUser) {
      if (savedJobs.some((job) => job._id === jobId)) {
        unsaveJob(jobId);
      } else {
        saveJob(jobId);
      }
    } else {
      const portalBookmarkPrompt = confirm(
        "You have to create a candidate profile to bookmark a job, would you like to create one now?"
      );

      if (portalBookmarkPrompt) {
        setWantedToBookMark(true);
        localStorage.remove("wantedToBookMark");
        localStorage.setItem(
          "wantedToBookMark",
          JSON.stringify(wantedToBookMark)
        );

        if (wantedToBookMark) {
          console.log("wanted to bookmark now true");
        }
        navigate("/uploadresume");
      } else {
        alert("Well, another time then");
      }
    }
  };

  const filteredJobs = savedJobs?.filter((job) => {
    return (
      job.location.toLowerCase().includes(selectedCity.toLowerCase()) &&
      (job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.industry.toLowerCase().includes(search.toLowerCase())) &&
      (remoteOnly ? job.remote : true)
    );
  });

  return (
    <>
      <Filter />
      <div className="listings-container">
        {loadingJobs ? (
          <div className="spinner">
            <MoonLoader color="#2430D7" size={35} />
          </div>
        ) : (
          <>
            <section className="listings">
              {filteredJobs.slice(0, jobsPerPage).map((job) => (
                <li key={job._id} className="job-card">
                  <Link
                    className="links"
                    to={`/jobsportal/jobdescription/${job._id}`}
                  >
                    <div className="column1">
                      <p className="company-name">{job.company}</p>
                      <h1 className="job-title">{job.title} </h1>
                      <div className="job-details">
                        <p className="post-date">
                          Posted: {moment(job.createdAt).format("YYYY-MM-DD")}
                        </p>
                        <div className="location">{job.location}</div>
                        <div className="job-type">
                          {job.remote ? "Remote" : "On-Site"}
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="column2">
                    <div className="tags">
                      <div className="tag">{job.industry} </div>
                      <FaBookmark
                        className="bookmark"
                        size={15}
                        color={
                          savedJobs.some((savedJob) => savedJob._id === job._id)
                            ? "#2430D7"
                            : null
                        }
                        onClick={() => handleBookmarkClick(job?._id)}
                      />
                    </div>
                  </div>
                </li>
              ))}
              <div className="matches">
                <p>
                  {filteredJobs.length == 0 && search.length > 0
                    ? `No Matches For "${search}"`
                    : null}
                </p>
              </div>

              <div className="matches">
                <p>
                  {filteredJobs.length == 0 && search.length == 0
                    ? "No jobs saved yet"
                    : null}
                </p>
              </div>
            </section>
            <div className="btn">
              {jobsPerPage < filteredJobs.length ? (
                <button className="load-more" onClick={handleLoadMore}>
                  Load More
                </button>
              ) : null}{" "}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SavedListings;
