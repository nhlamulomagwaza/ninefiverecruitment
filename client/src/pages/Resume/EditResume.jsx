import Auth from "../../components/Auth";
import PagesHeader from "../../components/PagesHeader";
import "../../styles/pages/resume.scss";
import { Slide } from "react-awesome-reveal";
import { useContext, useState, useEffect } from "react";
import { NineFiveContext } from "../../store/AppContext";
import toast from "react-hot-toast";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useNavigate } from "react-router-dom";
import { VscSmiley } from "react-icons/vsc";

const EditResume = () => {
  const {
    authUser,
    authUserToken,
    logoutUser,
    setProfileComplete,
    candidateprofile,
    setProfileUpdated,
  } = useContext(NineFiveContext);

  const [name, setName] = useState(candidateprofile?.name);
  const [surname, setSurName] = useState(candidateprofile?.surname);
  const [email, setEmail] = useState(candidateprofile?.email);
  const [phone, setPhone] = useState(candidateprofile?.phone);
  const [industry, setIndustry] = useState(candidateprofile?.industry);
  const [yearsOfExperience, setYearsOfExperience] = useState(
    candidateprofile?.yearsOfExperience
  );
  const [resume, setResume] = useState(candidateprofile?.resume);
  const [loading, setLoading] = useState(false);

  const username = authUser?.username || "there";
  const navigate = useNavigate();
  useEffect(() => {
    const candidateProfile = JSON.parse(
      localStorage.getItem("ninefive-candidate")
    );

    if (!candidateProfile && !candidateProfile?.userId) {
      navigate("/candidateprofile");
    }
  }, [navigate]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    //VALIDATE USER INPUT

    if (
      !name.trim() ||
      !surname.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !industry.trim() ||
      yearsOfExperience < 0 ||
      !resume
    ) {
      toast.error("Please fill in all the fields", {
        position: "top-center",
      });
      return;
    }
    //VALIDATE EMAIL INPUT
    if (email == !authUser?.email) {
      toast.error(
        "Please write the email that you used to create your NineFive account"
      );
    }

    //VALIDATE YEARS OF EXPERIENCE

    if (yearsOfExperience > 100 || yearsOfExperience < 0) {
      toast.error("Number of years are invalid");
      return;
    }

    //VALIDATE PHONE  NUMBER

    if (phone.includes(String)) {
      return toast.error("A phone number may not have a letter in it");
    }
    if (phone.length > 10) {
      return toast.error("A phone number may not exceed 10 digits");
    }

    //BACKEND COMMUNICATION LOGIC

    try {
      setLoading(true);
      const formData = new FormData(); // Create a new FormData instance
      formData.append("name", name);
      formData.append("surname", surname);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("industry", industry);
      formData.append("yearsOfExperience", yearsOfExperience);
      formData.append("resume", resume); // Append the selected file to the FormData

      const res = await fetch(
        `https://ninefiverecruitment.onrender.com/api/candidates/updatecandidate/${authUser?._id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${authUserToken}`,
          },

          body: formData,
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
        toast.success("Candidate Profile Updated");

        setProfileUpdated(true);
        // Merge the new data with the existing data in local storage
        const existingCandidate =
          JSON.parse(localStorage.getItem("ninefive-candidate")) || {};
        const updatedCandidate = { ...existingCandidate, ...data.candidate };
        localStorage.setItem(
          "ninefive-candidate",
          JSON.stringify(updatedCandidate)
        );

        setTimeout(() => {
          navigate("/candidateprofile");
        }, 1000);

        setProfileComplete(true);
        /*    
       if(profileComplete){

        
       } */

        setLoading(false);
      }

      console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* HEADER */}
      <PagesHeader />

      {authUser ? null : (
        <>
          <div className="dimmed-background">
            <div className="auth-overlay"></div>
            <Auth />
          </div>
        </>
      )}

      <section className="uploadresume">
        <Slide direction="right" triggerOnce duration={1000}>
          <div className="uploadresume-content">
            <div className="uploadresume-header">
              <h1 className="uploadresume-title">
                Hey {username} <VscSmiley style={{ marginLeft: "2px" }} />,
                let's update your profile
              </h1>
              <p className="uploadresume-details">
                Feel free to change or update something you no longer like in
                your profile. After all, we are constantly sending out candidate
                profiles to companies, and your profile having most up to date
                information is essential.
              </p>
            </div>

            <div className="uploadresume-forms">
              <form
                className="createprofile-form"
                onSubmit={handleUpdateProfile}
              >
                {/* FIRST COLUMN */}

                <div className="form-column">
                  {/* NAMES */}
                  <div className="dual-input-container">
                    <div className="inputsection">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        id=""
                        placeholder="e.g. John"
                        value={name}
                        onClick={() =>
                          toast.error(
                            "You can only update the phone, industry, years of experience and resume fields"
                          )
                        }
                        //onChange={(e)=> setName(e.target.value)}
                      />
                    </div>

                    <div className="inputsection">
                      <label htmlFor="surname">Surname</label>
                      <input
                        type="text"
                        name="surname"
                        id=""
                        placeholder="e.g. Smith"
                        value={surname}
                        onClick={() =>
                          toast.error(
                            "You can only update the phone, industry, years of experience and resume fields"
                          )
                        }

                        //onChange={(e)=> setSurName(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* CONTACT DETAILS */}
                  <div className="dual-input-container">
                    <div className="inputsection">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="e.g. email@example.com"
                        value={email}
                        onClick={() =>
                          toast.error(
                            "You can only update the phone, industry, years of experience and resume fields"
                          )
                        }

                        // onChange={(e)=> setEmail(e.target.value)}
                      />
                    </div>
                    <div className="inputsection">
                      <label htmlFor="phone">Phone number</label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="e.g. 012 345 6789"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                {/* SECOND COLUMN */}
                {/* EXPERIENCE */}

                <div className="form-column">
                  <div className="dual-input-container">
                    <div className="inputsection">
                      <label htmlFor="industry">Industry</label>
                      <input
                        type="text"
                        name="industry"
                        id="industry"
                        placeholder="e.g. Civil Engineering"
                        value={industry}
                        onChange={(e) => setIndustry(e.target.value)}
                      />
                    </div>
                    <div className="inputsection">
                      <label htmlFor="experience">Years of experience</label>
                      <input
                        type="number"
                        name="experience"
                        id="experience"
                        placeholder="e.g. 3"
                        value={yearsOfExperience}
                        onChange={(e) => setYearsOfExperience(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* UPLOAD RESUME */}

                  <div className="inputsection">
                    <label htmlFor="resume">Attach resume</label>
                    <input
                      type="file"
                      name="resume"
                      id="resume"
                      onChange={(e) => setResume(e.target.files[0])}
                    />
                  </div>

                  <button type="submit" id="complete-btn">
                    {loading ? (
                      <ScaleLoader
                        className="loader"
                        color="white"
                        height={10}
                      />
                    ) : (
                      "Update Profile"
                    )}
                  </button>

                  <button onClick={logoutUser}>Logout</button>
                </div>
              </form>

              <section className="candidateprofile"></section>
            </div>
          </div>
        </Slide>
      </section>
    </>
  );
};

export default EditResume;
