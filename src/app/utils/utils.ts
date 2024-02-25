import { Project } from "../models/project";

export const formatCurrency = (amount: number) => {
  return amount.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
};

export const formatDateToLocal = (
  dateStr: string,
  locale: string = "vi-VN",
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

export const formatToTimeDifference = (
  timeDifference: number,
  locale: string = "vi-VN",
) => {
  const options: Intl.RelativeTimeFormatOptions = {
    numeric: "auto",
  };
  const formatter = new Intl.RelativeTimeFormat(locale, options);

  if (timeDifference < 60) {
    return formatter.format(-Math.floor(timeDifference), "second");
  } else if (timeDifference < 3600) {
    return formatter.format(-Math.floor(timeDifference / 60), "minute");
  } else if (timeDifference < 86400) {
    return formatter.format(-Math.floor(timeDifference / 3600), "hour");
  } else {
    return formatter.format(-Math.floor(timeDifference / 86400), "day");
  }
};

export const calculateDateToNow = (time: number, locale: string = "vi-VN") => {
  //exclude the milisecond from Date
  const today = Math.floor(Date.now() / 1000);

  const timeDifference = today - time;
  return formatToTimeDifference(timeDifference, locale);
};

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};

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
