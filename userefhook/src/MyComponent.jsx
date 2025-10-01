import React,{useState,useEffect,useRef} from 'react'

function MyComponent(){
// let[number, setNumber] = useState(0);
const ref = useRef(0);
useEffect(()=>{
    console.log('Component Rendered')
})
function handleClick(){
   ref.current = ref.current++;
   console.log(ref.current);

}

return(
    <button onClick={handleClick}>
        Click Me
    </button>
)
}
export default MyComponent