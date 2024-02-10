import { useState } from "react";

import { Form, InputField } from "../../../components/Form";

import * as z from "zod";

const schema = z.object({
  name: z.string().min(1, "Full Name is Required"),
  email: z.string().min(1, "Email is Required"),
  password: z.string().min(1, "Password is Required").min(8, "Password should be 8 Required"),
});

type RegisterValues = {
  name: string;
  email: string;
  password: string;
};

export const SignupPage = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // const handleSubmit = async (e: React.FormEvent) => {
  //   try {
  //     e.preventDefault();

  //     // const response = await axios.
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div className="w-full max-w-[500px] mx-auto">
      <Form<RegisterValues, typeof schema>
        onSubmit={(values) => console.log(values)}
        schema={schema}
      >
        {({ register, formState }) => (
          <>
            <div>
              <InputField
                type="text"
                label="Full Name"
                registration={register("name")}
                error={formState.errors["name"]?.message}
              />
            </div>
            <div className="mt-4">
              <InputField
                type="email"
                label="Email"
                registration={register("email")}
                error={formState.errors["email"]?.message}
              />
            </div>
            <div className="mt-4">
              <InputField
                type="password"
                label="Password"
                registration={register("password")}
                error={formState.errors["password"]?.message}
              />
            </div>
            <div className="mt-4">
              <button>Signup</button>
            </div>
          </>
        )}
      </Form>
    </div>
  );
};
