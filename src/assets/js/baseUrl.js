// baseUrl.js 設定專案的基底路徑，讓專案在不同環境下都能正確載入資源
// 使用 import baseUrl from "../assets/js/baseUrl";
// 例：src={`${baseUrl}assets/images/nav/nav-mb/logo-mb.png`}
const baseUrl = import.meta.env.BASE_URL;
export default baseUrl;

