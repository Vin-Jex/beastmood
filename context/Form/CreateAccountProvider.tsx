import { useState } from "react";
import { CreateAccountContext } from "./CreateAccount";
import { FormData } from "@/Schema/Form/CreateAccount";

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
  });

  return (
    <CreateAccountContext.Provider value={{ formData, setFormData }}>
      {children}
    </CreateAccountContext.Provider>
  );
}
