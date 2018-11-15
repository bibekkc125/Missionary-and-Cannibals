var maple,birds;
var objects = [];
var button;
var a = 3;
var b =0;
var c = 3;
var d =0;
var mis_left,mis_right,can_left,can_right;

function preload(){
	for (i=0; i<3;i++){
		objects[i] = loadImage("../Images/missionary.png");
	}
	for (i=3; i<6;i++){
		objects[i] = loadImage("../Images/cannibal.png");
	}
	objects[6] = loadImage("../Images/canoe.png");
	mis1 = loadImage("../Images/missionary.png");
	mis2 = mis1;
	maple = loadImage("../Images/mapple.png");
	birds = loadImage("../Images/birds.png");
}
function setup() {
  // put setup code here
  var width =1366;
  var height = 700;
  createCanvas(width,height);
  // button = createButton("GO");
  // button.position(600,300);
}

function scene(){
  background("#3DC9F0");
  noStroke();
  fill("#0D71FF");
  rect(100,640,1150,100);
  fill("#18753B");
  noStroke();
  ellipse(0, 750, 850, 500);
  ellipse(1366, 750, 850, 500);
  fill("#F7EE3C");
  noStroke();
  ellipse(1200,100,75,75);
  noStroke();
  fill(0);
  textSize(50);
  text("MISSIONARIES AND CANNIBALS",280,70);
  image(maple,10,200,300,350);
  image(birds,1000,100,80,80);
}

