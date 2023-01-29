/*
*
* - - - - - - -
*
* charset "utf-8"
* Lang: ru_RU
* Команда Lost Summmer Time - vk.com/lost.summer.time
* Главный в команде NiktoX2 - vk.com/niktox2
* Дата - **.01.2023
*
* - - - - - - -
* Готовые начальные переменные
* - - - - - - -
*
*/

document.addEventListener("DOMContentLoaded", () => {
	let
		html = document.querySelector("html"),
		head = html.querySelector("head"),
		body = html.querySelector("body"),
		menu = body.querySelector("#menu"),
		contextMenu = body.querySelector("#contextMenu"),
		menuPhone = body.querySelector("#menuPhone"),
		mouseX = 0,
		mouseY = 0,
		mouseContextMenu = false
	;

	/* Положение мыши */

	html.addEventListener("mousemove", (e) => { mouseX = e.pageX; mouseY = e.pageY });

	/*  */

	html.addEventListener("mousedown", (e) => {
		if (e.button == 0 && !contextMenu.classList.contains("hide")) {
			contextMenu.addEventListener("mousedown", (e) => {
				mouseContextMenu = true;
			})
			if (!mouseContextMenu) contextMenu.classList.add("hide");
			else mouseContextMenu = false;
		}
		if (e.button == 2) {
			e.preventDefault()
			contextMenu.classList.remove("hide");
			contextMenu.style.top = `${mouseY - 16}px`;
			contextMenu.style.left = `${mouseX}px`;
		}
	});

	/*  */

	function sizeBodyForMenu() {
		if (body.clientWidth <= 430) { menu.classList.add("hide"); menuPhone.classList.remove("hide"); }
		else { menu.classList.remove("hide"); menuPhone.classList.add("hide"); }
	}

	sizeBodyForMenu();

	window.addEventListener("resize", sizeBodyForMenu)

	/* Select and option */

	if (document.getElementById("select")) {
		document.querySelectorAll("#select").forEach((a) => {
			let
				selectTitle = a.querySelector("#title"),
				selectOption = a.querySelector("#option")
			;

			selectTitle.addEventListener("click", () => { selectOption.classList.toggle("hide") });
			selectOption.querySelectorAll("span").forEach((a) => {
				a.addEventListener("click", () => {
					selectOption.classList.toggle("hide");
					selectTitle.textContent = a.textContent;
					document.documentElement.setAttribute("data-theme", a.getAttribute("data-value"));
				});
			});
		});
	}

	/* Работа Textarea для набора сообщений */

	if (document.querySelector("textarea")) {
		document.querySelectorAll("textarea").forEach((a) => {
			a.addEventListener("keydown", (e) => {
				if (e.key === "Tab") {
					e.preventDefault();
					a.value += "\t";
				}

				if (e.key === "Enter" && (a.value.match(/\n/g) || []).length < 5) {
					a.style.height = `${a.scrollHeight + 19 + 2}px`;
				}

				if (e.key === "Backspace" && (a.value.match(/\n/g) || []).length + 1 > 1 && a.clientHeight >= a.scrollHeight) {
					a.style.height = `${a.clientHeight - 19 + 2}px`;
				}
			});
		});
	}

	/*  */

	/*document.body.querySelectorAll("*").forEach((e) => {
		console.log(e.attributes) // dataset
		.forEach((name, value) => {
			console.log(`Name: ${name}\nValue: ${value}`)
		})
	});*/
});

/*
*
* Готовые начальные переменные
* - - - - - - -
* End
* - - - - - - -
*
*/

/*
*
* - - - - - - -
* Библиотека Lost Summer Time
* - - - - - - -
*
*/

;(function (global) {
	"use strict";

	/*
	*
	* - - - - - - -
	* Обращение формата lst.
	* - - - - - - -
	*
	*/

	/* Входная точка */

	const lostSummerTime = (a) => {
		if (typeof (a) === "function") document.addEventListener("DOMContentLoaded", a);
		else return new _lostSummerTime(a);
	};

	/* Выполнить действие после прогрузки страницы */

	// lostSummerTime.load = (callback) => document.addEventListener("DOMContentLoaded", callback);
	// if (document.addEventListener) 
	// else if (document.readyState != "loading") callback();

	/* Обработка элемента */

	lostSummerTime.element = (e) => {
		return document.querySelector(e) ? document.querySelector(e) : 
		document.querySelector(`.${e}`) ? document.querySelector(`.${e}`) :
		document.querySelector(`#${e}`) ? document.querySelector(`#${e}`) :
		console.log(`${e} <- Данного объекта нет, либо он не был прогружен, либо произошла неизвестная ошибка`);
	};

	/* Вывести в консоль */

	lostSummerTime.log = (e) => console.log(e);

	/* Выключить */

	lostSummerTime.off = (a) => {
		// oncontextmenu="return false"
		if (a == "contextmenu") document.oncontextmenu = () => { return false }
		// ondragstart="return false"
		if (a == "drag") window.ondragstart = () => { return false }
	};

	/* Копировать выделенный текст */

	lostSummerTime.copyText = () => { navigator.clipboard.writeText(window.getSelection().toString()) }

	/* Копировать текст элемента */

	lostSummerTime.copyTextInElement = (a) => { navigator.clipboard.writeText(a.toString()) }

	/* Копировать выделенный текст */

	lostSummerTime.pasteText = () => { navigator.clipboard.readText() }

	/*
	*
	* Обращение формата lst.
	* - - - - - - -
	* End
	* - - - - - - -
	*
	*/

	/*
	*
	* - - - - - - -
	* Обращение формата lst()
	* - - - - - - -
	*
	*/

	class _lostSummerTime {
		constructor(e) { this.element = lostSummerTime.element(e) };

		get(a, b, e = this.element) {
			if (a == "size") return `W: ${e.clientWidth}px\nH: ${e.clientHeight}px`;

			if (a == "width") return `W: ${e.clientWidth}px`;
			if (a == "width-log") return `${e.clientWidth}px`;

			if (a == "height") return `${e.clientHeight}px`;
			if (a == "height-log") return `H: ${e.clientHeight}px`;

			if (a == "cursor") return e.style.cursor;

			if (a == "localStorage") return localStorage.getItem(b);
			if (a == "sessionStorage") return sessionStorage.getItem(b);

			if (a == "children") return e.children;

			if (a == "langSite") return document.documentElement.getAttribute("lang");
		}

		set(a, b, e = this.element) {
			if (Number(b)) console.log("Number True");

			if (a == "width") e.style.width = b;

			if (a == "langSite") document.documentElement.setAttribute("lang", b);

			function icon(name) {}
		}

		create(a) {
			let item = document.createElement(a);
			let option = ["id", "class", ""];
			return item;
		}
	};

	/*
	*
	* Обращение формата lst()
	* - - - - - - -
	* End
	* - - - - - - -
	*
	*/

	/*
	*
	* - - - - - - -
	* Написание
	* - - - - - - -
	*
	*/

	global.lostSummerTime = global.lst = global.$ = lostSummerTime;

	/*
	*
	* Написание
	* - - - - - - -
	* End
	* - - - - - - -
	*
	*/
})(this);

/*
*
* Библиотека Lost Summer Time
* - - - - - - -
* End
* - - - - - - -
*
*/