import { SERVICE_URL } from "@/config/openWeatherAPI";

export default (icon_code) => {
    return `${SERVICE_URL}/img/wn/${icon_code}@2x.png`;
};
