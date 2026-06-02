export function capitalizarTexto(texto: string): string {
  if (!texto) return "";
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}