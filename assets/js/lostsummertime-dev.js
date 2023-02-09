/*
*
* - - - - - - -
*
* charset "utf-8"
* Lang: ru_RU
* Команда Lost Summmer Time - vk.com/lost.summer.time
* В будущем vk.com/lostsummertime
* Главный в команде NiktoX2 - vk.com/niktox2
* Дата - **.02.2023
*
* - - - - - - -
* Библиотека Lost Summer Time
* - - - - - - -
*
*/

(function (global) {
	"use strict"

	/*
	*
	* - - - - - - -
	* ***
	* - - - - - - -
	*
	*/

	let lostSummerTime_MouseX = 0, lostSummerTime_MouseY = 0



	const lostSummerTime = (item = null) => {
		if (typeof (item) === "function") {
			document.addEventListener("DOMContentLoaded", item)
		} else {
			if (item.length > 0) {
				item = item.e ? item.e : item.element ? item.element : item

				item = document.querySelector(item) ? document.querySelector(item) :
				document.querySelector(`.${item}`) ? document.querySelector(`.${item}`) :
				document.querySelector(`#${item}`) ? document.querySelector(`#${item}`) :
				console.error(`Lost Summer Time (объект): Объект ${item} не был обнаружен (возможно он не был загружен)`)

				return new lostSummerTime_Class(item)
			} else {
				console.log("Lost Summer Time: Нужна помочь?")
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
			console.error("Lost Summer Time (create): Не был указан тег элемента")
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
			console.error("Lost Summer Time (newTextarea): Нету ни одного textarea");
		}
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

/*
*
* - - - - - - -
* - - - - - - -
* - - - - - - -
* - - - - - - -
* - - - - - - -
*
*/

/*
document.body.querySelectorAll("*").forEach((e) => {
	console.log(e.attributes) // dataset
	.forEach((name, value) => {
		console.log(`Name: ${name}\nValue: ${value}`)
	})
})
*/