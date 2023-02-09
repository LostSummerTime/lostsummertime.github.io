/*
*
* - - - - - - -
*
* charset "utf-8"
* Lang: ru_RU
* Команда Lost Summmer Time - vk.com/lost.summer.time
* Главный в команде NiktoX2 - vk.com/niktox2
* Дата - **.02.2023
*
* - - - - - - -
* Пока что так
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
	html.addEventListener("mousemove", (e) => { mouseX = e.pageX; mouseY = e.pageY })

	/*  */
	html.addEventListener("mousedown", (e) => {
		if (e.button == 0 && !contextMenu.classList.contains("hide")) {
			contextMenu.addEventListener("mousedown", (e) => {
				mouseContextMenu = true
			})
			if (!mouseContextMenu) contextMenu.classList.add("hide")
			else mouseContextMenu = false
		}

		if (e.button == 2) {
			e.preventDefault()
			contextMenu.classList.remove("hide")
			contextMenu.style.top = `${mouseY - 16}px`
			contextMenu.style.left = `${mouseX}px`
		}
	})

	/*  */

	function sizeBodyForMenu() {
		if (body.clientWidth <= 430) { menu.classList.add("hide"); menuPhone.classList.remove("hide") }
		else { menu.classList.remove("hide"); menuPhone.classList.add("hide") }
	}

	sizeBodyForMenu()

	window.addEventListener("resize", sizeBodyForMenu)

	/* Select and option */
	if (document.getElementById("select")) {
		document.querySelectorAll("#select").forEach((a) => {
			let
				selectTitle = a.querySelector("#title"),
				selectOption = a.querySelector("#option")
			;

			a.addEventListener("click", () => { selectOption.classList.toggle("hide") })
			selectOption.querySelectorAll("span").forEach((a) => {
				a.addEventListener("click", () => {
					selectOption.classList.toggle("hide")
					selectTitle.textContent = a.textContent
					document.documentElement.setAttribute("data-theme", a.getAttribute("data-value"))
				})
			})
		})
	}

	/* Работа Textarea для набора сообщений */
	if (document.querySelector("textarea")) {
		document.querySelectorAll("textarea").forEach((a) => {
			a.addEventListener("keydown", (e) => {
				if (e.key === "Tab") {
					e.preventDefault()
					a.value += "\t"
				}

				if (e.key === "Enter" && (a.value.match(/\n/g) || []).length < 5) {
					a.style.height = `${a.scrollHeight + 19 + 2}px`
				}

				if (e.key === "Backspace" && (a.value.match(/\n/g) || []).length + 1 > 1 && a.clientHeight >= a.scrollHeight) {
					a.style.height = `${a.clientHeight - 19 + 2}px`
				}
			})
		})
	}
})