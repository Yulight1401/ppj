/**
 * Created by yul on 16-12-16.
 */
var tinify=require('tinify');
var fs=require('fs');
tinify.key='LmuXc02Opl3iOb93X1tP45SDi2pS4uT5';
fs.readdir("./imgs",function (err,files) {
    if (err) throw err;
    for(var i in files){
        console.log(files);
        fs.readFile("imgs/"+files[i],function(err,Data){
            if (err) throw err;
            tinify.fromBuffer(Data).toBuffer(function(err, resultData) {
                if (err) throw err;
                // ...
            });
        })
    }
})