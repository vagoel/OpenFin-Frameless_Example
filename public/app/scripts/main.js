function minimizeWindow(){
    var finWindow = fin.Window.getCurrentSync();
    finWindow.minimize().then(() => console.log('Window Minimized')).catch(err => console.log(err));
}

function restoreWindow(){
    var finWindow = fin.Window.getCurrentSync();
    finWindow.restore().then(() => console.log('Window Restored')).catch(err => console.log(err));
}

function maximizeWindow(){
    var finWindow = fin.Window.getCurrentSync();
    finWindow.maximize().then(() => console.log('Window Maximized')).catch(err => console.log(err));
}

function closeWindow(){
    var finWindow = fin.Window.getCurrentSync();
    finWindow.close().then(() => console.log('Window closed')).catch(err => console.log(err));
}
