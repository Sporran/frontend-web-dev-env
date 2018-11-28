const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "61.0.1",
        chrome: "67",
        safari: "11.1",
        opera: "56"
      },
      useBuiltIns: "usage"
    },
  ],
];

module.exports = { presets };
