// hooks/useFetchUsersData.ts
import { useEffect, useState } from "react";

const useFetchUsersData = (token: string) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUserData(token: string) {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}/api/users/`,
          {
            headers: {
                Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const userData = await response.json();
        setUsers(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    if (token)
    fetchUserData(token);
  }, [token]);

  return users;
};

export default useFetchUsersData;
