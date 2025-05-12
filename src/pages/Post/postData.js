
export const initPostArray = [
    {
        no: 23123,
        title: "월요일 게시글",
        content: "월요일 좋아",
        date: "2025.05.09"
    },

    {
        no: 23121,
        title: "일요일 게시글",
        content: "일요일 좋아",
        date: "2025.05.02"
    },


    {
        no: 23120,
        title: "토요일 게시글",
        content: "토요일 좋아",
        date: "2025.04.28"
    }
];


// postArray에서 가장 높은 글번호 리턴
export function getnextNo(postArray){

    let max = 0;
    postArray.forEach((data)=>{
        if(max < data.no){
            max = data.no;
        }
    });
    return max + 1;
}