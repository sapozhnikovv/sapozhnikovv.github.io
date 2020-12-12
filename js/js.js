
var language = window.navigator ? (window.navigator.language ||
								   window.navigator.systemLanguage ||
								   window.navigator.userLanguage) : "en";
language = language.substr(0, 2).toLowerCase();

if (!window.location.hostname.includes("192.168.") && 
	!window.location.hostname.includes("localhost")){
		if (language === "ru" && location.href === "https://sapozhnikovv.github.io/")
		{ 
			location.href = "ru.html";
		}
}