var y =550;
var y6 =520;
var x0 = 300;
var x1 = 240;
var x2 = 180;
var x3 = 120;
var x4 = 60;
var x5 = 0;
var x6 = 360;
function initial_state(){
	image(objects[6],x6,y6,150,150);
	image(objects[0],x0,y,50,80);
	image(objects[1],x1,y,50,80);
	image(objects[2],x2,y,50,80);
	image(objects[3],x3,y,50,80);
	image(objects[4],x4,y,50,80);
	image(objects[5],x5,y,50,80);
	
}
function final_state(){
	image(objects[6],x6,y6,150,150);
	image(objects[0],1010,y,50,80);
	image(objects[1],1070,y,50,80);
	image(objects[2],1130,y,50,80);
	image(objects[3],1190,y,50,80);
	image(objects[4],1250,y,50,80);
	image(objects[5],1310,y,50,80);

}
var boatcount =0;
var aaa =true;
function mousePressed(){
	//boat is in left
	if(x6 == 360){
		if (mouseX >= 300 && mouseX <=(300+50) && mouseY >= y && mouseY <= (y+80)){
			if (x0 == 300 && x1 !=440 && x2!=440 && x3!=440 && x4!=440 && x5!=440){
				if (x1 ==370 || x2 ==370 || x3==370 || x4==370 || x5==370){
					x0 = x0+140;
				}
				else{
					x0 = x0+70;
				}
			}
			else if (x0 == 300 && x1 !=370 && x2!=370 && x3!=370 && x4!=370 && x5!=370){
				if (x1 ==440 || x2 ==440 || x3==440 || x4==440 || x5==440){
					x0 = x0+70;
				}
				else{
					x0 = x0+140;
				}
			}
		}

		else if (mouseX >= 240 && mouseX <=(240+50) && mouseY >= y && mouseY <= (y+80)){
			if (x1 == 240 && x0 !=440 && x2!=440 && x3!=440 && x4!=440 && x5!=440){
				if (x0== 370 || x2==370 || x3==370 || x4==370 || x5 ==370){
					x1 = x1+200;
				}
				else{
					x1 = x1+130;
				}
			}
			else if (x1 == 240 && x0 !=370 && x2!=370 && x3!=370 && x4!=370 && x5!=370){
				if (x0== 440 || x2==440 || x3==440 || x4==440 || x5 ==440){
					x1 = x1+130;
				}
				else{
					x1 = x1+200;
				}
			}
		}
		else if (mouseX >= 180 && mouseX <=(180+50) && mouseY >= y && mouseY <= (y+80)){
			if (x2 == 180 && x1 !=440 && x0!=440 && x3!=440 && x4!=440 && x5!=440){
				if (x0== 370 || x1==370 || x3 == 370 || x4==370 || x5==370){
					x2 = x2+260;
				}
				else{
					x2 =x2+190;
				}
			}
			else if (x2 == 180 && x1 !=370 && x0!=370 && x3!=370 && x4!=370 && x5!=370){
				if (x0== 440 || x1==440 || x3 == 440 || x4==440 || x5==440){
					x2 = x2+190;
				}
				else{
					x2 =x2+260;
				}
			}

		}
		//1 cannibal load
		else if (mouseX >= 120 && mouseX <=(120+50) && mouseY >= y && mouseY <= (y+80)){
			if (x3 == 120 && x1 !=440 && x2!=440 && x0!=440 && x4!=440 && x5!=440){
				if (x4 == 370 || x5==370 || x0==370 || x1==370 || x2==370){
					x3 = x3+320;
					
				}else{
					x3 = x3+250;
				}
			}
			else if (x3 == 120 && x1 !=370 && x2!=370 && x0!=370 && x4!=370 && x5!=370){
				if (x4 == 440 || x5==440 || x0==440 || x1==440 || x2==440){
					x3 = x3+250;
					
				}else{
					x3 = x3+320;
				}
			}

		}
		else if (mouseX >= 60 && mouseX <=(60+50) && mouseY >= y && mouseY <= (y+80)){
			if (x4 == 60 && x1 !=440 && x2!=440 && x3!=440 && x0!=440 && x5!=440){
				if (x3 == 370 || x5==370 || x0==370 || x1==370 || x2==370){
					x4 = x4+380;
					
				}else{
					x4 = x4+310;
				}
			}
			else if (x4 == 60 && x1 !=370 && x2!=370 && x3!=370 && x0!=370 && x5!=370){
				if (x3 == 440 || x5==440 || x0==440 || x1==440 || x2==440){
					x4 = x4+310;
					
				}else{
					x4 = x4+380;
				}
			}
		}
		else if (mouseX >= 0 && mouseX <=(0+50) && mouseY >= y && mouseY <= (y+80)){
			if (x5 == 0 && x1 !=440 && x2!=440 && x3!=440 && x4!=440 && x0!=440){
				if(x3 == 370 || x4 == 370 || x0==370 || x1==370 || x2==370){
					x5 = x5+440;
					
				}else{
					x5 = x5+370;
				}
			}
			else if (x5 == 0 && x1 !=370 && x2!=370 && x3!=370 && x4!=370 && x0!=370){
				if(x3 == 440 || x4 == 440 || x0==440 || x1==440 || x2==440){
					x5 = x5+370;
					
				}else{
					x5 = x5+440;
				}
			}
		}
		
		//unloading
		else if( mouseX >=370 && mouseX <=420 && mouseY >=y && mouseY<=(y+80)){
			if (x0 == 370)
				x0 = x0-70;
			
			else if (x1 == 370)
				x1 = x1-130;
			
			else if (x2 == 370)
				x2 = x2-190;
			
			else if (x3 == 370)
				x3 = x3-250;
			
			else if (x4 == 370)
				x4 = x4-310;
			
			else if (x5 == 370)
				x5 = x5-370;
			

		}
		else if( mouseX >=440 && mouseX <=490 && mouseY >=y && mouseY<=(y+80)){
			if(x0 == 440)
				x0 = x0-140;
			else if(x1 == 440)
				x1 = x1-200;
			else if(x2 == 440)
				x2 = x2-260;
			else if(x3 == 440)
				x3 = x3-320;
			else if(x4 == 440)
				x4 = x4-380;
			else if(x5 == 440)
				x5 = x5-440;
		}
	}

	//left boat
	if (mouseX >=360 && mouseX <=(360+150) && mouseY >=520+111 && mouseY <=(520+150)){
		//1 missionary
		if (x6 ==360 && x0 == 370 && x1 !=440 && x2!=440 && x3!=440 && x4!=440 && x5!=440){
			x6=x6+490;
			x0=x0+490;
		}
		else if (x6 ==360 && x1 == 370 && x0!=440 && x2!=440 && x3!=440 && x4!=440 && x5!=440){
			x6 = x6+490;
			x1 = x1+490;
		}
		else if (x6 ==360 && x2 == 370 && x0 !=440 && x1!=440 && x3!=440 && x4!=440 && x5!=440){
			x6 = x6+490;
			x2 = x2+490;
		}
		else if (x6 ==360 && x0 == 440 && x1 !=370 && x2!=370 && x3!=370 && x4!=370 && x5!=370){
			x6=x6+490;
			x0=x0+490;
		}
		else if (x6 ==360 && x1 == 440 && x0!=370 && x2!=370 && x3!=370 && x4!=370 && x5!=370){
			x6 = x6+490;
			x1 = x1+490;
		}
		else if (x6 ==360 && x2 == 440 && x0 !=370 && x1!=370 && x3!=370 && x4!=370 && x5!=370){
			x6 = x6+490;
			x2 = x2+490;
		}
		//1 cannibal
		else if (x6 ==360 && x3 == 370 && x0 !=440 && x1!=440 && x2!=440 && x4!=440 && x5!=440){
			x6 = x6+490;
			x3 = x3+490;
		}
		else if (x6 ==360 && x4 == 370 && x0 !=440 && x1!=440 && x3!=440 && x2!=440 && x5!=440){
			x6 = x6+490;
			x4 = x4+490;

		}
		else if (x6 ==360 && x5 == 370 && x0 !=440 && x1!=440 && x3!=440 && x4!=440 && x2!=440){
			x6 = x6+490;
			x5 = x5+490;
		}
		else if (x6 ==360 && x3 == 440 && x0 !=370 && x1!=370 && x2!=370 && x4!=370 && x5!=370){
			x6 = x6+490;
			x3 = x3+490;
		}
		else if (x6 ==360 && x4 == 440 && x0 !=370 && x1!=370 && x3!=370 && x2!=370 && x5!=370){
			x6 = x6+490;
			x4 = x4+490;

		}
		else if (x6 ==360 && x5 == 440 && x0 !=370 && x1!=370 && x3!=370 && x4!=370 && x2!=370){
			x6 = x6+490;
			x5 = x5+490;
		}
		//1 missionary and 1 cannibal
		else if ((x6 ==360 && x0 == 440 && x3 == 370)|| (x6 ==360 && x3 == 440 && x0 == 370)) {
			x0 = x0+490;
			x3 = x3+490;
			x6 = x6+490;
		}
		else if ((x6 ==360 && x0 == 440 && x4 == 370) ||(x6 ==360 && x4 == 440 && x0 == 370)){
			x0 = x0+490;
			x4 = x4+490;
			x6 = x6+490;

		}
		else if ((x6 ==360 && x0 == 440 && x5 == 370) ||(x6 ==360 && x5 == 440 && x0 == 370)){
			x0 = x0+490;
			x5 = x5+490;
			x6 = x6+490;
		}
		else if ((x6 ==360 && x1 == 440 && x3 == 370) || (x6 ==360 && x3 == 440 && x1 == 370)){
			x1 = x1+490;
			x3 = x3+490;
			x6 = x6+490;
		}
		else if ((x6 ==360 && x1 == 440 && x4 == 370) || (x6 ==360 && x4 == 440 && x1 == 370)){
			x1 = x1+490;
			x4 = x4+490;
			x6 = x6+490;
		}
		else if ((x6 ==360 && x1 == 440 && x5 == 370) || (x6 ==360 && x5 == 440 && x1 == 370)){
			x1 = x1+490;
			x5 = x5+490;
			x6 = x6+490;
		}
		else if ((x6 ==360 && x2 == 440 && x3 == 370) || (x6 ==360 && x3 == 440 && x2 == 370)){
			x2 = x2+490;
			x3 = x3+490;
			x6 = x6+490;
		}
		else if ((x6 ==360 && x2 == 440 && x4 == 370) || (x6 ==360 && x4 == 440 && x2 == 370)){
			x2 = x2+490;
			x4 = x4+490;
			x6 = x6+490;
		}
		else if ((x6 ==360 && x2 == 440 && x5 == 370) || (x6 ==360 && x5 == 440 && x2 == 370)){
			x2 = x2+490; 
			x5 = x5+490;
			x6 = x6+490;
		}
		//2 misisonaries
		else if ((x6 ==360 && x0 == 440 && x1 ==370) ||(x6 ==360 && x1 == 440 && x0 ==370)){
			x0 = x0+490;
			x1 = x1+490;
			x6 = x6+490;
		}
		else if ((x6 ==360 && x0 == 440 && x2 ==370)||(x6 ==360 && x2 == 440 && x0 ==370)){
			x0 = x0+490;
			x2 = x2+490;
			x6 = x6+490;
		}
		else if ((x6 ==360 && x1 == 440 && x2 ==370)||(x6 ==360 && x2 == 440 && x1 ==370)){
			x1 = x1+490;
			x2 = x2+490;
			x6 = x6+490;
		}
		
		// 2 cannibals
		else if ((x6 ==360 && x3 == 440 && x4 ==370) ||(x6 ==360 && x4 == 440 && x3 ==370)){
			x3 = x3+490;
			x4 = x4+490;
			x6 = x6+490;
		}
		else if ((x6 ==360 && x3 == 440 && x5 ==370) ||(x6 ==360 && x5 == 440 && x3 ==370)){
			x3 = x3+490;
			x5 = x5+490;
			x6 = x6+490;
		}
		else if ((x6 ==360 && x4 == 440 && x5 ==370) || (x6 ==360 && x5 == 440 && x4 ==370)){
			x4 = x4+490;
			x5 = x5+490;
			x6 = x6+490;
		}
		
	}
	//right boat
	if (mouseX >=850 && mouseX <=(850+150) && mouseY >=520+111 && mouseY <=(520+150)){
		//1 missionary
		if (x6 ==850 && x0 == 860 && x1 !=930 && x2!=930 && x3!=930 && x4!=930 && x5!=930){
			x6=x6-490;
			x0=x0-490;
		}
		else if (x6 ==850 && x1 == 860 && x0!=930 && x2!=930 && x3!=930 && x4!=930 && x5!=930){
			x6 = x6-490;
			x1 = x1-490;
		}
		else if (x6 ==850 && x2 == 860 && x0 !=930 && x1!=930 && x3!=930 && x4!=930 && x5!=930){
			x6 = x6-490;
			x2 = x2-490;
		}
		if (x6 ==850 && x0 == 930 && x1 !=860 && x2!=860 && x3!=860 && x4!=860 && x5!=860){
			x6=x6-490;
			x0=x0-490;
		}
		else if (x6 ==850 && x1 == 930 && x0!=860 && x2!=860 && x3!=860 && x4!=860 && x5!=860){
			x6 = x6-490;
			x1 = x1-490;
		}
		else if (x6 ==850 && x2 == 930 && x0 !=860 && x1!=860 && x3!=860 && x4!=860 && x5!=860){
			x6 = x6-490;
			x2 = x2-490;
		}
		//1 cannibal
		else if (x6 ==850 && x3 == 860 && x0 !=930 && x1!=930 && x2!=930 && x4!=930 && x5!=930){
			x6 = x6-490;
			x3 = x3-490;
		}
		else if (x6 ==850 && x4 == 860 && x0 !=930 && x1!=930 && x3!=930 && x2!=930 && x5!=930){
			x6 = x6-490;
			x4 = x4-490;

		}
		else if (x6 ==850 && x5 == 860 && x0 !=930 && x1!=930 && x3!=930 && x4!=930 && x2!=930){
			x6 = x6-490;
			x5 = x5-490;
		}
		else if (x6 ==850 && x3 == 930 && x0 !=860 && x1!=860 && x2!=860 && x4!=860 && x5!=860){
			x6 = x6-490;
			x3 = x3-490;
		}
		else if (x6 ==850 && x4 == 930 && x0 !=860 && x1!=860 && x3!=860 && x2!=860 && x5!=860){
			x6 = x6-490;
			x4 = x4-490;

		}
		else if (x6 ==850 && x5 == 930 && x0 !=860 && x1!=860 && x3!=860 && x4!=860 && x2!=860){
			x6 = x6-490;
			x5 = x5-490;
		}
		//1 missionary and 1 cannibal
		else if ((x6 ==850 && x0 == 930 && x3 == 860)|| (x6 ==850 && x3 == 930 && x0 == 860)) {
			x0 = x0-490;
			x3 = x3-490;
			x6 = x6-490;
		}
		else if ((x6 ==850 && x0 == 930 && x4 == 860) ||(x6 ==850 && x4 == 930 && x0 == 860)){
			x0 = x0-490;
			x4 = x4-490;
			x6 = x6-490;

		}
		else if ((x6 ==850 && x0 == 930 && x5 == 860) ||(x6 ==850 && x5 == 930 && x0 == 860)){
			x0 = x0-490;
			x5 = x5-490;
			x6 = x6-490;
		}
		else if ((x6 ==850 && x1 == 930 && x3 == 860) || (x6 ==850 && x3 == 930 && x1 == 860)){
			x1 = x1-490;
			x3 = x3-490;
			x6 = x6-490;
		}
		else if ((x6 ==850 && x1 == 930 && x4 == 860) || (x6 ==850 && x4 == 930 && x1 == 860)){
			x1 = x1-490;
			x4 = x4-490;
			x6 = x6-490;
		}
		else if ((x6 ==850 && x1 == 930 && x5 == 860) || (x6 ==850 && x5 == 930 && x1 == 860)){
			x1 = x1-490;
			x5 = x5-490;
			x6 = x6-490;
		}
		else if ((x6 ==850 && x2 == 930 && x3 == 860) || (x6 ==850 && x3 == 930 && x2 == 860)){
			x2 = x2-490;
			x3 = x3-490;
			x6 = x6-490;
		}
		else if ((x6 ==850 && x2 == 930 && x4 == 860) || (x6 ==850 && x4 == 930 && x2 == 860)){
			x2 = x2-490;
			x4 = x4-490;
			x6 = x6-490;
		}
		else if ((x6 ==850 && x2 == 930 && x5 == 860) || (x6 ==850 && x5 == 930 && x2 == 860)){
			x2 = x2-490; 
			x5 = x5-490;
			x6 = x6-490;
		}
		//2 misisonaries
		else if ((x6 ==850 && x0 == 930 && x1 ==860) ||(x6 ==850 && x1 == 930 && x0 ==860)){
			x0 = x0-490;
			x1 = x1-490;
			x6 = x6-490;
		}
		else if ((x6 ==850 && x0 == 930 && x2 ==860)||(x6 ==850 && x2 == 930 && x0 ==860)){
			x0 = x0-490;
			x2 = x2-490;
			x6 = x6-490;
		}
		else if ((x6 ==850 && x1 == 930 && x2 ==860)||(x6 ==850 && x2 == 930 && x1 ==860)){
			x1 = x1-490;
			x2 = x2-490;
			x6 = x6-490;
		}
		
		// 2 cannibals
		else if ((x6 ==850 && x3 == 930 && x4 ==860) ||(x6 ==850 && x4 == 930 && x3 ==860)){
			x3 = x3-490;
			x4 = x4-490;
			x6 = x6-490;
		}
		else if ((x6 ==850 && x3 == 930 && x5 ==860) ||(x6 ==850 && x5 ==930 && x3 ==860)){
			x3 = x3-490;
			x5 = x5-490;
			x6 = x6-490;
		}
		else if ((x6 ==850 && x4 == 930 && x5 ==860) || (x6 ==850 && x5 == 930 && x4 ==860)){
			x4 = x4-490;
			x5 = x5-490;
			x6 = x6-490;
		}
	}
		//1 missionary unloading
	if(x6 == 850){
		//boat unloading
		if (mouseX >= 860 && mouseX <=910 && mouseY >= y && mouseY <= (y+80)){
			if(x0 == 860){
				x0 = x0+150;
			}
			
			else if(x1 == 860){
				x1 = x1+210;
			}
			
			else if(x2 == 860){
				x2 = x2+270;
			}
			
			else if(x3 == 860){
				x3 = x3+330;
			}
			
			else if(x4 == 860){
				x4 = x4+390;
			}
			
			else if(x5 == 860){
				x5 = x5+450;
			}
			
		}
		else if (mouseX >= 930 && mouseX <=980 && mouseY >= y && mouseY <= (y+80)){
			if(x0 == 930){
				x0= x0+80;
			}
			else if(x1 == 930){
				x1 = x1+140;
			}
			else if(x2 == 930){
				x2 = x2+200;
			}
			else if(x3 == 930){
				x3 = x3+260;
			}
			else if(x4 == 930){
				x4 = x4+320;
			}
			else if(x5 == 930){
				x5 = x5+380;
			}
		}

		if (mouseX >= 1010 && mouseX <= 1060 && mouseY >= y && mouseY <= (y+80)){
			if (x0 == 1010 && x1 !=930 && x2!=930 && x3!=930 && x4!=930 && x5!=930){
				if (x1 ==860 || x2 ==860 || x3==860 || x4==860 || x5==860){
					x0 = x0-80;//930
				}
				else{
					x0 = x0-150;//860
				}
			}
			else if (x0 == 1010 && x1 !=860 && x2!=860 && x3!=860 && x4!=860 && x5!=860){
				if (x1 ==930 || x2 ==930 || x3==930 || x4==930 || x5==930){
					x0 = x0-150;//930
				}
				else{
					x0 = x0-80;//860
				}
			}
		
		}
		else if (mouseX >= 1070 && mouseX <= 1120 && mouseY >= y && mouseY <= (y+80)){
			if (x1 == 1070 && x0 !=930 && x2!=930 && x3!=930 && x4!=930 && x5!=930){
				if (x0 ==860 || x2 ==860 || x3==860 || x4==860 || x5==860){
					x1 = x1-140;//930
				}
				else{
					x1 = x1-210;//860
				}
			}
			else if (x1 == 1070 && x0 !=860 && x2!=860 && x3!=860 && x4!=860 && x5!=860){
				if (x0 ==930 || x2 ==930 || x3==930 || x4==930 || x5==930){
					x1 = x1-210;//930
				}
				else{
					x1 = x1-140;//860
				}
			}
		}
		else if (mouseX >= 1130 && mouseX <= 1180 && mouseY >= y && mouseY <= (y+80)){
			if (x2 == 1130 && x0 !=930 && x1!=930 && x3!=930 && x4!=930 && x5!=930){
				if (x0 ==860 || x1 ==860 || x3==860 || x4==860 || x5==860){
					x2 = x2-200;//930
				}
				else{
					x2 = x2-270;//860
				}
			}
			else if (x2 == 1130 && x0 !=860 && x1!=860 && x3!=860 && x4!=860 && x5!=860){
				if (x0 ==930 || x1 ==930 || x3==930 || x4==930 || x5==930){
					x2 = x2-270;//930
				}
				else{
					x2 = x2-200;//860
				}
			}
		}
		else if (mouseX >= 1190 && mouseX <= 1240 && mouseY >= y && mouseY <= (y+80)){
			if (x3 == 1190 && x0 !=930 && x2!=930 && x1!=930 && x4!=930 && x5!=930){
				if (x0 ==860 || x1 ==860 || x2==860 || x4==860 || x5==860){
					x3 = x3-260;//930
				}
				else{
					x3 = x3-330;//860
				}
			}
			else if (x3 == 1190 && x0 !=860 && x2!=860 && x1!=860 && x4!=860 && x5!=860){
				if (x0 ==930 || x1 ==930 || x2==930 || x4==930 || x5==930){
					x3 = x3-330;//930
				}
				else{
					x3 = x3-260;//860
				}
			}
		}
		else if (mouseX >= 1250 && mouseX <= 1300 && mouseY >= y && mouseY <= (y+80)){
			if (x4 == 1250 && x0 !=930 && x2!=930 && x3!=930 && x1!=930 && x5!=930){
				if (x0 ==860 || x1 ==860 || x3==860 || x2==860 || x5==860){
					x4 = x4-320;//930
				}
				else{
					x4 = x4-390;//860
				}
			}
			else if (x4 == 1250 && x0 !=860 && x2!=860 && x3!=860 && x1!=860 && x5!=860){
				if (x0 ==930 || x1 ==930 || x3==930 || x2==930 || x5==930){
					x4 = x4-390;//930
				}
				else{
					x4 = x4-320;//860
				}
			}
		}
		else if (mouseX >= 1310 && mouseX <= 1360 && mouseY >= y && mouseY <= (y+80)){
			if (x5 == 1310 && x0 !=930 && x2!=930 && x3!=930 && x4!=930 && x1!=930){
				if (x0 ==860 || x1 ==860 || x3==860 || x4==860 || x2==860){
					x5 = x5-380;//930
				}
				else{
					x5 = x5-450;//860
				}
			}
			else if (x5 == 1310 && x0 !=860 && x2!=860 && x3!=860 && x4!=860 && x1!=860){
				if (x0 ==930 || x1 ==930 || x3==930 || x4==930 || x2==930){
					x5 = x5-450;//930
				}
				else{
					x5 = x5-380;//860
				}
			}
		}
	}
}

