### Projeto upload com Fastfy TypeScript 55min finished 13min

#### Dependências
   * npm i fastify @fastify/cors
   * npm install --save typescript
   * npm install ts-node-dev -D
   * npm install @types/node --save-dev
   * npm install tsc-init

   * OPTIONAL --> sudo npm install tsc-init -g

#### Config package.json
  "scripts": {
    "dev": "ts-node-dev --transpile-only src/server.ts"
  },

#### tsconfig.json
{
  "compilerOptions": {
      "module": "commonjs",
      "esModuleInterop": true,
      "allowSyntheticDefaultImports": true,
      "target": "es6",
      "noImplicitAny": true,
      "moduleResolution": "node",
      "sourceMap": true,
      "outDir": "dist",
      "baseUrl": ".",
      "paths": {
          "*": [
              "node_modules/*",
              "src/types/*"
          ]
      }
  },
  "include": [
      "src/**/*"
  ]
}

npm run dev

#### Outras dependências

* npm i express @types/express
* npm i cors @types/cors
* npm i multer @types/multer

#### Referência do projeto

```Sujeito programador
https://www.youtube.com/watch?v=XuTfN_84rcU&t=1302s
```

#### End Points
* localhost:3333/upload

#### Testes 

* 1. testando cors
curl -H "Origin: http://localhost:3333" --head http://localhost:5000/rooms