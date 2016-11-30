module.exports = {
  entry: './src/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      openweather: 'src/api/openweather.jsx',
      Main: 'src/components/Main.jsx',
      Nav: 'src/components/Nav.jsx',
      Weather: 'src/components/Weather.jsx',
      WeatherForm: 'src/components/WeatherForm.jsx',
      WeatherMessage: 'src/components/WeatherMessage.jsx',
      About: 'src/components/About.jsx',
      Examples: 'src/components/Examples.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'latest', 'stage-3']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  // devtool: 'inline-source-map',
  watch: true,
  watchOptions: {
    aggregateTimeout: 100
  }
};
