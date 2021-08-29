import axios from 'axios'; // 라이브러리를 가져옴

// 1. HTTP Request & Response 와 관련된 기본 설정
const config ={
    baseUrl: 'https://api.hnpwa.com/v0/'
};


// 2. API 함수들을 정리
function fetchNewsList(){
    return axios.get(config.baseUrl+'news/1.json');
}

function fectchAskList(){
    return axios.get(config.baseUrl+'ask/1.json');
}

function fectchJobsList(){
    return axios.get(config.baseUrl+'jobs/1.json');
}

//export
export{
    fetchNewsList,
    fectchAskList,
    fectchJobsList
}

