import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users");
        setUsers(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Home</h1>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li> // Adjust based on API data structure
        ))}
      </ul>
    </div>
  );
};

export default Home;
