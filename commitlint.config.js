module.exports = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: {
    parserOpts: {
      issuePrefixes: ["PREFIX-"],
    },
  },
  rules: {
    "references-empty": [2, "never"],
  },
};
