import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import Loader from "../Shared/Loader/Loader";

const Sidebar = ({ setShow, show }) => {
  const router = useRouter();
  

  return (
    <>
      <div className="side-bar relative">
        {show && (
          <button
            className="mr-3 absolute right-0 top-[20px]"
            onClick={() => {
              setShow(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
        <h1 className="logo flex items-center justify-center">
          <img src="/images/logo.png" width={53} alt="" />
          <span className="ml-2">Dashboard</span>
        </h1>

        {/* routes */}
        <div className="routes">
          <ul className="relative">
            {routes.map((r, index) => {
              {
                return (
                  <li key={index} className="relative flex items-center ">
                    {router.pathname === r.path && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={8}
                        stroke="currentColor"
                        className="w-4 h-4 absolute left-0 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                        />
                      </svg>
                    )}
                    <Link
                      href={r.path}
                      className={`flex items-center pb-2 ${
                        router.pathname === r.path && "active"
                      } relative`}
                    >
                      <div className="mr-4">{r.icon}</div>
                      <span className="ml-1 mt-[1px] text-[18px]">
                        {r.route}
                      </span>
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

const routes = [
  {
    route: "Dashboard",
    path: "/",
    sub_route: [],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    route: "Products",
    path: "/products",
    sub_route: [],
    icon: (
      <svg fill="currentColor" viewBox="0 0 16 16" className="w-6 h-6">
        <path d="M8.186 1.113a.5.5 0 00-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 011.114 0l7.129 2.852A.5.5 0 0116 3.5v8.662a1 1 0 01-.629.928l-7.185 2.874a.5.5 0 01-.372 0L.63 13.09a1 1 0 01-.63-.928V3.5a.5.5 0 01.314-.464L7.443.184z" />
      </svg>
    ),
  },
  {
    route: "Analytic",
    path: "/analytic",
    sub_route: [],
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M22.84 2.998v17.999a2.983 2.983 0 01-2.967 2.998 2.98 2.98 0 01-.368-.02 3.06 3.06 0 01-2.61-3.1V3.12A3.06 3.06 0 0119.51.02a2.983 2.983 0 013.329 2.978zM4.133 18.055a2.973 2.973 0 100 5.945 2.973 2.973 0 000-5.945zm7.872-9.01h-.05a3.06 3.06 0 00-2.892 3.126v7.985c0 2.167.954 3.482 2.35 3.763a2.978 2.978 0 003.57-2.927v-8.959a2.983 2.983 0 00-2.978-2.988z" />
      </svg>
    ),
  },
  {
    route: "Order",
    path: "/order",
    icon: (
      <svg fill="currentColor" viewBox="0 0 16 16" className="w-6 h-6">
        <path d="M0 1.5A.5.5 0 01.5 1H2a.5.5 0 01.485.379L2.89 3H14.5a.5.5 0 01.49.598l-1 5a.5.5 0 01-.465.401l-9.397.472L4.415 11H13a.5.5 0 010 1H4a.5.5 0 01-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 01-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 100 4 2 2 0 000-4zm7 0a2 2 0 100 4 2 2 0 000-4zm-7 1a1 1 0 110 2 1 1 0 010-2zm7 0a1 1 0 110 2 1 1 0 010-2z" />
      </svg>
    ),
  },
  {
    route: "Customer",
    path: "/customer",
    sub_route: [],
    icon: (
      <svg viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={32}
          d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeMiterlimit={10}
          strokeWidth={32}
          d="M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={32}
          d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={32}
          d="M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154"
        />
      </svg>
    ),
  },
  {
    route: "Review",
    path: "/review",
    sub_route: [],
    icon: (
      <svg fill="currentColor" viewBox="0 0 16 16" className="w-6 h-6">
        <path d="M14 1a1 1 0 011 1v8a1 1 0 01-1 1h-2.5a2 2 0 00-1.6.8L8 14.333 6.1 11.8a2 2 0 00-1.6-.8H2a1 1 0 01-1-1V2a1 1 0 011-1h12zM2 0a2 2 0 00-2 2v8a2 2 0 002 2h2.5a1 1 0 01.8.4l1.9 2.533a1 1 0 001.6 0l1.9-2.533a1 1 0 01.8-.4H14a2 2 0 002-2V2a2 2 0 00-2-2H2z" />
        <path d="M5 6a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0z" />
      </svg>
    ),
  },
  {
    route: "Setting",
    path: "/setting",
    sub_route: [{ route: "Currency", path: "/currency", icon: "" }],
    icon: (
      <svg viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={32}
          d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z"
        />
      </svg>
    ),
  },
  {
    route: "Login",
    path: "/login",
    sub_route: [],
    icon: (
      <svg fill="none" viewBox="0 0 15 15" className="w-6 h-6">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M3 1a1 1 0 00-1 1v11a1 1 0 001 1h7.5a.5.5 0 000-1H3V2h7.5a.5.5 0 000-1H3zm9.604 3.896a.5.5 0 00-.708.708L13.293 7H6.5a.5.5 0 000 1h6.793l-1.397 1.396a.5.5 0 00.708.708l2.25-2.25a.5.5 0 000-.708l-2.25-2.25z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];
