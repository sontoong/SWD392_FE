import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { setHeaderTitle } from "../redux/slice/headerSlice";
import { ROLE } from "../../constants/role";
import { UploadInput } from "../components/input/upload-input";

export default function TestPage() {
  const { role: currentRole } = useAppSelector((state) => state.roleCheck);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      setHeaderTitle([
        {
          title: "test",
          path: currentRole.role === ROLE.ADMIN ? "/" : "/forbidden",
        },
        {
          title: `test1`,
          path: "/login",
        },
      ]),
    );
  }, [dispatch, currentRole.role]);

  return (
    <div>
      Logo img:
      <UploadInput name={"logo"} />
      Default avatar img:
      <UploadInput name={"default_avatar"} />
    </div>
  );
}
