/**
 * TIME FLEET OS - MOBILE APP
 * app.js - Lógica principal do aplicativo
 * 
 * Arquitetura:
 * - Gerenciamento de telas (splash, config, formulário, sucesso)
 * - Comunicação com a API do servidor (configurável)
 * - Seleção de equipe com UI nativa
 * - Submissão de O.S. com feedback visual
 */

// ============================================================
// CONFIGURAÇÃO GLOBAL
// ============================================================
const STORAGE_KEY = 'tf_server_url';
let serverUrl = '';
let equipeAtual = 'mecanicos';
let equipeSelecionada = [];
let isSubmitting = false;
let lastMainScreenId = 'screen-home';
let aquisicoesMobile = [];
let selectedAquisicaoMobileId = '';
let editingAquisicaoMobileId = '';

// ============================================================
// INICIALIZAÇÃO
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    // Aguarda a splash screen terminar de animar (2s)
    setTimeout(() => {
        hideSplash();
        inicializar();
    }, 2200);
});

function hideSplash() {
    const splash = document.getElementById('splash-screen');
    splash.classList.add('hidden');
    setTimeout(() => { splash.style.display = 'none'; }, 600);
}

function inicializar() {
    serverUrl = localStorage.getItem(STORAGE_KEY) || '';
    
    // Preencher datalist de veículos
    const dl = document.getElementById('lista-veiculos-native');
    if (dl && typeof veiculos !== 'undefined') {
        veiculos.forEach(v => {
            const opt = document.createElement('option');
            opt.value = v.split(' - ')[0]; // Só a placa no value
            opt.label = v; // Nome completo no label
            dl.appendChild(opt);
        });
    }

    // Registrar eventos
    registrarEventos();

    if (!serverUrl) {
        mostrarTela('screen-config');
    } else {
        lastMainScreenId = 'screen-home';
        mostrarTela('screen-home');
        verificarConexao();
        carregarAquisicoesMobile();
        carregarEquipe('mecanicos');
        if (typeof preencherSelectsAquisicao === 'function') preencherSelectsAquisicao();
        atualizarMenuAtivo('screen-home');
    }
}

// ============================================================
// GERENCIAMENTO DE TELAS
// ============================================================
function mostrarTela(idTela) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    const tela = document.getElementById(idTela);
    if (tela) {
        tela.classList.remove('hidden');
    }
}

function irParaTela(idTela) {
    if (idTela && idTela !== 'screen-config') {
        lastMainScreenId = idTela;
    }
    mostrarTela(idTela);
    atualizarMenuAtivo(idTela);
    if (idTela === 'screen-home' && serverUrl) carregarAquisicoesMobile();
}

function atualizarMenuAtivo(idTela) {
    document.querySelectorAll('.drawer-item[data-nav]').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-nav') === idTela);
    });
}

function abrirDrawer() {
    const drawer = document.getElementById('drawer');
    const backdrop = document.getElementById('drawer-backdrop');
    if (drawer) {
        drawer.classList.add('open');
        drawer.setAttribute('aria-hidden', 'false');
    }
    if (backdrop) {
        backdrop.classList.add('open');
        backdrop.setAttribute('aria-hidden', 'false');
    }
}

function fecharDrawer() {
    const drawer = document.getElementById('drawer');
    const backdrop = document.getElementById('drawer-backdrop');
    if (drawer) {
        drawer.classList.remove('open');
        drawer.setAttribute('aria-hidden', 'true');
    }
    if (backdrop) {
        backdrop.classList.remove('open');
        backdrop.setAttribute('aria-hidden', 'true');
    }
}

// ============================================================
// CONFIGURAÇÃO DO SERVIDOR
// ============================================================
document.getElementById('btn-salvar-config').addEventListener('click', async () => {
    const input = document.getElementById('config-server-url');
    let url = input.value.trim().replace(/\/$/, '');
    
    if (!url) {
        showToast('Por favor, informe o endereço do servidor.');
        return;
    }

    // Adicionar protocolo se não tiver
    if (!url.startsWith('http')) url = 'http://' + url;

    // Testar conexão antes de salvar
    showToast('Testando conexão...', 0);
    try {
        const res = await fetch(`${url}/api/health`, { 
            signal: AbortSignal.timeout(10000) 
        });
        if (!res.ok) throw new Error('Servidor retornou erro.');
        
        serverUrl = url;
        localStorage.setItem(STORAGE_KEY, serverUrl);
        input.value = '';
        irParaTela('screen-home');
        verificarConexao();
        carregarAquisicoesMobile();
        carregarEquipe('mecanicos');
        if (typeof preencherSelectsAquisicao === 'function') preencherSelectsAquisicao();
        showToast('Conectado com sucesso!');
    } catch (err) {
        showToast(`Não foi possível conectar. Verifique o endereço e se o servidor está online.`);
    }
});

// ============================================================
// STATUS DE CONEXÃO
// ============================================================
function atualizarStatusConexao(state, message) {
    document.querySelectorAll('[data-connection-status]').forEach(container => {
        const dot = container.querySelector('[data-connection-dot]');
        const txt = container.querySelector('[data-connection-text]');

        if (dot) dot.className = `status-dot ${state}`;
        if (txt) txt.textContent = message;
    });
}

