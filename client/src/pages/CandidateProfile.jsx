import { useContext, useEffect, useState } from "react";
import PagesHeader from "../components/PagesHeader";
import "../styles/pages/candidateprofile.scss";
import { IoPersonOutline } from "react-icons/io5";
import { NineFiveContext } from "../store/AppContext";
import { FaDownload } from "react-icons/fa6";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import ScaleLoader from "react-spinners/ScaleLoader";
import MoonLoader from "react-spinners/MoonLoader";

const CandidateProfile = () => {
  const [userprofile, setUserProfile] = useState({});
  const [loading, setLoading] = useState(false);
  const [profileLoad, setProfileLoad] = useState(false);
  const {
    candidateprofile,
    authUserToken,
    deleteCandidateProfile,
    profileUpdated,
    wantedToBookMark,
    setWantedToBookMark,
  } = useContext(NineFiveContext);
  //const id= candidateprofile?._id.toString().trim();
  //console.log(id)
  const navigate = useNavigate();
  {
    profileUpdated ? location.reload() : null;
  }

  let backToPortalPrompt;

  useEffect(() => {
    const candidateProfile = JSON.parse(
      localStorage.getItem("ninefive-candidate")
    );

    if (candidateProfile && candidateProfile.userId) {
      navigate("/candidateprofile");
    } else {
      navigate("/uploadresume");
    }
  }, [navigate]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (candidateprofile && candidateprofile._id) {
        const id = candidateprofile._id.toString().trim();
        try {
          setProfileLoad(true);

          const response = await fetch(`/api/candidates/getCandidate/${id}`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${authUserToken}`,
            },
          });

          if (!response.ok) {
            throw new Error("Failed to fetch user profile");
          }
          const data = await response.json();
          setUserProfile(data);
          setProfileLoad(false);

          console.log(data);
        } catch (error) {
          console.error("Error fetching user profile:", error);
        }
      }
    };

    fetchUserProfile();
  }, [candidateprofile, authUserToken]);

  const getFileNameFromUrl = (url) => {
    const parts = url.split("/");
    const fileName = parts[parts.length - 1];
    const trimmedFileName =
      fileName.length > 6 ? fileName.substring(0, 6) + "..." : fileName;
    return trimmedFileName;
  };

  const handleDeleteCandidateProfile = async () => {
    if (candidateprofile && candidateprofile._id) {
      const id = candidateprofile._id.toString().trim();

      const confirmDelete = confirm(
        "Are you sure you want to delete your profile? This action cannot be undone"
      );

      if (confirmDelete) {
        try {
          setLoading(true);
          const response = await fetch(
            `/api/candidates/deletecandidate/${id}`,
            {
              method: "DELETE",
              headers: {
                Authorization: `Bearer ${authUserToken}`,
              },
            }
          );

          if (!response.ok) {
            throw new Error("Failed to delete candidate profile");
          }
          const data = await response.json();
          toast.success("Candidate profile deleted successfully");
          console.log(data);
          deleteCandidateProfile();

          setTimeout(() => {
            location.reload();
          }, 1000);
          setLoading(false);
        } catch (error) {
          console.error("Error deleting candidate account", error);
        }
      } else {
        alert("No candidate profile to delete");
      }
    }
  };

  const handleWantedToBookMark = () => {
    const storedValue = localStorage.getItem("wantedToBookMark");
    if (storedValue === "true") {
      backToPortalPrompt = confirm(
        "Great!, you can now go back to the portal to save jobs to your profile. Would you like to do that now?"
      );
      if (backToPortalPrompt) {
        // navigate('/jobsportal')

        setWantedToBookMark(false);
      } else {
        setWantedToBookMark(false);

        return alert("No problem then");
      }
    }
  };
  useEffect(() => {
    handleWantedToBookMark();
  }, []);
  useEffect(() => {
    if (backToPortalPrompt) {
      navigate("/jobsportal");
    } else {
      setWantedToBookMark(false);

      localStorage.removeItem("wantedToBookMark");
      return;
    }

    localStorage.removeItem("wantedToBookMark");
  }, [wantedToBookMark]);

  return (
    <>
      {/* HEADER */}

      <PagesHeader />

      {/* CONTENT */}

      {profileLoad ? (
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
      ) : (
        <section className="candidateprofile">
          <div className="candidateprofile-content">
            <div className="candidate-card">
              <div className="candidate-card-header">
                <div className="profile-img">
                  <IoPersonOutline size={80} />
                </div>
                <h1>
                  {userprofile?.name || "NineFive"}{" "}
                  {userprofile?.surname || "User"}
                </h1>
              </div>

              <div className="profile-details">
                <div className="profile-detail-item">
                  <p className="item-name">Phone</p> :&nbsp;{userprofile?.phone}
                </div>

                <div className="profile-detail-item">
                  <p className="item-name">Email</p>:&nbsp;
                  {userprofile?.email?.substring(0, 8)}...
                </div>
                <div className="profile-detail-item">
                  <p className="item-name">Industry</p> :&nbsp;
                  {userprofile?.industry}
                </div>
                <div className="profile-detail-item">
                  <p className="item-name">Years</p> :&nbsp;
                  {userprofile?.yearsOfExperience} years
                </div>
                <div className="profile-detail-item">
                  <p className="item-name">Resume</p>
                  :&nbsp;
                  {userprofile?.resume && (
                    <a
                      href={userprofile?.resume}
                      download
                      className="resume-download-btn"
                    >
                      {getFileNameFromUrl(userprofile?.resume)}
                      <FaDownload style={{ marginLeft: "6px" }} />
                    </a>
                  )}
                </div>
                <div className="profile-detail-item">
                  {" "}
                  <p className="item-name">Saved Jobs</p> :{" "}
                  {userprofile?.savedJobs?.length} job(s)
                </div>
              </div>
            </div>

            <div className="candidateprofile-editdelete-account">
              <button
                className="editdeleteaccount-btn"
                onClick={() => navigate("/candidateprofile/editprofile")}
              >
                Edit Profile
              </button>
              <button
                className="editdeleteaccount-btn"
                id="deleteaccount-btn"
                onClick={handleDeleteCandidateProfile}
              >
                {loading ? (
                  <ScaleLoader className="loader" color="white" height={10} />
                ) : (
                  "Delete Account"
                )}
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CandidateProfile;
