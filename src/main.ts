// main.ts
import * as fs from 'fs';
import * as path from 'path';

import IAdapter from './interfaces/IAdapter';

// Defina o caminho para o diretório dos adapters
const adaptersDir = path.join(__dirname, 'adapters');

// Carrega os arquivos no diretório dos adapters
const adapterFiles = fs.readdirSync(adaptersDir);

// Carrega os adapters dinamicamente e executa o método execute em paralelo
async function loadAndExecuteAdapters() {
  const adapters = await Promise.all(
    adapterFiles.map(async (file) => {
      const fullPath = path.join(adaptersDir, file);
      const AdapterClass = (await import(fullPath)).default;
      return new AdapterClass() as IAdapter;
    })
  );

  const results = await Promise.all(adapters.map((adapter) => adapter.execute()));

  console.log('Results:', results);
}

loadAndExecuteAdapters();