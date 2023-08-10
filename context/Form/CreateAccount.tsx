// context/FormContext.tsx
import { FormData } from "@/Schema/Form/CreateAccount";
import { createContext, useContext, useState } from "react";

// Create the context
export const CreateAccountContext = createContext<{
  formData?: FormData;
  setFormData?: React.Dispatch<React.SetStateAction<FormData>>;
  croppedImage?: Object | string | undefined;
  setCroppedImage?: React.Dispatch<React.SetStateAction<Object | string>>;
}>({
  formData: {
    firstName: "",
    lastName: "",
    email: "",
    // Initialize other form fields here
  },
  setFormData: () => {},
  croppedImage: {},
  setCroppedImage: () => {},
});

export function useFormContext() {
  return useContext(CreateAccountContext);
}
