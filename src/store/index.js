import { createStore } from 'vuex'

export default createStore({
  state: {
    currentPlayList: [
      {
        al: {
          "id": 82595937,
          "name": "初恋那件小事 电视剧原声带",
          "picUrl": "https://p1.music.126.net/5GPFbTQU-kW57PGv_7LeBw==/109951164440649436.jpg",
          "tns": [],
          "pic_str": "109951164440649436",
          "pic": 109951164440649440
        },
        id: 1398283847
      },
    ],
    currentIndex: 0,
    isPlaying: false
  },
  getters: {
  },
  mutations: {
    setIsPlaying(state, value) {
      state.isPlaying = value
    }
  },
  actions: {
  },
  modules: {
  }
})
