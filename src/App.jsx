import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="mx-auto mt-8">
      <Sidebar />
      <div className="text-4xl text-center">Main content</div>
    </div>
  );
}

export default App;
