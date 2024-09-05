import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
export const NineFiveContext = React.createContext();
import { useRef } from "react";

const AppContext = ({ children }) => {
  //CONSTANTS

  let authenticated = false;
  const [authUserToken, setAuthUserToken] = useState(
    localStorage.getItem("ninefive-access-token") || null
  );
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("ninefive-user")) || null
  );
  const [candidateprofile, setCandidateProfile] = useState(null);
  const [profileComplete, setProfileComplete] = useState(false);
  const [profileUpdated, setProfileUpdated] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [loadingJobs, setLoadingJobs] = useState(false);
  const [wantedToBookMark, setWantedToBookMark] = useState(false);
  const [showSavedJobs, setShowSavedJobs] = useState(false);

  //This use effect fetches the candidate profile from server
  useEffect(() => {
    const storedCandidateProfile = JSON.parse(
      localStorage.getItem("ninefive-candidate")
    );
    setCandidateProfile(storedCandidateProfile);
  }, []);

  //This function logouts the user
  const logoutUser = () => {
    localStorage.removeItem("ninefive-user");
    localStorage.removeItem("nivefive-access-token");
    localStorage.removeItem("ninefive-candidate");
    toast.success("Logged Out Successfully");

    setTimeout(() => {
      location.reload(); //The auto reload acts as a crutch to avoid an
      //unnecessary reload
    }, 1000);
  };

  //This function deletes the candidate profile
  const deleteCandidateProfile = () => {
    localStorage.removeItem("ninefive-user");
    localStorage.removeItem("nivefive-access-token");
    localStorage.removeItem("ninefive-candidate");

    setTimeout(() => {
      location.reload();
    }, 1500);
  };

  //The following useEffect will fetch jobs from the server
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoadingJobs(true);
        const response = await fetch(`/api/jobsportal/getjobs`, {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await response.json();

        setJobs(data.jobs);
        setLoadingJobs(false);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();


    const interval = setInterval(fetchJobs, 30000);

  // Clean up interval when component unmounts
  return () => clearInterval(interval);
  }, []);

  //The following are the cities which will showup at the filtering system of the jobs portal

  const southAfricanCities = [
    "Cape Town",
    "Johannesburg",
    "Durban",
    "Pretoria",
    "Midrand",
    "Port Elizabeth",
    "Bloemfontein",
    "East London",
    "Mbombela",
    "Kimberley",
    "Umlazi",
    "Vereeniging",
    "Rustenburg",
    "Klerksdorp",
    "Middelburg",
    "Welkom",
    "Bredasdorp",
    "Paarl",
    "Beaufort West",
    "Mthatha",
    "Queenstown",
    "Vryheid",
    "Umtata",
    "Kroonstad",
    "Musina",
    "Upington",
  ];

  //CONSTANTS FOR THE JOBS PORTAL

  const [search, setSearch] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [filterJobs, setFilterJobs] = useState([]);
  const filteredJobs = jobs.filter((job) => {
    return (
      job.location.toLowerCase().includes(selectedCity.toLowerCase()) &&
      (job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.industry.toLowerCase().includes(search.toLowerCase())) &&
      (remoteOnly ? job.remote : true)
    );
  });

  //The function will filter/search jobs based on the selected city
  const handleSelectCity = (event) => {
    /* setSelectedCity(event.target.value); */
    const selectedCity = event.target.value;
    const newJobs = jobs.filter((job) => job.city === selectedCity);
    setSelectedCity(selectedCity);
    setFilterJobs(newJobs);
  };

  const homeShowcaseRef = useRef(null);

  return (
    <NineFiveContext.Provider
      value={{
        authenticated,
        authUser,
        setAuthUser,
        authUserToken,
        setAuthUserToken,
        logoutUser,
        profileComplete,
        setProfileComplete,
        candidateprofile,
        setCandidateProfile,
        deleteCandidateProfile,
        profileUpdated,
        setProfileUpdated,
        jobs,
        setJobs,
        loadingJobs,
        setLoadingJobs,
        filteredJobs,
        setSearch,
        selectedCity,
        setSelectedCity,
        southAfricanCities,
        search,
        remoteOnly,
        setRemoteOnly,
        handleSelectCity,
        wantedToBookMark,
        setWantedToBookMark,
        showSavedJobs,
        setShowSavedJobs,
        homeShowcaseRef,
      }}
    >
      {children}
    </NineFiveContext.Provider>
  );
};

export default AppContext;
