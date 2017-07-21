	function validation2(){	
		var z= document.forms["wq2"]["answer1"].value;
		if (z!="the city of a thousand minarets" ||z==null) {
			alert("Incorrect Answer");
			return false;
		}
		}