import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        // In dev: proxied to http://localhost:3000/api/data
        // In prod: same origin
        const response = await axios.get("/api/data");
        console.log("response, ", response);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(
          err.response?.data?.message || err.message || "Failed to fetch"
        );
        setLoading(false);
      }
    };
    const fetchUsers = async () => {
      try {
        // In dev: proxied to http://localhost:3000/api/data
        // In prod: same origin
        const response = await axios.get("/api/users");
        console.log("response, ", response);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(
          err.response?.data?.message || err.message || "Failed to fetch"
        );
        setLoading(false);
      }
    };
    fetchUsers();
    fetchItems();
  }, []);

  if (loading) return <div className="p-8 text-center">Loading data...</div>;
  if (error) return <div className="p-8 text-red-600">Error: {error}</div>;

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR!
        </p>
      </div>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-indigo-700 mb-6 text-center">
            Vite + Express API Demo
          </h1>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <p className="text-lg font-medium text-gray-800 mb-2">
              API Message:{" "}
              <span className="text-indigo-600">{data.message}</span>
            </p>
            <p className="text-sm text-gray-600">
              Fetched at: {new Date(data.timestamp).toLocaleString()}
            </p>
          </div>
          {/*  */}
          <br />
          <br />
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Data Items
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.items.map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition"
              >
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-3xl font-extrabold mt-2">{item.value}</p>
                <p className="text-3xl font-extrabold mt-2">{item.word}</p>
              </div>
            ))}
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.data.map((item) => (
              <div
                key={data.id}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition"
              >
                <h3 className="text-xl font-bold">{item.email}</h3>
                <h3 className="text-xl font-bold">{item.name}</h3>
                <h3 className="text-xl font-bold">{item.password}</h3>
                <h3 className="text-xl font-bold">{item.role}</h3>
                <p className="text-3xl font-extrabold mt-2">{item.value}</p>
              </div>
            ))}
          </div> */}

          <div className="mt-10 text-center text-sm text-gray-500">
            <p>
              Dev: Frontend on{" "}
              <code className="bg-gray-200 px-2 py-1 rounded">5173</code> →
              Proxied API
            </p>
            <p>
              Prod: Everything served from Express on port{" "}
              <code className="bg-gray-200 px-2 py-1 rounded">3000</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
