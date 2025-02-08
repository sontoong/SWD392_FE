interface ErrorCode {
  code: string;
  message: string;
}

const errorCodes = {
  vn: {
    fdAccount: {
      location: { errors: ["Vui lòng nhập địa chỉ"] },
      email: { errors: ["Vui lòng nhập email", "Email không hợp lệ"] },
      nation: { errors: ["Vui lòng chọn đất nước"] },
      phone: {
        errors: ["Vui lòng nhập số điện thoại", "Số điện thoại không hợp lệ"],
      },
    },
    edAccount: {
      registrationDocumentType: { errors: ["Loại giấy tờ là bắt buộc"] },
      identificationNumber: { errors: ["Mã số doanh nghiệp là bắt buộc"] },
      taxNumber: { errors: ["Mã số thuế là bắt buộc"] },
      enterpriseCountry: { errors: ["Quốc gia là bắt buộc"] },
      address: { errors: ["Địa chỉ công ty là bắt buộc"] },
      companyName: { errors: ["Tên công ty là bắt buộc"] },
      companySize: { errors: ["Qui mô công ty là bắt buộc"] },
      companyEmail: { errors: ["Email công ty là bắt buộc"] },
      companyPhone: { errors: ["SĐT công ty là bắt buộc"] },
      website: { errors: ["Địa chỉ trang web không hợp lệ"] },
      videoLink: { errors: ["Đường dẫn video không hợp lệ"] },
      introduction: { errors: ["Miêu tả là bắt buộc"] },
      industryFields: { errors: ["Vui lòng chọn ít nhất một ngành nghề"] },
      firstName: { errors: ["Tên đầu tiên là bắt buộc"] },
      middleName: { errors: ["Tên đệm là bắt buộc"] },
      lastName: { errors: ["Tên cuối cùng là bắt buộc"] },
      dateOfBirth: {
        errors: ["Ngày sinh là bắt buộc", "Ngày sinh không hợp lệ"],
      },
      documentType: { errors: ["Loại tài liệu là bắt buộc"] },
      enterpriseDocument: { errors: ["Tài liệu doanh nghiệp là bắt buộc"] },
      documentNumber: {
        errors: ["Số tài liệu là bắt buộc", "Số tài liệu không hợp lệ"],
      },
      enterpriseEmail: {
        errors: ["Địa chỉ Email không hợp lệ", "Địa chỉ Email là bắt buộc"],
      },
      enterprisePhone: {
        errors: [
          "Số điện thoại phải chứa chỉ các chữ số",
          "Số điện thoại là bắt buộc",
        ],
      },
    },
  },
};

function flattenErrors(
  obj: any,
  parentKey: string = "",
  result: ErrorCode[] = [],
): ErrorCode[] {
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      if (Array.isArray(obj[key])) {
        obj[key].forEach((message: string, index: number) => {
          result.push({
            code: `${parentKey}${key}.${index + 1}`,
            message,
          });
        });
      } else {
        flattenErrors(obj[key], `${parentKey}${key}.`, result);
      }
    }
  }
  return result;
}
export const flattenedErrors: ErrorCode[] = flattenErrors(errorCodes);

export function getErrorMessage(errorCode: string): string | undefined {
  const error = flattenedErrors.find((error) => error.code === errorCode);
  return error ? error.message : undefined;
}

// export function handleError(errorCode: string): void {
//   const errorMessage = getErrorMessage(errorCode);
//   // Handle error, e.g., display message to the user or log it
//   console.error(errorMessage);
// }
