# tradir 과제 [배포주소](https://tradir-subject.netlify.app/)

---

### ✅ 컨벤션

- ESLint
- Prettier

### ✅ 필요한 Library - 설치

- Styled-components
- Style-reset (브라우저마다 다른 default css를 reset하기 위해 설치)
- Redux
- axios
- material-table
- @material-ui/core
- @material-ui/icons
- cra-bundle-analyzer (bundle 파일 분석)

### ✅ 요구사항

#### 1. /home

- 랜딩페이지를 `/home`으로 설정
- 랜딩페이지에서 `/beerlist` 로 이동할 수 있어야한다.

#### 2. /beerlist

- 주어진 API를 호출해 material table library로 맥주 리스트를 구성한다.
- 리스트 테이블의 column header는 드래그로 순서변경을 해야한다.
  - 바뀐 순서는 전역(redux)에 저장되어 링크이동시에도 순서가 유지되어야한다.
- 알콜도수 `abv` 필터 기능을 구현한다
  - 필터는 다중 선택이 가능해야한다.
  - Ex) 5-6, 6-7 ->multi selector로 구현 ?, 아님 다른 방법이 있는지 찾아볼 것
  - material table library에 있는 기능 사용하는게 아닌 직접 구현한다.
  - 1-2도, 2-3도, 3-4도, 4-5도, ..최저 ~ 최고점 찾아내서 map으로 해당 필터컴포넌트 생성
  - 선택된 필터내역 출력하는 부분 필요

##### 2. scenario

=> 사용자는 맥주의 리스트를 테이블 형태로 볼 수 있다.

=> 사용자는 알콜도수 필터를 활용해 이에 해당하는 맥주들을 볼 수 있다. (단위 테스트)

- beer list item을 순회해 제일 낮은 도수 ex(2.5)부터 제일 높은 도수 ex(7.5)를 찾음

  - 2.5, 3, 3.1, 4, 4.5, 7, 9.5, 12, 55가 있다고 했을 때
  - 2 ~ 3, 3 ~ 4, 4 ~ 5, 7 ~ 8, 9 ~ 10
  - 1단위로하면 컴포넌트갯수가 너무 많아질 것 같음
  - abv순으로 정렬해서 5도단위로 끊을까, 각 도수를 5로나눈 나머지 값을 0, 1,2에 해당하는 키의 객체로 담고, (55도의 경우는) 11에 들어감, 각 키값에 5씩 곱해서 n*5도 이하 버튼을 생성
  - 예제의 경우 2.5, 3, 3.1, 4, 4.5가 5로 나누었을 때 0이므로 5도이하 그룹에 배정
  - 7, 9.5는 1 그룹에 배정
  - 12는 2그룹
  - 55는 11그룹에 배정
  - 생성되는 필터버튼의 갯수는 총 4개
    -  5도이하, (6도이상, 10도이하),  (11도이상 15도 이하), (51도이상 55도 이하)
    -  1번째 원소를 제외하고 이후 버튼에 "((n-1)*5 + 1) 도 이상"이라는 텍스트 붙여서 그룹에 해당하는 데이터만 출력하기
    -  All 필터버튼도 있어야함
  - 전역데이터에 filteredBeerList를 복사해서 현재 선택된필터(전역관리)에 따라 해당하는 값으로 갱신해줄것 - 리듀서에서 수행

=> 사용자는 맥주 아이템을 드래그하여 순서를 변경할 수 있다.

=> 사용자는 맥주 이름을 클릭해 해당 맥주의 상세정보를 볼 수 있다.

=> 사용자는 맥주를 장바구니에 추가 또는 삭제할 수 있다. (다른 /cartView)

<br/>

### 선택사항

- 맥주 이름 클릭시 해당 맥주 상세정보를 보는 modal 구현
- 장바구니 구현
  - 장바구니에서 추가 또는 삭제가 가능해야한다.
  - 장바구니는 `/home`, `/beerlist`에서 접근 가능해야한다.
- 이외 추가 기능이 있으면 자유롭게 추가한다.

---

## ✅ 트러블 슈팅 및 구현사항

### 1. 이슈: material-table drag Item 사라지는 문제

