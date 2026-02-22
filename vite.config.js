import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


// 調整設定
export default defineConfig(({ mode }) => {
  return {
    // 當 mode 為 'production' 時，使用專案名稱作為 base
    base: mode === "production" ? "/ZDX-Club-Booking-DeployTest/" : "/",
    plugins: [react()],
  };
});