async function verificarConexao() {
    atualizarStatusConexao('checking', 'Verificando conexão...');

    try {
        const res = await fetch(`${serverUrl}/api/health`, { 
            signal: AbortSignal.timeout(10000) 
        });
        if (!res.ok) throw new Error();
        atualizarStatusConexao('online', `Conectado · ${new URL(serverUrl).hostname}`);
    } catch {
        atualizarStatusConexao('offline', 'Sem conexão com o servidor');
    }
}

// Verificar conexão a cada 30 segundos
setInterval(() => {
    if (!serverUrl) return;
    if (!document.getElementById('screen-config')?.classList.contains('hidden')) return;
    verificarConexao();
}, 30000);

// ============================================================
// CARREGAMENTO DE EQUIPE
// ============================================================
function carregarEquipe(tipo) {
    equipeAtual = tipo;
    equipeSelecionada = [];
    
    const container = document.getElementById('lista-equipe');
    container.innerHTML = '';
    
    let lista = [];
    if (tipo === 'mecanicos') lista = mecanicos;
    else if (tipo === 'lavadores') lista = lavadores;
    else if (tipo === 'borracheiros') lista = borracheiros;
    
    lista.forEach(nome => {
        const item = document.createElement('div');
        item.className = 'equipe-item';
        item.innerHTML = `
            <div class="equipe-check">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>
            </div>
            <span>${nome}</span>
        `;
        item.addEventListener('click', () => toggleEquipe(item, nome));
        container.appendChild(item);
    });
}

function toggleEquipe(item, nome) {
    const idx = equipeSelecionada.indexOf(nome);
    if (idx === -1) {
        equipeSelecionada.push(nome);
        item.classList.add('selected');
    } else {
        equipeSelecionada.splice(idx, 1);
        item.classList.remove('selected');
    }
}

// ============================================================
// REGISTRO DE EVENTOS
// ============================================================
function registrarEventos() {
    // Drawer (menu lateral)
    ['btn-menu-home', 'btn-menu-os', 'btn-menu-aq'].forEach(id => {
        document.getElementById(id)?.addEventListener('click', abrirDrawer);
    });
    document.getElementById('btn-drawer-close')?.addEventListener('click', fecharDrawer);
    document.getElementById('drawer-backdrop')?.addEventListener('click', fecharDrawer);

    document.querySelectorAll('.drawer-item[data-nav]').forEach(btn => {
        btn.addEventListener('click', () => {
            fecharDrawer();
            irParaTela(btn.getAttribute('data-nav'));
        });
    });

    // Ações da Home
    document.getElementById('home-go-os')?.addEventListener('click', () => irParaTela('screen-form'));
    document.getElementById('home-go-aq')?.addEventListener('click', iniciarNovaAquisicaoMobile);
    document.getElementById('btn-home-new-aq')?.addEventListener('click', iniciarNovaAquisicaoMobile);
    document.getElementById('btn-refresh-aq-list')?.addEventListener('click', carregarAquisicoesMobile);

    document.getElementById('aq-action-backdrop')?.addEventListener('click', fecharMenuAquisicaoMobile);
    document.getElementById('btn-aq-action-cancel')?.addEventListener('click', fecharMenuAquisicaoMobile);
    document.getElementById('btn-aq-edit')?.addEventListener('click', editarAquisicaoMobileSelecionada);
    document.getElementById('btn-aq-delete')?.addEventListener('click', excluirAquisicaoMobileSelecionada);
    document.getElementById('btn-aq-not-done')?.addEventListener('click', abrirMotivoNaoRealizadoMobile);
    document.getElementById('btn-aq-reason-cancel')?.addEventListener('click', fecharMotivoNaoRealizadoMobile);
    document.getElementById('btn-aq-reason-save')?.addEventListener('click', salvarNaoRealizadoMobile);
    document.getElementById('btn-cancel-edit-aq')?.addEventListener('click', iniciarNovaAquisicaoMobile);

    // Voltar na tela de configuração
    document.getElementById('btn-voltar-config')?.addEventListener('click', () => {
        if (serverUrl) irParaTela(lastMainScreenId || 'screen-home');
        else mostrarTela('screen-config');
    });

    // Tabs de equipe
    document.querySelectorAll('.equipe-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.equipe-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            carregarEquipe(tab.getAttribute('data-equipe'));
        });
    });

    // Botão de configuração
    const abrirConfig = () => {
        const input = document.getElementById('config-server-url');
        if (input) input.value = serverUrl;
        fecharDrawer();
        mostrarTela('screen-config');
    };

    ['btn-config', 'btn-config-aq', 'btn-config-home'].forEach(id => {
        document.getElementById(id)?.addEventListener('click', abrirConfig);
    });

    // Botão nova O.S.
    document.getElementById('btn-nova-os').addEventListener('click', () => {
        document.getElementById('success-overlay').classList.add('hidden');
        resetarFormulario();
        irParaTela('screen-form');
    });

    // Envio do formulário
    document.getElementById('form-os').addEventListener('submit', enviarOS);
}

