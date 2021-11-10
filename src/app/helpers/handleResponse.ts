export default function handleResponse(search, searchCEP) {
  return {
    razao_social: search.nome,
    nome_fantasia: search.fantasia,
    atividade_principal_descricao: search.atividade_principal[0].text,
    atividade_principal_codigo: search.atividade_principal[0].code,
    data_abertura: search.abertura,
    natureza_juridica: search.natureza_juridica,
    cep: searchCEP.cep,
    logradouro: searchCEP.logradouro,
    codigo_ibge: searchCEP.ibge,
    cidade: searchCEP.localidade,
    estado: searchCEP.uf,
    cnpj: search.cnpj,
    pais: 'Brasil'
  };
}
