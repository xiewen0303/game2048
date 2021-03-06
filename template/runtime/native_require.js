
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/game/game.js",
	"libs/modules/res/res.js",
	"libs/modules/eui/eui.js",
	"libs/modules/tween/tween.js",
	"libs/modules/socket/socket.js",
	"libs/modules/dragonBones/dragonBones.js",
	"polyfill/promise.js",
	"bin-debug/service/map/MapConst.js",
	"bin-debug/service/login/service/LoginService.js",
	"bin-debug/service/map/MapManager.js",
	"bin-debug/ui/frameManager/FrameManager.js",
	"bin-debug/ui/frameManager/MapBaseLayer.js",
	"bin-debug/service/map/service/MapService.js",
	"bin-debug/service/login/LoginCtl.js",
	"bin-debug/core/net/WebSocketHandler.js",
	"bin-debug/core/util/Tools.js",
	"bin-debug/effects/Change2Bomb.js",
	"bin-debug/LoadingUI.js",
	"bin-debug/Main.js",
	"bin-debug/AssetAdapter.js",
	"bin-debug/core/net/Decode.js",
	"bin-debug/core/net/IDecode.js",
	"bin-debug/service/map/MapCtl.js",
	"bin-debug/core/net/MessageCode.js",
	"bin-debug/service/map/model/Cell.js",
	"bin-debug/service/map/model/ElementType.js",
	"bin-debug/core/log/LogHandler.js",
	"bin-debug/service/map/util/MapUtil.js",
	"bin-debug/service/store/Services.js",
	"bin-debug/service/store/Stores.js",
	"bin-debug/ThemeAdapter.js",
	"bin-debug/ui/common/Scale9GridPlane.js",
	"bin-debug/core/net/NetHandler.js",
	"bin-debug/ui/frameManager/FrameType.js",
	"bin-debug/ui/frameManager/IBGLayer.js",
	"bin-debug/core/net/NetManager.js",
	"bin-debug/ui/index/IndexFrame.js",
	"bin-debug/ui/login/LoginFrame.js",
	"bin-debug/ui/login/RealLogin.js",
	"bin-debug/ui/map/FightScane.js",
	"bin-debug/ui/map/ItemSlot.js",
	"bin-debug/ui/map/MainMapLayer.js",
	"bin-debug/ui/map/MapFight.js",
	"bin-debug/ui/map/MoveBagItemLayer.js",
	"bin-debug/ui/util/UIUtil.js",
	//----auto game_file_list end----
];

var window = this;

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    if(egret_native.featureEnable) {
        //控制一些优化方案是否开启
        var result = egret_native.featureEnable({
            
        });
    }
    egret_native.requireFiles();
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "exactFit",
		contentWidth: 640,
		contentHeight: 1136,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel("/system/fonts/DroidSansFallback.ttf", 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};