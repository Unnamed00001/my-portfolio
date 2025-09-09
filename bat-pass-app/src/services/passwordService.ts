export default function generatePass(){
    let password: string ="";
    let characters: string ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:',.<>/?";
    let passwordLengh = 8;

    for(let index =0; index < passwordLengh; index++){
        password += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    return password;
}