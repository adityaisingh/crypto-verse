import {
  AppBar,
  Container,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { CurrencyState } from "../context/CurrencyContext";

const Header = () => {
  const { currency, setCurrency } = CurrencyState();

  // console.log(currency);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar style={{ backgroundColor: "black" }} position="static">
        <Container>
          <Toolbar>
            <Link to="/" style={{ flex: 1 }}>
              <Typography
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "bolder",
                  fontSize: "x-large",
                  cursor: "pointer",
                  color: "gold",
                }}>
                Crypto Verse
              </Typography>
            </Link>

            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginLeft: 15,
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}>
              <MenuItem value={"INR"}>INR</MenuItem>
              <MenuItem value={"USD"}>USD</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default Header;
