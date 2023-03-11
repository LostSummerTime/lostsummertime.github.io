/*
*
* - - - - - - -
*
* charset "utf-8"
* Lang: ru_RU
* Команда Lost Summer Time - vk.com/lost.summer.time
* В будущем vk.com/lostsummertime
* Главный в команде NiktoX2 - vk.com/niktox2
* Дата - **.03.2023
*
* - - - - - - -
* Библиотека Lost Summer Time
* - - - - - - -
*
*/

;(function (global) {
	"use strict"

	/*
	*
	* - - - - - - -
	* ***
	* - - - - - - -
	*
	*/

	global.onerror = (message, url, line, col, error) => {
		let isOn = false

		if (isOn) {
			console.log(message)
			console.log(url)
			console.log(line)
			console.log(col)
			console.log(error)
			return true;
		}
	}



	let lostSummerTime_MouseX = 0, lostSummerTime_MouseY = 0


	function lostSummerTime_Console(a = {header: "", body: "", option: ""}) {
		const text = "Lost Summer Time"

		let textConsole = a.header ? `${text} (${a.header}): ${a.body}` : `${text}: ${a.body}`

		switch (a.option) {
			case "error":
				console.error(textConsole)
				break;
			case "log":
				console.error(textConsole)
				break;
			default:
				console.log(textConsole)
				break;
		}
	}

	function lostSummerTime_ConsoleText() {
		
	}


	function lostSummerTime_ArrayCorrection(a) {
		
	}


	function lostSummerTime_CorrectingList(a) {
		
	}



	const lostSummerTime = (item = null) => {
		if (typeof (item) === "function") {
			document.addEventListener("DOMContentLoaded", item)
		} else {
			if (item.length > 0) {
				item = item.e ? item.e : item.element ? item.element : item

				item = document.querySelector(item) ? document.querySelector(item) :
				document.querySelector(`.${item}`) ? document.querySelector(`.${item}`) :
				document.querySelector(`#${item}`) ? document.querySelector(`#${item}`) :

				lostSummerTime_Console({
					header: "объект",
					body: `Объект ${item} не был обнаружен (возможно он не был загружен)`,
					option: "error"
				})

				return new lostSummerTime_Class(item)
			} else {
				lostSummerTime_Console({body: "Нужна помочь?"})
			}
		}
	}

	/* создание элемента */
	lostSummerTime.create = (element, list = { id: "", class: "", isLog: false }) => {
		if (element) {
			let item = document.createElement(a)

			if (list.id) {
				item.id = list.id
			}

			if (list.class) {
				item.id = list.id
			}

			return item
		} else {
			lostSummerTime_Console({
				header: "create",
				body: "Не был указан тег элемента"
			})
		}
	}

	/* Копировать текст */
	lostSummerTime.copyText = (a = null) => {
		navigator.clipboard.writeText(a != null ? a.toString() : window.getSelection().toString())
	}

	/* вставить текст */
	lostSummerTime.pasteText = () => {
		navigator.clipboard.readText()
	}

	/* меню при нажатие кнопки */
	lostSummerTime.contextMenu = () => { }

	/* textarea */
	lostSummerTime.newTextarea = (a = null) => {
		if (document.querySelectorAll("textarea").length > 0) {

			if (a = "all") {
				document.querySelectorAll("textarea").forEach((element) => {
					textareaKey(element)
				})
			}

			function textareaKey(element) {
				element.addEventListener("keydown", (key) => {
					if (key.key === "Tab") {
						key.preventDefault()
						element.value += "\t"
					}

					if (key.key === "Enter" && (element.value.match(/\n/g) || []).length < 5) {
						element.style.height = `${element.scrollHeight + 19 + 2}px`
					}

					if (key.key === "Backspace" && (element.value.match(/\n/g) || []).length + 1 > 1 && element.clientHeight >= element.scrollHeight) {
						element.style.height = `${element.clientHeight - 19 + 2}px`
					}
				})
			}
		} else {
			lostSummerTime_Console({
				header: "newTextarea",
				body: "Нету ни одного textarea"
			})
		}
	}

	lostSummerTime.newSelect = () => {
		if (document.querySelector("#select")) {
			document.querySelectorAll("#select").forEach((a) => {
				let
					selectTitle = a.querySelector("#title"),
					selectOption = a.querySelector("#option")
				;

				a.addEventListener("click", () => { selectOption.classList.toggle("hide") })

				selectOption.querySelectorAll("span").forEach((a) => {
					a.addEventListener("click", () => {
						selectTitle.textContent = a.textContent
						document.documentElement.setAttribute("data-theme", a.getAttribute("data-value"))
						selectOption.classList.remove("hide")
					})
				})
			})
		} else {
			lostSummerTime_Console({
				header: "newSelect",
				body: "Нет ни одного #select"
			})
		}
	}

	lostSummerTime.class_AddToggleRemove = (a = {item: "", action: "", class: ""}) => {
		if (a.item) {
			switch (a.action) {
				case "add":
					if (a.class) {
						document.querySelector(a.item).classList.add(a.class)
					} else {
						lostSummerTime_Console({
							header: "Class (Add Toggle Remove)",
							body: "Вы не указали класс (class)",
							option: "error"
						})
					}
					break;
				case "toggle":
					document.querySelector(a.item).classList.toggle(a.class)
					break;
				case "remove":
					document.querySelector(a.item).classList.remove(a.class)
					break;
				default:
					lostSummerTime_Console({
						header: "Class (Add Toggle Remove)",
						body: "Вы не указали действие (action)",
						option: "error"
					})
					break;
			}
		} else {
			lostSummerTime_Console({
				header: "Class (Add Toggle Remove)",
				body: "Вы не указали элемент которому будет все применяться (item)",
				option: "error"
			})
		}
	}

	lostSummerTime.class_AddToggleRemove.info = () => {
		lostSummerTime_Console({
			header: "Class (Add Toggle Remove)",
			body: 'Взаимодействие с классами, добавить, убрать, либо автоматически будет делать действие\nПередавать требуется список\nСписок имеет следующий формат\n{item: "", action: "", class: ""}\n'
		})
	}



	const lostSummerTime_Class = class {
		constructor(element) {
			this.element = element
		}

		get(list) {
			if (list != null) {
				if (list.is == "width") {
					return list.isLog ? console.log(`${this.element.clientWidth}px`) : `${this.element.clientWidth}px`
				}

				if (list.is == "height") {
					return list.isLog ? console.log(`${this.element.clientHeight}px`) : `${this.element.clientHeight}px`
				}

				if (list.is == "attribute") {
					if (list.isOption) {
						return list.isLog ? console.log(this.element.getAttribute(list.isOption)) : this.element.getAttribute(list.isOption)
					} else {
						console.error("Lost Summer Time (get attribute): Не был указан isOption")
					}
				}

				if (list.is == "lang") {
					return list.isLog ? console.log(this.element.getAttribute("lang")) : this.element.getAttribute("lang")
				}
			} else {
				console.error("Lost Summer Time (get): Не было указано что хотите получить")
			}
		}

		set(a = null) { }

		mouseXY = (option = null) => {
			this.element.addEventListener("mousemove", (a) => {
				lostSummerTime_MouseX = a.pageX
				lostSummerTime_MouseY = a.pageY

				if (option = "log") {
					console.log(`X: ${lostSummerTime_MouseX} Y: ${lostSummerTime_MouseY}`)
				}
				if (option = "logX") {
					console.log(`X: ${lostSummerTime_MouseX}`)
				}
				if (option = "logY") {
					console.log(`Y: ${lostSummerTime_MouseY}`)
				}
			})
		}
	}


	/*
	*
	* ***
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

	global.lostSummerTime = lostSummerTime
	global.lostsummertime = lostSummerTime
	global.lst = lostSummerTime
	global.niktoX2 = lostSummerTime
	global.niktox2 = lostSummerTime
	global.nx2 = lostSummerTime
	global.$ = lostSummerTime

	/*
	*
	* Написание
	* - - - - - - -
	* End
	* - - - - - - -
	*
	*/

})(this)

/*
*
* Библиотека Lost Summer Time
* - - - - - - -
* End
* - - - - - - -
*
*/