/* Compose from a file in project using a relative path. */
.root {
  composes: card from '../../styles/cards.css'; 
  max-width: 20rem;
  margin: auto;
  padding: 2rem;
}

/* Compose from file in directory added to moduleDirectories in webpack config. */
.image {
  composes: br1 from 'styles/border-radius.css';
  width: 100%;
}

/* Compose from a node_module. */
.description {
  composes: mbn from 'tachyons/css/tachyons.css';
  font-size: 1.5rem;
}