// ============================================================
// ENVIO DA ORDEM DE SERVIÇO
// ============================================================
async function enviarOS(e) {
    e.preventDefault();
    
    if (isSubmitting) return;

    const veiculo = document.getElementById('os-veiculo').value.trim();
    const tipoServico = document.querySelector('input[name="tipo-servico"]:checked');
    const descricao = document.getElementById('os-descricao').value.trim();

    // Validações
    if (!veiculo) { showToast('Informe o veículo.'); return; }
    if (!tipoServico) { showToast('Selecione o tipo de serviço.'); return; }
    if (equipeSelecionada.length === 0) { showToast('Selecione pelo menos um responsável.'); return; }
    if (!descricao) { showToast('Descreva o problema ou serviço.'); return; }

    const btn = document.getElementById('btn-enviar');
    btn.disabled = true;
    btn.innerHTML = '<span style="opacity:.7">Enviando...</span>';
    isSubmitting = true;

    const agora = new Date();
    const novaOS = {
        id: Date.now().toString(),
        data: agora.toISOString().split('T')[0],
        tipoLocal: 'base',
        empresa: '',
        veiculo: veiculo,
        mecanicos: equipeSelecionada,
        horaInicio: agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        horaFim: '',
        tipoServico: tipoServico.value,
        descricao: descricao,
        status: 'aberta',
        origem: 'mobile-app'
    };

    try {
        // Enviar diretamente para o endpoint dedicado do app
        const res = await fetch(`${serverUrl}/api/os`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(novaOS),
            signal: AbortSignal.timeout(15000)
        });
        
        if (!res.ok) throw new Error('Falha ao salvar a O.S.');

        // Sucesso!
        mostrarSucesso(novaOS);

    } catch (err) {
        console.error(err);
        showToast('Erro de conexão. Verifique se o servidor está online e tente novamente.');
    } finally {
        btn.disabled = false;
        btn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            Enviar Solicitação
        `;
        isSubmitting = false;
    }
}

// ============================================================
// EXIBIR SUCESSO
// ============================================================
function mostrarSucesso(os) {
    const details = document.getElementById('success-details');
    details.innerHTML = `
        <div class="success-line">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
            <div><strong>Veículo:</strong> ${os.veiculo}</div>
        </div>
        <div class="success-line">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
            <div><strong>Tipo:</strong> ${os.tipoServico}</div>
        </div>
        <div class="success-line">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            <div><strong>Equipe:</strong> ${os.mecanicos.join(', ')}</div>
        </div>
        <div class="success-line">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <div><strong>Horário:</strong> ${os.horaInicio}</div>
        </div>
    `;
    document.getElementById('success-overlay').classList.remove('hidden');
}

// ============================================================
// RESETAR FORMULÁRIO
// ============================================================
function resetarFormulario() {
    document.getElementById('form-os').reset();
    document.querySelectorAll('input[name="tipo-servico"]').forEach(r => r.checked = false);
    document.querySelectorAll('.equipe-tab').forEach((t, i) => {
        t.classList.toggle('active', i === 0);
    });
    carregarEquipe('mecanicos');
}

// ============================================================
// TOAST DE NOTIFICAÇÃO
// ============================================================
let toastTimer;
function showToast(msg, duration = 3000) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-msg');
    
    clearTimeout(toastTimer);
    toastMsg.textContent = msg;
    toast.classList.remove('hidden');
    
    if (duration > 0) {
        toastTimer = setTimeout(() => {
            toast.classList.add('hidden');
        }, duration);
    }
}

// ============================================================
// NAVEGAÇÃO BOTTOM (ABAS)
// ============================================================
// ============================================================
// AQUISIÇÕES (MOBILE)
// ============================================================
function preencherSelectsAquisicao() {
    // Fornecedores
    const dlForn = document.getElementById('aq-forn-list-mobile');
    if (dlForn && typeof fornecedores !== 'undefined') {
        dlForn.innerHTML = fornecedores.map(f => `<option value="${f.razaoSocial}">`).join('');
    }
    // Veículos
    const dlVeic = document.getElementById('aq-veic-list-mobile');
    if (dlVeic && typeof veiculos !== 'undefined') {
        dlVeic.innerHTML = veiculos.map(v => `<option value="${v.split(' - ')[0]}">`).join('');
    }
    // Responsáveis (mecânicos)
    const selResp = document.getElementById('aq-resp-mobile');
    if (selResp && typeof mecanicos !== 'undefined') {
        selResp.innerHTML = '<option value="">Selecionar quem buscou *</option>' +
            mecanicos.map(m => `<option value="${m}">${m}</option>`).join('');
    }
    // Data atual
    const hoje = new Date().toISOString().split('T')[0];
    const inpData = document.getElementById('aq-data-mobile');
    if (inpData) inpData.value = hoje;
}

function statusAquisicaoLabel(status) {
    return {
        'concluido': 'Concluído',
        'em-execucao': 'Em execução',
        'nao-concluido': 'Não realizado'
    }[status] || 'Em execução';
}

function formatarDataMobile(data) {
    if (!data) return '-';
    const partes = data.split('-');
    if (partes.length !== 3) return data;
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

function getAquisicaoMobileSelecionada() {
    return aquisicoesMobile.find(a => a.id === selectedAquisicaoMobileId) || null;
}

async function carregarAquisicoesMobile() {
    const list = document.getElementById('aq-list-mobile');
    const count = document.getElementById('aq-list-count');
    if (!list || !serverUrl) return;

    list.innerHTML = '<div class="empty-state">Carregando solicitações...</div>';
    if (count) count.textContent = 'Carregando...';

    try {
        const res = await fetch(`${serverUrl}/api/aquisicoes`, {
            signal: AbortSignal.timeout(15000)
        });
        if (!res.ok) throw new Error('Falha ao carregar aquisições.');

        aquisicoesMobile = await res.json();
        renderAquisicoesMobile();
    } catch (err) {
        console.error(err);
        list.innerHTML = '<div class="empty-state">Não foi possível carregar as solicitações.</div>';
        if (count) count.textContent = 'Erro ao carregar';
    }
}

function renderAquisicoesMobile() {
    const list = document.getElementById('aq-list-mobile');
    const count = document.getElementById('aq-list-count');
    if (!list) return;

    const ordenadas = [...aquisicoesMobile].sort((a, b) => {
        const dataB = new Date(b.criadoEm || b.data || 0).getTime();
        const dataA = new Date(a.criadoEm || a.data || 0).getTime();
        return dataB - dataA;
    });

    if (count) count.textContent = `${ordenadas.length} solicitação${ordenadas.length === 1 ? '' : 'es'}`;

    if (!ordenadas.length) {
        list.innerHTML = '<div class="empty-state">Nenhuma solicitação de aquisição registrada.</div>';
        return;
    }

    list.innerHTML = ordenadas.map(a => `
        <button class="aq-list-item" type="button" data-id="${a.id}">
            <div class="aq-list-head">
                <div class="aq-list-title">${a.item || '-'}</div>
                <span class="status-pill ${a.status || 'em-execucao'}">${statusAquisicaoLabel(a.status)}</span>
            </div>
            <div class="aq-list-meta">
                <span>Fornecedor: ${a.fornecedor || '-'}</span>
                <span>Veículo: ${a.veiculo || '-'}</span>
                <span>Responsável: ${a.responsavel || '-'} · ${formatarDataMobile(a.data)}</span>
                ${a.status === 'nao-concluido' && a.motivo ? `<span>Motivo: ${a.motivo}</span>` : ''}
            </div>
        </button>
    `).join('');

    list.querySelectorAll('.aq-list-item').forEach(item => {
        item.addEventListener('click', () => abrirMenuAquisicaoMobile(item.getAttribute('data-id')));
    });
}

function abrirMenuAquisicaoMobile(id) {
    selectedAquisicaoMobileId = id;
    const aq = getAquisicaoMobileSelecionada();
    if (!aq) return;

    document.getElementById('aq-action-title').textContent = aq.item || 'Solicitação';
    document.getElementById('aq-action-subtitle').textContent = `${aq.fornecedor || '-'} · ${statusAquisicaoLabel(aq.status)}`;
    document.getElementById('aq-action-backdrop').classList.remove('hidden');
    document.getElementById('aq-action-sheet').classList.remove('hidden');
}

function fecharMenuAquisicaoMobile() {
    document.getElementById('aq-action-backdrop')?.classList.add('hidden');
    document.getElementById('aq-action-sheet')?.classList.add('hidden');
}

function iniciarNovaAquisicaoMobile() {
    editingAquisicaoMobileId = '';
    document.getElementById('aq-edit-id-mobile').value = '';
    document.getElementById('form-aquisicao').reset();
    document.getElementById('aq-data-mobile').value = new Date().toISOString().split('T')[0];
    document.getElementById('btn-enviar-aq-text').textContent = 'Registrar Aquisição';
    document.getElementById('btn-cancel-edit-aq').classList.add('hidden');
    irParaTela('screen-aquisicao');
}

function editarAquisicaoMobileSelecionada() {
    const aq = getAquisicaoMobileSelecionada();
    if (!aq) return;
    fecharMenuAquisicaoMobile();

    editingAquisicaoMobileId = aq.id;
    document.getElementById('aq-edit-id-mobile').value = aq.id;
    document.getElementById('aq-compra-mobile').value = aq.numeroCompra || '';
    document.getElementById('aq-item-mobile').value = aq.item || '';
    document.getElementById('aq-data-mobile').value = aq.data || new Date().toISOString().split('T')[0];
    document.getElementById('aq-fornecedor-mobile').value = aq.fornecedor || '';
    document.getElementById('aq-veiculo-mobile').value = aq.veiculo || '';
    document.getElementById('aq-qtd-mobile').value = aq.quantidade || '';
    document.getElementById('aq-valor-mobile').value = aq.valor || '';
    document.getElementById('aq-resp-mobile').value = aq.responsavel || '';
    document.getElementById('aq-obs-mobile').value = aq.obs || '';
    document.getElementById('btn-enviar-aq-text').textContent = 'Salvar alterações';
    document.getElementById('btn-cancel-edit-aq').classList.remove('hidden');
    irParaTela('screen-aquisicao');
}

async function excluirAquisicaoMobileSelecionada() {
    const aq = getAquisicaoMobileSelecionada();
    if (!aq) return;
    if (!confirm('Excluir esta solicitação de aquisição?')) return;

    try {
        const res = await fetch(`${serverUrl}/api/aquisicao/${encodeURIComponent(aq.id)}`, {
            method: 'DELETE',
            signal: AbortSignal.timeout(15000)
        });
        if (!res.ok) throw new Error('Falha ao excluir.');
        fecharMenuAquisicaoMobile();
        showToast('Solicitação excluída.');
        carregarAquisicoesMobile();
    } catch (err) {
        console.error(err);
        showToast('Erro ao excluir a solicitação.');
    }
}

function abrirMotivoNaoRealizadoMobile() {
    const aq = getAquisicaoMobileSelecionada();
    if (!aq) return;
    fecharMenuAquisicaoMobile();
    document.getElementById('aq-not-done-reason').value = aq.motivo || '';
    document.getElementById('aq-reason-modal').classList.remove('hidden');
}

function fecharMotivoNaoRealizadoMobile() {
    document.getElementById('aq-reason-modal')?.classList.add('hidden');
}

async function salvarNaoRealizadoMobile() {
    const aq = getAquisicaoMobileSelecionada();
    const motivo = document.getElementById('aq-not-done-reason').value.trim();
    if (!aq) return;
    if (!motivo) {
        showToast('Informe o motivo.');
        return;
    }

    try {
        const res = await fetch(`${serverUrl}/api/aquisicao/${encodeURIComponent(aq.id)}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: 'nao-concluido', motivo, origem: aq.origem || 'mobile-app' }),
            signal: AbortSignal.timeout(15000)
        });
        if (!res.ok) throw new Error('Falha ao salvar motivo.');
        fecharMotivoNaoRealizadoMobile();
        showToast('Motivo salvo.');
        carregarAquisicoesMobile();
    } catch (err) {
        console.error(err);
        showToast('Erro ao salvar o motivo.');
    }
}

