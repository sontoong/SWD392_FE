import { UploadInput } from "../components/input/upload-input";
import { useSetHeaderTitle } from "../hooks/useSetHeaderTitle";

export default function TestPage() {
  useSetHeaderTitle([
    {
      title: `test1`,
      path: "/login",
    },
  ]);

  return (
    <div>
      Logo img:
      <UploadInput name={"logo"} />
      Default avatar img:
      <UploadInput name={"default_avatar"} />
    </div>
  );
}
