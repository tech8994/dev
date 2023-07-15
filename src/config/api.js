import axios from 'axios';

let apicheck="https://livinlinen.webtestdemo.com";
// if(process.env.NODE_ENV === "development"){
//     apicheck = 'http://localhost:5001'
// }else{
//      apicheck ="https://livinlinen.webtestdemo.com"
// }
const API=axios.create({
    baseURL: apicheck,
});
export {
    apicheck,
    API
};
