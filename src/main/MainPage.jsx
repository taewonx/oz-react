import { useContext } from "react";
import { Typography, Button, Stack } from "@mui/material";
import Card from "../common/card/Card";
import StyledBox from "../common/box/StyledBox";
import { MyThemeContext } from "../context/MyThemeContext";
import { AlertContext } from "../context/AlertContext";

const Greeting = () => {
<<<<<<< HEAD
  const { theme } = useContext(MyThemeContext);
  const name = "Taem";
=======
  const name = "Taewon";
>>>>>>> cd0d0115661fa3676709b01361e44e2630df6900
  return (
    <Stack alignItems="center" sx={{ py: 2 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Hello, {name} ({theme})
      </Typography>
    </Stack>
  );
};

const MainPage = () => {
  const showAlert = useContext(AlertContext);
  const handleClick = () => {
    showAlert("Hello, World!", "success");
  };
  return (
    <Stack spacing={3} alignItems="center" sx={{ width: "100%" }}>
      <Greeting />
      <Button variant="contained" color="primary" onClick={handleClick}>
        Click me
      </Button>
      <Card sx={{ width: "100%", maxWidth: 480 }} />
      <StyledBox />
    </Stack>
  );
};

export default MainPage;
