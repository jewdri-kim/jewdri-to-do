const CracoAlias = require("craco-alias");

module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: 'options',
                baseUrl: './src',
                aliases: {
                    '@styles': './styles',
                    '@components' : './components',
                    '@pages' : './pages',
                    '@hooks' : './hooks',
                    '@core' : './@core', 
                }
            },
        },
    ],
};