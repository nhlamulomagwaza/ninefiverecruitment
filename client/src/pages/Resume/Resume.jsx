import Auth from "../../components/Auth";
import PagesHeader from "../../components/PagesHeader";
import "../../styles/pages/resume.scss";
import { Slide } from "react-awesome-reveal";
import { useContext, useState, useEffect } from "react";
import { NineFiveContext } from "../../store/AppContext";
import toast from "react-hot-toast";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useNavigate } from "react-router-dom";

const Resume = () => {
  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [industry, setIndustry] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState(0);
  const [resume, setResume] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const {
    authUser,
    authUserToken,
    logoutUser,
    setProfileComplete,
    profileComplete,
  } = useContext(NineFiveContext);

  const username = authUser?.username || "there";
  const navigate = useNavigate();

  useEffect(() => {
    const candidateProfile = JSON.parse(
      localStorage.getItem("ninefive-candidate")
    );

    if (candidateProfile && candidateProfile) {
      // Store the candidate profile in the context
      setProfileComplete(true);
      // Redirect to the candidate profile page
      navigate("/candidateprofile");
    } else {
      // Fetch candidate profile from the backend if not already stored
      fetchCandidateProfile();
    }
  }, [navigate, setProfileComplete, profileComplete]);

  useEffect(() => {
    const candidateProfile = JSON.parse(
      localStorage.getItem("ninefive-candidate")
    );

    if (candidateProfile) {
      navigate("/candidateprofile");
    } else {
      fetchCandidateProfile().catch((error) => {
        console.error(error);
      });
    }
  }, []);

  const fetchCandidateProfile = async () => {
    try {
      const res = await fetch(`/api/candidates/getcandidates/`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authUserToken}`,
        },
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      if (res.ok) {
        // Check if the response contains multiple candidate objects
        if (Array.isArray(data)) {
          // Filter the candidate objects based on the userId
          const candidateProfile = data.find(
            (candidate) => candidate.userId === authUser._id
          );

          if (candidateProfile) {
            // Store the candidate profile in local storage and context
            localStorage.setItem(
              "ninefive-candidate",
              JSON.stringify(candidateProfile)
            );
            setProfileComplete(true);
            location.reload();
          } else {
            toast.error("Candidate profile not found.");
          }
        } else {
          // Store the single candidate profile in local storage and context
          localStorage.setItem(
            "ninefive-candidate",
            JSON.stringify(data.candidates)
          );
          setProfileComplete(true);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleCompleteProfile = async (e) => {
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
        `/api/candidates/createcandidate/${authUser?._id}`,
        {
          method: "POST",
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
        toast.success("Candidate Profile Created");
        localStorage.setItem(
          "ninefive-candidate",
          JSON.stringify(data.candidate)
        );
        setTimeout(() => {
          location.reload();
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
                Hey {username}, complete your candidate profile to get started
              </h1>
              <p className="uploadresume-details">
                We all hate filling long forms and creating new accounts. We
                would like to apologize for taking the same approach. But in
                this case, filling in your details is essentially creating a
                robust profile on our system that we will use to carefully place
                you in your dream role.
              </p>
            </div>

            <div className="uploadresume-forms">
              <form
                className="createprofile-form"
                onSubmit={handleCompleteProfile}
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
                        onChange={(e) => setName(e.target.value)}
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
                        onChange={(e) => setSurName(e.target.value)}
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
                        onChange={(e) => setEmail(e.target.value)}
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
                      "Complete Profile"
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

export default Resume;
