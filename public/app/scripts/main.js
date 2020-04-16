function minimizeWindow() {
	var finWindow = fin.Window.getCurrentSync();
	finWindow
		.minimize()
		.then(() => console.log("Window Minimized"))
		.catch(err => console.log(err));
}

function restoreWindow() {
	var finWindow = fin.Window.getCurrentSync();
	finWindow
		.restore()
		.then(() => console.log("Window Restored"))
		.catch(err => console.log(err));
}

function maximizeWindow() {
	var finWindow = fin.Window.getCurrentSync();
	finWindow
		.maximize()
		.then(() => console.log("Window Maximized"))
		.catch(err => console.log(err));
}

function closeWindow() {
	var finWindow = fin.Window.getCurrentSync();
	finWindow.close().then(() => console.log('Window closed')).catch(err => console.log(err));
}


function makeFetchCall() {
	console.log("Making a fetch call...");

	fetch("http://10.20.47.31:3118/api/auto/bondname?maxHits=0&query=A", { method: 'GET', headers: { 'Content-Type': 'application/json' } }) // Address does not exist
		.then(response => {
			console.log("Fetch call success response", response);
		})
		.catch(err => {
			console.log("Fetch call error response", err);
		});
}
