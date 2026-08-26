# myst-apidoc

Proof of concept API documentation generator for [mystmd](https://mystmd.org).

The plugin renders a producer-agnostic JSON schema (module -> submodule ->
function -> numpydoc-style sections). Any tool that emits this schema can be
used as the data source; two known producers are documented below.

Refer to the [plugin README](myst-api-plugin/README.md) for usage.

For an example rendering, see: https://github.com/stefanv/myst-apidoc-example

## Included here

- `./fleece`: script to extract numpydoc-style docstrings from a Python package
- `./myst-apidoc-plugin`: mystmd plugin to render JSON matching the schema below

## Alternative producer: Griffe

Instead of `fleece`, you can generate the same JSON schema using
[Griffe](https://mkdocstrings.github.io/griffe/)'s `GriffeLoader` and
`Docstring.parse("numpy")`. Griffe's own `as_dict`/`as_json` serialization
(https://mkdocstrings.github.io/griffe/guide/users/serializing/) does **not**
produce this schema on its own — it only stores the raw docstring text — so a
small Python script is still needed to call `Docstring.parse("numpy")` per
member and map the parsed sections onto the `Func` shape in `types.ts`.

This is a valid alternative to `fleece` and requires no changes to the
plugin itself, since the plugin only consumes the JSON schema, not the
producer that generated it.
