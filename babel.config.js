module.exports = {
  presets: [
    isTestEnv && [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    (isProductionEnv || isDevelopmentEnv) && [
      '@babel/preset-env',
      {
        forceAllTransforms: true,
        useBuiltIns: 'usage',
        corejs: '3',
        modules: false,
        exclude: ['transform-typeof-symbol']
      }
    ],
    [
      '@babel/preset-react',
      {
        development: isDevelopmentEnv || isTestEnv,
        useBuiltIns: true
      }
    ]
  ].filter(Boolean)
  };