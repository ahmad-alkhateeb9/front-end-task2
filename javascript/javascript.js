const darkModeToggle = document.querySelector('.dark-mode .check-box');

//
// const enableDarkMode = () => {
//     document.body.classList.add('darkmode');
// }

// const disAbleDarkMode = () => {
//     document.body.classList.remove('darkmode');
// }

document.addEventListener('DOMContentLoaded', () => {
    darkmode_init();
    // if (document.body.classList.contains('darkmode')) {
    //     disAbleDarkMode();
    // }
    // else {
    //     enableDarkMode();
    // }
});

// here is the cookies
function darkmode_init()
{
	let darkmodeCookie = {
		set:function(key,value,time,path,secure=false)
		{
			let expires = new Date();
			expires.setTime(expires.getTime() + time);
			var path   = (typeof path !== 'undefined') ? pathValue = 'path=' + path + ';' : '';
			var secure = (secure) ? ';secure' : '';
			document.cookie = key + '=' + value + ';' + path + 'expires=' + expires.toUTCString() + secure;
		},
		get:function()
		{
			let keyValue = document.cookie.match('(^|;) ?darkmode=([^;]*)(;|$)');
			return keyValue ? keyValue[2] : null;
		},
		remove:function()
		{
			document.cookie = 'darkmode=; Max-Age=0; path=/';
		}
	};

	if(darkmodeCookie.get() == 'true')
	{
        darkModeToggle.classList.add('active');
		document.body.classList.add('darkmode');
	}

	darkModeToggle.addEventListener('click', (event) => {
		document.body.classList.toggle('darkmode');

		if(document.body.classList.contains('darkmode'))
		{
			darkmodeCookie.set('darkmode','true',2628000000,'/',false);
            console.log('its added a dark theme');
		}
		else
		{
            console.log('its remove a dark theme');
			darkmodeCookie.remove();
		}
	});
}