![error](https://user-images.githubusercontent.com/55486644/135827614-e9118edc-ce1d-423c-8c72-c430641e6000.gif)


- 아무 설정도 주지않은 default 테이블에서 현재 잡은 item이 겹쳐진 item 뒤로 들어가서 사라지게보임
- Drag Item인 header가 position sticky로 default 지정되어있었음
- 브라우저에 따르는 fixed와 다르게 sticky는 부모영역에서만 고정됨

#### 1. 해결

![clear](https://user-images.githubusercontent.com/55486644/135827736-8a3d85fe-44bc-4eb9-b9db-76b96b24b98d.gif)

- `position: unset`으로 지정해 문제해결

<br/>

### 2. 이슈 : 랜더링마다 heap 사용량 증가 - 라이브러리 이슈

> home - beerlist 페이지 왕복횟수가 늘어날수록 heap이 증가해서 결국 web 중지됨
>
> 프로젝트의 요구사항(column header)를 만족하기 위해 column정보를 state로 관리하게 되었을 때 발생하는 라이브러리 이슈였습니다.

![스크린샷 2021-09-29 오후 8 56 54](https://user-images.githubusercontent.com/55486644/135263783-abc9eed3-c2cf-4abf-aa31-e7574359ba3f.png)


- Material-table에서 내부적으로 사용하는 drag and drop 라이브러리의 이벤트가 해제되지 않고 계속 쌓이는 것으로 추측했으나 내부 라이브러리 확인시 unmount될 때 이벤트를 모두 해제하는 코드를 확인했고 이벤트가 아니라 th의 내부 스타일링인 width calc이 누적되어서 계속 계산되어 발생하는 이슈로 확인했음.
  - 중첩계산하느라 시간이 계속해서 re-flow 시간이 증가됨

#### 2.1 Action) 내부 라이브러리 확인

```js
//node_modules/material-table/dist/components/m-table-cell.js
(0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getStyle", function () {
      var width = CommonValues.reducePercentsInCalc(_this.props.columnDef.tableData.width, _this.props.scrollWidth);
      var cellStyle = {
        color: "inherit",
        width: width,
        maxWidth: _this.props.columnDef.maxWidth,
        minWidth: _this.props.columnDef.minWidth,
        boxSizing: "border-box",
        fontSize: "inherit",
        fontFamily: "inherit",
        fontWeight: "inherit"
      };

      if (typeof _this.props.columnDef.cellStyle === "function") {
        cellStyle = (0, _objectSpread2.default)({}, cellStyle, _this.props.columnDef.cellStyle(_this.props.value, _this.props.rowData));
      } else {
        cellStyle = (0, _objectSpread2.default)({}, cellStyle, _this.props.columnDef.cellStyle);
      }

      if (_this.props.columnDef.disableClick) {
        cellStyle.cursor = "default";
      }
      return (0, _objectSpread2.default)({}, _this.props.style, cellStyle);
    });
```

- width값을 고정으로 주지 않으면 default로 지정된 스타일이 중첩되어서 reflow하게되어 랜더시간이 급수적으로 증가됨
- cellStyle에 width를 주면 중첩계산되지 않음을 확인, cell(td)의 calc중첩은 사라졌지만 header(th)는 계속해서 발생

![스크린샷 2021-09-29 오후 11 34 39](https://user-images.githubusercontent.com/55486644/135290310-c3cb5715-8b0c-4dab-9f4b-e77646215ea1.png)

- [동일한 이슈1](https://github.com/mbrn/material-table/issues/2825)

- [동일한 이슈2](https://github.com/mbrn/material-table/issues/2899)
- headerStyle을 지정해주어도 state로 관리하면 내부적으로 tableData라는 프로퍼티가 추가되어 이전값을 기억해 이를 기반으로 중첩해서 계산하게 됨.
- 랜더마다 새로 생기는 변수는 상관없으나 값을 기억하는 state를 columns을 주게 되면 해당 문제가 발생함을 확인



#### 2.2 코드 원인확인

`MaterialTable` 의 columns을 지정하는 값에 state를 넣게되면 문제가 발생함

```js
//발생 X
columns={[
          {
            title: "Name",
            field: "name",
          }]}
//발생 O
column={columnsHeader}
```

매번 새로운 값이 들어가면 내부적으로 자동으로 추가되는 tableData 프로퍼티가 새로 갱신되어 calc이 한번씩만 계산되어 들어가게되는데 state로 관리하면 tableData가 초기화되지않아 계속 중첩해서 계산값이 쌓이는 것 같음. [유사한 문제 harryfafa답변](https://github.com/mbrn/material-table/issues/2899)

- 코드로 테스트해봤을 때도 해당 경우가 맞는 것으로 확인.

<br/>

#### 2. 해결

Reducer가 초기상태를 갖기 위해 호출될 때, 내부적(라이브러리에서 수행함)으로 tableData 프로퍼티가 추가됨.

이로인해 계산식이 중첩해서 쌓여 flow cost가 급수적으로 발생

계산식 관련 property를 빈 문자열로 초기화하는 방식으로 코드 작성

해당 방식으로 수정하여 flow cost가 늘어나는 문제해결를 하였음

과제요구사항 내 이로인해 발생하는 side effect 없음을 확인하고 과제 진행

```js
const beerTableReducer = (state = initState, action) => {
  switch (action.type) {
    case T.SET_COLUMN_HEADER:
      return {
        ...state,
        columnHeader: [...action.payload],
      };
    default:
      //기존 : return state;
      //수정사항 - 랜더마다 호출되는 reducer에서 tableData.width 초기화
      return {
        ...state,
        columnHeader: state.columnHeader.map((el) => {
          if (el.tableData) {
            el.tableData.width = "";
          }
          return el;
        }),
      };
  }
};
```

- combineReducer로 인해 묶인 리듀서함수들이 모두 호출됨
- 랜더링되어 다시 table의 width를 이전값을 통해 계산하고 해당 계산식이 중첩해서 저장됨 따라서 전역 state로 저장된 기존 width값에 의해 계산식이 추가로 쌓이므로 리듀서호출시 마다 참조하는 width값을 초기화하여 쌓이지 않도록 수정함

- 해당 라이브러리 작성자가 변경사항(row, column)에 대해 추적하기 위해 임의적으로 넣은 값 - [라이브러리 작성자 답변](https://github.com/mbrn/material-table/issues/666)

<br/>

### 3. 다중필터 구현

> dispatch수행시 toolbar가 unmount되어서 state가 전부 초기화됨 따라서 state를 상위(beerTable)에서 관리했습니다.

#### 3. 로직설명 - 필터 버튼 생성

```js
const [abvFilterGroup, setAbvFilterGroup] = useState({});
const [filterClickedId, setFilterClickedId] = useState({});

const sortAbvOrder = (list) => {
    const sorted = list.sort((a, b) => a.abv - b.abv);
    return sorted;
};
const createAbvFilterGroup = () => {
  const abvGroup = {};
  const filterId = {};
  sortAbvOrder(beerList).forEach((beer) => {
    const abvStandard = Math.floor(beer.abv / ABV_STANDARD);
    if (!abvGroup.hasOwnProperty(abvStandard)) {
        abvGroup[abvStandard] = [];
        filterId[abvStandard] = false;
    }
    abvGroup[abvStandard].push(beer);
  });
  setAbvFilterGroup({ ...abvGroup });
  setFilterClickedId({ ...filterId });
};
useEffect(() => {
  createAbvFilterGroup();
}, [beerList]);
```

- 초기 beerList값을 비동기요청해서 받아오면 abvFilterGroup을 생성
- abvFilterGroup은 기준(5도)에 따라 현재 받아온 데이터를 기반으로 5도미만, 5 ~ 10, 10 ~15미만등의 버튼을 생성함
- 해당 방식을 취한 이유는 들어오는 데이터가 5~20도 한정으로 고정되어있다면 하드코딩으로 구현해도 되었으나, 4도, 55도 등 편차가 큰 데이터가 존재했으므로 들어온 데이터 기반으로 계산함

- abv를 먼저 오름차순으로 sort한 후, abv에 5를 나눠 몫을 key로하는 abvGroup을 생성함.
  - key값이 곧 범위가 되므로 value에 해당하는 데이터를 넣어주었음
- 필터버튼을 클릭하면 해당하는 범위의 데이터들을 출력시킴 -> 다중구현 완료

<br/>


<img width="980" alt="스크린샷 2021-10-02 오후 3 46 36" src="https://user-images.githubusercontent.com/55486644/135706620-083ecb2b-f60e-4a77-aa77-d5a62708af70.png">

- 1단위로 지정했을 경우의 사진
- 현재 5단위로 지정한 `ABV_STANDARD` 값으로 범위 조정 가능함 

<br/>

<img width="327" alt="스크린샷 2021-10-02 오후 3 47 21" src="https://user-images.githubusercontent.com/55486644/135706641-dc29d418-880d-4283-842d-c9dd91a7f8d0.png">

- 10단위로 지정했을 경우

<br/>
<br/>


### 4. 스타일이슈 : Portal을 사용함으로써 modal 구현시 z-index를 사용하지 않아도 되었으나 table 라이브러리 우선순위로 인해 Header가 가려짐

![스크린샷 2021-10-02 오전 12 58 52](https://user-images.githubusercontent.com/55486644/135651507-f2257e6b-0e1b-4f6b-b846-ce76f2af6826.png)

- Header와 같은 레벨에 위치해 우선순위를 두지 않아 위로 쌓이는 이슈발생
- Header에 z-index를 두어 우선순위를 높였으나 모달을 열었을 때 하기 이슈 발생

![스크린샷 2021-10-02 오전 1 00 42](https://user-images.githubusercontent.com/55486644/135651764-cd317397-a3fe-46b1-a613-1496c826a0d7.png)

- 모달 Open시 header의 z-index로 인해 모달 dim위에 Header가 보여짐
- dim에 header보다 높은 z-index를 두어 문제 **해결했음**

![스크린샷 2021-10-02 오전 1 02 29](https://user-images.githubusercontent.com/55486644/135652022-6b544135-d086-4096-b403-2f5e93335b3a.png)

- Modal open state를 hooks가 아닌 전역에서 관리하게 하여 header를 visible hidden을 하여 숨기는 방법 등을 적용해도 될 것 같음.

<br/>

### 5. 에러처리

![errormodal](https://user-images.githubusercontent.com/55486644/135828594-e398efd8-c4b6-4a61-b760-5fa3c15a4bc0.gif)

- api요청(https://api.punkapi.com/v2/beers)에 대한 에러가 발생했을 때 전역 state의 status에 따라 해당 modal출력하도록 구현

![스크린샷 2021-10-03 오후 11 27 52](https://user-images.githubusercontent.com/55486644/135758246-f0bc150c-ca7a-4ad4-9fb1-450cf3622c46.png)

- **실제 배포환경에서 동일 IP의 잦은 요청으로 인해 요청제한이 발생할 수 있음을 확인하였습니다.**

  <br/>

![스크린샷 2021-10-03 오후 9 43 26](https://user-images.githubusercontent.com/55486644/135754191-49f8e476-4095-4686-b869-fcedeae4f748.png)

- 잘못된 경로에 접근시 해당 페이지 출력하도록 구현

<br/>


### ✅ LightHouse (런타임환경)

> npm run start로 런타임환경에서 측정한 결과로 번들되지 않았기에 퍼포먼스가 좋지 못함
>
> 배포환경에서 다시 수행했으며 빠른 수정을 위해 런타임에서 수정을 진행하였음

![스크린샷 2021-10-03 오후 10 28 27](https://user-images.githubusercontent.com/55486644/135755691-2189eea8-9eb2-4313-9eb4-919872a849d2.png)



#### 1. 적절한 이미지 사용하기

- /home에서 사용하고 있던 이미지의 크기가 상당히 커서 초기 랜더속도가 늦춰짐. 이미지 resize로 용량 낮춰 해결



#### 2. 이미지에 width, height 명시적으로 지정하기

![스크린샷 2021-10-03 오후 10 37 55](https://user-images.githubusercontent.com/55486644/135756016-df108196-0659-45d8-9e38-0d802f965c99.png)

- [설명](https://web.dev/optimize-cls/?utm_source=lighthouse&utm_medium=devtools#images-without-dimensions)블로그의 내용 중 영상이 있다. 너비, 높이가 지정되지 않으면 image가 렌더링될 때 그만큼 영역이 밀리기 때문에 사용자경험이 좋지않다.

- 이미지를 사용한다면 width, height를 지정해두도록 하자



#### 3.  애니메이션 변경하기

![스크린샷 2021-10-03 오후 10 52 51](https://user-images.githubusercontent.com/55486644/135756646-ceb24641-fbb6-41d4-a9d8-cace1dc01906.png)

- 현재 home의 text애니메이션을 margin을 사용해 변경하고 있었음
- [reflow가 일어나는 속성](https://boxfoxs.tistory.com/408)이므로 변경해야함
- [High Perfomance Animations](https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/)의 저비용 애니메이션 방법 중 Transform을 사용해 위치를 이동하는 방법으로 변경하기로 함.
- transform은 repaint를 하지 않고 컴포지션단계에서만 처리됨
  - layout(flow) -> paint -> composition
  - composition: paint로 그려진 것들의 레이어 순서가 겹쳐져있으므로 정확한 순서대로 그린걸 차곡차곡 놓는 단계임

#### 4. CSS 렌더블로킹 제거

- Font를 다운로드받기 위해 외부 스타일시트(link태그)를 다운로드 받아오는 방식으로 짆애했는데 CSS로 내재하여 DOM트리 랜더 블로킹을 제거
- `font-display: swap;` 속성 추가로 웹 폰트 로딩여부 관계없이 항상 텍스트가 보이도록 지정함[웹 폰트 사용과 최적화의 최근 동향](https://d2.naver.com/helloworld/4969726)

<br/>

### ✅ netlify를 통한 정적배포환경

> build를 통한 정적배포환경에서 존재하던 이슈에 대한 핸들링



#### Performance

---

##### 1. Reduce unused JavaScript -> 코드스플리팅 적용

- 해당 페이지내에서 사용하지 않는 JS를 Load하지 않기 위한 코드스플리팅 적용
- lazy, suspense로 dynamic import 구현 가능
  - Build time에 모듈을 불러오는 것이 아닌, 런타임에 그때그때 맞는 모듈을 불러올 수 있음.


<br/>

#### 접근성 높이기

---

##### 1. Lists do not contain only `<li>` elements and script supporting elements (`<script>` and `<template>`)

> ul 또는 ol태그 안에는 li만 위치시켜야한다

- `/cartview` 페이지에 아이템이 없을 때 ul안에 text를 위치시켜서 발생했다. 이를 밖으로 분리하여 수정할 수 있었다.



#### 2. Buttons do not have an accessible name

> Aria-label 사용- 텍스트가 없다면 설명할 텍스트를 담고 있도록 해야한다.

![스크린샷 2021-10-04 오후 1 09 57](https://user-images.githubusercontent.com/55486644/135791388-77c176d5-e072-493c-b4da-8ff43c86dc0f.png)

- 버튼의 텍스트가 없다면 설명할 텍스트를 담고 있도록 해야한다.

- 예를 들어 close버튼의 경우 icon만 담는 경우가 있으므로 이 버튼이 무슨 버튼인지를 설명해주기 위해 `aria-label="Close"` 라벨을 달아준다.

##### 과제코드에서 해당하는 것들

- Modal의 close 버튼
- 장바구니 삭제버튼
- 장바구니 추가버튼
- Material-table (수정불가)



#### 3. Background and foreground colors do not have a sufficient contrast ratio.

> Text의 대조가 낮으면 대다수 사용자들이 읽기 어려울 수 있음
>
> [Contrast Checker](https://webaim.org/resources/contrastchecker/)로 색을 넣어보며 확인해볼 수 있다.
>
> Hover, active와 같이 색변경을 줄 때 색상선택을 대조비에 맞게 선택해야한다.
>
> Text는 18pt 또는 14pt의 Bold, 그리고 대조비는 3:1로 해야한다.

##### 과제코드에서 해당하는 것들

- Nav Menu
  - 배경색이 White일 때 대조비에 만족하는 조금 더 어두운 색상인primaryInWhite을 사용하기로 변경
- Filter Button
  - Background색을 더 어둡게 변경
- BeerName
  - Background색을 더 어둡게 변경


<br/>

### ✅ 결과

> 환경에 따라 score가 변동되거나하여 절대적인 지표가 될 순 없음.

#### `/home`

![home 결과](https://user-images.githubusercontent.com/55486644/135823396-1bc68980-9b87-4573-8b4b-65743870724a.png)

- Perfomance : 기존 93 -> 93 ~ 98도 나오는 경우 존재
- Accessibility : 기존 94 -> 100

#### /beerlist

![beerlist 결과](https://user-images.githubusercontent.com/55486644/135822998-3d9759b5-9718-4911-bdc0-34bbffffc9a9.png)

- Performance: 기존 89 -> 89
- Accessibility: 기존 91 -> 93

- perfomance에 영향을 주는 것은 api의 image의 사이즈 때문
- ui에 맞춘 작은 사이즈의 image를 불러오면 해당 문제 해결될 것



#### /cartview

![cart View](https://user-images.githubusercontent.com/55486644/135823922-2586c51f-2ef3-4fe5-a08f-8482b2a3d0ce.png)

- Performance: 기존 98 -> 98
- Accessibility: 기존 98 -> 100



### OG Tag 적용결과

<img width="280" alt="스크린샷 2021-10-04 오후 6 22 44" src="https://user-images.githubusercontent.com/55486644/135826451-dfedb3e4-19aa-4db8-8eea-cb670857dfda.png">


### Unit Test
- [Header변경 순서함수를 구현하기 위한 단위테스트 작성](https://github.com/SeongsangCHO/tradir-subject/blob/main/src/test/beerTableColumnOrderChange.test.js)


### [LightHouse 관련 이슈 해결하며 정리한 포스팅 작성](https://watermelonlike.tistory.com/187)
