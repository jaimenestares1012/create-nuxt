import axios from "axios";


  

  
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
  export {apisendDataUsuari, apiuploadFile};