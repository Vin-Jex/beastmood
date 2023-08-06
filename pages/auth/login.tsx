import Login from "@/components/Auth/Login";
import Layout from "@/components/Layout/Layout";
import Button from "@/components/Molecules/Input/Button";
import React from "react";

export default function login(): JSX.Element {
  return (
    <Layout>
      <Login />
    </Layout>
  );
}
