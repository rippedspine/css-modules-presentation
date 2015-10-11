```
/* Compose from a file in project using a relative path. */
.root {
  composes: card from '../../styles/cards';
}

/* Compose from file in directory added to moduleDirectories in webpack config. */
.image {
  composes: br1 from 'border-radius.css';
  max-width: 100%;
  width: 30vw;
}

/* Compose from a node_module. */
.description {
  composes: tc from 'tachyons-text-align/tachyons-text-align';
}
```
