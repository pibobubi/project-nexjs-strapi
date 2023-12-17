// hooks/useFetchUserData.ts
import { useEffect, useState } from "react";

const useFetchUserData = (token: string) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    async function fetchUserData(token: string) {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}/api/users/me`,
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
        setUserInfo(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    if (token)
    fetchUserData(token);
  }, [token]);

  return userInfo;
};

export default useFetchUserData;
