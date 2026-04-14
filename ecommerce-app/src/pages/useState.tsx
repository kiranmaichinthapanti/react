import { useState } from "react";


function Counter() {
    const [name, setName] = useState("");

    return (
        <div>
            <input type="text" value={name} onChange = {(e) => setName(e.target.value)}/>
            <p>Hello,{name}</p>
            <Toggle/>
        </div>
    );
}

function Toggle(){
    const [isOn, setIsOn] = useState(true);

    return (
        <button onClick={() => setIsOn(!isOn)}>
            {isOn ? "ON" : "OFF"}
        </button>
    );
}
export default Counter;

