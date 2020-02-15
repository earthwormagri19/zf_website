+function ($) {
    'use strict';
    $.get('http://localhost:4200/api/users',{},function(data,status,xhr){
        console.log("data"+ data);		
	},"jsonp");
}(jQuery);