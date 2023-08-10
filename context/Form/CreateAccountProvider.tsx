import { useState } from "react";
import { CreateAccountContext } from "./CreateAccount";
import { FormData } from "@/Schema/Form/CreateAccount";

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [croppedImage, setCroppedImage] = useState<Object | string>("");

  return (
    <CreateAccountContext.Provider
      value={{ formData, setFormData, croppedImage, setCroppedImage }}
    >
      {children}
    </CreateAccountContext.Provider>
  );
}
