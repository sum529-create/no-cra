# React 프로젝트 설정 (CRA 없이)

이 프로젝트는 `Create React App (CRA)`을 사용하지 않고, `webpack`, `babel`, `html-webpack-plugin` 등을 활용하여 React 환경을 수동으로 설정한 프로젝트입니다. 각 브랜치는 React 환경을 설정하는 과정을 단계별로 나누어 작업한 결과물입니다.

## 브랜치

- **`step/01-react-syntax`**: JSX 문법을 JavaScript 문법으로 변경
- **`step/02-install-babel`**: Babel CDN 추가 후 JSX 문법을 JavaScript로 변환
- **`step/03-init-package`**: 패키지 초기화 및 의존성 설치
- **`step/04-install-bundler`**: 번들러(webpack) 도입 및 설정
- **`step/05-install-webpack-plugin`**: Webpack 플러그인 추가로 캐시 문제 해결
- **`step/06-install-clean-webpack-plugin`**: `CleanWebpackPlugin`을 사용하여 빌드된 파일 자동 삭제
- **`step/07-setting-dev-server`**: HMR(Hot Module Replacement) 적용, `webpack-dev-server` 설정
- **`step/08-manage-env`**: 환경 설정 관리 (환경별 설정 파일)

## 프로젝트 설명

이 프로젝트는 **Create React App**을 사용하지 않고 React 애플리케이션을 구축하는 방법을 다룹니다. 각 브랜치는 특정 설정을 다루며, React 개발 환경을 구축하는 과정에 대해 단계별로 기록됩니다.

## 브랜치별 작업 내용

### 1. `step/01-react-syntax`

- **목표**: JSX 문법을 JavaScript 문법으로 변경
- **설명**: JSX 문법을 React 코드에서 사용하기 위해 JavaScript 코드로 변환하는 기본적인 문법 설정을 적용합니다.

### 2. `step/02-install-babel`

- **목표**: Babel CDN 추가 후 JSX 문법을 JavaScript로 변환
- **설명**: Babel을 CDN으로 추가하고, JSX 문법을 JavaScript로 변환하도록 설정합니다. 이를 통해 React JSX 코드를 브라우저에서 실행할 수 있도록 합니다.

### 3. `step/03-init-package`

- **목표**: 패키지 초기화 및 의존성 설치
- **설명**: `npm init` 명령어를 사용해 프로젝트를 초기화하고 필요한 의존성 패키지들(`react`, `react-dom`, `babel`, `webpack` 등)을 설치합니다.

### 4. `step/04-install-bundler`

- **목표**: 번들러(webpack) 도입 및 설정
- **설명**: `webpack`을 번들러로 도입하고, 기본적인 `webpack.config.js` 설정을 추가하여, 소스 파일을 하나의 번들 파일로 묶어주는 환경을 설정합니다.

### 5. `step/05-install-webpack-plugin`

- **목표**: Webpack 플러그인 추가로 캐시 문제 해결
- **설명**: `HtmlWebpackPlugin`을 추가하여 HTML 파일에 자동으로 번들된 JS 파일을 삽입하고, `contenthash`를 활용하여 캐시 문제를 해결할 수 있도록 설정합니다.

### 6. `step/06-install-clean-webpack-plugin`

- **목표**: `CleanWebpackPlugin`을 사용하여 빌드된 파일 자동 삭제
- **설명**: `CleanWebpackPlugin`을 설치하고 설정하여, 빌드할 때마다 `dist` 폴더 내의 이전 파일들을 자동으로 삭제하고 새롭게 빌드된 파일만 남도록 합니다.

### 7. `step/07-setting-dev-server`

- **목표**: HMR(Hot Module Replacement) 적용, `webpack-dev-server` 설정
- **설명**: `webpack-dev-server`와 HMR을 설정하여, 코드 변경 시 페이지 전체를 새로 고치지 않고 변경된 부분만 반영될 수 있도록 설정합니다.

### 8. `step/08-manage-env`

- **목표**: 환경 설정 관리 (환경별 설정 파일)
- **설명**: 다양한 환경 설정을 관리하기 위해 `.env` 파일을 사용하여, 개발, 프로덕션 환경에 맞는 설정을 쉽게 변경하고 관리할 수 있도록 합니다.

## 프로젝트 실행 방법

### 1. 프로젝트 클론

```bash
git clone https://github.com/your-username/react-without-cra.git
cd react-without-cra
```

### 2. 필요한 패키지 설치

```bash
npm install
```

### 3. 개발 서버 실행

```bash
npm run start
```

webpack-dev-server가 localhost:9000에서 서버를 실행하고, 브라우저에서 자동으로 열리며 개발 중 변경된 코드가 즉시 반영됩니다.

### 4. 빌드

```bash
npm run build
```

dist 폴더에 최적화된 빌드 결과물이 생성됩니다. dist/index.html을 열어 최종 결과물을 확인할 수 있습니다.

## 개발 중 고려 사항

- 각 단계별로 브랜치를 나누어 설정을 진행하였으므로, 각 브랜치에서 설정한 내용을 순차적으로 적용하며 개발을 진행할 수 있습니다.
- webpack-dev-server를 사용한 개발 서버 환경에서 핫 리로딩(HMR)을 통해 개발 효율성을 높였습니다.
- 캐시 문제를 해결하기 위해 파일명에 해시값을 포함하고, CleanWebpackPlugin을 통해 빌드된 파일을 관리합니다.
