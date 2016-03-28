// The anonymous function below will fire on page load
// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types
// http://www.mattbowytz.com/bonus1/bonus-recs.html, http://www.mattbowytz.com/simple_api.json?data=all

(function() {
	
	$(".flexsearch-input").on("keyup", function(){
		$.ajax({url: "http://www.mattbowytz.com/simple_api.json?data=all",
			success: function(result){
				//console.log('Test1');
				console.log(result);
				//console.log(result.data.interests[0]);
				var str0 = $(".flexsearch-input").val();
				var arr0 = result.data.interests.concat(result.data.programming);
				var arr1 = [];
				if (str0 === ""){
					$(".preditext").html(" ");
				}
				else {
					for (var i = 0; i < arr0.length; i++){
						var str1 = arr0[i].substring(0, str0.length);
						if (str1.toUpperCase() === str0.toUpperCase()){
							console.log(arr0[i]);
							arr1[i] = '<a href="http://www.google.com/search?q='+arr0[i]+'">'+arr0[i]+'</a><br />';
						}
					}
					$(".preditext").html(arr1);
				}
			}
		});
	});
	
	console.log('Keepin\'n it clean with an external script!');
})();
