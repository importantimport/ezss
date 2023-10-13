# EZSS [![npm](https://img.shields.io/npm/v/ezss)](https://npmjs.com/package/ezss) [![install size](https://pkg-size.dev/badge/install/24426)](https://pkg-size.dev/ezss) [![bundle size](https://pkg-size.dev/badge/bundle/20393)](https://pkg-size.dev/ezss)

Easier alternative of `react-secure-storage`.

## Why

The `react-secure-storage` code is unnecessarily complex and doesn't support custom data types.

EZSS only implements its internal `EncryptionService` class so that you can use it with the libraries you want. (e.g. `@mantine/hooks`)

## Install

```bash
pnpm add ezss
# yarn add ezss
# npm i ezss
```

## Usage Examples

> do you have other examples? PR's welcome!

###### @mantine/hooks - useLocalStorage

```ts
import { useLocalStorage } from '@mantine/hooks'
import encryption from 'ezss' // A
// import { EncryptionService } from 'ezss' // B

export const useSecureLocalStorage =
  <T = string>(props: Parameters<typeof useLocalStorage<T>>[0]) => {
    // const encryption = new EncryptionService() // B

    return useLocalStorage<T>({
      ...props,
      serialize: value => encryption.encrypt(JSON.stringify(value)),
      deserialize: value => {
        if (value) {
          try {
            return JSON.parse(encryption.decrypt(value))
          } catch {
            return encryption.decrypt(value)
          }
        } else return value
      },
    })
  }
```

## License

Licensed under the [MIT](LICENSE).
