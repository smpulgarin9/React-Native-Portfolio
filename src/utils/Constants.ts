export default {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION || "us-east-2",
  baseUrl: "https://pinta-magico-kids.s3.us-east-2.amazonaws.com/",
  bucketName: "pinta-magico-kids",
};
