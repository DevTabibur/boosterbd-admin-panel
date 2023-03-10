import { currancys } from "@/Components/dummy";
import Sidebar from "@/Components/Sidebar/Sidebar";
import Topbar from "@/Components/Topbar";
import Head from "next/head";
import { useState } from "react";
import CardCurrancy from "./CardCurrancy";

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
            <Topbar pageName={"Currancy"} show={show} setShow={setShow} />

            <section className="main-right  px-5 ">
              <div className="col-span-8">
                <div className="ststistics  grid md:grid-cols-3  mt-[53px]  gap-10">
                  {currancys.map((cr, index) => {
                    return (
                      <CardCurrancy
                        key={index}
                        name={cr.name}
                        amount={cr.amount}
                        code={cr.code}
                        type={cr.type}
                        symbol={cr.symbol}
                      />
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default index;
