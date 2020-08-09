import React from 'react';
import ReactDOM from 'react-dom';
import './app.global.css';
import CreateProject from './components/create-project';

ReactDOM.render(<CreateProject />, document.getElementById('root'));

// import React, { Fragment } from 'react';
// import { render } from 'react-dom';
// import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
// import { history, configuredStore } from './store';
// import './app.global.css';
// import CreateProject from './components/create-project';

// const store = configuredStore();
// const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

// document.addEventListener('DOMContentLoaded', () => {
//   // eslint-disable-next-line global-require
//   const Root = require('./containers/Root').default;
//   render(
//     React.createElement(
//       AppContainer,
//       null,
//       React.createElement(Root, { store: store, history: history })
//     ),
//     document.getElementById('root')
//   );
// });
