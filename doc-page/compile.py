#coding: utf-8

from jinja2 import Environment, FileSystemLoader

# Lecture

template_env = Environment(loader = FileSystemLoader(searchpath = "."))
template = template_env.get_template("documentation.jinja")

# Ecriture

with open("documentation.html", "w") as file:
    file.write(
        template.render()
    )

    file.close()