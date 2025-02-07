import React, { useState } from 'react'

export default function PassGen() {

    const [password,setPassword] = useState("");
    const [errMsg,setErrMsg] = useState("");

    const generatePassword = () => {};

  return {password,errMsg,generatePassword};

};
