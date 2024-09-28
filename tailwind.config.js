import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '24px',
        },

      },
      fontFamily: {
        "Montserrat": 'Montserrat, sans-serif',
      },
      colors: {
        "Primary": "#3269AC",
        "Secondary": "#F7AB4B",
        "Tertiary": "#A6CBED",
        "Dark": "#072954",
        "Text": "#364456",
        "Accent": "#ECF1F4",
        "Success": "#40DA90",
        "Error": "#FF4F4F",
        "Gray": "#C8C8C8",
        "Light": "#FAFCFE",
      }
    },
  },
  plugins: [],
});