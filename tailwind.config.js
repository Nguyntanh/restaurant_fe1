/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Đảm bảo quét hết các file trong src
  ],
  theme: {
    extend: {
      colors: {
        "omni-primary": "#1a73e8", // Màu thương hiệu OmniRest (ví dụ)
      },
    },
  },
  plugins: [],
};
