const lightMode = {
  text: "#000",
  background: "#f5f5f5",
  card: "#fafafa",
  primary: "#3379ce",
  secondary: "#17377b",
  labelText: "rgba(0, 0, 0, 0.5)",
  inputBorder: "rgba(0, 0, 0, 0.25)",
  cardShadow: "rgba(0, 0, 0, 0.1)",
};

const darkMode = {
  text: "#fff",
  background: "#272727",
  card: "#212121",
  primary: "#3379ce",
  secondary: "#77b0f4",
  labelText: "rgba(255, 255, 255, 0.5)",
  inputBorder: "rgba(255, 255, 255, 0.25)",
  cardShadow: "rgba(255, 255, 255, 0.1)",
};

const themes = Object.freeze({
  light: lightMode,
  dark: darkMode,
});

export default themes;
