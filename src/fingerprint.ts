// eslint-disable-next-line n/no-unpublished-import
import { fnv1a52 } from '~/lib/fnv1a52.ts'

/** {@link https://browserleaks.com/canvas#how-does-it-work} */
export const getFingerprint = () => {
  try {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if (!ctx)
      return

    const txt = 'EZSS.getFingerprint <canvas> 1.0'
    ctx.textBaseline = 'top'
    ctx.font = '14px \'Arial\''
    ctx.textBaseline = 'alphabetic'
    ctx.fillStyle = '#f60'
    ctx.fillRect(125, 1, 62, 20)
    ctx.fillStyle = '#069'
    ctx.fillText(txt, 2, 15)
    ctx.fillStyle = 'rgba(102, 204, 0, 0.7)'
    ctx.fillText(txt, 4, 17)

    const fingerprint = canvas.toDataURL()

    // TODO: test
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    return fnv1a52(fingerprint)
  }
  catch {
    return
  }
}
