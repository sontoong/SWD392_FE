import { languages } from "../../constants/language";
import {
  Contract,
  EnterpriseProject,
  FreelancerProject,
  OptionalRequirements,
  Project,
} from "../models/project";
import { Transaction } from "../models/transaction";
import { UserDetail } from "../models/user";
import { formatCurrency } from "./utils";

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

export function generateTimeToComplete(type: Project["timeToComplete"]) {
  switch (type) {
    case "<1 month":
      return "Ít hơn 1 tháng";
    case "1-3 month":
      return "1-3 tháng";
    case ">3 month":
      return "Hơn 3 tháng";
    default:
      return "";
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

export function generateProjectFundingType(type: Project["funding"]) {
  switch (type) {
    case "fixed":
      return "Theo dự án";
    case "hourly":
      return "Theo giờ";
    default:
      return "";
  }
}

export function generateProjectFunding(
  type: Project["funding"],
  freelancerRequirement: Project["freelancerRequirement"],
  initialFunding: Project["initialFunding"],
) {
  switch (type) {
    case "fixed":
      return formatCurrency(initialFunding);
    case "hourly":
      if (freelancerRequirement) {
        switch (freelancerRequirement) {
          case "junior":
            return "Dưới 100.000VND";
          case "senior":
            return "100.000VND - 500.000VND";
          case "expert":
            return "Trên 500.000VND";
          default:
            return "";
        }
      } else {
        return ""; // Handle case when freelancerRequirement is undefined
      }
    default:
      return "";
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

export function generateRoleMsg(role: UserDetail["role"]) {
  switch (role) {
    case "freelancer":
      return "Nhà tuyển dụng";
    case "enterprise":
      return "Nguời ứng tuyển";
    default:
      return "Chưa xác định";
  }
}

export function generateFreelancerProjectStatus(
  status: FreelancerProject["status"],
) {
  switch (status) {
    case "doing":
      return "Đang làm việc";
    case "stopped":
      return "Đã ngưng làm";
    case "contracting":
      return "Chờ kí hợp đồng";
    case "verifying":
      return "Đang duyệt";
    case "denied":
      return "Từ chối";
    default:
      return "";
  }
}

export function generateEnterpriseProjectStatus(
  status: EnterpriseProject["status"],
) {
  switch (status) {
    case "doing":
      return "Đang làm việc";
    case "closed":
      return "Đã đóng";
    case "hiring":
      return "Đang tuyển dụng";
    default:
      return "";
  }
}

export function generateTransactionType(type: Transaction["type"]) {
  switch (type) {
    case "cash-out":
      return "Rút tiền";
    case "transaction":
      return "Chuyển tiền";
    default:
      return "";
  }
}

export function generateDepositType(
  type: Contract["depositType"],
  fund: Contract["fund"],
) {
  switch (type) {
    case "full":
      return `Đặt cọc ${fund} cho toàn bộ công việc`;
    case "period ":
      return "Đặt cọc theo từng hạng mục công việc";
  }
}

export function generateRating(type: OptionalRequirements["rating"]) {
  switch (type) {
    case "all":
      return `Tất cả`;
    case ">3 stars":
      return "Trên 3 sao";
    case ">4 stars":
      return "Trên 4 sao";
  }
}

export function generateLanguage(type: languages) {
  switch (type) {
    case "all":
      return "Tất cả";
    case "vn":
      return "Tiếng Việt";
    case "en":
      return "Tiếng Anh";
    case "cn":
      return "Tiếng Trung";
  }
}

export function generateProjectCompleted(
  type: OptionalRequirements["minimumCompletedProjects"],
) {
  switch (type) {
    case "all":
      return "Tất cả";
    case "<3 projects":
      return "Ít hơn 3 project";
    case "5-10 projects":
      return "5 đến 10 project";
    case ">10 projects":
      return "Nhiều hơn 10 project";
  }
}
