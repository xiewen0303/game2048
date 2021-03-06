module map {
	/**
	 * 主线地图场景
	 */
	export class MainMapLayer extends frame.MapBaseLayer {

		public constructor() {
			super();
			this.init();
		}
		
		/**
		 * 初始化
		 */
		private init():void {
			
			let mainMapFrame = new MapFight();
			let fightScean = new map.FightScane();
			fightScean.init(MapConst.fightSlot_X,MapConst.fightSlot_Y,600,600);
			mainMapFrame.addChild(fightScean);


			let moveItemLayer = new map.MoveBagItemLayer();
			moveItemLayer.init(MapConst.bg_width,MapConst.bg_height);
			
			
			//皮肤加载完成后调用
			mainMapFrame.addEventListener(egret.Event.COMPLETE,function(event:egret.TouchEvent){
				map.MapCtl.initMap(mainMapFrame,fightScean,moveItemLayer);
			},mainMapFrame);
			
			this.addChildAt(moveItemLayer,10);
			this.addChildAt(mainMapFrame,0);
			 
		}

		public getId():frame.FrameType {
			return frame.FrameType.main_frame;
		}
	}
}