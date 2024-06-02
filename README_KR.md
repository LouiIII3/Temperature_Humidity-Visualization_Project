# 특정 장소의 및 습도 시각화

## 소개
이 프로젝트는 특정 장소의 에어컨과 관련된 온도 및 습도 데이터를 시각화하는 웹 애플리케이션입니다. 사용자는 날짜별 온도 및 습도의 평균 데이터를 차트로 시각화하여 볼 수 있습니다.


## UI
온도 ![Temperature](https://github.com/LouiIII3/Temperature_Humidity-Visualization_Project/assets/119919129/075770cb-96f7-4fbc-8e78-db760b2497cf), 습도 ![Humidity](https://github.com/LouiIII3/Temperature_Humidity-Visualization_Project/assets/119919129/f2f28c9f-f927-43a8-bf32-37311c411673), 전체 ![Combined](https://github.com/LouiIII3/Temperature_Humidity-Visualization_Project/assets/119919129/c2a57a0b-79a8-4dfa-b7a1-dcfa2e366b38)


## 기능
- 날짜별 온도 평균 데이터 시각화
- 날짜별 습도 평균 데이터 시각화
- 날짜별 온도 및 습도 평균 데이터 전체 시각화

## 요구 사항
- Node.js (v14 이상)
- npm (Node Package Manager)

## 설치 및 실행
1. 이 리포지토리를 클론합니다

2. 프로젝트 디렉토리로 이동합니다:
   ```bash
   cd Project directory

3. 필요한 패키지를 설치합니다:
   ```bash
   npm install

4. 서버를 시작합니다:
   ```bash
   node server.js

5. 웹 브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하여 애플리케이션을 확인합니다.



## 사용 데이터
`AC/TEST_AC1_2024_1.csv` 파일에는 특정 장소의 날짜별 온도와 습도 데이터가 포함되어 있습니다.<br> 각 데이터 행은 `checkDateTime`, `temperature`, `humidity` 필드를 포함합니다.

## 주요 코드 설명
### 서버 (`server.js`)
Node.js와 Express를 사용하여 CSV 데이터를 읽고 처리합니다.<br> `/api/temperature`, `/api/humidity`, `/api/data` 엔드포인트를 통해 클라이언트에 JSON 형식의 데이터를 제공합니다.

### 클라이언트 (`public/index.html`)
Chart.js를 사용하여 데이터를 시각화합니다.<br> 온도, 습도, 전체 데이터를 가져오는 버튼을 제공하며, 각 버튼을 클릭하면 해당 데이터를 가져와 차트를 생성합니다.

## 문제 해결
- 온도 및 습도 데이터를 각각의 엔드포인트에서 가져와 시각화합니다.
- 전체 데이터를 가져올 때 온도와 습도를 동시에 시각화합니다.
