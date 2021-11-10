import axios from 'axios';
// force
class CEP {
  async searchCEP(cep) {
    console.log('sad', `${process.env.CEP_URL}/${cep}/json`);
    try {
      const response = await axios({
        method: 'GET',
        url: `${process.env.CEP_URL}/${cep}/json`
      });

      return { status: response.status, data: response.data };
    } catch (err) {
      if (err.response)
        return { status: err.response.status, data: err.response.data };

      if (err.request) return { status: 404, data: err.request };

      return { status: 500, data: err };
    }
  }
}

export default new CEP();
