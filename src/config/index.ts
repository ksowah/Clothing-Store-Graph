import dotenv from "dotenv";
import ms from "ms";

dotenv.config();
export const config = {
  app: {
    name: "Clothing Store",
  },
  port: parseInt(process.env.PORT || "4000", 10),
  db: {
    uri: process.env.MONGODB_URI || "mongodb://localhost:27017/clothing-store",
    database: process.env.MONGODB_DATABASE || "clothing-store",
  },
  auth: {
    identity: "Clothing Store",
    lockerRetries: 1000,
    lockerExpiry: ms("30 minutes"),
    tokenExpiry: ms("30 days"),
    refreshTokenExpiry: ms("30 days"),
    codeExpiry: ms("5 minutes"),
    secret: process.env.AUTH_SECRET || "this+is+no+secret+at+all",
  },
};
export default config;
