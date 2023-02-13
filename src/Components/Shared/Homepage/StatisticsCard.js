import Image from "next/image";

const StatisticsCard = ({ data }) => {
  return (
    <div className=" rounded-lg  st-card">
      <Image
        src={data.image}
        width={58}
        height={58}
        className="mt-[28px] ml-[26px]"
        alt=""
      />
      <h3 className="text-[18.67px] font-normal leading-3 text-[#A9A9A9] mt-[33px]">
        {data.text}
      </h3>
      <h1 className="text-[32px] mt-[12px] text-[#1A1A1A] font-bold">
        ${data.amount}
      </h1>
      <h4
        className={`mt-[23px] font-medium text-[18.67px] ${
          data.count > 0 ? "text-[#49DA57]" : "text-[#FF772A]"
        }`}
      >
        {data.count > 0 && "+"}
        {data.count}%
      </h4>
    </div>
  );
};

export default StatisticsCard;
