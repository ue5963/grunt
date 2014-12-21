
hoge  = ->
	console.log 'aaa'
	console.log 'git test'

hoge()




ajaxSucsessHandler = (data , callback) ->
	callback(data.userId);

getUserId = ( callback ) ->

	defer = $.Deferred();

	$.ajax({
		url: '/sample/user.json',
		dataType: 'json',
		success: (json) ->
			data = json
			ajaxSucsessHandler( data , callback )
			defer.promise();
	})
	.done ->
		console.log("success");

	.fail ->
		console.log("error");

	.always ->
		console.log("complete");






$ ->
	promise = getUserId ( userId ) ->
		alert('ユーザーidは' + userId);
	#	alert('hallo' + userId);

	promise.done ->
		console.log('toshi!');
		@
	@







