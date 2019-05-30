

class HelloWebpackPlugin {
    constructor(params) {
        console.log('HelloWebpackPlugin init: params=', params)
    }
    apply(compiler) {

        const plugin_name = 'HelloWebpackPlugin';
        //complier.hooks里有所有complier的钩子，这里注册了done的事件，表示当webpack构建完成时触发
        compiler.hooks.done.tap(plugin_name, stats => {
            console.log('HelloWebpackPlugin: webpack done! ');
        });

        compiler.hooks.emit.tapAsync(plugin_name, (compilation, callback) => {
            // 做一些异步的事情……
            setTimeout(function () {
                console.log('Done with async work...');
                callback();
            }, 1000);
        });

        compiler.hooks.emit.tapPromise(plugin_name, compilation => {
            // 返回一个 Promise，在我们的异步任务完成时 resolve……
            return new Promise(resolve => {
                setTimeout(function () {
                    console.log('异步工作完成……');
                    resolve();
                }, 1000);
            });
        });
    }
}

module.exports = HelloWebpackPlugin;