<img src="./public/vite-deno.svg" title="Vite + Deno"/>

This is an example of Vite and Deno using a Lit component. Inspired by [this repo](https://github.com/bartlomieju/vite-deno-example) using Vite + Deno + Vue.

You can view a demo here: 

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

This repository uses
[Deno Deploy and Git integration](https://deno.com/deploy/docs/projects#git-integration),
where deployment is happening as part of the CI pipeline.