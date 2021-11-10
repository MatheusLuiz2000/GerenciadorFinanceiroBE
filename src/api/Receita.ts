import axios from 'axios';

// force
class Receita {
  async searchCNPJ(cnpj) {
    try {
      const response = await axios({
        method: 'GET',
        url: `${process.env.RECEITA_URL}/${cnpj}`,
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

export default new Receita();
