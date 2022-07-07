import imp
from flask import Flask, render_template

app = Flask(__name__)

headings = ("Name", "Role", "Salary", "Department")

data = (
    ("Rolf", "Software Engineer", "$42,000.00", "Engineering"),
    ("Amy", "Product Owner", "$55,000.00", "Engineering"),
    ("Bob", "Security Engineer", "$45,000.00", "Engineering"),
    ("Adam", "Software Engineer", "$49,000.00", "Engineering"),
    ("Helen", "Product Owner", "$49,000.00", "Engineering"),
    ("Jen", "Designer", "$63,000.00", "Engineering"),
)

@app.route("/")
def component():
    return render_template("tables.html", headings = headings, data = data)