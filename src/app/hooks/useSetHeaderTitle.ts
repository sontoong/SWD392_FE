import { useAppDispatch } from "../redux/hook";
import { setHeaderTitle } from "../redux/slice/headerSlice";

export function useSetHeaderTitle(
  headerTitle: [{ title: string; path: string }],
) {
  const dispatch = useAppDispatch();
  dispatch(setHeaderTitle(headerTitle));
}
