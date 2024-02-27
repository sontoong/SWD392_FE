import { Project } from "../models/project";
import { UserDetail } from "../models/user";

export function generateRequirementMsg(role: Project["freelancerRequirement"]) {
  switch (role) {
    case "junior":
      return {
        title: "Mới đi làm",
        desc: "Tôi đang kiếm freelancer kinh nghiệm từ 2 đến 5 năm",
        short: "2-5 năm",
        priceDesc: "Dưới 100.000VND",
      };
    case "senior":
      return {
        title: "Chuyên viên",
        desc: "Tôi đang kiếm freelancer kinh nghiệm từ 2 đến 5 năm",
        short: "2-5 năm",
        priceDesc: "100.000VND - 500.000VND",
      };
    case "expert":
      return {
        title: "Chuyên gia",
        desc: "Tôi đang kiếm freelancer kinh nghiệm từ 5 năm trở lên",
        short: "3-5 năm",
        priceDesc: "Trên 500.000VND",
      };
    default:
      return {};
  }
}

export function generateProjectTypeMsg(type: Project["projectType"]) {
  switch (type) {
    case "longterm":
      return "Dài hạn";
    case "shortterm":
      return "Ngắn hạn";
    case "unknown":
      return "Chưa biết";

    default:
      break;
  }
}

export function generateVerifyMsg(verified: UserDetail["isVerified"]) {
  switch (verified) {
    case true:
      return "Đã xác thực";
    case false:
      return "Chưa được xác thực";

    default:
      return "Chưa được xác thực";
  }
}
