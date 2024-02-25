import { Header } from "./Header";
import { Content } from "./Content";

export default function App() {
  // async function authorize() {
  //   await fetch("https://yti-b2b-api-dev.azurewebsites.net/api/user/Login", {
  //     method: "POST",
  //     headers: {},
  //     body: JSON.stringify({
  //       username: "abhishek@betatestsolutions.com",
  //       password: "test@123",
  //     }),
  //   });
  // }
  // async function getData() {
  //   const res = await fetch(
  //     "https://yti-b2b-api-dev.azurewebsites.net/api/organization/updateSeats/?seats=10",
  //     {
  //       method: "get",
  //       headers: {
  //         Authorization:
  //           "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIxNzI1IiwiRW1haWwiOiJhYmhpc2hla0BiZXRhdGVzdHNvbHV0aW9ucy5jb20iLCJPcmdhbml6YXRpb24iOiIwIiwicm9sZSI6Ik9yZ2FuaXphdGlvblVzZXJBZG1pbiIsIm5iZiI6MTcwODg2MTk4NSwiZXhwIjoxNzA4OTA1MTg1LCJpYXQiOjE3MDg4NjE5ODV9.Sn1IO8jkGVqcM6sUfNpXgraZp3_gW7HmGU-Cbjk9wYg2fk5zZYP9tiRcQ20Vnm-ieTSm0tfKH0aOMDRsC5t3Gg",
  //       },
  //     }
  //   );
  // }
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}
