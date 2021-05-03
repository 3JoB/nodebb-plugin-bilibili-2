//gen html
function genBilibiliFramea(aid,cid,width,height,divid)
{
	var f = '<iframe src="https://player.bilibili.com/player.html?aid='+
		aid+
		'&cid='+
		cid+
		'" width="'+
		width+
		'" height="'+
		height+
		'" frameborder="0" ' +
		'webkitallowfullscreen ' +
		'mozallowfullscreen ' +
		'allowfullscreen>' +
		'</iframe>'
	return f;
}

function genBilibiliFramebv(bvid,cid,width,height,divid)
{
	var f = '<iframe src="https://player.bilibili.com/player.html?bvid='+
		bvid+
		'&cid='+
		cid+
		'" width="'+
		width+
		'" height="'+
		height+
		'" frameborder="0" ' +
		'webkitallowfullscreen ' +
		'mozallowfullscreen ' +
		'allowfullscreen>' +
		'</iframe>'
	return f;
}


//get video cid
function genBiliVideoa(aid,width,height,divid)
{
	$.get( "https://cors-anywhere.herokuapp.com/www.bilibili.com/video/av" + aid, function( data ) {
		let d = data.match(/cid=\d+/)[0].match(/\d+/)[0];
		console.log(d);
		let frame = genBilibiliFramea(aid,d,width,height);
		console.log(frame);
		divid.className = "bilibilivideoa";
		divid.innerHTML = frame;
	});
}


function genBiliVideobv(bvid,width,height,divid)
{
	$.get( "https://cors-anywhere.herokuapp.com/www.bilibili.com/video/bv" + aid, function( data ) {
		let d = data.match(/cid=\d+/)[0].match(/\d+/)[0];
		console.log(d);
		let frame = genBilibiliFramebv(bvid,d,width,height);
		console.log(frame);
		divid.className = "bilibilivideobv";
		divid.innerHTML = frame;
	});
}
