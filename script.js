// khai báo biến
var cua = ["images/beach.svg", "images/robot.svg", "images/space.svg", "images/closed_door.svg"];
var cuaRD1 = Math.floor(Math.random()*3);
var cuaRD2 = Math.floor(Math.random()*2);
var button = document.getElementById("button");
var text_bt = document.getElementById("text_bt");
var pointC = document.getElementById("pointC");
var pointB = document.getElementById("pointB");
var cua1 = document.getElementById("cua1");
var cua2 = document.getElementById("cua2");
var cua3 = document.getElementById("cua3");
var src1;
var src2;
var src3;
var dem = 0;
var flag = 0;


// thay đổi vị trí cửa
var viTriCuaFn = function(){
	if(cuaRD1 === 0){
		src1 = cua[0];
		if(cuaRD2 === 0){
			src2 = cua[1];
      		flag = 2;
			src3 = cua[2];
		}
		else{
			src3 = cua[1];
      		flag = 3;
			src2 = cua[2];
		}
	}
	else if(cuaRD1 === 1){
		src2 = cua[0];
		if(cuaRD2 === 0){
			src1 = cua[1];
      		flag = 1;
			src3 = cua[2];
		}
		else{
			src3 = cua[1];
      		flag = 3;
			src1 = cua[2];
		}
	}
	else{
		src3 = cua[0];
		if(cuaRD2 === 0){
			src1 = cua[1];
      		flag = 1;
			src2 = cua[2];
		}
		else{
			src2 = cua[1];
      		flag = 2;
			src1 = cua[2];
		}
	}
};

// Kiểm tra thắng thua
var choreBot = function(){
  if(dem === 3){
    text_bt.innerHTML = "You win!<br> play again?";
    var p1 = parseFloat(pointC.textContent);
    pointC.textContent = p1 + 1;
    if(pointC.textContent > pointB.textContent){
      pointB.textContent = pointC.textContent;
    }
  }
  else{
    text_bt.innerHTML = "Game over!<br> play again?";
    if(pointC.textContent > pointB.textContent){
      pointB.textContent = pointC.textContent;
    }
    pointC.textContent = 0;
  }
};

// reset game
var onClickBt = function(){
	cuaRD1 = Math.floor(Math.random()*3);
	cuaRD2 = Math.floor(Math.random()*2);
	cua1.src = cua[3];
	cua2.src = cua[3];
	cua3.src = cua[3];
  	text_bt.innerHTML = "Good look!";
  	dem = 0;
	viTriCuaFn();
};
button.addEventListener("click", onClickBt); 			

// sự kiện click mở cửa
viTriCuaFn();
cua1.addEventListener("click", function(){
	cua1.src = src1;
  dem++;
  if(flag - 1 === 0){
    choreBot();
  }
});

cua2.addEventListener("click", function(){
	cua2.src = src2;
  dem++;
  if(flag - 2 === 0){
    choreBot();
  }
});

cua3.addEventListener("click", function(){
	cua3.src = src3;
  dem++;
  if(flag - 3 === 0){
    choreBot();
  }
});