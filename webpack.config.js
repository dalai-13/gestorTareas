const path = require('path');

module.exports = {
    entry: './src/index.js',  //Punto de entrada de la app (archivo principal donde webpack comienza a contruir)
    output:{
        filename: 'bundle.js', // Nombre del archivo de salida 
        path: path.resolve(__dirname, 'dist'), // Carpeta de salida
    },
    module: {
        rules: [
            {
                test: /\.css$/, //Regex para identificar archivos CSS  ---> buscara en todos los archivos doc .css 
                use: ['style-loader','css-loader'], // Loader para procesar archivos 
            },
            {
                test: /\.css/, //Regex para identificar archivos JS 
                exclude: /node_modules/, //Excluir la carpeta node_mudules
                use:{
                    loader: 'bable-loader', // Loader para transpilat JS moderno a JS compatible con mas navegadores
                    options:{
                        presets: ['@babel/preset-env'], //Preset de Babel para convertir JS moderno a version mas antiguas.
                    }
                }
            }

        ]

    },
    devtool: 'source-map', //Generar source maps para facilitar la depuracion 
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), // Carpeta desde donde obtendremos los archivos que mostranmos al usuario
        compress: true, // Habilitando la compresion gzip
        port: 9000, // puerto del servidor de desarrollo 
    }
}