export interface PedidoProduccion {
  id: string
  numeroPedido: string
  cliente: string
  maquinaImpresion: string
  desarrTexto: string
  desarrNumero: number
  metros: number
  tipoImpresion: 'Superficie' | 'Transparencia'
  capa: string
  camisa: string
  fecha: string
  observaciones: string
  secuenciaPedido: number
  etapaActual: string
  etapasSecuencia: string[]
}
