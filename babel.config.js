module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['react-native-worklets/plugin'],
    ['@babel/plugin-transform-export-namespace-from'],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          '@': './src',
          '@components': './src/components',
          '@types': './src/types',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@Schema' : './src/Schema'
        }
      }
    ]
  ],
};