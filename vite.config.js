const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.js'),
      name: 'PV',
      fileName: (format) => `pv.${format}.js`
    },
    rollupOptions: {
      output: {
        globals: {
          'petite-vue': 'petite-vue'
        }
      }
    }
  }
})