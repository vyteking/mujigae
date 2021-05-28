function _(selector) {
	return document.querySelector(selector);
}

function setup() {
	var canvasHeight=800;
	var canvasWidth=600;
	let canvas = createCanvas(canvasHeight, canvasWidth);
	canvas.parent("canvas-wrapper");
	const ctx = canvas.getContext("2d");
	firstWhiteBG(); //맨처음바탕이 하양으로 시작. 추후, 투명, 하양, 또는 그림파일넣은뒤 시작할지 달라지는것까지 고려할 예정
}

function firstWhiteBG() {
	// 하얀 바탕으로 시작하기를 정해둠으로써, 하얀 바탕으로 시작
	background(255);
}

function firstTransparentBG() {
	// 투명바탕으로 시작하기를 정해둠으로써, 투명바탕으로 시작
	background(transparent);
}

function mouseDragged() {
	let type = _("#pendraw").checked?"pendraw":"eraser";
	let size = parseInt(_("#pen-size").value);
	let colour = _("#pen-colour").value;
	if(type=='pendraw') {
		//붓을 사용함으로써, 마우스화살표의 가로세로위지와 붓크기에 맞춰 그림을 그림 
		fill(colour); //빛깔채우기는 지정된 빛깔로 그려짐
		stroke(colour); //지정된 빛깔에 따라 화살표빛깔이 달라짐
		elimpse(mouseX, mouseY, size, size);
	} else if(type=="eraser") {
		//지우개를 사용함으로써, 미우스화살표의 가로세로위치에 맞춰 그려진 그림을 지워버림
		fill(transparent); //투명색으로 선택됨으로써, 누른 군데를 그림판에서 투명하게 함 
		stroke(transparent); //화살표빛깔은 투명하게
		elimpse(mouseX, mouseY, size, size);
	}
}

_("#reset-canvas").addEventListener("click", function(){
	//처음 캔버스를 시작했을 때, 바탕이 하양, 투명, 또는 선택한 그림파일로 시작할지 결정. 
	//아직까지 하양바탕으로 시작하기만 구현함으로, 추후에 더 많은 선택지를 넣을 예정
	firstWhiteBG();
});

_("#save-canvas").addEventListener("click", function(){
	//그림판에다 그린 파일을 내보낸 뒤, 적어둔 이름과 고른 파일규격에 따라 그림파일저장
	//지금으로썬, "sketch.png"라는 이름으로 저장됨
	//saveCanvas(canvas, "sketch", "png");
	let saveImg=(imgname) => {
		let toSaveImg = document.createElement('toSaveImg');
		toSaveImg.href = canvas.toDataURL("image/png");
		toSaveImg.download=imgname;
		document.body.appendChild(toSaveImg);
		toSaveImg.click();
	}
	
});