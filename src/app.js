const App = () => {
  const apiUrl = process.env.APP_API_URL;
  return <h1>{apiUrl}</h1>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
