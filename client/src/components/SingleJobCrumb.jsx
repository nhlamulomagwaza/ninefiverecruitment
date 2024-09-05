import Breadcrumbs from "@mui/material/Breadcrumbs";
import { styled } from "@mui/material/styles";
import Link from "@mui/material/Link";
import { useLocation } from "react-router";
const BreadCrumb = () => {
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
          Jobs Portal
        </Link>
      </StyledBreadcrumbs>
    </div>
  );
};

export default BreadCrumb;
