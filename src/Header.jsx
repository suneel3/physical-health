


import React from 'react'

function Header() {
  return (
    <div >
      <div className="sm:flex block gap-3 items-center p-2">
        <h2 className="sm:w-[45%] w-full sm:text-3xl text-2xl font-semibold mb-4 ">
          Where Fitness Meets Fun and Results Are Achieved
        </h2>
        <p className="sm:w-[55%] w-full">
          Include an inspiring image or video that showcases your gym's
          energetic atmosphere, trainers, or members working out.
        </p>
      </div>
      <div className="flex flex-wrap  sm:mt-16 mt-8 ">
        <div className="w-1/2 flex flex-wrap p-1">
          <div className="p-2 w-1/2 ">
            <img className="w-full h-full object-cover block object-center"
              src="https://www.pixelstalk.net/wp-content/uploads/images6/Fitness-Desktop-Wallpaper.jpg"
              alt=""
            />
          </div>
          <div className="p-2 w-1/2 ">
            <img className="w-full h-full object-cover block object-center"
              src="https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div className="w-full p-2">
            <img className="w-full h-full object-cover block object-center"
             src="https://wallpaperaccess.com/full/1087621.jpg" alt="" />
          </div>
        </div>

        <div className="w-1/2 flex flex-wrap p-1">
        <div className="w-full p-2">
            <img className="w-full h-full object-cover object-center block"
              src="https://i.ytimg.com/vi/gey73xiS8F4/maxresdefault.jpg"
              alt=""
            />
          </div>
          <div className="w-1/2 p-2">
            <img  className="object-cover w-full h-full object-center block"
            src="https://wallpapercave.com/wp/wp6331008.jpg" alt="" />
          </div>
          <div className="w-1/2 p-2">
            <img className="object-cover w--full h-full object-center block"
              src="https://img.freepik.com/premium-photo/woman-training-gym_946657-755.jpg"
              alt=""
            />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Header