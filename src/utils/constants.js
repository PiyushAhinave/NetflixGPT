const API_options = () =>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWNmZTYwNmEzNDA5MzQwOWY3NWQzNWVjY2YzOTkwYiIsInN1YiI6IjY1ZjMxMTAzNmRlYTNhMDEyZjc4NGE3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6eyDHMI-8A4NmZegU5W55w3YRHZxC0jHZ5SwgUrl5t0'
        }
      };
} 

export const SUPPORTED_LANGUAGES = [
 { identifier:"en",name:"English"},
{identifier:"hindi",name:"हिंदी"}
]

export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY;
export default API_options;