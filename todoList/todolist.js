let usersData = [
    {name: "Huy", age: "18"},
    {name: "An", age: "18"},
    {name: "Lợi", age: "17"},
    {name: "Sơn", age: "17"},
]

// chỉ lưu lần đầu
if(!localStorage.getItem("users")){
    localStorage.setItem("users", JSON.stringify(usersData))
}

const load = () => {

    let data = ``
    let usersList = document.getElementById("usersList")

    let users = JSON.parse(localStorage.getItem("users")) || []

    users.forEach((user, index) => {

        data += `
            <tr id="user-${index}">
                <td>${user.name}</td>
                <td>${user.age}</td>

                <td>
                    <button onclick="editUser(${index})">
                        Sửa
                    </button>

                    <button onclick="deleteUser(${index})">
                        Xóa
                    </button>
                </td>
            </tr>
        `
    })

    usersList.innerHTML = data
}

const addUser = () => {

    let name = document.getElementById("user-name").value
    let age = document.getElementById("user-age").value

    if(name === "" || age === ""){
        alert("Vui lòng nhập đầy đủ")
        return
    }

    let newUser = {
        name: name,
        age: age
    }

    let users = JSON.parse(localStorage.getItem("users")) || []

    users.push(newUser)

    localStorage.setItem("users", JSON.stringify(users))

    document.getElementById("user-name").value = ""
    document.getElementById("user-age").value = ""

    load()
}

const deleteUser = (index) => {

    let users = JSON.parse(localStorage.getItem("users")) || []

    users.splice(index, 1)

    localStorage.setItem("users", JSON.stringify(users))

    load()
}

const editUser = (index) => {

    let users = JSON.parse(localStorage.getItem("users")) || []

    let user = users[index]

    let newName = prompt("Nhập tên mới", user.name)
    let newAge = prompt("Nhập tuổi mới", user.age)

    if(newName !== null && newAge !== null){

        users[index] = {
            name: newName,
            age: newAge
        }

        localStorage.setItem("users", JSON.stringify(users))

        load()
    }
}

load()