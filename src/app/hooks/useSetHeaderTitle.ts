import { useEffect } from "react";
import { useAppDispatch } from "../redux/hook";
import { setHeaderTitle } from "../redux/slice/headerSlice";

export function useSetHeaderTitle(
  headerTitle: [{ title: string; path: string }],
) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setHeaderTitle(headerTitle));
  }, [dispatch, headerTitle]);
}
