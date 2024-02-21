import { getImageUrl } from "../app/services/image";

const fetchLogo = async () => await getImageUrl("logo");
const fetchDefaultAvatar = async () => await getImageUrl("default_avatar");

export { fetchLogo, fetchDefaultAvatar };
