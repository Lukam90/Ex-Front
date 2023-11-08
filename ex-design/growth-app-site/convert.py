#coding: utf8

from jinja2 import Environment, FileSystemLoader

def convert(filename):
    template_env = Environment(loader = FileSystemLoader(searchpath = "."))
    template = template_env.get_template(f"{filename}.jinja")

    with open(f"{filename}.html", "w") as file:
        file.write(
            template.render()
        )

        file.close()
    
    print("Conversion Jinja > HTML")

convert("index")