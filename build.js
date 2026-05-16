/**
 * build.js - Script para copiar arquivos da pasta src para dist
 * Execute com: node build.js
 */
const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'src');
const dist = path.join(__dirname, 'dist');

// Criar pasta dist se não existir
if (!fs.existsSync(dist)) {
    fs.mkdirSync(dist, { recursive: true });
}

// Copiar todos os arquivos de src para dist
function copiarPasta(origem, destino) {
    const items = fs.readdirSync(origem);
    items.forEach(item => {
        const caminhoOrigem = path.join(origem, item);
        const caminhoDestino = path.join(destino, item);
        const stat = fs.statSync(caminhoOrigem);
        
        if (stat.isDirectory()) {
            if (!fs.existsSync(caminhoDestino)) {
                fs.mkdirSync(caminhoDestino, { recursive: true });
            }
            copiarPasta(caminhoOrigem, caminhoDestino);
        } else {
            fs.copyFileSync(caminhoOrigem, caminhoDestino);
            console.log(`  ✅ Copiado: ${item}`);
        }
    });
}

console.log('\n🚀 Time Fleet Mobile - Build\n');
console.log('📂 Copiando arquivos...');
copiarPasta(src, dist);
console.log('\n✅ Build concluído! Pasta dist atualizada.');
console.log('👉 Próximo passo: npx cap sync\n');
