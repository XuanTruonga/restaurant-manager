/* eslint-disable no-useless-escape */
/* eslint-disable import/no-anonymous-default-export */
class Regexs {
    integer = /[^0-9]/g;
    string = /[^a-zA-ZÀ-Ỹà-ỹĂăÂâĐđÊêÔôƠơƯư]/g;
    email =
       /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/;
    uppercaseCharacters = /.*[A-Z].*/;
    phoneVn = /(84|0[35789])[0-9]{8}\b/g;
    characterCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\|=]/;
    number = /^[1-9]\d*$/;
    cmnd = /^[1-9]{11}\b/g;
    bankNumber = /^(?:\d{10}|\d{19})$/;
    password = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
 }
 
 export default new Regexs();