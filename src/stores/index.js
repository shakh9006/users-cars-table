import {createStore} from 'vuex'
import axios from "axios";

// Create a new store instance.
const store = createStore({
    state: {
        users: [],
        cars: [],
    },

    mutations: {
        updateUsers(state, users) {
            state.users = users
        },

        updateCars(state, cars) {
            state.cars = cars
        }
    },

    actions: {
        initData(context) {
            const urls = [
                {
                    url: 'http://localhost:3000/users',
                    callback: (data) => context.commit('updateUsers', data)
                },
                {
                    url: 'http://localhost:3000/cars',
                    callback: (data) => context.commit('updateCars', data)
                },
            ]

            let requests = urls.map(req => axios.get(req.url));
            Promise.all(requests)
                .then(responses => responses.forEach((res, idx) => {
                    urls[idx].callback(res.data)
                }));
        }
    },

    getters: {
        getUsers: s => s.users,
        getCars: s => s.cars,
    },
})

export default store