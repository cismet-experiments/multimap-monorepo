import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run simple-leaflet:serve',
        production: 'nx run simple-leaflet:preview',
      },
      ciWebServerCommand: 'nx run simple-leaflet:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
