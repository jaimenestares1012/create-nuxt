
import { apiIdLast, apiSendDataStore, apiGetDataStore, apisendDataUsuari, apiuploadFile } from '@/api/serverles';
export const state = () => ({
  isLoading: false,
  identificador: null,
  registros: {}
});

export const mutations = {
  SET_ID_TABLE(state, data){
    state.identificador = data
  },
  SET_DATA_TABLE(state, data){
    state.registros = data
    console.log("state.registros", state.registros);
  },
  DELETE(state){
    state.identificador = null
    state.registros = {}
  }

};

export const actions = {
    async sendDataUsuari({ commit }, payload) {
      const responsesendDataUsuari = await apisendDataUsuari(payload);
      console.log("responsesendDataUsuari", responsesendDataUsuari);
      commit('SET_ID_TABLE', responsesendDataUsuari.registro_id);
  },
  async uploadFile({ commit }, payload) {
    const responseuploadFile = await apiuploadFile(payload);
    console.log("responseuploadFile", responseuploadFile);
    commit('SET_DATA_TABLE', responseuploadFile);
  },
    
    
};



export const getters = {
    identificador: (state) =>state.identificador,
    registros: (state) =>state.registros,
};
