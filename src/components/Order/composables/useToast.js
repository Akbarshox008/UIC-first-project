import { ref } from 'vue'

export function useToast() {
  const toasts = ref([])

  function showToast(message, type = 'success') {
    const id = Date.now()
    toasts.value.push({ id, message, type })
    // 3 sekunddan keyin o‘chadi
    setTimeout(() => {
      toasts.value = toasts.value.filter(t => t.id !== id)
    }, 3000)
  }

  return { toasts, showToast }
}
