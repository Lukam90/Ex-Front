#coding: utf-8

from jinja2 import Environment, FileSystemLoader

# Lecture

sections = []

with open("data/sections.txt", "r") as file:
    for line in file:
        title = line.strip()
        link = title.replace(" ", "_")

        path = title.replace(" ", "-").lower()
        path = path.replace("...", "-") + ".html"

        sections.append({ "title" : title, "link" : link, "path" : path })

    file.close()

# Ecriture

template_env = Environment(loader = FileSystemLoader(searchpath = "."))
template = template_env.get_template("documentation.jinja")

with open("documentation.html", "w") as file:
    file.write(
        template.render(sections = sections)
    )

    file.close()