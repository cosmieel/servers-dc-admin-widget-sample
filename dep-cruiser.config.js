/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
    options : {
        doNotFollow : {
            dependencyTypes : [
                'npm',
                'npm-dev',
                'npm-optional',
                'npm-peer',
                'npm-bundled',
                'npm-no-pkg',
            ],
        },

        exclude : 'node_modules|coverage|__tests__|test|examples|jest',

        includeOnly : '^packages',

        collapse : 5,

        //   focus : "packages/site",

        prefix : 'https://git.reg.ru/serversdc/sdcjs/tree/master/',

        tsPreCompilationDeps : false,

        externalModuleResolutionStrategy : 'yarn-pnp',

        progress : { type: 'performance-log' },

        reporterOptions : {
            dot : {
                theme : {
                    graph : {
                        ranksep : '5',
                    },
                },
            },
        },
    },
};
