import * as Yup from 'yup';

import { cnpj } from 'cpf-cnpj-validator';
import limparString from '../util/limparString';

class CNPJValidator {
  public async search(req, res, next) {
    const CNPJValue = Yup.object().shape({
      cnpj: Yup.string('Should be a string')
        .required('CNPJ inválido')
        .test('CNPJ Inválido', 'CNPJ Inválido', function(value) {
          const cleanCNPJ = limparString(value);

          if (!cnpj.isValid(cleanCNPJ)) {
            return false;
          }

          return true;
        })
    });

    CNPJValue.validate(req.params)
      .then(() => {
        return next();
      })
      .catch(err => {
        return res.status(400).json(err.message);
      });
  }
}

export default new CNPJValidator();
