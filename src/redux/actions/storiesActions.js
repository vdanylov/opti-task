import axios from 'axios'

export const getStories = () => {
    return axios(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
    .then(res => {
        if (res.status === 200) {
            return res.data;
        } else {
            Promise.reject(res);
        }        
    })
    .then(res => {
        const stories = res.map(story => getSingleStory(story));
        return axios.all(stories);
    })
    .then(res => {
        return res.map(story => story.data)
    })
    .catch(error => {
        // console.log(error);
    })
};


const getSingleStory = id => {
    return axios(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
}