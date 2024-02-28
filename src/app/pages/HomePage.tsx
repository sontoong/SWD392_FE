import { Button } from "antd";
import BannerImg from "../../assets/HomeBanner.png";



export default function home() {
  return (
    <div>
    {/* Banner */}
      <div>
        <div
          className="flex w-full flex-col items-center bg-repeat-x py-8 pb-[30rem] mb-[4rem]"
          style={{
            backgroundImage: `url(${BannerImg})`,
          }}
        >
          <div className="mb-[1rem] flex flex-col items-center">
            <h1 className="text-[2rem] font-bold">
              Tuyển Freelancers Chất Lượng Cao - Mọi Lĩnh Vực
            </h1>
            <h2 className="text-[1.2rem]">
              Đáp ứng cho các Project có nhu cầu outsource{" "}
            </h2>
          </div>
          <div className="flex w-[40rem] justify-between">
            <Button
              type="primary"
              className="h-[3rem] bg-[#74BA7B] px-[3rem] text-[1.5rem] text-white"
            >
              Trở thành Freelancer
            </Button>
            <Button className="h-[3rem] border-[#74BA7B] px-[3rem] text-[1.5rem] text-[#74BA7B] ">
              Tuyển Freelancer
            </Button>
          </div>
        </div>
      </div>
    {/* Banner */}
    {/* Segment 1*/}
      <div>
      <div className="mb-[1rem] flex flex-col items-center">
        <h1 className="text-[2rem] font-bold">
          Kết Nối Đúng Người, Đúng Project
        </h1>
        <h2 className="text-[1.2rem]">
          Tăng hiệu quả tuyển dụng - Tiết kiệm ngân sách{" "}
        </h2>
        
      </div>
      </div>
    </div>
  );
}
