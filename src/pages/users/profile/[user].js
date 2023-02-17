import Loader from "@/Components/Shared/Loader/Loader";
import Sidebar from "@/Components/Sidebar/Sidebar";
import Topbar from "@/Components/Topbar";
import useActiveUser from "@/Hooks/useActiveUser";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const index = ({ user }) => {
  const [show, setShow] = useState(false);
  const [activeUser, isLoading] = useActiveUser();
  const { email, _id } = activeUser;
  const router = useRouter();

  // const { slug } = router;
  // useEffect(() => {
  //   if (activeUser?.email !== undefined ) {
  //     setEmail(activeUser?.email);
  //     setId(activeUser?._id)
  //   }
  // }, [activeUser?.email]);

  // useEffect(() =>{
  //   if(activeUser?._id !== undefined){
  //     setId(activeUser?._id)
  //   }
  // }, [activeUser?._id])

  // console.log('email', email)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    console.log("data", data);
    const formData = new FormData();
    // formData.append("email", email);
    // formData.append("name", data.name);
    // formData.append("phoneNumber", data.phoneNumber);
    // formData.append("address", data.address);
    // formData.append("whatsappNumber", data.whatsappNumber);
    // formData.append("behance", data.behance);
    // formData.append("companyWebsite", data.companyWebsite);
    // formData.append("linkedInProfile", data.linkedInProfile);
    // formData.append("githubProfile", data.githubProfile);
    formData.append("nid", data.nid);
    formData.append("tin", data.tin);
    formData.append("bin", data.bin);
    formData.append("imageURL", data.imageURL[0]);
    formData.append("binFile", data.binFile[0]);
    formData.append("tinFile", data.tinFile[0]);
    formData.append("nidFile", data.nidFile[0]);

    const img = data?.imageURL[0];
    // const bin = data?.binFile[0];
    // const tin = data?.tinFile[0];
    // const nid = data?.nidFile[0];
    const validExt = ["png", "jpg", "jpeg", "PNG", "JPG", "JPEG"];

    if (img !== "" || bin !== "" || tin !== "" || nid !== "") {
      // checking image extension
      // imageName.jpeg
      const pos_of_dot_of_img = img?.name.lastIndexOf(".") + 1;
      // const pos_of_dot_of_nid = nid?.name.lastIndexOf(".") + 1;
      // const pos_of_dot_of_bin = bin?.name.lastIndexOf(".") + 1;
      // const pos_of_dot_of_tin = tin?.name.lastIndexOf(".") + 1;
      console.log("pos_of_dot_of_img, ", pos_of_dot_of_img);
      // console.log("pos_of_dot_of_nid, ", pos_of_dot_of_nid);
      // console.log("pos_of_dot_of_bin, ", pos_of_dot_of_bin);
      // console.log("pos_of_dot_of_tin, ", pos_of_dot_of_tin);

      const img_ext = img?.name.substring(pos_of_dot_of_img);
      // const tin_ext = tin?.name.substring(pos_of_dot_of_tin);
      // const nid_ext = nid?.name.substring(pos_of_dot_of_nid);
      // const bin_ext = bin?.name.substring(pos_of_dot_of_bin);

      console.log("img_ext", img_ext);
      // console.log("tin_ext", tin_ext);
      // console.log("nid_ext", nid_ext);
      // console.log("bin_ext", bin_ext);

      const result_of_img = validExt.includes(img_ext);
      // const result_of_nid = validExt.includes(nid_ext);
      // const result_of_tin = validExt.includes(tin_ext);
      // const result_of_bin = validExt.includes(bin_ext);

      console.log("result_of_img", result_of_img);
      // console.log("result_of_nid", result_of_nid);
      // console.log("result_of_tin", result_of_tin);
      // console.log("result_of_bin", result_of_bin);

      if (
        result_of_img === false
        // result_of_nid === false ||
        // result_of_tin === false ||
        // result_of_bin === false
      ) {
        Swal.fire({
          title: "Only jpg, png and jpeg files are allowed",
          icon: "warning",
        });
        return false;
      }
      // checking image size
      else {
        if (parseFloat(img.size / (1024 * 1024)) >= 5) {
          // img size should be under 5 mb
          // perform operation
          Swal.fire({
            title: "File Size must be smaller than 5MB",
            icon: "warning",
          });
          return false;
        } else {
          console.log("everything is perfect");
          // everything is perfect
          const url = `http://localhost:5000/api/v1/user/register/${_id}`;
          fetch(url, {
            method: "PUT",
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: formData,
          })
            .then((res) => res.json())
            .then((data) => {
              console.log("data posted", data);
              if (data.code === 400) {
                Swal.fire({
                  title: data?.message,
                  text: data?.error,
                  icon: "error",
                });
              } else {
                Swal.fire({
                  title: data.status,
                  text: data?.message,
                  icon: "success",
                });
                reset();
                // window.location.reload();
              }
            });
        }
      }
    } else {
      alert("No Image is selected");
      return false;
    }
  };

  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="main-section">
          <div
            className={`left-side ${
              show
                ? "block lg:relative absolute top-0"
                : "md:hidden lg:block hidden"
            }`}
          >
            <Sidebar setShow={setShow} show={show} />
          </div>
          <div className="right-side pb-10 ">
            <Topbar pageName={"Profile"} show={show} setShow={setShow} />
            <section className="main-right   min-h-screen bg-[#E6E6E6]">
              <div className="pt-[75px] md:pl-[50px] pl-5 md:flex items-center">
                <div className="w-[281.21px] h-[281.21px] rounded-full bg-white overflow-hidden">
                  <Image
                    width={280}
                    height={280}
                    src={"/images/profile.jpeg"}
                    alt=""
                  />
                </div>
                <div className="md:ml-[100px] mt-5">
                  <p>Account 100% Complete</p>
                </div>
              </div>

              <section className="grid grid-cols-12 px-5 md:pl-[50px] mt-[26px] pb-10">
                <div className="lg:col-span-3 col-span-12">
                  <h1 className="text-[28.27px] font-medium">Super Admin</h1>
                  <div className=" bg-gray-600 h-[2px] mt-[15px] "></div>
                </div>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="lg:col-span-10 col-span-12 gap-5 grid grid-cols-12 mt-5 w-full"
                >
                  {/* name */}
                  {/* <div className="lg:col-span-6 col-span-12">
                    <label className="text-[16.27px] font-medium">Name</label>
                    <input
                      type="text"
                      className="border mt-2 border-black w-full rounded-md px-3 font-medium py-1"
                      placeholder="Name"
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Name is Required",
                        },
                      })}
                    />
                    <label className="flex justify-between items-center">
                      {errors.name?.type === "required" && (
                        <span className="label-text-alt text-red-600 ">
                          {errors.name.message}
                        </span>
                      )}
                    </label>
                  </div> */}
                  {/* avatar image */}
                  <div className="lg:col-span-6 col-span-12">
                    <label className="text-[16.27px] font-medium">
                      Profile Image
                    </label>
                    <input
                      type="file"
                      className="border mt-2 border-black w-full rounded-md px-3 font-medium py-1"
                      placeholder="profile image"
                      {...register("imageURL", {
                        required: {
                          value: true,
                          message: "profile image is Required",
                        },
                      })}
                    />
                    <label className="flex justify-between items-center">
                      {errors.imageURL?.type === "required" && (
                        <span className="label-text-alt text-red-600 ">
                          {errors.imageURL.message}
                        </span>
                      )}
                    </label>
                  </div>
                  {/* address */}
                  {/* <div className="col-span-12">
                    <label className="text-[16.27px] font-medium">
                      Address
                    </label>
                    <input
                      type="text"
                      className="border mt-2 border-black w-full rounded-md px-3 font-medium py-1"
                      placeholder="Address"
                      {...register("address", {
                        required: {
                          value: true,
                          message: "Address is Required",
                        },
                      })}
                    />
                    <label className="flex justify-between items-center">
                      {errors.address?.type === "required" && (
                        <span className="label-text-alt text-red-600 ">
                          {errors.address.message}
                        </span>
                      )}
                    </label>
                  </div> */}
                  {/* phoneNumber */}
                  {/* <div className="lg:col-span-6 col-span-12">
                    <label className="text-[16.27px] font-medium">
                      Phone Number
                    </label>
                    <div className="md:flex lg:flex block items-center mt-2">
                      <input
                        type="text"
                        className="border  border-black w-full rounded-md px-3 font-medium py-1"
                        placeholder="Phone Number"
                        {...register("phoneNumber", {
                          required: {
                            value: true,
                            message: "Phone Number is Required",
                          },
                        })}
                      />

                      <button className="bg-[#47C363] px-[23px] py-[6px] text-[white] font-medium md:ml-2 mt-1 rounded-lg">
                        Verified
                      </button>
                    </div>
                    <label className="flex justify-between items-center">
                      {errors.phoneNumber?.type === "required" && (
                        <span className="label-text-alt text-red-600 ">
                          {errors.phoneNumber.message}
                        </span>
                      )}
                    </label>
                  </div> */}
                  {/* behance */}
                  {/* <div className="lg:col-span-6 col-span-12">
                    <label className="text-[16.27px] font-medium">
                      Behance
                    </label>
                    <input
                      type="text"
                      className="border mt-2 border-black w-full rounded-md px-3 font-medium py-1"
                      placeholder="Behance Link"
                      {...register("behance")}
                    />
                  </div> */}
                  {/* whatsappNumber */}
                  {/* <div className="lg:col-span-6 col-span-12">
                    <label className="text-[16.27px] font-medium">
                      Whatsapp Number
                    </label>
                    <div className="md:flex lg:flex block items-center justify-between mt-2">
                      <input
                        type="text"
                        className="border  border-black w-full rounded-md px-3 font-medium py-1"
                        placeholder="Whatsapp Number"
                        {...register("whatsappNumber")}
                      />
                      <button className="bg-[#7A8489] w-[122px] px-[8px] py-[6px] text-[white] font-medium md:ml-2 mt-1 rounded-lg flex">
                        Verify Now
                      </button>
                    </div>
                  </div> */}
                  {/* company website */}
                  {/* <div className="lg:col-span-6 col-span-12">
                    <label className="text-[16.27px] font-medium">
                      Company Website
                    </label>
                    <input
                      type="text"
                      className="border mt-2 border-black w-full rounded-md px-3 font-medium py-1"
                      placeholder="Company Website"
                      {...register("companyWebsite")}
                    />
                  </div> */}
                  {/* email */}
                  {/* <div className="lg:col-span-6 col-span-12 cursor-not-allowed">
                    <label className="text-[16.27px] font-medium">Email</label>
                    <div className="md:flex lg:flex block items-center justify-between mt-2">
                      <input
                        type="text"
                        name="email"
                        className="border  border-black w-full rounded-md px-3 font-medium py-1 cursor-not-allowed"
                        placeholder="Email"
                        defaultValue={email}
                        readOnly
                        {...register("email")}
                      />
                      <button className="bg-[#7A8489] w-[122px] px-[8px] py-[6px] text-[white] font-medium md:ml-2 mt-1 rounded-lg flex">
                        Verify Now
                      </button>
                    </div>
                  </div> */}
                  {/* nid */}
                  <div className="lg:col-span-6 col-span-12">
                    <label className="text-[16.27px] font-medium">NID</label>
                    <div className="md:flex lg:flex block items-center justify-between mt-2">
                      <input
                        type="text"
                        className="border  border-black w-full rounded-md px-3 font-medium py-1"
                        placeholder="Nid"
                        name="nid"
                        {...register("nid")}
                      />
                      <label
                        htmlFor="nid"
                        className="border bg-white border-black w-[145.02px] px-[8px] py-[6px] text-black font-medium md:ml-2 mt-1 rounded-lg flex items-center"
                      >
                        Attach File
                      </label>
                      <input
                        type="file"
                        id="nid"
                        className="hidden"
                        name="nidFile"
                        {...register("nidFile")}
                      />
                    </div>
                  </div>
                  {/* linkedInProfile */}
                  {/* <div className="lg:col-span-6 col-span-12">
                    <label className="text-[16.27px] font-medium">
                      LinkdIn Profile
                    </label>
                    <input
                      type="text"
                      className="border mt-2 border-black w-full rounded-md px-3 font-medium py-1"
                      placeholder="LinkdIn Profile Link"
                      {...register("linkedInProfile")}
                    />
                  </div> */}
                  {/* tin */}
                  <div className="lg:col-span-6 col-span-12">
                    <label className="text-[16.27px] font-medium">TIN</label>
                    <div className="md:flex lg:flex block items-center justify-between mt-2">
                      <input
                        type="text"
                        className="border  border-black w-full rounded-md px-3 font-medium py-1"
                        placeholder="TIN"
                        name="tin"
                        {...register("tin")}
                      />
                      <label
                        htmlFor="tin"
                        className="border bg-white border-black w-[145.02px] px-[8px] py-[6px] text-black font-medium md:ml-2 mt-1 rounded-lg flex items-center"
                      >
                        Attach File
                      </label>
                      <input
                        type="file"
                        id="tin"
                        name="tinFile"
                        className="hidden"
                        {...register("tinFile")}
                      />
                    </div>
                  </div>
                  {/* githubProfile */}
                  {/* <div className="lg:col-span-6 col-span-12">
                    <label className="text-[16.27px] font-medium">
                      Github Profile
                    </label>
                    <input
                      type="text"
                      className="border mt-2 border-black w-full rounded-md px-3 font-medium py-1"
                      placeholder="Github Profile"
                      {...register("githubProfile")}
                    />
                  </div> */}
                  {/* bin */}
                  <div className="lg:col-span-6 col-span-12">
                    <label className="text-[16.27px] font-medium">BIN</label>
                    <div className="md:flex lg:flex block items-center justify-between mt-2">
                      <input
                        type="text"
                        className="border  border-black w-full rounded-md px-3 font-medium py-1"
                        placeholder="BIN"
                        name="bin"
                        {...register("bin")}
                      />
                      <label
                        htmlFor="bin"
                        className="border bg-white border-black w-[145.02px] px-[8px] py-[6px] text-black font-medium md:ml-2 mt-1 rounded-lg flex items-center"
                      >
                        Attach File
                      </label>
                      <input
                        type="file"
                        id="bin"
                        className="hidden"
                        name="binFile"
                        {...register("binFile")}
                      />
                    </div>
                  </div>

                  <div className="col-span-12 flex justify-end items-center mt-5">
                    <button className="bg-[#465EED] py-[10px] px-[50px] rounded-lg text-[16px] text-white">
                      EDIT
                    </button>
                    <input
                      className="bg-[#47C363] ml-10 py-[10px] px-[50px] rounded-lg text-[16px] text-white"
                      type="submit"
                      value="SAVE"
                    />
                  </div>
                </form>
              </section>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

// export async function getServerSideProps(context) {
//   const { email } = context.params;
//   console.log("getServerSideProps email", email);

//   // Check if the email parameter in the URL is a valid email address
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     return {
//       notFound: true,
//     };
//   }

//   // Fetch the user's data from your database or API based on the dynamic email
//   // Here, you should replace this with your own function to fetch user data
//   const user = await fetchUserDataByEmail(email);

//   // If the user data is not found, return a 404 response
//   if (!user) {
//     return {
//       notFound: true,
//     };
//   }

//   // If the user data is found, return the user data as props to the Profile component
//   return {
//     props: {
//       user,
//     },
//   };
// }

export default index;
