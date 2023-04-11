import axios from "axios";
async function apiIdLast(data) {
    try {
      console.log("serverlessss API");
      const response = await axios({
        url: `https://2lefg2yy33.execut'/dev/increment-id`,
        method: "GET",
        headers: {
          "X-API-KEY": "Lc9XtRmZ8OaJzKvS2q0F"
        }
      });
      return response.data
    } catch (error) {
      return {
        codRes: "99",
        message: "Error",
      };
    }
  }

  async function apiSendDataStore(data) {
    try {
      console.log("serverlessss API");
      const response = await axios({
        url: `https://2lefs.com/dev/insert-data`,
        method: "POST",
        headers: {
          "X-API-KEY": "Lc9XtRmZ8OaJzKvS2q0F"
        },
        data
      });
      return response.data
    } catch (error) {
      return {
        codRes: "99",
        message: "Error",
      };
    }
  }
  

  async function apiGetDataStore(data) {
    try {
      console.log("serverlessss API");
      const response = await axios({
        url: ` https:/mazonaws.com/dev/get-data`,
        method: "GET",
        headers: {
          "X-API-KEY": "Lc9XtRmZ8OaJzKvS2q0F"
        }
      });
      return response.data
    } catch (error) {
      return {
        codRes: "99",
        message: "Error",
      };
    }
  }
  
  async function apisendDataUsuari(data) {
    try {
      console.log("serverlessss API");
      const response = await axios({
        url: `https://mvaq8ar3we.execute-api.us-east-1.amazonaws.com/dev/registrarUsuario`,
        method: "POST",
        data
      });
      return response.data
    } catch (error) {
      return {
        codRes: "99",
        message: "Error",
      };
    }
  }

  async function apiuploadFile(data) {
    try {
      console.log("serverlessss API");
      const response = await axios({
        url: `https://mvaq8ar3we.execute-api.us-east-1.amazonaws.com/dev/uploadPdf`,
        method: "POST",
        data
      });
      return response.data
    } catch (error) {
      return {
        codRes: "99",
        message: "Error",
      };
    }
  }
  export { apiIdLast, apiSendDataStore, apiGetDataStore, apisendDataUsuari, apiuploadFile};