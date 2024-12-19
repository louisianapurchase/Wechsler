from flask import Flask, render_template

app = Flask(__name__, static_folder='_include/static')  # Specify the path to the static folder


@app.route("/")
def index():
    return render_template("index.html")  # Flask will look in the `templates` directory automatically

if __name__ == "__main__":
    app.run(debug=True)
