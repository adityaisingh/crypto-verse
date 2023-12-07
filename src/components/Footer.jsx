import styled from "@emotion/styled";
import { ThemeProvider, createTheme } from "@mui/material";

const FooterStyle = styled("div")({
  backgroundColor: "inherit",
  boxShadow: "10%",
  position: "static",
  bottom: 0,
  height: "3.75rem",
  marginTop: "1rem",
  width: "100%",
  fontFamily: "MontSerrat",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Footer = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <FooterStyle>
        <div className="footer">
          Created By{" "}
          <i class="fa-solid fa-heart fa-flip" style={{ color: "red" }}></i>{" "}
          <a
            href="https://www.flaticon.com/free-icons/heart"
            title="heart icons"></a>
          <a
            href="https://github.com/adityaisingh"
            target="_blank"
            title="Ayushmaan Jaiswal's GitHub Profile">
            Aditya Singh
          </a>{" "}
          <i className="fa-solid fa-copyright"></i> 2023{" "}
          <strong>
            Crypto<span>Verse</span>
          </strong>
        </div>
      </FooterStyle>
    </ThemeProvider>
  );
};

export default Footer;
