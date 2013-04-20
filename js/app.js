function show_my_videos(data){
	html = ['<ul id="youtube-videos">'];
	$(data.feed.entry).each(function(entry){
		url = this.link[0].href;
		url_thumbnail = this.media$group.media$thumbnail[3].url;
		description = this.media$group.media$description.$t;
		html.push('<li><a href="'+url+'">');
		html.push('<img src="'+url_thumbnail+'" alt="'+description+'">');
		html.push('</a></li>');
	});
	html.push('</ul>');
	$("#videos").html(html.join(''));
}
$.ajax({
	type: "GET",
	url: "http://gdata.youtube.com/feeds/users/anarchyao/uploads?alt=json-in-script&format=5",
	cache: false,
	dataType:'jsonp',
	success: function(data){
		show_my_videos(data);
		//If you want to see in console...
		// console.log(data);
		// console.log(data.feed.entry);
		// $(data.feed.entry).each(function(){
		// 	console.log(this.link[0].href);
		// 	console.log(this.media$group.media$thumbnail[3].url);
		// 	console.log(this.media$group.media$description.$t);
		// });
  }
});