$(document).ready(function(){
		var $ul = $('ul');
		
		$('#save').click( function(){
			localStorage.setItem('list', $ul.html());
		});
		
		$('#clear').click( function(){
			localStorage.clear('list');
			location.reload();
		});
		
		if(localStorage.getItem('list')){
			$ul.html(localStorage.getItem('list'));
		}
});