class CompilerHooks {
    constructor() {
    }
    apply(compiler) {

        const plugin_name = 'CompilerHooks';
        const hooks = compiler.hooks;

        hooks.entryOption.tap(plugin_name, (context, entry) => {
            console.log(`${plugin_name}:entryOption fired!`);
        });

        hooks.afterPlugins.tap(plugin_name, (compiler) => {
            console.log(`${plugin_name}:afterPlugins fired!`);
        });

        hooks.run.tapPromise(plugin_name, compiler => {
            console.log(`${plugin_name}:run fired!`);

            return new Promise(resolve => {

                setTimeout(() => {
                    resolve()
                }, 1000);

            });
        });

        hooks.compile.tap(plugin_name, compilationParams => {
            console.log(`${plugin_name}:compile fired!`);
        });
        hooks.compilation.tap(plugin_name, (compilation, compilationParams) => {
            console.log(`${plugin_name}:compilation fired!`);

            const hooks = compilation.hooks;

            hooks.buildModule.tap(plugin_name, module => {
                console.log(`${plugin_name}:compilation:buildModule fired!`);
            })

            hooks.optimizeChunks.tap(plugin_name, chunks => {
                console.log(`${plugin_name}:compilation:optimizeChunks fired!`);
            })

            hooks.succeedModule.tap(plugin_name, module => {
                console.log(`${plugin_name}:compilation:succeedModule fired!`);
            })

            hooks.finishModules.tap(plugin_name, module => {
                console.log(`${plugin_name}:compilation:finishModules fired!`);
            })

        });

        hooks.make.tapPromise(plugin_name, compilation => {
            console.log(`${plugin_name}:make fired!`);

            return new Promise(resolve => {

                setTimeout(() => {
                    resolve()
                }, 1000);

            });
        });

        hooks.afterCompile.tapPromise(plugin_name, compilation => {
            console.log(`${plugin_name}:afterCompile fired!`);

            return new Promise(resolve => {

                setTimeout(() => {
                    resolve()
                }, 1000);

            });
        });


        hooks.emit.tapPromise(plugin_name, compilation => {
            console.log(`${plugin_name}:emit fired!`);

            return new Promise(resolve => {

                setTimeout(() => {
                    resolve()
                }, 1000);

            });
        });

        hooks.done.tapPromise(plugin_name, stats => {
            console.log(`${plugin_name}:done fired!`);

            return new Promise(resolve => {

                setTimeout(() => {
                    resolve()
                }, 1000);

            });
        });
    }
}

module.exports = CompilerHooks;