<img src="./public/vite-deno.svg" title="Vite + Deno"/>

This is an example of Vite and Deno using a Lit component. Inspired by [this repo](https://github.com/bartlomieju/vite-deno-example) using Vite + Deno + Vue.

A live demo is running here: https://vite-deno-lit.deno.dev/

## Notes

- You need to use `.mjs` or `.mts` extension for the `vite.config.[ext]` file.

## Papercuts

Currently there's a "papercut" for Deno users:

- peer dependencies need to be referenced in `vite.config.mjs`

## Running

You need to have Deno v1.25.4 or later installed to run this repo.

Start a dev server:

```
$ deno task dev
```

## Deploy

Build production assets:

```
$ deno task build
```

The output will be in the `dist` directory.

