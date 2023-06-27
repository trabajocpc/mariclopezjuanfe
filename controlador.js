let nombresUsuario=document.getElementById("nombre")
let correoUsuario=document.getElementById("correo")
let telefonoUsuario=document.getElementById("telefono")
let botonEnvio=document.getElementById("botonFormulario")

//Vamos a escuchar el clic en el boton
botonEnvio.addEventListener("click",function(evento){
    evento.preventDefault()
    let nombre=nombresUsuario.value
    let correo=correoUsuario.value
    let telefono=telefonoUsuario.value
    
    let errores=[]

    if(!nombre){
        errores.push("error en el nombre")
        console.log("error en el nombre")
        nombresUsuario.classList.add("is-invalid")
    }
    if(!correo){
        errores.push("error en el correo")
        console.log("error en el correo")
        correoUsuario.classList.add("is-invalid")
    }
    if(!telefono){
        errores.push("error en el telefono")
        console.log("error en el telefono")
        telefonoUsuario.classList.add("is-invalis")
    }
    if(errores.length>0){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }else{
          Swal.fire(
            'exito en la reserva',
            'You clicked the button!',
            'success'
        )

        //preguntando si tengo datos en memoria
        let datosMemoria=JSON.parse(localStorage.getItem("datosMemoria"))
        let reservas
        if(datosMemoria==null){
            reservas=[]
        }else{
            reservas=datosMemoria
        }
        

        let reserva={
          nombre,
          correo,
          telefono

        }
        reservas.push(reserva)
        localStorage.setItem("datosMemoria",JSON.stringify(reservas))
          
    }
})



