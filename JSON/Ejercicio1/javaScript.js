//JSON de usuarios
var users = [
    user1 = {
        "name": "Cristian",
        "lastName": "Arevalo",
        "email": "tiancamilo59@gmail.com",
        "userName": "Cristian01",
        "password": "123123123"
    },

    user2 = {
        "name": "Camilo",
        "lastName": "Perdomo",
        "email": "camiloperdomo59@gmail.com",
        "userName": "Camilo01",
        "password": "000000"
    },

    user3 = {
        "name": "Luis",
        "lastName": "Gutierrez",
        "email": "luis1890@gmail.com",
        "userName": "Luis01",
        "password": "09870987"
    },

    user4 = {
        "name": "Carolina",
        "lastName": "Gonzalez",
        "email": "gonzalez00@gmail.com",
        "userName": "Carolina01",
        "password": "909090"
    }
]

//Guardar en local storage
localStorage.setItem("users", JSON.stringify(users));


//Función para el registro
function register() {
    //Obtenemos el valor de cada input del modal register
    var name = document.getElementById('name').value;
    var lastName = document.getElementById('lastName').value
    var email = document.getElementById('email').value;
    email = email.toLowerCase();
    var nameUser = document.getElementById('nameUser').value
    var password = document.getElementById('password').value
    //Estructura o platilla para acceso a users 
    var user = {
        "name": name,
        "lastName": lastName,
        "email": email,
        "userName": nameUser,
        "password": password
    }
    //Para la validación
    if (name && lastName && email && nameUser && password) {
        alert("Registro creado exitosamente")
        console.log(user);
        //Push añade o empuja al array, los nuevos users que vamos creando
        users.push(user);

        //Guardar obejto como String
        localStorage.setItem("users", JSON.stringify(users));



    } else {

        var alerta = "solid 1px red"
        if (name == '') {
            document.getElementById('name').style.border = alerta
        }
        if (lastName == '') {
            document.getElementById('lastName').style.border = alerta
        }
        if (email == '') {
            document.getElementById('email').style.border = alerta
        }
        if (nameUser == '') {
            document.getElementById('userName').style.border = alerta
        }
        if (password == '') {
            document.getElementById('password').style.border = alerta
        }

    }

    // guardamos en JSON como variable para poder verlo en consola
    var usuario = JSON.parse(localStorage.getItem("user"));
    console.log(usuario);


}


function signIn(userName, password) {
    //Obtenemos el valor de cada input del modal signIn
    var userName1 = document.getElementById(userName).value;
    var passwordUser = document.getElementById(password).value;

    console.log(`Estos son mis valores: Email:  ${userName1} y Password:  ${passwordUser}`);
    

    for (var i = 0; i < users.length; i++) {


        if (users[i].userName == userName1 && users[i].password == passwordUser) {
            alert("Bienvenido  " + userName1);

            //Obtener indice de mi usuario
            indice = (i);
            console.log(`La posición de mis datos es: ${indice}`);
            
            //Cambios en el nav
            document.getElementById("signOutItem").style.display = "block"
            document.getElementById("userNameItem").innerHTML = userName1
            document.getElementById("userNameItem").style.display = "block"
            document.getElementById("signInItem").style.display = "none"
            document.getElementById("registerItem").style.display = "none"

            //Obtenemos los id´s de los input a los cuales les pasaremos los datos del usuario
            document.getElementById("inputIndice").value = i
            console.log(`Hola ${i}`)
            document.getElementById("inputName").value = users[i].name
            document.getElementById("inputLastName").value = users[i].lastName
            document.getElementById("inputEmail").value = users[i].email
            document.getElementById("inputUserName").value = users[i].userName
            document.getElementById("inputPassword").value = users[i].password

            //Si encuentra algún usuario se termina el ciclo for     
            break;

        }


    }
}


function edit() {
    //Obtenemos el valor de cada input en editar
    var indice = document.getElementById("inputIndice").value
    var name = document.getElementById("inputName").value
    var lastName = document.getElementById("inputLastName").value
    var email = document.getElementById("inputEmail").value
    email = email.toLowerCase();
    var nameUser = document.getElementById("inputUserName").value
    var password = document.getElementById("inputPassword").value
    //Estructura o platilla para acceso a users 
    var user = {
        "name": name,
        "lastName": lastName,
        "email": email,
        "userName": nameUser,
        "password": password
    }
    if (name && lastName && email && nameUser && password) {
        alert("Registro actualizado exitosamente")
        console.log(user);
        
        localStorage.setItem("users", JSON.stringify(users[indice].name = name));
        localStorage.setItem("users", JSON.stringify(users[indice].lastName = lastName));
        localStorage.setItem("users", JSON.stringify(users[indice].email = email));
        localStorage.setItem("users", JSON.stringify(users[indice].userName = nameUser));
        localStorage.setItem("users", JSON.stringify(users[indice].password = password));
        console.log("Usuario", user)
        //Guardar objeto como String
        localStorage.setItem("users", JSON.stringify(users));

    }
}