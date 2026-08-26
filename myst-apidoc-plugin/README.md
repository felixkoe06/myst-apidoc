# myst-apidoc-plugin

MyST plugin for rendering API docs from a producer-agnostic JSON schema
(see `src/types.ts`). `fleece` is one producer of this schema; a Python
script using [Griffe](https://mkdocstrings.github.io/griffe/) is another.

![](./thumbnail.png)

## Development

To develop this package, you may run

```bash
npm install
npm run lint
```

Then, to add the plugin to your MyST build, you must build the `.mjs` file:

```bash
npm run build
```

Then link to the built file from you `myst.yml`:

```yaml
project:
  ...
  plugins:
    - myst-apidoc-plugin/dist/index.mjs
```

## Extracting docstring data

With `fleece`:

```sh
fleece skimage > skimage-api.json
```

With Griffe (alternative producer, same JSON schema): load the target module
with `GriffeLoader(docstring_parser="numpy")`, call
`member.docstring.parse("numpy")` for each function/class, and map the
resulting sections onto the `Func` type in `src/types.ts` (`Parameters`,
`Returns`, `Raises`, etc. as `{name, type, desc}` lists).

## Plugin Usage

In your markdown you may now reference the generator JSON output to render the full documentation:

```md
:::{apidoc} ./<path_relative_to_myst.yml>/skimage-api.json
:::
```

You can specify the module name and heading depth as options:

```md
:::{apidoc} ./skimage-api.json
:module: skimage
:depth: 2
:::
```

You can also target a specific submodule:

```md
:::{apidoc} ./skimage-api.json#color
:module: skimage
:depth: 2
:::
```

or a specific function:

```md
:::{apidoc} ./skimage-api.json#color.lch2lab
:module: skimage
:depth: 2
:::
```
