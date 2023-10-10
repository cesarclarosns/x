import Cors from "cors";

const allowedOrigins = [
  "http://client:3000",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "http://assessment-enroute:3000",
  "https://assessment-enroute.cesarclarosns.com",
];

export const cors = Cors({
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin!) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error(`Not allowed by CORS: ${origin}`));
    }
  },
  optionsSuccessStatus: 200,
  credentials: true,
});
