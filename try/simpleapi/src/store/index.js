import { createStore } from "vuex";
import * as getters from "./getters";
import * as actions from "./actions";
import * as mutations from "./mutations";

const state = {
  bearer: ""
};

const store = createStore({
  state,
  getters,
  actions,
  mutations,
});

export default store;
