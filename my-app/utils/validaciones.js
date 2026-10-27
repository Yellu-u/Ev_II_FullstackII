// Función para validar el correo
export function validarCorreo(correo) {
        if (correo.length > 100) {
                return false;
        }

        if (!correo.endsWith("@duocuc.cl") &&
                !correo.endsWith("@profesor.duocuc.cl") &&
                !correo.endsWith("@gmail.com")) {
                return false;
        }

        return true;
}

// Función para validar la contraseña
export function validarContrasena(contrasena) {
        if (contrasena.length < 4) {
                return false;
        }

        if (contrasena.length > 10) {
                return false;
        }

        return true;
}

// Función para validar el formulario de registro completo
export function validarRegistro(nombre, correo, contrasena, confirmarContrasena) {
        if (nombre.length === 0 || nombre.length > 150) {
                return false;
        }

        if (!validarCorreo(correo)) {
                return false;
        }

        if (!validarContrasena(contrasena)) {
                return false;
        }

        if (contrasena !== confirmarContrasena) {
                return false;
        }

        return true;
}

// Validar formulario de Contacto
export function validarContacto(nombre, correo, mensaje) {
        if (nombre.length === 0 || nombre.length > 100) return false;

        if (!validarCorreo(correo)) return false;

        if (mensaje.length === 0 || mensaje.length > 500) return false;

        return true;
}