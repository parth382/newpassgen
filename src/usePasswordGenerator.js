import React, { useState } from 'react'

export default function usePasswordGen() {

    const [password,setPassword] = useState("");
    const [errMsg,setErrMsg] = useState("");

    const generatePassword = ( checkboxData,length ) => {
        let charset = "",generatedPassword = "";

        const selectedOption = checkboxData.filter((checkbox) => checkbox.state);
        // if state of checkbox is true then it return it inside a variable selectedOption

        if ( selectedOption.length === 0 ){
            setErrMsg("Select atleast one option");
            setPassword("");
            return;
        }

        selectedOption.forEach(option => {
            switch(option.title){
                case "Include Uppercase Data":
                    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    break;
                case "Include Lowercase Data":
                    charset += "abcdefghijklmnopqrstuvwxyz";
                    break;
                case "Include Numbers":
                    charset += "0123456789";
                    break;
                case "Include Symbols":
                    charset += "!@#$%^&*()_-+=[]{}|;:'\",.<>?/`~";
                    break;
                default :
                    break;
            }
        });

        for (let i=0;i<length;i++){
            const randomIndex = Math.floor(Math.random() * charset.length);
            generatedPassword += charset[randomIndex];
        }
        setPassword(generatedPassword);
        setErrMsg("");
    };

  return {password,errMsg,generatePassword};

};