import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { setHeaderTitle } from "../../redux/slice/headerSlice";
import { ROLE } from "../../../constants/role";

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
  }, [dispatch]);

  return <div>TestPage</div>;
}
