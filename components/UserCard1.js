const UserCard1 = () => {
    return (
        <div className="card w-80 mx-auto bg-white rounded shadow hover:shadow-xl">
            <img className="w-32 mx-auto rounded-full mt-20 border-8 border-white" src="https://avatars.githubusercontent.com/u/67946056?v=4" alt="Profile Pic" />
            <div class="text-center mt-2 text-3xl font-medium">Sanjay</div>
            <div class="text-center mt-2 font-light text-sm">@sanjay</div>
            <div class="text-center font-normal text-lg">Kerala</div>
            <div class="px-6 text-center mt-2 font-light text-sm">
                <p>
                    Backend Player on web2 and BlockChain
                </p>
            </div>
            <hr class="mt-8" />
            <div class="flex p-4">
                <div class="w-1/2 text-center">
                    <span class="font-bold">1.8 k</span> Followers
                </div>
                <div class="w-0 border border-gray-300">

                </div>
                <div class="w-1/2 text-center">
                    <span class="font-bold">2.0 k</span> Following
                </div>
            </div>
        </div>
    )
}

export default UserCard1