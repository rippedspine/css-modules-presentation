```
...

{
  test: /\.css$/,
  loader: 'style!css?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]'
}

...

/* 
* Tiny and unique
* classes for your 
* production builds: 
*/

localIdentName=[hash:base64:5] // => '_12mmr'
```