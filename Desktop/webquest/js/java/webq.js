	function validation3(){	
		var c= document.forms["form"]["t1"].value;
		if (c!="memphis" || c==null) {
			alert("Incorrect Answer");
			return false;
		}
		
		}