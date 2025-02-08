import { useEffect } from "react";
import { useAppDispatch } from "../redux/hook";
import { setHeaderTitle } from "../redux/slice/headerSlice";

interface HeaderTitle {
  title: string;
  path?: string;
}

export function useSetHeaderTitle(headerTitle: HeaderTitle[]) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setHeaderTitle(headerTitle));
  }, [dispatch, headerTitle]);
}
