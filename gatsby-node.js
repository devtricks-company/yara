exports.onCreateWebpackConfig = ({ actions }) => {
    const { setWebpackConfig } = actions
    setWebpackConfig({
        output:{
            globalObject: "this"
        },
      externals: {
        jquery: 'jQuery', // important: 'Q' capitalized
        $:'jQuery',
        'window.jQuery':'jQuery'
      },
    })
  }