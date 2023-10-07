import { StaticImageData } from "next/image";
import React, { ReactNode, createContext, useContext, useState } from "react";

type FormContext = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  username: string;
  image: string | null;
  formErrors: {
    email: string;
    password: string;
    username: string;
  };
  setFirstName: (name: string) => void;
  setLastName: (name: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setUsername: (username: string) => void;
  setImage: (image: string | null) => void;
  setFormErrors: React.Dispatch<
    React.SetStateAction<{
      email: string;
      password: string;
      username: string;
    }>
  >;
};

type FormContextProviderType = {
  children: ReactNode;
};

const FormContext = createContext<FormContext | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within FormContextProvider");
  }

  return context;
};

export const FormContextProvider: React.FC<FormContextProviderType> = ({
  children,
}) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [image, setImage] = useState<string | null>("");
  const [formErrors, setFormErrors] = useState<{
    email: string;
    password: string;
    username: string;
  }>({
    email: "",
    username: "",
    password: "",
  });

  return (
    <FormContext.Provider
      value={{
        firstName,
        password,
        lastName,
        email,
        username,
        image,
        setFirstName,
        setLastName,
        setEmail,
        setPassword,
        setUsername,
        setImage,
        formErrors,
        setFormErrors,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
