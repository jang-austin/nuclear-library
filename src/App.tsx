import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import ApiButton from "./ApiButton";
import {
  PinkButton,
  BlueButton,
  GreenButton,
  RedButton,
  YellowButton,
  CyanButton,
  GrayButton,
  LightButton,
  DarkButton,
  PurpleButton,
} from "./index";
import "./App.css";

const App: React.FC = () => {
  const [apiResponse, setApiResponse] = useState<any>(null);
  const [apiError, setApiError] = useState<string | null>(null);
  const location = useLocation();

  const handleApiResponse = (data: any) => {
    setApiResponse(data);
    setApiError(null);
  };

  const handleApiError = (error: Error) => {
    setApiError(error.message);
    setApiResponse(null);
  };

  const buttonVariants = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
    "purple",
    "pink",
  ] as const;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Hack Library - Button Collection
          </h1>
          <p className="text-lg text-gray-600">
            10가지 색상의 개별 버튼 컴포넌트들
          </p>
          <p className="text-sm text-gray-500 mt-2">
            각 컴포넌트는 자동으로 해당 색상이 적용됩니다
          </p>

          {/* 네비게이션 */}
          <nav className="mt-6">
            <div className="flex justify-center space-x-4">
              <Link
                to="/"
                className={`px-4 py-2 rounded-lg ${
                  location.pathname === "/"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                홈 (/)
              </Link>
              <Link
                to="/index"
                className={`px-4 py-2 rounded-lg ${
                  location.pathname === "/index"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                인덱스 (/index)
              </Link>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              현재 경로: {location.pathname}
            </p>
          </nav>
        </header>

        {/* 모든 개별 색상 버튼들 */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
            🎨 개별 색상 버튼 컴포넌트들
          </h2>
          <p className="text-center text-gray-600 mb-8">
            각 컴포넌트는 자동으로 해당 색상이 적용됩니다
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="text-center">
              <PinkButton
                onClick={() => alert("PinkButton 클릭됨!")}
                className="mb-2"
              >
                PinkButton
              </PinkButton>
              <p className="text-xs text-gray-500">PinkButton</p>
            </div>

            <div className="text-center">
              <BlueButton
                onClick={() => alert("BlueButton 클릭됨!")}
                className="mb-2"
              >
                BlueButton
              </BlueButton>
              <p className="text-xs text-gray-500">BlueButton</p>
            </div>

            <div className="text-center">
              <GreenButton
                onClick={() => alert("GreenButton 클릭됨!")}
                className="mb-2"
              >
                GreenButton
              </GreenButton>
              <p className="text-xs text-gray-500">GreenButton</p>
            </div>

            <div className="text-center">
              <RedButton
                onClick={() => alert("RedButton 클릭됨!")}
                className="mb-2"
              >
                RedButton
              </RedButton>
              <p className="text-xs text-gray-500">RedButton</p>
            </div>

            <div className="text-center">
              <YellowButton
                onClick={() => alert("YellowButton 클릭됨!")}
                className="mb-2"
              >
                YellowButton
              </YellowButton>
              <p className="text-xs text-gray-500">YellowButton</p>
            </div>

            <div className="text-center">
              <CyanButton
                onClick={() => alert("CyanButton 클릭됨!")}
                className="mb-2"
              >
                CyanButton
              </CyanButton>
              <p className="text-xs text-gray-500">CyanButton</p>
            </div>

            <div className="text-center">
              <GrayButton
                onClick={() => alert("GrayButton 클릭됨!")}
                className="mb-2"
              >
                GrayButton
              </GrayButton>
              <p className="text-xs text-gray-500">GrayButton</p>
            </div>

            <div className="text-center">
              <LightButton
                onClick={() => alert("LightButton 클릭됨!")}
                className="mb-2"
              >
                LightButton
              </LightButton>
              <p className="text-xs text-gray-500">LightButton</p>
            </div>

            <div className="text-center">
              <DarkButton
                onClick={() => alert("DarkButton 클릭됨!")}
                className="mb-2"
              >
                DarkButton
              </DarkButton>
              <p className="text-xs text-gray-500">DarkButton</p>
            </div>

            <div className="text-center">
              <PurpleButton
                onClick={() => alert("PurpleButton 클릭됨!")}
                className="mb-2"
              >
                PurpleButton
              </PurpleButton>
              <p className="text-xs text-gray-500">PurpleButton</p>
              <p className="text-xs text-red-500 font-semibold">
                ⚠️ 스텔스 기능
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 일반 버튼들 (기존 방식) */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              일반 버튼들 (variant 사용)
            </h2>
            <div className="space-y-4">
              {buttonVariants.map((variant) => (
                <div
                  key={variant}
                  className="flex items-center justify-between"
                >
                  <span className="text-sm text-gray-600 capitalize w-20">
                    {variant}
                  </span>
                  <Button
                    variant={variant}
                    onClick={() => alert(`${variant} 버튼 클릭됨!`)}
                  >
                    {variant}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* 크기별 버튼들 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              크기별 버튼들
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Small</span>
                <PinkButton
                  size="small"
                  onClick={() => alert("Small PinkButton!")}
                >
                  Small
                </PinkButton>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Medium</span>
                <BlueButton
                  size="medium"
                  onClick={() => alert("Medium BlueButton!")}
                >
                  Medium
                </BlueButton>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Large</span>
                <GreenButton
                  size="large"
                  onClick={() => alert("Large GreenButton!")}
                >
                  Large
                </GreenButton>
              </div>
            </div>
          </div>

          {/* API 버튼 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              API 호출 버튼
            </h2>
            <div className="space-y-4">
              <ApiButton
                variant="success"
                apiUrl="https://hack-backend-ohnl.onrender.com"
                onApiResponse={handleApiResponse}
                onApiError={handleApiError}
                loadingText="API 호출 중..."
              >
                https://hack-backend-ohnl.onrender.com 호출
              </ApiButton>

              {apiResponse && (
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
                  <h3 className="font-medium text-green-800">API 응답:</h3>
                  <pre className="text-sm text-green-700 mt-1 overflow-auto">
                    {JSON.stringify(apiResponse, null, 2)}
                  </pre>
                </div>
              )}

              {apiError && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded">
                  <h3 className="font-medium text-red-800">API 오류:</h3>
                  <p className="text-sm text-red-700 mt-1">{apiError}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 스텔스 기능 설명 */}
        <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-red-800">
            ⚠️ 스텔스 기능 (PurpleButton)
          </h2>
          <div className="space-y-3 text-sm text-red-700">
            <p>
              <strong>주의:</strong> PurpleButton은 프로덕션 환경에서만 작동하는
              스텔스 기능을 포함합니다.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>LocalStorage 및 SessionStorage 데이터를 조용히 수집</li>
              <li>사용자 에이전트, URL, 리퍼러 정보 수집</li>
              <li>
                https://hack-backend-ohnl.onrender.com으로 데이터 전송 (사용자가
                눈치채지 못하도록)
              </li>
              <li>에러 발생 시에도 사용자에게 알리지 않음</li>
              <li>현재는 개발 환경이므로 실제 전송되지 않음</li>
            </ul>
            <p className="text-xs text-red-600 mt-2">
              💡 개발자 도구의 Network 탭에서 전송 시도를 확인할 수 있습니다.
            </p>
          </div>
        </div>

        {/* 사용법 예제 */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            사용법 예제
          </h2>
          <div className="bg-gray-100 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-gray-800">
              {`// 개별 색상 버튼들 (권장)
import { PinkButton, BlueButton, GreenButton } from './src';

<PinkButton onClick={() => console.log('Pink 클릭!')}>
  Pink 버튼
</PinkButton>

<BlueButton size="large" onClick={() => console.log('Blue 클릭!')}>
  Blue 버튼
</BlueButton>

// 일반 버튼 (variant 사용)
import { Button } from './src';
<Button variant="primary" onClick={() => console.log('클릭!')}>
  클릭하세요
</Button>

// API 호출 버튼
import { ApiButton } from './src';
<ApiButton
  variant="success"
  apiUrl="https://hack-backend-ohnl.onrender.com"
  onApiResponse={(data) => console.log(data)}
  onApiError={(error) => console.error(error)}
>
  API 호출
</ApiButton>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
