import Image from "next/image";

const CustomarReviwe = () => {
    return (
        <div className="mt-10 p-3 shadow-m">
            <div className="flex justify-between items-center">
                <h1 className="text-[24px] font-medium">Analytic</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>

            </div>
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default CustomarReviwe;


const Card = () => {
    return (
        <div className="mt-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Image src={'/images/avater.png'} width={53} height={53}
                        className="shadow"
                    alt=""
                    />
                    <div className="ml-3">
                        <h4 className="text-[18px]   ">Eleanor Pena</h4>
                        <p className="text-[13.33px] text-[#A9A9A9]">Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

                <h2 className="font-bold primary text-[25px]">5.0</h2>
            </div>
        </div>
    )
}