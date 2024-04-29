import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  // Creating Variables and hooks to add functionalities.

  const [length, setLength] = useState(8)
  const [numberUse, setNumberUse] = useState(false)
  const [charUse, setCharUse] = useState(false)
  const [inppassword, setInppassword] = useState("")

  // useRef hook 
  const passwordRef = useRef(null) // create a reference to show the user what is selected in UI.

  const passwordGenerator = useCallback(() => {

    let password = ""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberUse) string += "0123456789"
    if (charUse) string += "~!@#$%^&*(){}_-<>,./?"

    for (let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * string.length + 1)

      password += string.charAt(char)
    }

      setInppassword(password)


  }, [length, numberUse, charUse, setInppassword]) // Use to optimize . Save every dependencies in cache.


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select() // Use to show what is selected in UI to the user . It is done by creating a reference.
    window.navigator.clipboard.writeText(inppassword) // Used to copy the password from input to clipboard
  }, [inppassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberUse, charUse, passwordGenerator])  // Run only when the values of deps change

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className=" text-center text-white my-3">Password Generator</h1>
        <div className="flex shadow rounded-xl overflow-hidden mb-4 my-4">
          <input
          type="text"
          value={inppassword}
          className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 hover:bg-blue-500 text-white px-3 py-0.5 shrink-0 active:bg-blue-800'
          >copy</button>
        </div>
        <div className="flex text-sm gap-x-2">


          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) =>{setLength(e.target.value)} }
            />
            <label>Length : {length}</label>
          </div>


          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberUse}
              id="numberInput"
              className='cursor-pointer'
              onChange={() => {
                setNumberUse((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers </label>
          </div>


          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charUse}
              id="charInput"
              className='cursor-pointer'
              onChange={() => {
                setCharUse((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>


        </div>
      </div>
    
    
    </>
  )
}

export default App
