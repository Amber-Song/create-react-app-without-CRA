module.exports = {
    /** Loader
     * Cause webpack only understand JS and JSON file.
     * Allow webpack to process other types of files and convert them into valid modules
     * (prepare to add to dependency graph)
     * 
     * At a higher lever, loaders have two properties: test, use
     * test: identify which file or files should be transformed.
     * use:  indicates which loader should be used to do the transforming.
     * 
     * The rules below equal to:
     * Hey webpack compiler, when you come across a path with js or jsx inside of a require or import,
     * use the babel-loader to transform it before you add it to the bundle.
    */
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            }
        ]
    },
    mode: "development",
}