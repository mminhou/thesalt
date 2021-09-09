</br>

# 🌟 CNTEX -> 🌟 THE SALT #
![logo](./platform/src/factory/images/theSalt.png)



### What is this project site? ###
'The Salt' is a shopping mall that sells a selected high quality products.

<br/>

## Services ###
```
 http://the-salt.co.uk/
```
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
* Refactor: 함수, 컴포넌트 재정의
* Style: CSS 업데이트
* Init: Initializing
* Build: Build 작업
* Dependency: 의존성 추가 

<br/>

### Report ###
👌 Backend - BE
👌 Frontend - FE

#### ⏱ 21. 9. 3.
```
Deploy demo version 1.0
```
#### ⏱ 21. 9. 7.
<ul>
    <li>BE. DRF permission, token authentication 기능 추가</li>
    <li>update.. Token headers를 활용한 Authentication</li>
    <li>FE. Account 관련 action, reducers, saga 업데이트</li>
    <li>update.. DRF의 user model view -> permission allow</li>
</ul>

#### ⏱ 21. 9. 8.
<ul>
    <li>BE. account 생성 view => /register 업데이트</li>
    <li>BE. Order 모델 정의 및 업데이트</li>
    <li>FE. Order component 정의 및 업데이트</li>
    <li>FE. Screen, Profile, Account compoent responsible UI 업데이트</li>
    <li>FE. react-hook-form version 업데이트에 따른 수정사항 적용</li>
    <li>// input={register(...)} => {...register('...')}</li>
</ul>

#### ⏱ 21. 9. 9.
<ul>
    <li>FE. 회원가입 기능 update // signUp action, reducers(with signIn), singUp saga</li>
    <li>FE. TextField validation 처리 추가 // react-hook-form</li>
    <li>FE. Home, HomePagination, Products, Footer, Order component responsible UI 업데이트</li>
    <li>FE. HomePagination hover effect 적용</li> 
</ul>

#### ⏱ 21. 9. 10.
<ul>
    <li>BE. Order, OrderProduct 모델 재정의</li>
    <li>FE. Order, Shipping Component 정의 및 기능 업데이트</li>
    <li>BE. Order request에 따른 backend create method 정의</li>
    <li>FE. Error Handling (Console Err)</li>
    <li> # 1. Strict Mode Issues -> Delete `React.strictMode>` tag in App.js</li>
    <li> # 2. Grid issues justify -> justifyContent </li>
    <li> # 3. Typography descendant issues </li>
</ul>
```
Version 2.0 Update
```