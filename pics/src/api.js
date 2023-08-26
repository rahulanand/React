import axios from "axios";

const searchImages = async (term) => {
	const response = await axios.get("https://api.unsplash.com/search/photos", {
		headers: {
			Authorization:
				"Client-ID c16e9a9b3aeabde27d8cba29d758b2650dd2a2c65fbea8021ed384fef6c7000c",
		},
		params: {
			query: term,
		},
	});

	return response.data.results;
};

export default searchImages;
