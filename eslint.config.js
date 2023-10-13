// eslint-disable-next-line n/no-unpublished-import
import { createFullConfig } from '@importantimport/eslint-config'

export default await createFullConfig({
  ts: true,
  // ts: {
  //   project: ['./tsconfig.json'],
  // },
})
