import { useEffect, useState } from "react"

export const LoadingScreen = ({onComplete}) => {
    const [text, setText] = useState("");
    const fullText = "<Leon Cenwijaya />";
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if(index > fullText.length){
                clearInterval(interval);

                setTimeout(() => {
                    onComplete();
                }, 1000)
            }
        }, 100)
        return () => clearInterval(interval);
    }, [onComplete])
    return(
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col justify-center items-center">
            <div className="text-4xl font-bold font-mono mb-4">
                {text} <span className="animate-blink ml-1"> |</span>
            </div>
            <div className="w-[200px] h-[2px] bg-gray-800 relative rounded overflow-hidden">
                <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px)#3b82f6] animate-loading-bar">

                </div>
            </div>
        </div>
    )
}