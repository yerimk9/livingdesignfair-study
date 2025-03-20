"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import LogoImg from "../public/images/header_logo.png";
import LogoMobileImg from "../public/images/header_logo_m.png";
import { gsap } from "gsap";

export default function Header() {
  useEffect(() => {
    const headerTop = document.querySelector("#js-headerTop");
    const header = document.querySelector("header");

    function showMenu() {
      gsap.to("#js-headerBottom", {
        display: "grid",
        duration: 0,
      });
    }

    function hideMenu() {
      gsap.to("#js-headerBottom", {
        display: "none",
        duration: 0,
      });
    }

    function handleResize() {
      if (window.innerWidth >= 1024) {
        headerTop.addEventListener("mouseenter", showMenu);
        header.addEventListener("mouseleave", hideMenu);
      } else {
        headerTop.removeEventListener("mouseenter", showMenu);
        header.removeEventListener("mouseleave", hideMenu);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      headerTop.removeEventListener("mouseenter", showMenu);
      header.removeEventListener("mouseleave", hideMenu);
    };
  }, []);

  return (
    <header>
      <ul className="top-area" id="js-headerTop">
        <li className="logo">
          <a href="/">
            <Image src={LogoImg} alt="서울리빙디자인페어 로고" className="pc" />
            <Image
              src={LogoMobileImg}
              alt="서울리빙디자인페어 로고"
              className="m"
            />
          </a>
        </li>
        <li>
          <a href="/">전시 소개</a>
        </li>
        <li>
          <a href="/">전시 구성</a>
        </li>
        <li>
          <a href="/">부대행사</a>
        </li>
        <li>
          <a href="/">관람 안내</a>
        </li>
        <li>
          <a href="/">참가 안내</a>
        </li>
        <li>
          <a href="/">공지사항</a>
        </li>
        <li className="language">
          <button type="button">EN</button>
        </li>
        <li className="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </li>
      </ul>
      <hr />
      <ul className="bottom-area" id="js-headerBottom">
        <li></li>
        <li>
          <a href="/">서울리빙디자인페어</a>
          <a href="/">주최 및 파트너</a>
          <a href="/">아카이브</a>
        </li>
        <li>
          <a href="/">SLDF 2025</a>
          <a href="/">Floor Plan</a>
          <a href="/">참가 브랜드</a>
          <a href="/">디자이너스 초이스</a>
        </li>
        <li>
          <a href="/">글로벌 콘퍼런스</a>
          <a href="/">리빙 디자인 어워드</a>
          <a href="/">리빙 디자인 스팟</a>
          <a href="/">비즈매칭 상담회</a>
        </li>
        <li>
          <a href="/">관람 / 예매</a>
          <a href="/">숙박 / 교통 / 관광</a>
        </li>
        <li>
          <a href="/">2025 부스 참가</a>
          <a href="/">미디어 패키지</a>
        </li>
        <li>
          <a href="/">공지사항</a>
          <a href="/">FAQ</a>
          <a href="/">고객지원</a>
          <a href="/">개인정보취급방침</a>
        </li>
        <li></li>
        <li className="login">
          <a href="/">참가자 로그인</a>
        </li>
      </ul>

      <ul className="bottom-area-m">
        <li>
          전시 소개
          <ul>
            <li>
              <a href="/">서울리빙디자인페어</a>
            </li>
            <li>
              <a href="/">주최 및 파트너</a>
            </li>
            <li>
              <a href="/">아카이브</a>
            </li>
          </ul>
        </li>
        <li>
          전시 구성
          <ul>
            <li>
              <a href="/">SLDF 2026</a>
            </li>
            <li>
              <a href="/">Floor Plan</a>
            </li>
            <li>
              <a href="/">참가 브랜드</a>
            </li>
            <li>
              <a href="/">디자이너 초이스</a>
            </li>
          </ul>
        </li>
        <li>
          부대행사
          <ul>
            <li>
              <a href="/">글로벌 콘퍼런스</a>
            </li>
            <li>
              <a href="/">리빙 디자인 어워드</a>
            </li>
            <li>
              <a href="/">리빙 디자인 스팟</a>
            </li>
            <li>
              <a href="/">비즈매칭 상담회</a>
            </li>
          </ul>
        </li>
        <li>
          관람 안내
          <ul>
            <li>
              <a href="/"></a>
            </li>
            <li>
              <a href="/"></a>
            </li>
          </ul>
        </li>
        <li>
          참가 안내
          <ul>
            <li>
              <a href="/"></a>
            </li>
            <li>
              <a href="/"></a>
            </li>
          </ul>
        </li>
        <li>
          공지사항
          <ul>
            <li>
              <a href="/"></a>
            </li>
            <li>
              <a href="/"></a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/">참가자 로그인</a>
          <button type="button">EN</button>
        </li>
      </ul>
    </header>
  );
}
