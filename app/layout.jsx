import { IBM_Plex_Sans_KR } from "next/font/google";
import "../styles/globals.css";
import "../styles/index.css";
import Header from "../components/Header";

export const metadata = {
  title: "서울리빙디자인페어 클론코딩 사이트",
  description: "서울리빙디자인페어 사이트를 클론코딩한 웹사이트입니다.",
  keywords: [
    "서울리빙디자인페어 클론코딩",
    "서울리빙디자인페어 클론코딩 사이트",
  ],
  openGraph: {
    title: "오픈그래프 제목",
    description: "오픈그래프 설명",
    images: [
      {
        url: "",
        width: 100,
        height: 300,
        alt: "이미지 설명",
      },
    ],
  },
};

const ibmPlexSansKR = IBM_Plex_Sans_KR({
  subsets: ["latin"],
  variable: "--ibm-plex-sans-kr",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={ibmPlexSansKR.variable}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
