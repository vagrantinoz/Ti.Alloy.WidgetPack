$.win._options = {
	menu: [
		{
			title: "Search",
			icon: "/appicon.png",
			type: "searchview",
		},
		{
			title: "New Item",
			icon: "/appicon.png",
			showAsAction: Ti.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW,
		},
		{
			title: "Edit Item",
			icon: "/appicon.png",
			showAsAction: Ti.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW,
		},
		{
			title: "Camera",
			showAsAction: Ti.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW,
		},
		{
			title: "Share",
			showAsAction: Ti.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW,
		},
		{
			title: "Setting",
			showAsAction: Ti.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW,
		},
	],
};


function onClick1(e) {
	Alloy.createWidget("com.tripvi.popup").openPopup({
		
	});
}
function onClick2(e) {
	Alloy.createWidget("com.tripvi.popup").openIndicator({
		
	});
}
function onClick3(e) {
	// Alloy.createWidget("com.tripvi.popup").openPopup({
	// 	
	// });
}
