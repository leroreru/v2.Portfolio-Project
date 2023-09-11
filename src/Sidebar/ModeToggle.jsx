import React, { useEffect, useState } from 'react'

const ModeToggle = () => {

    const [isPressed, setIsPressed] = useState(false)
    const [theme, setTheme] = useState("light")

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme])

    const handleThemeToggle = () => {
        setIsPressed(!isPressed)
        setTheme(theme === "dark" ? "light" : "dark")
    };
    return (
        <>
            <button onClick={handleThemeToggle} className={`px-3 mt-1 py-1 w-12 transition duration-300 rounded-full shadow-sm  ${isPressed ? 'bg-white' : 'bg-black'}`}>
                {isPressed ?
                    <div>
                        <svg
                            className="fill-black w-5 h-5"
                            viewBox="0 0 16 16"
                        >
                            <path d="M7 8a3.5 3.5 0 013.5 3.555.5.5 0 00.624.492A1.503 1.503 0 0113 13.5a1.5 1.5 0 01-1.5 1.5H3a2 2 0 11.1-3.998.5.5 0 00.51-.375A3.502 3.502 0 017 8zm4.473 3a4.5 4.5 0 00-8.72-.99A3 3 0 003 16h8.5a2.5 2.5 0 000-5h-.027z" />
                            <path d="M10.5 1.5a.5.5 0 00-1 0v1a.5.5 0 001 0v-1zm3.743 1.964a.5.5 0 10-.707-.707l-.708.707a.5.5 0 00.708.708l.707-.708zm-7.779-.707a.5.5 0 00-.707.707l.707.708a.5.5 0 10.708-.708l-.708-.707zm1.734 3.374a2 2 0 113.296 2.198c.199.281.372.582.516.898a3 3 0 10-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 00.039-.742l-.707-.707a.5.5 0 00-.854.377zM14.5 6.5a.5.5 0 000 1h1a.5.5 0 000-1h-1z" />
                        </svg>


                    </div>
                    :
                    <div >

                        <svg
                            viewBox="0 0 24 24"
                            className="fill-white w-5 h-5"
                        >
                            <path d="M17.75 4.09l-2.53 1.94.91 3.06-2.63-1.81-2.63 1.81.91-3.06-2.53-1.94L12.44 4l1.06-3 1.06 3 3.19.09m3.5 6.91l-1.64 1.25.59 1.98-1.7-1.17-1.7 1.17.59-1.98L15.75 11l2.06-.05L18.5 9l.69 1.95 2.06.05m-2.28 4.95c.83-.08 1.72 1.1 1.19 1.85-.32.45-.66.87-1.08 1.27C15.17 23 8.84 23 4.94 19.07c-3.91-3.9-3.91-10.24 0-14.14.4-.4.82-.76 1.27-1.08.75-.53 1.93.36 1.85 1.19-.27 2.86.69 5.83 2.89 8.02a9.96 9.96 0 008.02 2.89m-1.64 2.02a12.08 12.08 0 01-7.8-3.47c-2.17-2.19-3.33-5-3.49-7.82-2.81 3.14-2.7 7.96.31 10.98 3.02 3.01 7.84 3.12 10.98.31z" />
                        </svg>



                    </div>

                }
            </button>
        </>
    )
}

export default ModeToggle