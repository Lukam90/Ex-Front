#coding: utf8

from jinja2 import Environment, FileSystemLoader

headings = ("Name", "Role", "Salary")

data = (
    ("Rolf", "Software Engineer", "€42,000.00"),
    ("Amy", "Product Owner", "€55,000.00"),
    ("Bob", "Security Engineer", "€45,000.00"),
    ("Adam", "Software Engineer", "€49,000.00"),
    ("Helen", "Product Owner", "€49,000.00"),
    ("Jen", "Designer", "€63,000.00"),
)

def convert(filename):
    template_env = Environment(loader = FileSystemLoader(searchpath = "."))
    template = template_env.get_template(f"{filename}.jinja")

    with open(f"{filename}.html", "w") as file:
        file.write(
            template.render(headings = headings, data = data)
        )

        file.close()

convert("table")