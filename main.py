from flet import *

def main(page:Page):
	# CHANGE THEME TO LGHT
	page.theme_mode ="light"

	page.add(
		Column([
			Text("I AM FROM FLET YOUTUBE",size=30,weight="bold"),
			TextField(label="test"),
			ElevatedButton("test")
			])
		)
flet.app(target=main)