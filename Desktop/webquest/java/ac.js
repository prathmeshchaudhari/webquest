	function validation4(){	
		var d= document.forms["abc"]["t2"].value;
		if (d!="giza" || d==null) {
			alert("Incorrect Answer");
			return false;
		}
		
		}