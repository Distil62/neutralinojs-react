import {AppLib} from './app-core/lib';
import './mycss.css';
import './mycss2.css';
import reactApp from './app/main';


let appLib = new AppLib();

let myapp: any = {
    myfunction : function () {
        reactApp();
    }
};
    
let sucessCounter = 0;
let failCounter = 0;

Neutralino.init({
    load: function() {
        myapp.myfunction();
        appLib.showSettings();
    },
    pingSuccessCallback : function() {
        console.log("sucess counter : " + sucessCounter++);
    },
    pingFailCallback : function() {
        console.log("Fail counter : " + failCounter++);
    }
});