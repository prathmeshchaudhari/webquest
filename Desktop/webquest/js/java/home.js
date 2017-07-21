
  	function validation(){
			var x= document.forms["wq"]["username"].value;
			if(x!= "pc2997" || x== null )
			{
				alert("Incorrect Username");
				return false;
			}
			var y= document.forms["wq"]["password"].value;
			if (y!="qwertyuiop" || y== null) {
				alert("Incorrect Password");
				return false;
			}

		}
  
