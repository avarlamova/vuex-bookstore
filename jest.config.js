module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transform: {
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest",
  },
  moduleFileExtensions: [
    "js",
    "json",
    // tell Jest to handle `*.vue` files
    "vue",
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
