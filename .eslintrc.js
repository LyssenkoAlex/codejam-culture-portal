module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
    ],
    parser: "babel-eslint",
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        "semi": 0,
        'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
        'max-len': ["error", { "code": 250 }],
        "react/destructuring-assignment": ["warn", "always", { "ignoreClassFields": true }],
        "react/prefer-stateless-function": "off"
    },
};
