// ====== CONFIGURAÇÃO BASE ======
// Altere a URL conforme o ambiente (dev/prod)
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

// ====== FUNÇÕES GENÉRICAS ======

/**
 * Faz requisição GET
 * @param {string} endpoint - Path da API (ex: '/incidentes')
 * @returns {Promise<any>}
 */
export async function apiGet(endpoint) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error(`Erro ${response.status}: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error('Erro na requisição GET:', error);
    throw error;
  }
}

/**
 * Faz requisição POST
 * @param {string} endpoint - Path da API
 * @param {object} data - Dados a enviar
 * @returns {Promise<any>}
 */
export async function apiPost(endpoint, data) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error(`Erro ${response.status}: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error('Erro na requisição POST:', error);
    throw error;
  }
}

/** kaua
 * Faz requisição PUT
 * @param {string} endpoint - Path da API
 * @param {object} data - Dados a atualizar
 * @returns {Promise<any>}
 */
export async function apiPut(endpoint, data) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error(`Erro ${response.status}: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error('Erro na requisição PUT:', error);
    throw error;
  }
}

/**
 * Faz requisição DELETE
 * @param {string} endpoint - Path da API
 * @returns {Promise<any>}
 */
export async function apiDelete(endpoint) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error(`Erro ${response.status}: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error('Erro na requisição DELETE:', error);
    throw error;
  }
}

// ====== ENDPOINTS ESPECÍFICOS ======

/* INCIDENTES - LocalDate + LocalTime */
export const incidentesAPI = {
  listar: () => apiGet('/incidentes'),
  obter: (id) => apiGet(`/incidentes/${id}`),
  criar: (data) => apiPost('/incidentes', {
    plataforma: data.plataforma,
    data: data.data, // LocalDate: YYYY-MM-DD
    hora: data.hora, // LocalTime: HH:MM:SS
    gravidade: data.gravidade, // BAIXA, MEDIA, ALTA
    descricao: data.descricao, // mínimo 10 caracteres
    acoesImediatas: data.acoesImediatas,
  }),
  atualizar: (id, data) => apiPut(`/incidentes/${id}`, {
    plataforma: data.plataforma,
    data: data.data,
    hora: data.hora,
    gravidade: data.gravidade,
    descricao: data.descricao,
    acoesImediatas: data.acoesImediatas,
  }),
  deletar: (id) => apiDelete(`/incidentes/${id}`),
};

/* MANUTENÇÃO - LocalDateTime */
export const manutencaoAPI = {
  listar: () => apiGet('/manutencao'),
  obter: (id) => apiGet(`/manutencao/${id}`),
  criar: (data) => apiPost('/manutencao', {
    equipamentoId: data.equipamentoId,
    nomeEquipamento: data.nomeEquipamento,
    criticidade: data.criticidade, // BAIXA, MEDIA, ALTA, CRITICA
    descricaoFalha: data.descricaoFalha, // mínimo 10 caracteres
    dataAbertura: new Date().toISOString(), // LocalDateTime
  }),
  atualizar: (id, data) => apiPut(`/manutencao/${id}`, {
    equipamentoId: data.equipamentoId,
    nomeEquipamento: data.nomeEquipamento,
    criticidade: data.criticidade,
    descricaoFalha: data.descricaoFalha,
    dataAbertura: data.dataAbertura,
  }),
  deletar: (id) => apiDelete(`/manutencao/${id}`),
};

/* PRODUÇÃO - LocalDate */
export const producaoAPI = {
  listar: () => apiGet('/producao'),
  obter: (id) => apiGet(`/producao/${id}`),
  criar: (data) => apiPost('/producao', {
    plataforma: data.plataforma,
    barrisPetroleo: parseFloat(data.barrisPetroleo) || 0,
    metrosCubicosGas: parseFloat(data.metrosCubicosGas) || 0,
    dataProducao: data.dataProducao, // LocalDate: YYYY-MM-DD
  }),
  atualizar: (id, data) => apiPut(`/producao/${id}`, {
    plataforma: data.plataforma,
    barrisPetroleo: parseFloat(data.barrisPetroleo),
    metrosCubicosGas: parseFloat(data.metrosCubicosGas),
    dataProducao: data.dataProducao,
  }),
  deletar: (id) => apiDelete(`/producao/${id}`),
  obterDados: () => apiGet('/producao/dados'),
  obterHistorico: (periodo) => apiGet(`/producao/historico?periodo=${periodo}`),
};

/* TRIPULAÇÃO - LocalDate */
export const tripulacaoAPI = {
  listar: () => apiGet('/tripulacao'),
  obter: (id) => apiGet(`/tripulacao/${id}`),
  criar: (data) => apiPost('/tripulacao', {
    nomeFuncionario: data.nomeFuncionario,
    funcao: data.funcao,
    plataforma: data.plataforma,
    dataInicioConfinamento: data.dataInicioConfinamento, // LocalDate: YYYY-MM-DD
    dataFimConfinamento: data.dataFimConfinamento, // LocalDate: YYYY-MM-DD
  }),
  atualizar: (id, data) => apiPut(`/tripulacao/${id}`, {
    nomeFuncionario: data.nomeFuncionario,
    funcao: data.funcao,
    plataforma: data.plataforma,
    dataInicioConfinamento: data.dataInicioConfinamento,
    dataFimConfinamento: data.dataFimConfinamento,
  }),
  deletar: (id) => apiDelete(`/tripulacao/${id}`),
};

/* CONTATOS / EMERGÊNCIA */
export const contatosAPI = {
  listar: () => apiGet('/contatos'),
  reportar: (data) => apiPost('/contatos/reportar', data),
  obterEmergencia: () => apiGet('/contatos/emergencia'),
};

/* OPERAÇÕES GERAIS */
export const operacoesAPI = {
  obterMetricas: () => apiGet('/operacoes/metricas'),
  obterAlertas: () => apiGet('/operacoes/alertas'),
  obterDashboard: () => apiGet('/operacoes/dashboard'),
};

// ====== FUNÇÕES AUXILIARES ======

/**
 * Valida se a URL da API está acessível
 * @returns {Promise<boolean>}
 */
export async function verificarAPI() {
  try {
    await apiGet('/health');
    return true;
  } catch {
    console.warn('API indisponível');
    return false;
  }
}

/**
 * Define token de autenticação (se necessário)
 * @param {string} token - JWT token
 */
export function setAuthToken(token) {
  if (token) {
    localStorage.setItem('authToken', token);
  } else {
    localStorage.removeItem('authToken');
  }
}

/**
 * Obtém token de autenticação
 * @returns {string|null}
 */
export function getAuthToken() {
  return localStorage.getItem('authToken');
}
