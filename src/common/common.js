// 여러 페이지에서 공톡적으로 사용되는 함수들을 선언해놓음
// jsx 구문이 없으므로 .js 파일로 생성
// 현재 날짜를 yyyy.mm.dd 형태로 리턴 함수
// getDate 함수를 .jsx파일에서 임포트해서 쓸수 있도록 export 붙여준다

export function getDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");  //05
  const date = String(today.getDate()).padStart(2, "0");  // 7
  return `${year}.${month}.${date}`
}
