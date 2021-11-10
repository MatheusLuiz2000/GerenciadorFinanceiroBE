module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('consulta', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      razao_social: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      cnpj: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      nome_fantasia: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      atividade_principal_descricao: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      atividade_principal_codigo: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      data_abertura: Sequelize.DATE,
      natureza_juridica: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      cep: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      logradouro: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      codigo_ibge: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      cidade: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      estado: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      pais: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('consulta');
  }
};
