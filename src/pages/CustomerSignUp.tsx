import React from 'react'

export default function CustomerSignUp() {
    return (
        <div id="Content-Container" className="relative flex flex-col w-full max-w-[640px] min-h-screen mx-auto bg-[linear-gradient(179.86deg,_#000000_40.82%,_#0E0E24_99.88%)] overflow-x-hidden text-white">
            <div id="Background" className="absolute top-0 w-full h-[480px]">
                <div className="absolute w-full h-full top-0 bg-[linear-gradient(359.16deg,_#000000_6.6%,_rgba(14,14,36,0)_99.33%)]" />
                <img src="/assets/images/backgrounds/signup.png" className="w-full h-full object-cover" alt="background" />
            </div>
            <img src="/assets/images/logos/logo.svg" className="relative flex max-w-[188px] mx-auto mt-[60px]" alt="logo" />
            <form action="signin.html" className="relative flex flex-col gap-[30px] px-5 py-[60px] my-auto">
                <h1 className="font-bold text-[26px] leading-[39px]">Sign Up</h1>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-5">
                        <label className="relative flex w-[100px] h-[100px] shrink-0 rounded-full overflow-hidden bg-[#FFFFFF33] backdrop-blur-sm">
                            <p id="Text-Label" className="w-full h-full flex items-center justify-center text-center font-semibold">
                                Add <br />Photo
                            </p>
                            <img id="Avatar-Preview" src="" className="w-full h-full object-cover hidden" alt="avatar" />
                            <input type="file" className="absolute bottom-0 -left-3/4 -z-30 opacity-0" required />
                        </label>
                        <button type="button" className="rounded-full py-2 px-3 bg-[#FFFFFF33] backdrop-blur-sm font-bold text-sm">Delete</button>
                    </div>
                    <label className="flex flex-col gap-2">
                        <p>Complete Name</p>
                        <input type="text" name="" id="" className="appearance-none outline-none rounded-full py-3 px-[18px] bg-[#FFFFFF33] backdrop-blur-sm font-semibold placeholder:font-normal placeholder:text-white focus:ring-1 focus:ring-white transition-all duration-300" placeholder="What’s your name" />
                    </label>
                    <label className="flex flex-col gap-2">
                        <p>Email Address</p>
                        <input type="email" name="" id="" className="appearance-none outline-none rounded-full py-3 px-[18px] bg-[#FFFFFF33] backdrop-blur-sm font-semibold placeholder:font-normal placeholder:text-white focus:ring-1 focus:ring-white transition-all duration-300" placeholder="What’s your email" />
                    </label>
                    <label className="flex flex-col gap-2">
                        <p>Password</p>
                        <input type="password" name="" id="" className="appearance-none outline-none rounded-full py-3 px-[18px] bg-[#FFFFFF33] backdrop-blur-sm font-semibold placeholder:font-normal placeholder:text-white focus:ring-1 focus:ring-white transition-all duration-300" placeholder="Type your strong password" />
                    </label>
                </div>
                <div className="flex flex-col gap-3">
                    <button type="submit" className="w-full rounded-full py-3 px-[18px] bg-white text-center font-bold text-premiere-black">
                        Create New Account
                    </button>
                    <a href="signin.html" className="w-full rounded-full py-3 px-[18px] bg-white/10 text-center font-bold">
                        Sign In
                    </a>
                </div>
            </form>
        </div>
    )
}
