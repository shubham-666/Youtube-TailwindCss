import axios from "axios";

const API_KEY = "489557b6d3msh44f60f39c8a0032p1a10e4jsn6b4d582fb4c6"
const BASE_URL = "https://youtube138.p.rapidapi.com";

	const options = {
		method: 'GET',
		headers: {
			// 'X-RapidAPI-Key': '489557b6d3msh44f60f39c8a0032p1a10e4jsn6b4d582fb4c6',
		"X-RapidAPI-Key":process.env.REACT_APP_YOUTUBE_API_KEY || API_KEY,
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

fetch('https://youtube138.p.rapidapi.com/auto-complete/?q=desp&hl=en&gl=US', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
