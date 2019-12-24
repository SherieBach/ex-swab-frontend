import axios from 'axios';

const state = {
    allContent: undefined,
    cvContent: undefined
};
const mutations = {
    setData: (state, content) => (state.allContent = content),
    setCvData: (state, cvData) => (state.cvContent = cvData)
};
const actions = {

    async loadAllJSONContent({ commit }) { // get all data
        console.log("request response");
        const response = await axios.get('../json/content_eng.json');
        console.log("get response", response);
        const content = response.data;
        console.log("get all json from response", content);
        commit('setData', content); // adding data to mutations for setting the state

    },
    async loadSingleCvFromJson({ commit }){
        console.log("second request ");
        const response = await axios.get('../json/gabriel_klappenbach_eng.json');
        console.log("second response set", response);
        const cvData = response.data;
        //console.log("fetched cv ", cvData);
        commit('setCvData', cvData);
    }
};
const getters = {
    getAllContent(state) {  // getting all of the content
        return state.allContent;
    },
    getCVContent(state){
        return state.cvContent;
    }
};

export default {
    getters,
    actions,
    mutations,
    state
}
