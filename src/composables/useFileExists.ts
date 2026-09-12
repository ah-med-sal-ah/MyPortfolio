import { onMounted, ref } from 'vue'

/**
 * Checks whether a static asset actually resolves, so a card can fall back
 * gracefully instead of offering a link that 404s. `null` while checking.
 */
export function useFileExists(path: string) {
  const exists = ref<boolean | null>(null)

  onMounted(async () => {
    try {
      const response = await fetch(path, { method: 'HEAD' })
      // Some static hosts (and Vite's own dev/preview server) fall back to
      // index.html with a 200 for unknown paths, so `response.ok` alone
      // isn't a reliable "file exists" signal — a real PDF is never text/html.
      const contentType = response.headers.get('content-type') ?? ''
      exists.value = response.ok && !contentType.includes('text/html')
    } catch {
      exists.value = false
    }
  })

  return exists
}
