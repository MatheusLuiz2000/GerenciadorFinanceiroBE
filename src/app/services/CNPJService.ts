import Receita from '../../api/Receita';
import limparString from '../util/limparString';
import handleResponse from '../helpers/handleResponse';
import Consulta from '../models/Consulta';

import CEP from '../../api/CEP';

class CNPJService {
  search = async (cnpj, update) => {
    cnpj = limparString(cnpj);

    const search = await Receita.searchCNPJ(cnpj);

    if (search.data.ERROR) {
      return {
        status: 400,
        data: search.data.message
      };
    }

    const searchCEP = await CEP.searchCEP(limparString(search.data.cep));

    const response = handleResponse(search.data, searchCEP.data);

    await Consulta.findOrCreate({
      where: {
        cnpj
      },
      defaults: response
    }).spread(function(userResult, created) {
      if (update) {
        userResult.update(response);
      }
    });

    return {
      status: 200,
      data: response
    };
  };

  delete = async cnpj => {
    await Consulta.destroy({
      where: {
        cnpj
      }
    });

    return {
      status: 200,
      data: 'Excluido com sucesso!'
    };
  };
}

export default new CNPJService();
