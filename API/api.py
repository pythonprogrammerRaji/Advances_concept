from flask import Flask, jsonify, request

app = Flask(__name__)

#GET API
@app.route("/api/message", methods=["GET"])
def get_message():
    return jsonify({"message": "Hello Rajeshwari, your API is working!"})



#post API
@app.route("/api/add-user", methods=["POST"])
def add_user():
    data = request.json
    name = data.get("name")
    role = data.get("role")


    return jsonify({
        "status": "User Added Successfully",
         "name" : name,
         "role" : role
    })


@app.route("/api/update-user/<int:user_id>", methods=["PUT"])
def update_user(user_id):
    data = request.get_json()
    name = data.get("name")
    role = data.get("role")

    return jsonify({
        "status":f"user{user_id} update successfully",
        "name" : name,
        "role" : role
    })

users = [
    {"id": 1, "name": "Rajeshwari", "role": "Developer"},
    {"id": 2, "name": "Amit", "role": "Designer"},
    {"id": 3, "name": "Aishu", "role": "Creator"}
]


@app.route("/api/delete-user/<int:user_id>", methods=["DELETE"])
def delete_user(user_id):
    global users
    # Find user by id
    user_to_delete = next((user for user in users if user["id"] == user_id), None)
    if user_to_delete:
        users = [user for user in users if user["id"] != user_id]
        return jsonify({
            "status": f"User {user_id} successfully deleted",
            "remaining_users": users
        })
    else:
        return jsonify({"error": "User not found"}), 404


if __name__ == "__main__":
    app.run(debug=True)