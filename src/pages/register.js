import Loader from "@/Components/Shared/Loader/Loader";
import useActiveUser from "@/Hooks/useActiveUser";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
const Swal = require("sweetalert2");

const register = () => {
  const [activeUser, isLoading] = useActiveUser();
  const [registerLoading, setRegisterLoading] = useState(false);
  const [isActive, setIsActive] = useState("");

  useEffect(() => {
    const isActiveValue = localStorage.getItem("accessToken");
    setIsActive(isActiveValue);
  }, []);

  const router = useRouter();
  // const location = useLocation();
  // const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data, e) => {
    // if user is register once, then he'll not register again before logout.
    if (isActive) {
      Swal.fire({
        title: "Authentication is failed",
        text: "Please logout for again registration",
        icon: "error",
      });
    } else {
      const url = `http://localhost:5000/api/v1/user/register`;
      setRegisterLoading(true);
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("data inside register", data);
          if (data.code === 400) {
            Swal.fire({
              title: data.status,
              text: data?.message,
              icon: "error",
            });
          } else if (data.code === 200) {
            // console.log("everything is perfect", data);
            const token = data?.data?.token;
            localStorage.setItem("accessToken", JSON.stringify(token));
            Swal.fire({
              title: "success",
              text: data?.message,
              icon: "success",
            });
            // it'll giving error. because nextjs is a server side rendering method. so it'll not defined window
            // navigate("/");
            // window.location.reload();
            // nextjs routing system is that:
            router.push("/");
          }
          setRegisterLoading(false);
        });
    }
  };

  // register loading
  if (registerLoading) {
    return <Loader />;
  }

  return (
    <>
      <section className="h-screen">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sample image"
              />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              {/* form */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-row items-center justify-center lg:justify-start mb-4">
                  <p className="text-lg mb-0">Register Your Account</p>
                </div>

                {/* <!-- Name input --> */}
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Your Name"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is Required",
                      },
                    })}
                  />
                  <label className="flex justify-between items-center mb-6">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-600 ">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>

                {/* <!-- Email input --> */}
                <div className="mb-6">
                  <input
                    type="email"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
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
                  <label className="flex justify-between items-center mb-6">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-600 ">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="label-text-alt text-red-600 ">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>

                {/* <!-- Password input --> */}
                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is Required",
                      },
                      minLength: {
                        value: 6,
                        message: "Must be 6 characters or longer",
                      },
                    })}
                  />
                  <label className="flex justify-between items-center mb-6">
                    {errors.password?.type === "required" && (
                      <span className="label-text-alt text-red-600 ">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="label-text-alt text-red-600 ">
                        {errors.password.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="flex justify-between items-center mb-6">
                  <Link href={"/"} className="text-green-800 font-bold">
                    Home
                  </Link>
                </div>

                <div className="text-center lg:text-left">
                  <input
                    type="submit"
                    value="Register"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  />

                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Do you already have an account?
                    <Link
                      href={"/login"}
                      className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default register;
