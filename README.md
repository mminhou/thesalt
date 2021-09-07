</br>

# 🌟 CNTEX -> 🌟 THE SALT #
![logo](./platform/src/factory/images/theSalt.png)



### What is this project site? ###
'The Salt' is a shopping mall that sells a selected high quality products.

<br/>

## Services ### 
- site url ==> http://the-salt.co.uk/
- test id >> test@gmail.com
- test password >> test1234 

<br/>

### Tools
<p align='center'>
    <img src="https://img.shields.io/badge/django-v3.2.7-orange"/>
    <img src="https://img.shields.io/badge/djangorestframework-v3.12.4-critical"/>
    <img src="https://img.shields.io/badge/React-v17.0.1-blue?logo=React"/>
    <img src="https://img.shields.io/badge/redux--saga-v1.1.3-blue">
    <img src="https://img.shields.io/badge/aws EC2-v3.3.13-orange?logo=amazon"/>
    <img src="https://img.shields.io/badge/aws S3-v4.0.1-orange?logo=amazon"/>
    <img src="https://img.shields.io/badge/graphql-v15.4.0-pink?logo=graphql">
    <img src="https://img.shields.io/badge/apollo/client-v3.3.6-violet?">
</p>

### Architecture ###
- Backend - Djangorestframework RestAPI
- Front - React, Redux-saga 
- UI - Material UI
- Codedeploy - (AWS) EC2, S3

<br/>

### Backend ###
```
$ python -m venv venv

$ source venv/bin/activate

$ pip install -r requirements.txt

$ cd backend

$ python manage.py runserver
```

<br/>

### Frontend ###
#### / Based on ReactJS /
```angular2html
$ cd platform

$ npm start
```

<br/>

### Feature ###
* Fix: 버그 수정 및 오류 개선
* Feat: 기능 추가, 라인 정리
* Refactor: 함수 재정의
* Style: CSS 업데이트
* Init: Initializing
* Build: Build 작업
* Dependency: 의존성 추가 

<br/>

### Report ###


#### ⏱ 21. 9. 3.
```
- Deploy demo version
```
#### ⏱ 21. 9. 7.
```
- DRF permission, token authentication 기능 추가
- Account 관련 action, reducers, saga 업데이트 
- update 1.. Token headers를 활용한 Authentication
- update 2.. DRF의 user model view -> permission allow
```
#### ⏱ 21. 9. 8.
```
- Backend Order 모델 정의 및 업데이트
- Order component 업데이트
```

### Version ###
#### v 1.0
```
    Deploy the-salt.co.uk 
```