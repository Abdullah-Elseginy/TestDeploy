import "./App.css";

function App() {
  return (
    <div style={styles.divStyle}>
      <Mycompomnent />
      <p style={styles.textStyle}>my name is abdullah ahmed elseginy</p>
    </div>
  );
}
const Mycompomnent = () => {
  return (
    <div>
      <h1>Seginy IS Your Father</h1>
      <button
        onClick={() => {
          alert("say hi");
        }}
      >
        {" "}
        clic me
      </button>
    </div>
  );
};

export default App;

const styles = {
  divStyle: {
    // backgroundColor: "Red",
    padding: "50px",
    // boxSizing: "bordeBox",
  },
  textStyle: {
    fontSize: "20px",
    backgroundColor: "blue",
  },
};