function check_gameover(){
		//3 cannibals 1 missionary
		if ((x6==850 && x5 == 0 && x4 == 60 && x3 == 120 && (x2 == 180 || x1 ==240 || x0==300))){
			textSize(40);
			text("GAME OVER!",550,350);
		}
		//3 cannibals 2 misisonary
		else if ((x6==850 && x5 == 0 && x4 == 60 && x3 == 120 && ((x0==300 && x1==240 )||(x0 ==300 && x2==180) || (x1==240 || x2==180))))
		{
			textSize(40);
			text("GAME OVER!",550,350);
		}
		//2 cannibals 1 misisonary
		else if ((x6==850 && x4==60 && x3==120 && x0==300 && x1!=240 && x2!=180 && x5!=0)|| (x6==850 && x5==0 && x4==60 && x0 ==300 && x1!=240 && x2!=180 && x3!=120)|| (x6==850 && x5==0 && x3==120 && x0 ==300 && x1!=240 && x2!=180 && x4!=60)||(x6==850 && x4==60 && x3==120 && x1==240 && x2!=180 && x0!=300 && x5!=0)|| (x6==850 && x5==0 && x4==60 && x1 ==240 && x0!=300 && x2!=180 && x3!=120)|| (x6==850 && x5==0 && x3==120 && x1 ==240 && x0!=300 && x2!=180 && x4!=60)||(x6==850 && x4==60 && x3==120 && x2==180 && x0!=300 && x1!=240 && x5!=0)|| (x6==850 && x5==0 && x4==60 && x2 ==180 && x0!=300 && x1!=240 && x3!=120)|| (x6==850 && x5==0 && x3==120 && x2 ==180 && x0!=300 && x1!=240 && x4!=60))
		{
			textSize(40);
			text("GAME OVER!",550,350);
		}

		//Opposite side
		//3 cannibals 2 missionary
		else if ((x6==360 && x5 == 1310 && x4 == 1250 && x3 == 1190 && (x2 == 1130 || x1 == 1070 || x0 == 1010))
		){
			textSize(40);
			text("GAME OVER!",550,350);
		}

		//2 cannibals 1 misisonary
		else if ((x6==360 && x4==1250 && x3==1190 && x0==1010 && x1!=1070 && x2!=1130 && x5!=1310)|| (x6==360 && x5==1310 && x4==1250 && x0 ==1010 && x1!=1070 && x2!=1130 && x3!=1190)|| (x6==360 && x5==1310 && x3==1190 && x0 ==1010 && x1!=1070 && x2!=1130 && x4!=1250)||(x6==360 && x4==1250 && x3==1190 && x1==1070 && x2!=1130 && x0!=1010 && x5!=1310)|| (x6==360 && x5==1310 && x4==1250 && x1 ==1070 && x0!=1010 && x2!=1130 && x3!=1190)|| (x6==360 && x5==1310 && x3==1190 && x1 ==1070 && x0!=1010 && x2!=1130 && x4!=1250)||(x6==360 && x4==1250 && x3==1190 && x2==1130 && x0!=1010 && x1!=1070 && x5!=1310)|| (x6==360 && x5==1310 && x4==1250 && x2 ==1130 && x0!=1010 && x1!=1070 && x3!=1190)|| (x6==360 && x5==1310 && x3==1190 && x2 ==1130 && x0!=1010 && x1!=1070 && x4!=1250))
		{
			textSize(40);
			text("GAME OVER!",550,350);
		}
		//3 cannibals 1 misisonaries
		else if ((x6==360 && x5 == 1310 && x4 == 1250 && x3 == 1190 && ((x0==1010 && x1==1070 )||(x0 ==1010 && x2==1130) || (x1==1070 || x2==1130)))){
			textSize(40);
			text("GAME OVER!",550,350);
		}
	
		//Winning condition
		else if(x0 == 1010 && x1 ==1070 && x2==1130 && x3==1190 && x4 ==1250 && x5==1310 && x6 == 850){
			textSize(32);
  			text("You WON the game.",500,350);

		}
		else{
			initial_state();
		}
}

function draw() {
  // put drawing code here
  scene();
  check_gameover();
}
