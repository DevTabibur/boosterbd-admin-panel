import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = ({ setShow, show }) => {
  const router = useRouter();

  return (
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

      <div className="routes">
        <ul>
          {routes.map((r, index) => {
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
                  className={`flex items-center ${
                    router.pathname === r.path && "active"
                  } relative`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-1 mt-[1px] text-[18px]">{r.route}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

const routes = [
  {
    route: "Dashboard",
    path: "/",
    icon: "",
  },
  {
    route: "Products",
    path: "/products",
    icon: "",
  },
  {
    route: "Analytic",
    path: "/analytic",
    icon: "",
  },
  {
    route: "Order",
    path: "/order",
    icon: "",
  },
  {
    route: "Customer",
    path: "/customer",
    icon: "",
  },
  {
    route: "Review",
    path: "/review",
    icon: "",
  },
];
