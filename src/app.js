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
        mostrarTela('screen-form');
        verificarConexao();
        carregarEquipe('mecanicos');
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
        const res = await fetch(`${url}/api/data`, { 
            signal: AbortSignal.timeout(5000) 
        });
        if (!res.ok) throw new Error('Servidor retornou erro.');
        
        serverUrl = url;
        localStorage.setItem(STORAGE_KEY, serverUrl);
        input.value = '';
        mostrarTela('screen-form');
        verificarConexao();
        carregarEquipe('mecanicos');
        showToast('Conectado com sucesso! ✓');
    } catch (err) {
        showToast(`Não foi possível conectar. Verifique o endereço e se o servidor está online.`);
    }
});

// ============================================================
// STATUS DE CONEXÃO
// ============================================================
async function verificarConexao() {
    const dot = document.querySelector('.status-dot');
    const txt = document.getElementById('status-text');
    
    dot.className = 'status-dot checking';
    txt.textContent = 'Verificando conexão...';

    try {
        const res = await fetch(`${serverUrl}/api/data`, { 
            signal: AbortSignal.timeout(5000) 
        });
        if (res.ok) {
            dot.className = 'status-dot online';
            txt.textContent = `Conectado · ${new URL(serverUrl).hostname}`;
        } else {
            throw new Error();
        }
    } catch {
        dot.className = 'status-dot offline';
        txt.textContent = 'Sem conexão com o servidor';
    }
}

// Verificar conexão a cada 30 segundos
setInterval(() => {
    if (serverUrl && document.getElementById('screen-form') && 
        !document.getElementById('screen-form').classList.contains('hidden')) {
        verificarConexao();
    }
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
            <div class="equipe-check">✓</div>
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
    // Tabs de equipe
    document.querySelectorAll('.equipe-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.equipe-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            carregarEquipe(tab.getAttribute('data-equipe'));
        });
    });

    // Botão de configuração
    document.getElementById('btn-config').addEventListener('click', () => {
        const input = document.getElementById('config-server-url');
        input.value = serverUrl;
        mostrarTela('screen-config');
    });

    // Botão nova O.S.
    document.getElementById('btn-nova-os').addEventListener('click', () => {
        document.getElementById('success-overlay').classList.add('hidden');
        resetarFormulario();
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
            signal: AbortSignal.timeout(8000)
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
        🚗 <strong>Veículo:</strong> ${os.veiculo}<br>
        🔧 <strong>Tipo:</strong> ${os.tipoServico}<br>
        👷 <strong>Equipe:</strong> ${os.mecanicos.join(', ')}<br>
        🕐 <strong>Horário:</strong> ${os.horaInicio}
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
