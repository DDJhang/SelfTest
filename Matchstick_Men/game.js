var currentScene = 0;
var imgUrl = "";
var messages = [
	["這是火柴人的冒險故事，請選擇1或2進行遊戲"],
	["走過小徑", "走過小橋"],
	["繞過小屋", "跟女巫打招呼"],
	["走過小橋", "看看小溪"],
	["悄悄的走過去", "跟女巫打招呼"],
	["被女巫吃掉 遊戲結束"],
	["被巨人吃掉 遊戲結束"],
	["跟巨人打招呼", "快逃!"],
	["繼續下一章節"]
];

var scene0 = {
	messages
}

function changeScene(decision) {
	switch (currentScene) {
		case 0:
			currentScene = 1;
			break;
		case 1:
			currentScene = decision === 1 ? 2 : 3;
			break;
		case 2:
			currentScene = decision === 1 ? 4 : 5;
			break;
		case 3:
			currentScene = decision === 1 ? 6 : 7;
			break;
		case 4:
			currentScene = decision === 1 ? 8 : 5;
			break;
		case 5:
		case 6:
		case 8:
			currentScene = 0;
			break;
		case 7:
			currentScene = decision === 1 ? 8 : 6;
			break;
	}

	imgUrl = "scene" + currentScene + ".png";
	document.getElementById("sceneimg").src = imgUrl;
}
