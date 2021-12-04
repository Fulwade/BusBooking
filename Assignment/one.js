function demo()
		{
			var n1,n2,res;
			n1=Number(document.getElementById("n1").value);
			n2=Number(document.getElementById("n2").value);
			//document.write("value of n1 is ="+n1);
			res=n1+n2;
			document.getElementById("ab").innerHTML="the sum is ="+res;
		}
		function demo1()
		{
			var myVar = "Hello World!";
			console.log(myVar);
			
		}
	function if_demo()
	{
		var num1=Number(document.getElementById("num1").value);
		switch(num1)
		{
			case 1:
			document.getElementById("div1").style.display="block";
			document.getElementById("div2").style.display="none";
				
			break;
			case 2:
			document.getElementById("div2").style.display="block";
				var sp,cp;
				sp=Number(document.getElementById("sp").value);
				cp=Number(document.getElementById("cp").value);
				var res= sp-cp;
				if(res==0)
				{
					document.getElementById("res1").innerHTML="no prpfit no loss";
				}
				else if(res>0)
				{
					document.getElementById("res1").innerHTML="Profit ="+res;
				}
				else
				{
					document.getElementById("res1").innerHTML="Loss="+res;
				}
			break;
			case 3:
			break;
			case 4:
			break;
			default:
			document.getElementById("res").innerHTML="Inavalid choice";
			break;
		}
	}
	function grt3()
	{
		var n1,n2,n3;
				n1=Number(document.getElementById("n1").value);
				n2=Number(document.getElementById("n2").value);
				n3=Number(document.getElementById("n3").value);
					if(n1>n2 && n1>n3)
					{
						document.getElementById("res1").innerHTML="number 1 is greater ="+n1;
					}
					else if(n2>n1 && n2>n3)
					{
						document.getElementById("res1").innerHTML="number 2 is greater ="+n2;
					}
					else
					{
						document.getElementById("res1").innerHTML="number 3 is greater ="+n3;
					}
	}