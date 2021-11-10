import Sequelize from 'sequelize';
import limparString from '../util/limparString';

const { Model } = require('sequelize');

class Consulta extends Model {
  static init(sequelize) {
    super.init(
      {
        razao_social: Sequelize.STRING(255),
        cnpj: {
          set(value) {
            this.setDataValue('cnpj', limparString(value));
          },
          type: Sequelize.STRING(255)
        },
        nome_fantasia: Sequelize.STRING(255),
        atividade_principal_descricao: Sequelize.STRING(255),
        atividade_principal_codigo: Sequelize.STRING(255),
        data_abertura: Sequelize.DATE,
        natureza_juridica: Sequelize.STRING(255),
        cep: Sequelize.STRING(255),
        logradouro: Sequelize.STRING(255),
        codigo_ibge: Sequelize.STRING(255),
        cidade: Sequelize.STRING(255),
        estado: Sequelize.STRING(255),
        pais: 'Brasil'
      },
      {
        sequelize,
        tableName: 'consulta',
        createdAt: 'created_at',
        updatedAt: 'updated_at'
      }
    );

    return this;
  }
}

export default Consulta;
