export type languages = "all" | "vn" | "en" | "cn";
type languageDisplay = { label: string; value: string };

export const languages: Record<languages, languageDisplay> = {
  all: { label: "Tất cả", value: "all" },
  vn: { label: "Tiếng Việt", value: "vn" },
  en: { label: "Tiếng Anh", value: "en" },
  cn: { label: "Tiếng Trung", value: "cn" },
};
