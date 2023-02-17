import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import { useState } from "react";
import Loader from "@/Components/Shared/Loader/Loader";
import { useRouter } from "next/router";
import useActiveUser from "@/Hooks/useActiveUser";

const index = () => {
  const router = useRouter();
  const [resetLoading, setResetLoading] = useState(false);
  const [activeUser, isLoading] = useActiveUser();
  console.log("activeUser", activeUser);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const url = `http://localhost:5000/api/v1/forgot-password`;

  const onSubmit = async (data, e) => {
    const email = data.email;
    if (activeUser?.email) {
      localStorage.removeItem("accessToken");
    } else {
      setResetLoading(true);
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log("data posted", data);

          setResetLoading(false);
          if (data.code === 401 || data.code === 402 || data.code === 403) {
            Swal.fire({
              title: data?.status,
              text: data?.error,
              icon: "error",
            });
          } else {
            localStorage.removeItem("accessToken");
            Swal.fire({
              title: " Email was sent!",
              text: "Check your Email, for reset",
              icon: "success",
            });
            router.push("/");
          }
        });
    }
  };

  const goBack = () => {
    return router.push("/");
  };

  if (resetLoading) {
    return <Loader />;
  }
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="rounded-lg shadow-lg bg-red-100 w-96 p-8">
          <h1 className="text-accent text-mono font-bold text-3xl mb-4">
            Forgot Password?
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-6">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label my-1 py-0">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500 ">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500 ">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            <div className="buttons py-3">
              <button
                onClick={goBack}
                type="button"
                className="border btn-1 border-[#465EED] bg-[#465EED] text-white rounded-xl px-10 py-2  transition duration-500 ease select-none hover:bg-[#465EED] focus:outline-none focus:shadow-outline"
              >
                Go Back
              </button>
              <button>
                <input
                  className="border btn-1 ml-4 border-[#465EED] bg-[#465EED] text-white rounded-xl px-10 py-2  transition duration-500 ease select-none hover:bg-[#465EED] focus:outline-none focus:shadow-outline"
                  type="submit"
                  value="RESET"
                ></input>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default index;
