module.exports = {
  presets: [
    '@babel/preset-typescript',
    ['@babel/preset-env', { loose: true }],
    '@babel/preset-react',
  ],
  plugins: [
    ['@babel/plugin-proposal-private-methods', { loose: true }],
  ],
};
