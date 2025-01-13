// import { useState, useEffect } from "react";
// import axios from "axios";
// const getAuthToken = () => localStorage.getItem("authToken");

// const checkUserStatus = () => !!getAuthToken();

// const useAuth = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(checkUserStatus);
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // user login logic starts here
//   const login = async (username, password) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await axios.post("http://localhost:5000/login", {
//         username,
//         password,
//       });
//       const data = response.data;
//       if (response.ok) {
//         localStorage.setItem("authToken", data.token);
//         setUser(data);
//         setIsAuthenticated(true);
//       } else {
//         setError("Invalid username or password");
//         setIsAuthenticated(false);
//       }
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   //   user login logic ends here

//   // handle user logout
//   const logout = () => {
//     localStorage.removeItem("authToken");
//     setIsAuthenticated(false);
//     setUser(null);
//   };

//   const fetchUserData = async () => {
//     if (!isAuthenticated) return;

//     const response = await fetch("http://localhost:5000/users/me", {
//       headers: {
//         Authorization: `Bearer ${getAuthToken()}`,
//       },
//     });

//     if (response.ok) {
//       const data = await response.json();
//       setUser(data);
//     }
//   };

//   useEffect(() => {
//     if (isAuthenticated) {
//       fetchUserData();
//     }
//   }, [isAuthenticated]);

//   return {
//     isAuthenticated,
//     user,
//     login,
//     logout,
//     loading,
//     error,
//   };
// };
// export default useAuth;
import { useState, useEffect } from "react";
import axios from "axios";

const getAuthToken = () => localStorage.getItem("authToken");

const checkUserStatus = () => !!getAuthToken();

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(checkUserStatus());
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // User login logic
  const login = async (username, password) => {
    console.log(username);
    setLoading(true);
    setError(null);
    try {
      // Simulate a login request to the fake JSON server
      const response = await axios.get("http://localhost:5000/users", {
        username,
        password,
      });

      // Mocking response by checking static data
      const userData = response.data.find((user) => user.username === username && user.password === password);
      
      if (userData) {
        const token = "authenticated-user"; // Simulating token return
        localStorage.setItem("authToken", token);
        setUser(userData);
        setIsAuthenticated(true);
      } else {
        setError("Invalid username or password");
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
      console.log(user);
    }
  };

  // User logout logic
  const logout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    setUser(null);
  };

  // Fetching user data logic
  const fetchUserData = async () => {
    if (!isAuthenticated) return;

    try {
      // Fetch the user from the fake JSON server
      const response = await axios.get("http://localhost:5000/users", {
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
        },
      });

      // Find the user that matches the token
      const authenticatedUser = response.data.find((user) => user.token === getAuthToken());

      if (authenticatedUser) {
        setUser(authenticatedUser);
      } else {
        setError("User not found.");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred while fetching user data.");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchUserData();
    }
  }, [isAuthenticated]);

  return {
    isAuthenticated,
    user,
    login,
    logout,
    loading,
    error,
  };
};

export default useAuth;
