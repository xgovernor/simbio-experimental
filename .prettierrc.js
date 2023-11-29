module.exports = {
    plugins: ["prettier-plugin-tailwindcss"],
    tailwindConfig: "./tailwind.config.js",
    singleQuote: false, // Use single quotes instead of double quotes
    semi: true, // Add semicolons at the end of statements
    useTabs: false, // Use spaces instead of tabs
    tabWidth: 4, // Set the tab width to 2 spaces
    printWidth: 120, // Set the line length to 120 characters
    trailingComma: "all", // Add trailing commas wherever possible
    arrowParens: "always", // Add parentheses to arrow function parameters, e.g., (x) => x
    endOfLine: "lf", // Use Unix-style line endings (line feed)
};