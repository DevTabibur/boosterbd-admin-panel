import Sidebar from "@/Components/Sidebar/Sidebar";
import Topbar from "@/Components/Topbar";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

const index = () => {
  const [show, setShow] = useState(false);
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

          <div className="right-side pb-10">
            <Topbar pageName={"Setting"} show={show} setShow={setShow} />

            <div className="p-6 flex mb-2">
              <Link href={"/currency"} className="text-3xl">Are You Looking For Currency?</Link>
            </div>
            <div className="p-6 flex mb-2">
              <Link href={"/add-account"} className="text-3xl">Are You Looking For Add Account?</Link>
            </div>
            <div className="p-6 flex mb-2">
              <Link href={"/users/profile/abc"} className="text-3xl">Profile</Link>
            </div>
            <div className="p-6 flex mb-2">
              <Link href={"/users"} className="text-3xl">Manage Users</Link>
            </div>
            <div className="p-6 flex mb-2">
              <Link href={"/users/manage"} className="text-3xl">Manage Users Roles</Link>
            </div>
            <div className="p-6 flex mb-2">
              <Link href={"/users/add-account"} className="text-3xl">Add Account Requests</Link>
            </div>
            <div className="p-6 flex mb-2">
              <Link href={"/users/limit-update"} className="text-3xl">Limit Update</Link>
            </div>
            <div className="p-6 flex mb-2">
              <Link href={"/transactions"} className="text-3xl">transactions</Link>
            </div>

          </div>
        </section>
      </main>
    </>
  );
};

export default index;
