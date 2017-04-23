(function () {
	function calculateAge(birthday) { // birthday is a date
	  var ageDifMs = Date.now() - birthday.getTime();
	  var ageDate = new Date(ageDifMs); // miliseconds from epoch
	  return Math.abs(ageDate.getUTCFullYear() - 1970);
	}

	$(document).ready(function(){
		$('#photo-header #age').text(calculateAge(new Date('07/26/1992')));
	});
})();