document.getElementById('form-aquisicao')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const numeroCompra = document.getElementById('aq-compra-mobile').value.trim();
    const item = document.getElementById('aq-item-mobile').value.trim();
    const data = document.getElementById('aq-data-mobile').value;
    const fornecedor = document.getElementById('aq-fornecedor-mobile').value.trim();
    const veiculo = document.getElementById('aq-veiculo-mobile').value.trim();
    const quantidade = document.getElementById('aq-qtd-mobile').value;
    const valor = document.getElementById('aq-valor-mobile').value;
    const responsavel = document.getElementById('aq-resp-mobile').value;
    const obs = document.getElementById('aq-obs-mobile').value.trim();

    if (!item) { showToast('Informe o item/material.'); return; }
    if (!data) { showToast('Informe a data.'); return; }
    if (!fornecedor) { showToast('Informe o fornecedor.'); return; }
    if (!quantidade) { showToast('Informe a quantidade.'); return; }
    if (!responsavel) { showToast('Selecione o responsável.'); return; }

    const btn = document.getElementById('btn-enviar-aq');
    btn.disabled = true;
    btn.innerHTML = '<span style="opacity:.7">Enviando...</span>';
    isSubmitting = true;

    const editId = document.getElementById('aq-edit-id-mobile').value;
    const aqOriginal = editId ? aquisicoesMobile.find(a => a.id === editId) : null;
    const novaAq = {
        id: editId || Date.now().toString(),
        numeroCompra, item, data, fornecedor, veiculo, 
        quantidade: parseInt(quantidade), 
        valor: valor ? parseFloat(valor) : null, 
        responsavel, 
        status: aqOriginal?.status || 'em-execucao', 
        motivo: aqOriginal?.motivo || '', 
        obs, 
        origem: editId ? 'edicao-mobile' : 'mobile-app', 
        criadoEm: aqOriginal?.criadoEm || new Date().toISOString()
    };

    try {
        const res = await fetch(editId ? `${serverUrl}/api/aquisicao/${encodeURIComponent(editId)}` : `${serverUrl}/api/aquisicao`, {
            method: editId ? 'PUT' : 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(novaAq),
            signal: AbortSignal.timeout(15000)
        });
        
        if (!res.ok) throw new Error('Falha ao salvar a Aquisição.');

        document.getElementById('success-details-aq').innerHTML = `
            ${novaAq.numeroCompra ? `
                <div class="success-line">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41L11 3.83A2 2 0 0 0 9.59 3H4a2 2 0 0 0-2 2v5.59A2 2 0 0 0 2.83 12l9.58 9.58a2 2 0 0 0 2.83 0l5.35-5.35a2 2 0 0 0 0-2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
                    <div><strong>Nº Compra:</strong> ${novaAq.numeroCompra}</div>
                </div>
            ` : ''}
            <div class="success-line">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.73z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                <div><strong>Item:</strong> ${novaAq.item}</div>
            </div>
            <div class="success-line">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18"/><path d="M5 21V7l8-4 8 4v14"/><path d="M9 9h6"/><path d="M9 13h6"/><path d="M9 17h6"/></svg>
                <div><strong>Fornecedor:</strong> ${novaAq.fornecedor}</div>
            </div>
            <div class="success-line">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <div><strong>Responsável:</strong> ${novaAq.responsavel}</div>
            </div>
            <div class="success-line">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                <div><strong>Data:</strong> ${novaAq.data.split('-').reverse().join('/')}</div>
            </div>
        `;
        document.getElementById('success-overlay-aq').classList.remove('hidden');
        editingAquisicaoMobileId = '';
        document.getElementById('aq-edit-id-mobile').value = '';
        carregarAquisicoesMobile();

    } catch (err) {
        console.error(err);
        showToast('Erro de conexão. Verifique se o servidor está online e tente novamente.');
    } finally {
        btn.disabled = false;
        btn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            <span id="btn-enviar-aq-text">${editingAquisicaoMobileId ? 'Salvar alterações' : 'Registrar Aquisição'}</span>
        `;
        document.getElementById('btn-cancel-edit-aq')?.classList.toggle('hidden', !editingAquisicaoMobileId);
        isSubmitting = false;
    }
});

document.getElementById('btn-nova-aq')?.addEventListener('click', () => {
    document.getElementById('success-overlay-aq').classList.add('hidden');
    iniciarNovaAquisicaoMobile();
});

// ============================================================
// CALENDÁRIO MOBILE
// ============================================================
let dataAtual = new Date();
let eventosMobile = [];
let allOSsMobile = [];

function initCalendarMobile() {
    document.getElementById('btn-menu-calendar')?.addEventListener('click', abrirDrawer);
    document.getElementById('drawer-calendar')?.addEventListener('click', () => {
        fecharDrawer();
        irParaTela('screen-calendar');
        loadAllCalendarData();
    });
    document.getElementById('home-go-calendar')?.addEventListener('click', () => {
        irParaTela('screen-calendar');
        loadAllCalendarData();
    });
    
    document.getElementById('btn-prev-month')?.addEventListener('click', () => {
        dataAtual.setMonth(dataAtual.getMonth() - 1);
        renderCalendarMobile();
    });
    document.getElementById('btn-next-month')?.addEventListener('click', () => {
        dataAtual.setMonth(dataAtual.getMonth() + 1);
        renderCalendarMobile();
    });
    document.getElementById('btn-hoje')?.addEventListener('click', () => {
        dataAtual = new Date();
        renderCalendarMobile();
    });
    
    // Config do modal de evento
    document.getElementById('btn-novo-evento')?.addEventListener('click', () => {
        document.getElementById('form-evento').reset();
        document.getElementById('ev-data').value = new Date().toISOString().split('T')[0];
        document.getElementById('event-modal').classList.remove('hidden');
    });
    document.getElementById('btn-cancel-evento')?.addEventListener('click', () => {
        document.getElementById('event-modal').classList.add('hidden');
    });
    document.getElementById('form-evento')?.addEventListener('submit', salvarEventoMobile);
    
    // Sheet actions
    document.getElementById('event-details-backdrop')?.addEventListener('click', closeEventSheet);
    document.getElementById('btn-event-action-cancel')?.addEventListener('click', closeEventSheet);
    document.getElementById('btn-event-delete')?.addEventListener('click', deleteEventMobile);
}

async function loadAllCalendarData() {
    try {
        const resData = await fetch(`${serverUrl}/api/data`, {
            signal: AbortSignal.timeout(15000)
        }).catch(()=>null);
        if (resData && resData.ok) {
            const data = await resData.json();
            eventosMobile = data.lembretes || [];
            allOSsMobile = data.ordens || [];
            aquisicoesMobile = data.aquisicoes || [];
        }
        renderCalendarMobile();
    } catch (e) {
        console.error('Erro ao carregar dados do calendário', e);
        renderCalendarMobile();
    }
}

function renderCalendarMobile() {
    const grid = document.getElementById('calendar-grid');
    if (!grid) return;
    
    const year = dataAtual.getFullYear();
    const month = dataAtual.getMonth();
    
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    document.getElementById('current-month-display').textContent = `${monthNames[month]} ${year}`;
    
    grid.innerHTML = '';
    
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'calendar-day empty';
        grid.appendChild(emptyCell);
    }
    
    const hoje = new Date();
    
    for (let day = 1; day <= daysInMonth; day++) {
        const cell = document.createElement('div');
        cell.className = 'calendar-day';
        if (year === hoje.getFullYear() && month === hoje.getMonth() && day === hoje.getDate()) {
            cell.classList.add('today');
        }
        
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        
        cell.innerHTML = `<div class="day-number">${day}</div>`;
        
        // Find events
        const evs = eventosMobile.filter(e => e.data === dateStr);
        const oss = allOSsMobile.filter(o => o.data === dateStr);
        const aqs = aquisicoesMobile.filter(a => a.data === dateStr);
        
        evs.forEach(ev => {
            const el = document.createElement('div');
            el.className = `cal-event ev-${ev.criticidade}`;
            el.textContent = ev.titulo;
            el.onclick = (e) => { e.stopPropagation(); openEventSheet(ev, 'evento'); };
            cell.appendChild(el);
        });
        
        oss.forEach(os => {
            const el = document.createElement('div');
            el.className = `cal-event ev-os`;
            el.textContent = `OS: ${os.veiculo}`;
            el.onclick = (e) => { e.stopPropagation(); openEventSheet(os, 'os'); };
            cell.appendChild(el);
        });
        
        aqs.forEach(aq => {
            const el = document.createElement('div');
            el.className = `cal-event ev-aq`;
            el.textContent = `Aq: ${aq.item}`;
            el.onclick = (e) => { e.stopPropagation(); openEventSheet(aq, 'aquisicao'); };
            cell.appendChild(el);
        });
        
        grid.appendChild(cell);
    }
}

async function salvarEventoMobile(e) {
    e.preventDefault();
    const titulo = document.getElementById('ev-titulo').value.trim();
    const data = document.getElementById('ev-data').value;
    const tipo = document.getElementById('ev-tipo').value;
    const criticidade = document.getElementById('ev-criticidade').value;
    
    if (!titulo || !data) return;
    
    const novo = {
        id: Date.now().toString(),
        titulo, data, tipo, criticidade,
        criadoEm: new Date().toISOString()
    };
    
    try {
        const getRes = await fetch(`${serverUrl}/api/data`, {
            signal: AbortSignal.timeout(15000)
        });
        if (!getRes.ok) throw new Error();
        const serverData = await getRes.json();
        serverData.lembretes = serverData.lembretes || [];
        serverData.lembretes.push(novo);

        const res = await fetch(`${serverUrl}/api/data`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(serverData),
            signal: AbortSignal.timeout(15000)
        });
        if(res.ok) {
            document.getElementById('event-modal').classList.add('hidden');
            showToast('Evento criado!');
            loadAllCalendarData();
        }
    } catch(err) {
        showToast('Erro ao criar evento.');
    }
}

let currentSelectedEvent = null;
let currentSelectedEventType = null;

function openEventSheet(item, type) {
    currentSelectedEvent = item;
    currentSelectedEventType = type;
    
    const titleEl = document.getElementById('sheet-event-title');
    const typeEl = document.getElementById('sheet-event-type');
    const dateEl = document.getElementById('sheet-event-date');
    const delBtn = document.getElementById('btn-event-delete');
    
    delBtn.style.display = 'none'; // Only allow delete for events, not OS/Aq here to keep simple
    
    if (type === 'evento') {
        titleEl.textContent = item.titulo;
        typeEl.textContent = `Lembrete - Criticidade: ${item.criticidade}`;
        delBtn.style.display = 'flex';
    } else if (type === 'os') {
        titleEl.textContent = `O.S. Veículo: ${item.veiculo}`;
        typeEl.textContent = `Tipo: ${item.tipoServico} - ${item.status}`;
    } else {
        titleEl.textContent = `Aquisição: ${item.item}`;
        typeEl.textContent = `Para: ${item.veiculo || 'Estoque'} - ${item.status}`;
    }
    
    dateEl.textContent = item.data.split('-').reverse().join('/');
    
    document.getElementById('event-details-backdrop').classList.remove('hidden');
    document.getElementById('event-details-sheet').classList.remove('hidden');
}

function closeEventSheet() {
    document.getElementById('event-details-backdrop').classList.add('hidden');
    document.getElementById('event-details-sheet').classList.add('hidden');
    currentSelectedEvent = null;
}

async function deleteEventMobile() {
    if(!currentSelectedEvent || currentSelectedEventType !== 'evento') return;
    
    if(!confirm('Excluir este evento?')) return;
    
    try {
        const getRes = await fetch(`${serverUrl}/api/data`, {
            signal: AbortSignal.timeout(15000)
        });
        if (!getRes.ok) throw new Error();
        const serverData = await getRes.json();
        serverData.lembretes = (serverData.lembretes || []).filter(l => l.id !== currentSelectedEvent.id);

        const res = await fetch(`${serverUrl}/api/data`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(serverData),
            signal: AbortSignal.timeout(15000)
        });
        
        if(res.ok) {
            closeEventSheet();
            showToast('Evento excluído.');
            loadAllCalendarData();
        }
    } catch(e) {
        showToast('Erro ao excluir evento.');
    }
}

// Inicializar calendário ao fim do DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    initCalendarMobile();
});

// ============================================================
// DASHBOARD LOGIC E HISTORICO DE AQUISIÇÃO
// ============================================================
let chartOndaInstance = null;
let chartBarraInstance = null;

async function carregarDashboard() {
    if (!serverUrl) return;
    try {
        const resData = await fetch(`${serverUrl}/api/data`, {
            signal: AbortSignal.timeout(15000)
        }).catch(()=>null);
        let aquisicoes = [];
        let lembretes = [];
        let ordens = [];
        
        if (resData && resData.ok) {
            const data = await resData.json();
            lembretes = data.lembretes || [];
            ordens = data.ordens || [];
            aquisicoes = data.aquisicoes || [];
        } else {
            const resAq = await fetch(`${serverUrl}/api/aquisicoes`, {
                signal: AbortSignal.timeout(15000)
            }).catch(()=>null);
            if (resAq && resAq.ok) {
                aquisicoes = await resAq.json();
            }
        }
        
        const aqConcluidas = aquisicoes.filter(a => a.status === 'concluido' || a.status === 'Concluído').length;
        const aqNaoRealizadas = aquisicoes.filter(a => a.status === 'nao-concluido' || a.status === 'Não Concluído').length;
        const aqAnuais = aquisicoes.length;
        
        // Contar veiculos e motoristas das listas globais (data-lists.js)
        const totalVeiculos = (typeof veiculos !== 'undefined') ? veiculos.length : 0;
        const totalMotoristas = (typeof motoristas !== 'undefined') ? motoristas.length : 0;
        
        const elVeic = document.getElementById('dash-ind-veiculos'); if (elVeic) elVeic.textContent = totalVeiculos;
        const elMot = document.getElementById('dash-ind-motoristas'); if (elMot) elMot.textContent = totalMotoristas;
        const elAqTotal = document.getElementById('dash-ind-aq-total'); if (elAqTotal) elAqTotal.textContent = aqAnuais;
        const elAqFail = document.getElementById('dash-ind-aq-fail'); if (elAqFail) elAqFail.textContent = aqNaoRealizadas;

        const listaLembretesEl = document.getElementById('dash-list-lembretes');
        if (listaLembretesEl) {
            const hoje = new Date();
            const limite = new Date();
            limite.setDate(hoje.getDate() + 3);
            
            const lembretesProximos = lembretes.filter(l => {
                if (l.finalizado || l.naoRealizado) return false;
                const dataL = new Date(l.data + 'T00:00:00');
                return dataL >= hoje && dataL <= limite;
            }).sort((a,b) => new Date(a.data) - new Date(b.data)).slice(0, 5);
            
            if (lembretesProximos.length > 0) {
                listaLembretesEl.innerHTML = lembretesProximos.map(l => {
                    const dataFormat = l.data.split('-').reverse().join('/');
                    return `<div class="dash-list-item">
                        <div>
                            <div style="font-weight:600; font-size:14px;">${l.titulo}</div>
                            <div style="font-size:12px; color:var(--text-secondary);">${dataFormat}</div>
                        </div>
                        <div style="font-size:10px; padding:4px 8px; border-radius:12px; background:var(--primary-light); color:var(--primary);">
                            ${l.criticidade || 'Normal'}
                        </div>
                    </div>`;
                }).join('');
            } else {
                listaLembretesEl.innerHTML = '<div class="empty-state">Nenhum lembrete para os próximos 3 dias.</div>';
            }
        }

        const contagemPlacas = {};
        aquisicoes.forEach(a => {
            if (a.veiculo) {
                contagemPlacas[a.veiculo] = (contagemPlacas[a.veiculo] || 0) + 1;
            }
        });
        const placasOrdenadas = Object.entries(contagemPlacas).sort((a,b) => b[1] - a[1]).slice(0, 3);
        const rankingEl = document.getElementById('dash-ranking-placas');
        if (rankingEl) {
            if (placasOrdenadas.length > 0) {
                rankingEl.innerHTML = placasOrdenadas.map((p, index) => {
                    return `<div class="dash-list-item">
                        <div style="display:flex; align-items:center; gap:12px;">
                            <span style="font-weight:800; color:var(--primary); font-size:16px;">#${index+1}</span>
                            <span style="font-weight:600;">${p[0]}</span>
                        </div>
                        <span style="font-weight:700;">${p[1]} aq.</span>
                    </div>`;
                }).join('');
            } else {
                rankingEl.innerHTML = '<div class="empty-state">Nenhuma aquisição.</div>';
            }
        }

        renderizarGraficosDashboard(aquisicoes);

    } catch (e) {
        console.error('Erro ao carregar dados do dashboard', e);
    }
}

function renderizarGraficosDashboard(aquisicoes) {
    if (typeof Chart === 'undefined') return;
    
    const datas = {};
    aquisicoes.forEach(a => {
        if (!a.data) return;
        const mesAno = a.data.substring(0, 7);
        if (!datas[mesAno]) datas[mesAno] = { total: 0, fail: 0 };
        datas[mesAno].total++;
        if (a.status === 'nao-concluido' || a.status === 'Não Concluído') datas[mesAno].fail++;
    });
    
    const labels = Object.keys(datas).sort();
    const dataTotal = labels.map(l => datas[l].total);
    const dataFail = labels.map(l => datas[l].fail);
    
    const formatedLabels = labels.map(l => {
        const parts = l.split('-');
        return parts[1] + '/' + parts[0];
    });

    const ctxOnda = document.getElementById('chart-mobile-onda');
    if (ctxOnda) {
        if (chartOndaInstance) chartOndaInstance.destroy();
        chartOndaInstance = new Chart(ctxOnda, {
            type: 'line',
            data: {
                labels: formatedLabels,
                datasets: [
                    {
                        label: 'Realizadas',
                        data: dataTotal,
                        borderColor: '#105444',
                        backgroundColor: 'rgba(16,84,68,0.2)',
                        tension: 0.4,
                        fill: true
                    },
                    {
                        label: 'Não Realizadas',
                        data: dataFail,
                        borderColor: '#ef4444',
                        backgroundColor: 'transparent',
                        tension: 0.4,
                        borderDash: [5, 5]
                    }
                ]
            },
            options: { responsive: true, maintainAspectRatio: false }
        });
    }

    const ctxBarra = document.getElementById('chart-mobile-barra');
    if (ctxBarra) {
        if (chartBarraInstance) chartBarraInstance.destroy();
        chartBarraInstance = new Chart(ctxBarra, {
            type: 'bar',
            data: {
                labels: formatedLabels.slice(-5),
                datasets: [{
                    label: 'Aquisições',
                    data: dataTotal.slice(-5),
                    backgroundColor: '#105444',
                    borderRadius: 4
                }]
            },
            options: { responsive: true, maintainAspectRatio: false }
        });
    }
}

// BINDINGS PARA DASHBOARD E ABA HISTORICO
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn-dash-ver-calendario')?.addEventListener('click', () => {
        irParaTela('screen-calendar');
        if(typeof loadAllCalendarData === 'function') loadAllCalendarData();
    });
    
    document.getElementById('drawer-home')?.addEventListener('click', () => {
        fecharDrawer();
        irParaTela('screen-home');
        carregarDashboard();
    });

    document.getElementById('drawer-historico-aq')?.addEventListener('click', () => {
        fecharDrawer();
        irParaTela('screen-historico-aq');
        if(typeof carregarAquisicoesMobile === 'function') carregarAquisicoesMobile();
    });
    
    document.getElementById('btn-hist-new-aq')?.addEventListener('click', () => {
        irParaTela('screen-aquisicao');
    });

    document.getElementById('btn-menu-hist-aq')?.addEventListener('click', () => {
        document.getElementById('drawer').classList.add('open');
        document.getElementById('drawer-backdrop').classList.add('open');
    });
    
    // Atualizar dashboard quando abrir a home
    const originalIrParaTela = irParaTela;
    irParaTela = function(id) {
        originalIrParaTela(id);
        if (id === 'screen-home') {
            carregarDashboard();
        }
    };
});

// Forçar tudo que for digitado a ficar maiúsculo
document.addEventListener('input', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        const type = e.target.type;
        if (type !== 'password' && type !== 'email' && type !== 'url' && type !== 'number' && type !== 'date') {
            const start = e.target.selectionStart;
            const end = e.target.selectionEnd;
            e.target.value = e.target.value.toUpperCase();
            e.target.setSelectionRange(start, end);
        }
    }
});

