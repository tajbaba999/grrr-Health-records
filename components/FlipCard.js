const FlipCard = (props) => {
    return (
        <div class="flex min-h-full items-center justify-center bg-white mb-5">
            <div class="group h-60 w-60 [perspective:1000px]">
                <div class="relative h-full w-full rounded-xl shadow-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div class="absolute inset-0 flex justify-center">
                        <div>
                            <img class="" width="150" height="100" src={props.imgSrc} alt="" />
                            <div className="text-2xl mt-5 font-serif">{props.title}</div>
                        </div>
                        
                    </div>
                    <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div class="flex min-h-full flex-col items-center justify-center">
                            <h1 class="text-3xl font-bold">{props.title}</h1>
                            <p class="text-lg">Decentralised</p>
                            <p class="text-base">Decentralized system in which power or authority is distributed among multiple individuals or entities, rather than being centralized.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FlipCard