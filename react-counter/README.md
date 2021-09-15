# Sample project tp publish a React package to npm

This project has the same files as `react-counter-local`. 

Also it includes following configuration files.
- `.babelrc`
- `webpack.config.js`

To test it locally, you can perform the following steps.

- Open a terminal pointing to `react-counter` project
- Run the following command on the terminal `npm run build`
- Run the following command on the terminal `npm link`. Now your package is ready to link.
- Open a terminal pointing to `react-npm-sample` project
- Run the following command on the terminal `npm link react-counter`. This will link your project with the `react-counter` npm package we have created.
- If you getting this error `You might have more than one copy of React in the same app` then
  - Open a terminal pointing to `react-counter` project
  - Run the following command on the terminal `../react-npm-sample/node_modules/react`. This indicates that you should be using the same copy of react to run our linked package.
