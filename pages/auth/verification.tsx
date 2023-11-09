import Layout from "@/components/Layout/Layout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Verification = () => {
  const [dots, setDots] = useState(".");
  const [message, setMessage] = useState(`Verifying User ${dots}`);
  const router = useRouter();
  
  const { email, token } = router.query;
  
  useEffect(() => {
    // console.log("Query: " + JSON.stringify(router.query));
    const verify = async () => {
      if (email && token) {
        try {
          const response = await fetch(
            `https://api.beastmoodsee.com/api/v1/verify?email=${email}&token=${token}`
          );

          if (!response.ok) {
            const responseData = await response.json();

            if (
              responseData.message ===
                "Email and token are required to verify the email address!" ||
              responseData.message ===
                "Invalid verification link. Request another email verification link!"
            ) {
              setMessage("Invalid verification link.");
            }
          } else {
            const responseData = await response.json();
            setMessage(
              responseData?.message || "Email verification completed."
            );
          }
        } catch (error) {
          setMessage((error as string) || "Email verification failed");

          console.log("ERROR: " + error);
          console.log("Verification email failed");
        }
      }
    };

    verify();
  }, [email, router.query, token]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length >= 3 ? "." : prevDots + "."));
    }, 400);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Layout>
      <div className='text-3xl text-center flex items-center justify-center !h-screen'>
        {message}
      </div>
    </Layout>
  );
};

export default Verification;
