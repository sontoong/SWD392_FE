import { Button, Card } from "antd";
import BannerImg from "../../assets/HomeBanner.png";
import Card1 from "../../assets/Card-1.png";
import Card2 from "../../assets/Card-2.png";
import Card3 from "../../assets/Card-3.png";
import CardL from "../../assets/Card-Left.png";
import CardR from '../../assets/Card-Right.png'
import { AudioOutlined, DollarCircleOutlined, FileDoneOutlined, FileProtectOutlined, TeamOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const cardItems = [
  {
    img: Card1,
    header: "Hàng ngàn hồ sơ ứng viên chất lượng, có chuyên môn",
    description:
      "Tất cả ứng viên tìm việc Fulltime & Freelancer đều phải qua quy trình xét duyệt khắt khe của Wellancer",
  },
  {
    img: Card2,
    header: "Mạng lưới Người Giới Thiệu ứng viên khắp toàn quốc",
    description:
      "Giúp bạn tìm kiếm & “săn” những tài năng phù hợp với mọi yêu cầu tuyển dụng của bạn nhanh chóng & chuẩn xác",
  },
  {
    img: Card3,
    header: "Tuyển dụng Freelancer theo nhu cầu Doanh nghiệp",
    description:
      "Đáp ứng mọi nhu cầu tuyển dụng nhân sự cho mọi vị trí project freelancer",
  },
];

const Reasons = [
  {
    icon: <TeamOutlined/>,
    title:'Hiệu quả hơn với mạng lưới Người Giới Thiệu',
    description:'Mạng lưới Người Giới Thiệu ứng viên là những chuyên viên tuyển dụng trên toàn quốc sẽ “săn” cho bạn những ứng viên chất lượng mà chỉ có từ những mối quan hệ đặc biệt của họ.',
  },
  {
    icon: <FileDoneOutlined/>,
    title:'Hồ sơ được lọc kỹ trước khi gửi đến Nhà Tuyển Dụng',
    description:'Tất cả hồ sơ từ nguồn trực tiếp trên Wellancer hay từ Người Giới Thiệu đều được sàng lọc và phải đạt trên 95% yêu cầu tuyển dụng mới được gửi đến Nhà Tuyển Dụng.',
  },
  {
    icon: <AudioOutlined/>,
    title:'Phỏng vấn trực tuyến - Tăng tỉ lệ dự phỏng vấn',
    description:'Duy nhất tại Wellancer, bạn có thể linh hoạt đặt lịch phỏng vấn & chọn hình thức phỏng vấn trực tuyến, giảm thiểu tình trạng huỷ phỏng vấn vì những “bất ngờ”.',
  },
  {
    icon:<DollarCircleOutlined/>,
    title:'Tiết kiệm lên đến 70% chi phí tuyển dụng',
    description:'Với ưu thế hệ thống mạng lưới Người Giới Thiệu ứng viên ở mọi lĩnh vực, bạn sẽ tiết kiệm được đến 70% chi phí tuyển dụng so với khi bạn thuê dịch vụ Headhunter để tìm những nhân tài cho bạn.',
  },
  {
    icon:<FileProtectOutlined/>,
    title:'Bảo hành tuyển dụng trong vòng 2 tháng',
    description:'Khi bạn tuyển dụng nhân sự qua Wellancer, chúng tôi sẽ bảo hành tuyển dụng trong vòng 2 tháng kể từ ngày ứng viên bắt đầu đi làm tại công ty bạn.',
  },
]

export default function home() {
  return (
    <div>
      {/* Banner */}
      <div>
        <div
          className="mb-[4rem] flex w-full flex-col items-center bg-repeat-x py-8 pb-[30rem]"
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
          <Link to={'/'}>
              <Button
                type="primary"
                className="h-[3rem] px-[3rem] text-[1.5rem] rounded-none"
                style={{backgroundColor:"#74BA7B"}}
              >
                Trở thành Freelancer
              </Button>
            </Link>
            <Link to={'/'}>
              <Button className="h-[3rem] px-[3rem] text-[1.5rem]"
                style={{borderColor:"#74BA7B", color:'#74BA7B'}}
              >
                Tuyển Freelancer
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* Banner */}


      {/* Segment 1*/}
        <div className="mb-[5rem] flex flex-col items-center">
          <div className="flex flex-col items-center mb-[2rem]">
            <h1 className="text-[2rem] font-bold">
              Kết Nối Đúng Người, Đúng Project
            </h1>
            <h2 className="text-[1.2rem]">
              Tăng hiệu quả tuyển dụng - Tiết kiệm ngân sách{" "}
            </h2>
          </div>
          <div className="mb-[5rem] flex justify-between w-[70%]">
            {cardItems.map((card, index) => (
              <Card
                key={index}
                bordered={false}
                style={{
                  boxShadow:"rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
                }}
                className="text-center w-[30%]"
              >
                <img src={card.img} alt={card.header} />
                <h1 className="font-bold text-[1.2rem]">{card.header}</h1>
                <p>{card.description}</p>
              </Card>
            ))}
          </div>
          <Link to={'/'}>
            <Button
                type="primary"
                className="h-[3rem] px-[3rem] text-[1.5rem] rounded-none"
                style={{backgroundColor:"#74BA7B"}}
              >
                Kết nối ngay tài năng bạn cần
            </Button>
          </Link>
        </div>
      {/* Segment 1*/}

      {/* Segment 2*/}
        <div className="mb-[4rem] flex flex-col items-center">
          <div className="mb-[2rem] text-center">
            <h1 className="text-[2rem] font-bold">
              Tại Sao Nên Tuyển Dụng Tại Wellancer?
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[80%] mb-[2rem]">
            {Reasons.map((reason, index) => (
              <div key={index} className="flex flex-col items-start w-[80%]">
                <div className="mb-4">
                  <div className="text-[3rem] text-[#74BA7B]">{reason.icon}</div>
                  <h3 className="text-lg font-semibold mt-2">{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              </div>
            ))}
              <div className="flex flex-col items-center w-[80%] bg-[#74BA7B] text-white text-center px-[5%] py-[8%]">
                  <h1 className="italic mb-[20%]">“ Tuyển dụng nhân tài không khó. Nhưng khó là ở chỗ tìm nhân tài.”</h1>
                  <p className="font-extrabold text-[1.3rem] mb-[20%]">Nhân tài bạn đang tìm đang ở ngay Wellancer</p>
                  <Button
                  type="primary"
                  className="h-[3rem] px-[3rem] text-[1.2rem] rounded-none"
                  style={{backgroundColor:"white", color:"#74BA7B"}}
                  >
                    Tuyển Ngay
                  </Button>
              </div>
          </div>
          <div className="flex justify-center w-[80%]">
            <div className="text-[1.2rem] mr-[5%]">
            <p>Hàng ngàn doanh nghiệp đã tuyển dụng thành công nhiều nhân tài trên Wellancer. </p>
            <p>Tham gia săn tuyển nhân tài ngay với chúng tôi.</p>
            </div>
            <Link to={'/'}>
              <Button
                  type="primary"
                  className="h-[3rem] px-[3rem] text-[1.5rem] rounded-none"
                  style={{backgroundColor:"#74BA7B"}}
                >
                  Tuyển Ngay
              </Button>
            </Link>
          </div>
        </div>
      {/* Segment 2*/}
      {/* Segment 3*/}
        <div>
          <div className="flex flex-col items-center mb-[2rem]">
            <h1 className="text-[2rem] font-bold">
              Cơ Hội Việc Làm & Tăng Thu Nhập
            </h1>
            <h2 className="text-[1.2rem]">
            Tham gia tìm kiếm cơ hội việc làm hấp dẫn & Tăng thu nhập từ việc giới thiệu ứng viên{" "}
            </h2>
          </div>
          <div className="flex justify-evenly">
          <Card
            bordered={false}
            style={{
              boxShadow:"rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
              width:'36%',
              padding:'2%'
            }}
          >
            <div className="flex justify-between">
              <div className="w-[60%]">
                <h1 className="font-bold text-[1.2rem] mb-[10%]">THAM GIA TÌM VIỆC</h1>
                <p className="h-[55%]">Bạn cần tìm project freelancer? Hãy tham gia ngay Wellancer để nhận được nhiều project hấp dẫn.</p>
                <Link to={'/'} className="underline text-[#74BA7B]">Đăng kí ngay</Link>
              </div>
              <img src={CardL} alt="Tham gia tìm việc" className="w-[40%]"/>
            </div>
            </Card>
            <Card
            bordered={false}
            style={{
              boxShadow:"rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
              width:'36%',
              padding:'2%'
            }}
          >
            <div className="flex justify-between">
              <img src={CardR} alt="Tham gia tìm việc" className="w-[45%]"/>
              <div className="w-[55%] text-right">
                <h1 className="font-bold text-[1.2rem] mb-[10%]">THAM GIA GIỚI THIỆU ỨNG VIÊN</h1>
                <p className="h-[50%]">Bạn đang sở hữu kha khá hồ sơ ứng viên “xịn xò”. Hãy giới thiệu các công việc trên Wellancer cho ứng viên của bạn & nhận tiền thưởng hấp dẫn.</p>
                <Link to={'/'} className="underline text-[#74BA7B]">Đăng kí ngay</Link>
              </div>
            </div>
            </Card>
          </div>
        </div>
      {/* Segment 3*/}
    </div>
  );
}
