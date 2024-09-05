import Breadcrumbs from "@mui/material/Breadcrumbs";
import { styled } from "@mui/material/styles";
import Link from "@mui/material/Link";
import { useLocation } from "react-router";
const BreadCrumb = () => {
  const location = useLocation();
  const extractPageTitle = location.pathname.split("/").pop();
  let pageTitle;

  switch (extractPageTitle) {
    case "contact":
      pageTitle = "Contact Us";
      break;
    case "about":
      pageTitle = "About Us";
      break;
    case "services":
      pageTitle = "Services";
      break;
    case "termsandconditions":
      pageTitle = "Terms & Conditions";
      break;
    case "uploadresume":
      pageTitle = "Upload Resume";
      break;
    case "jobsportal":
      pageTitle = "Jobs Portal";
      break;
    case "careers":
      pageTitle = "Careers";
      break;
    case "privacypolicy":
      pageTitle = "Privacy Policy";
      break;
    case "candidateprofile":
      pageTitle = "Your Profile";
      break;
    case "editprofile":
      pageTitle = "Edit Profile";
      break;
    case "jobsportal/jobdecription":
      pageTitle = "Jobs Portal";
      break;
    default:
      pageTitle = "Home";
      break;
  }

  const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
    "& .MuiBreadcrumbs-separator": {
      color: "white", // Change the color of the slash to white
    },
  }));
  function handleClick(event) {
    event.preventDefault();
  }
  return (
    <div role="presentation" onClick={handleClick}>
      <StyledBreadcrumbs aria-label="breadcrumb">
        <Link color="#fff" style={{ cursor: "default" }}>
          Home
        </Link>
        <Link color="#fff" style={{ cursor: "default" }}>
          Pages
        </Link>
        <Link
          underline="hover"
          color="white"
          to="/material-ui/react-breadcrumbs/"
          aria-current="page"
          style={{ cursor: "default" }}
        >
          {pageTitle}
        </Link>
      </StyledBreadcrumbs>
    </div>
  );
};

export default BreadCrumb;
