# SignWiki: 청각장애인을 위한 커뮤니티 및 정보 공유 플랫폼

## 1. 개요

### 1.1. 제품 비전
SignWiki는 한국의 청각장애인과 그 주변인(가족, 친구, 수어 통역사 등)을 위한 통합 커뮤니티 및 정보 공유 플랫폼입니다. 분산된 정책, 복지, 의료, 법률 정보를 한곳에 모으고, 사용자 참여형 수어 데이터 위키를 구축하여 정보 접근성을 혁신적으로 개선하고 활발한 소통의 장을 마련하는 것을 목표로 합니다.

### 1.2. 프로젝트 배경
빠르게 변화하는 정책 및 지원 서비스에 대한 정보 비대칭성을 해소하고, 청각장애인 커뮤니티의 실질적인 필요에 부응하는 플랫폼을 신속하게 구축하고자 합니다. 이를 위해 검증된 오픈소스 프로젝트인 [mbeps/next_discussion_platform](https://github.com/mbeps/next_discussion_platform)을 기반으로 핵심 기능을 빠르게 개발하고, MVP(Minimum Viable Product)를 통해 핵심 가치를 검증하고자 합니다.

## 2. 주요 기능 (MVP)

### 정보 포털
- **홈**: 오늘의 소식, 인기/최신 정보를 한눈에 확인합니다.
- **지원/복지 서비스**: 정부 지원 사업, 복지 혜택, 신규 정책 목록을 확인하고 간편 신청 흐름을 제공합니다.
- **정보 등록**: 사용자가 직접 유용한 정보를 등록하고 공유합니다.
- **마이페이지**: 프로필, 신청 내역, 알림, 포인트 등을 관리합니다.

### 수어 위키
- **카테고리별 수어 학습**: 일상생활, 전문용어, 감정표현 등 카테고리별로 수어를 탐색하고 학습합니다.
- **수어 영상 및 자막**: 영상과 함께 수어의 의미와 사용법을 확인합니다.
- **사용자 참여형 편집**: 사용자가 직접 수어 자막을 수정하고 내용을 보강할 수 있습니다.

### 관리자 기능
- **대시보드**: 사이트 현황을 요약하여 보여줍니다.
- **사용자 및 콘텐츠 관리**: 가입자 정보와 등록된 콘텐츠를 관리하고 검수합니다.

## 3. 기술 스택

- **Front-End**: TypeScript, Next.js, Recoil, Chakra UI
- **Back-End**: Firebase (Authentication, Firestore, Storage)

---

## 🚀 Getting Started

이 섹션은 프로젝트를 로컬 컴퓨터에 설치하고 실행하는 과정을 안내합니다.

### Prerequisites

시작하기 전에 다음 소프트웨어가 설치되어 있는지 확인하세요:
*   [Node.js](https://nodejs.org/) (v18 LTS 권장)
*   [Yarn](https://classic.yarnpkg.com/en/docs/install)
*   [Git](https://git-scm.com/)

### 1. 프로젝트 클론

먼저, 이 저장소를 로컬 컴퓨터로 클론합니다.

```sh
git clone https://github.com/HaleKim/SignWiki.git
cd SignWiki
```

### 2. 의존성 설치

프로젝트 디렉토리에서 아래 명령어를 실행하여 필요한 모든 라이브러리를 설치합니다.

```sh
yarn install
```

### 3. Firebase 설정

이 프로젝트는 백엔드로 Firebase를 사용합니다.

1.  **Firebase 프로젝트 생성**: [Firebase 콘솔](https://console.firebase.google.com/)로 이동하여 새 프로젝트를 생성합니다.
2.  **웹 앱 추가**: 프로젝트 설정에서 웹 앱을 추가하고, 앱을 등록합니다.
3.  **`.env.local` 파일 생성**:
    *   프로젝트 루트에 있는 `.env.example` 파일을 복사하여 `.env.local`이라는 새 파일을 만듭니다.
    *   Firebase 콘솔에서 확인한 웹 앱의 `firebaseConfig` 객체 값을 `.env.local` 파일에 복사하여 붙여넣습니다.
    ```
    NEXT_PUBLIC_FIREBASE_API_KEY=...
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
    NEXT_PUBLIC_FIREBASE_APP_ID=...
    ```
4.  **인증 활성화**: Firebase 콘솔의 **Authentication** 섹션으로 이동하여 '로그인 방법' 탭에서 **Google**과 **GitHub** 제공업체를 활성화합니다.
5.  **Firestore 데이터베이스 생성**: **Firestore Database** 섹션으로 이동하여 데이터베이스를 생성합니다. 테스트를 위해 '테스트 모드에서 시작'을 선택할 수 있습니다.

### 4. 개발 서버 실행

모든 설정이 완료되면, 아래 명령어를 실행하여 개발 서버를 시작합니다.

```sh
yarn dev
```

이제 브라우저에서 `http://localhost:3000`으로 접속하여 애플리케이션을 확인할 수 있습니다.