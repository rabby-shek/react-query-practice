import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://api-gw.onebound.cn/taobao/item_search/?key=t_8801910700445&secret=20230519&q=all&page=1&page_size=10&lang=en&cache=no");
        setUsers(response.data);
        console.log(response.data);
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
  console.log(users);
  return (
    <div>
      <h1>Home</h1>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <ul>
        {users.items.item.map((user) => (
          <li key={user.id}>{user.name}</li> // Adjust based on API data structure
        ))}
      </ul>
    </div>
  );
};

export default Home;
