import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

// Converts all JPEG/PNG in dist/assets → WebP after the optimizer runs,
// then patches JS/CSS/HTML bundles so every reference points to the new files.
function webpConvertPlugin() {
  return {
    name: 'webp-convert',
    apply: 'build' as const,
    async closeBundle() {
      const assetDir = path.resolve('dist/assets')
      if (!fs.existsSync(assetDir)) return

      const files = fs.readdirSync(assetDir)
      const imageFiles = files.filter((f: string) => /\.(jpe?g|png)$/i.test(f))
      if (imageFiles.length === 0) return

      const renames: Record<string, string> = {}

      // Convert each JPEG/PNG → WebP
      for (const file of imageFiles) {
        const srcPath  = path.join(assetDir, file)
        const newFile  = file.replace(/\.(jpe?g|png)$/i, '.webp')
        const destPath = path.join(assetDir, newFile)
        await sharp(srcPath).webp({ quality: 80 }).toFile(destPath)
        fs.unlinkSync(srcPath)
        renames[file] = newFile
      }

      // Patch JS/CSS files that reference the old filenames
      const patchFiles = fs.readdirSync(assetDir).filter((f: string) => /\.(js|css)$/.test(f))
      for (const file of patchFiles) {
        const filePath = path.join(assetDir, file)
        let content = fs.readFileSync(filePath, 'utf-8')
        let changed = false
        for (const [oldName, newName] of Object.entries(renames)) {
          if (content.includes(oldName)) {
            content = content.split(oldName).join(newName)
            changed = true
          }
        }
        if (changed) fs.writeFileSync(filePath, content)
      }

      // Patch index.html
      const htmlPath = path.resolve('dist/index.html')
      if (fs.existsSync(htmlPath)) {
        let html = fs.readFileSync(htmlPath, 'utf-8')
        let changed = false
        for (const [oldName, newName] of Object.entries(renames)) {
          if (html.includes(oldName)) {
            html = html.split(oldName).join(newName)
            changed = true
          }
        }
        if (changed) fs.writeFileSync(htmlPath, html)
      }

      const count = Object.keys(renames).length
      console.log(`\n✨ [webp-convert] converted ${count} image(s) to WebP`)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 1. Compress JPEG/PNG/SVG first
    ViteImageOptimizer({
      jpeg: { quality: 75 },
      jpg:  { quality: 75 },
      png:  { quality: 80, compressionLevel: 9 },
      svg: {
        plugins: [{ name: 'preset-default' }],
      },
    }),
    // 2. Then convert compressed JPEG/PNG → WebP (runs after optimizer)
    webpConvertPlugin(),
  ],
  base: '/',
})
