"use client";
import React, { useEffect, useState } from "react";
import "../styles/components/header.css";
import Image from "next/image";
import LogoImg from "../public/header_logo.png";
import LogoMobileImg from "../public/header_logo_m.png";
import arrowDownImg from "../public/icon/icon_arrow_bottom.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const toggleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleSubMenuOpen = (num) => {
    setIsSubMenuOpen((prev) =>
      prev.map((item, idx) => (idx == num ? !item : false))
    );
  };

  useEffect(() => {
    const subMenuItems = document.querySelectorAll(
      "header .bottom-area-m > li"
    );
    subMenuItems.forEach((item, idx) => {
      if (isSubMenuOpen[idx]) {
        item.classList.add("on");
      } else {
        item.classList.remove("on");
      }
    });
  }, [isSubMenuOpen]);

  return (
    <header>
      <ul className="top-area">
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
          <a href="/">SLDF in 마곡</a>
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
        <li
          className={`hamburger ${isMenuOpen && "on"}`}
          onClick={toggleMenuOpen}
        >
          <div></div>
          <div></div>
          <div></div>
        </li>
      </ul>
      <hr />
      <ul className="bottom-area">
        <li></li>
        <li className="link"></li>
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

      {isMenuOpen ? (
        <ul className="bottom-area-m">
          <li onClick={() => toggleSubMenuOpen(0)}>
            <div>
              <p>전시 소개</p>
              <Image src={arrowDownImg} alt="열기 화살표 모양" />
            </div>
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
          <li onClick={() => toggleSubMenuOpen(1)}>
            <div>
              <p>전시 구성</p>
              <Image src={arrowDownImg} alt="열기 화살표 모양" />
            </div>
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
          <li onClick={() => toggleSubMenuOpen(2)}>
            <div>
              <p>부대행사</p>
              <Image src={arrowDownImg} alt="열기 화살표 모양" />
            </div>
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
          <li onClick={() => toggleSubMenuOpen(3)}>
            <div>
              <p>관람 안내</p>
              <Image src={arrowDownImg} alt="열기 화살표 모양" />
            </div>
            <ul>
              <li>
                <a href="/">관람 / 예매</a>
              </li>
              <li>
                <a href="/">숙박 / 교통 / 관광</a>
              </li>
            </ul>
          </li>
          <li onClick={() => toggleSubMenuOpen(4)}>
            <div>
              <p>참가 안내</p>
              <Image src={arrowDownImg} alt="열기 화살표 모양" />
            </div>
            <ul>
              <li>
                <a href="/">2026 부스 참가</a>
              </li>
              <li>
                <a href="/">미디어 패키지</a>
              </li>
            </ul>
          </li>
          <li onClick={() => toggleSubMenuOpen(5)}>
            <div>
              <p>공지사항</p>
              <Image src={arrowDownImg} alt="열기 화살표 모양" />
            </div>
            <ul>
              <li>
                <a href="/">공지사항</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
              <li>
                <a href="/">고객지원</a>
              </li>
              <li>
                <a href="/">개인정보취급방침</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/">참가자 로그인</a>
            <button type="button">EN</button>
          </li>
        </ul>
      ) : null}
    </header>
  );
}
