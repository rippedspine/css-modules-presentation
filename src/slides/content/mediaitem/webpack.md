```
...

{
  test: /\.css$/,
  loader: 'style!css?
    modules&importLoaders=1&
    localIdentName=[name]_[local]_[hash:base64:5]
    !postcss'
}

...
```