import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const closeMenu = () => {
      setIsOpen(false);
    };
  return (
    <nav className="shadow-md bg-zinc-900 border-b-[2px] border-b-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <NavLink to="/" onClick={closeMenu}>
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAK4AuQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYDBAcBAv/EAE8QAAEDAwEDBwULBQ4HAAAAAAEAAgMEBREGEiExBxMWQVGU0RQiVVZhFRdTcXKBkZKTodIyNnOysyMzNTdCUmN0daKxtMHwJUNEYoLC8f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDsiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIvl8scbmte8NLzhues9i+0HiIiAi9RB4iIgIiICIiAiIgItK6Xi2WhsbrpcKajEpIYZ5QzaI44ytDpnpf1htfemeKCcRQXTPS/rDa+9M8U6Z6X9YbX3pnignUUF0z0v6w2vvTPFOmel/WG196Z4oJ1FBdM9L+sNr70zxTpnpf1htfemeKCdRQXTPS/rDa+9M8VtW/UdkudSKa3XehqpyC4RQzte7A4nAKDDfKGolLp4cyjZwY8bwOsAcCPZj5n4DVXXa5prDJBDd3vdBK4ta8AufHjiT1loO48SO0nLW3tV/UWi7FqOdlRcaUipbu56F+w9w7HEcR8fDqwgn43sljbJG4PY8BzXNOQQeBCitSajtmm6Lym5z7JdnmoWb5JT2NH+vAKmTakq7FHU2PSrnX80kYbFI6PIoQM5bLICGvwMYG4jByd2/S0fojpJL0h1XcI7o6Q7oI5myNJB4Pc3dgfzG7vm3IJDTxvWvbjDd7oHUWn6aUSUtGxxHlL2nLXOP8oA788M7gOJXR18sa1jGsY0Na0YDWjAA7AtS53a3WmNkl0rqajZIdljp5AwOPYMoNxFBdM9L+sNr70zxTpnpf1htfemeKCdRQXTPS/rDa+9M8U6Z6X9YbX3pnignUUF0z0v6w2vvTPFOmel/WG196Z4oJ1FBdM9L+sNr70zxTpnpf1htfemeKCv3htPqrlEobaImVNDZYZJa7aaHRmR+5sZ7SMA/T2Ky9E9OegbZ3RngvvTWn6DTduFFbmOwTtyyyHL5n9bnHrP+ClUEP0T056BtndGeCdE9OegbZ3Rngt+uuNDb2sdX1lPStecMM8rWbR9mSsNNe7TVzNhpbpQzSu/JZHUMc4/EAUGt0T056BtndGeCdE9OegbZ3RngpKsq6ahp3VFbURU8LcbUkrw1ozuG8qP6Uaf9OW3vTPFB89E9OegbZ3RngnRPTnoG2d0Z4KUpamCsgZUUk0c8LxlkkTg5rviIWBl1tr6w0bLhSOqgcGATtL8/JzlBpdE9OegbZ3Rngs9DYbPb6gVFBaqKmnAIEkMDWOAPEZAWxX3CitsbZLhVwUsbnbLXTyBgJ44GfiWl0p096ctvemeKD61BqG16dpPKLtVNiBzsRje+Q9jW8T8fAdZVVoJL3r5onnE1n02/wDJijds1Fa32u/ksPs49RPFTN50zpu5XGLUl2DJRDA0B0sw5gsBJa5wO4jzj14OeBU9RVtJXwc9QVMNTDkt24ZA9uR1ZCDy3UFHbKSOjt1NFTU8Yw2OJuAP99qqN/0jW0NXJe9ETihuDvOno/8AkVXxt4B3+93FW2vuVDbY2SXGsp6VjzstdPKGBx7BlfNZdLfQQRz1tdTU8Mv73JLK1rX7s7iTv3b0FV0vyh0VyqTbL3EbVd2P5t0M25jn9gJ4HePNPbuJVruNroLmxjLlQ09W2M5Y2eIPDT2jKhdU6Y05f4o7heWsYIWh3lbJRHmPjhzuBbv6+Gd2MqQbqOw7mtvVt7APK2eKDH0T056BtndGeCdE9OegbZ3RngphpDmhzSC0jIIOQQtS4XW3WzY90q+lpNvOxz8rWbWOOMn2hBpdE9OegbZ3RngnRPTnoG2d0Z4KYByMhanurbvdAW/y+l8tJx5Nzzec4bX5Oc8N/wASDS6J6c9A2zujPBOienPQNs7ozwW77qW/3Q9z/Lqby0f9Pzrec4Z/Jznhv+JYKnUFlpKh9PVXeghmjOHxyVDGuafaCdyDD0T056BtndGeCdE9OegbZ3Rngtijvlor5xT0V0oqiYgkRxTtc4gcdwKkEBFirHTto53UjGvqBG4xNccBz8bgfZnCrmgKvU1Xb6p2rKbmZmzYh2mNY5zcb8gbsA8D/wDSFU5fHFtqtThxE0p3/JCq3KJo6j0lQWyutlXVOknJJ54tyxzQHBzS0DG//RWnl7Ada7S1xwDNKCf/ABCqGpbvqHWNVbLFWW+OmqGnZgi5t0ZcXAAOdtHhgZ+nig6ZyquL+Tmpe45c405J9vOMVY0fyZWe+6aobnV1lwjmqGuLmRPjDRh5buywnq7VaOVhnNcnlXHnOw6nbntxI1UjSur9XW+y0NDbbB5TQx5DJ/I5n7QLiSdppxxJ+hBc9YRO0dyZzUdoqJhzQbAyZ7hzgD5POOQBvw4jIXPegRdoCl1Fb31tTcpHh4pqeLaGzzmz5oaNrIxtZz2rr+uLG/UWma22QPayZ4a+IuOAXtcHAH2HGPnXMrPrDU+iKKmtt5sLjQU7ywPkjcx2CScCQZY47zj/AB60F1Zp4600XZotSvrqaqiAkkw0RyF4DmecHNOMg54Lm2i9H0GoNUXm01k9VHBQulEb4XND3bMuwM5aRw9i7rba6C52+mrqN+3T1EYkjJGDgjr9q5ZyVfxhao+XUf5hBOcrMrLTyfR22KR2JZIKVhJ3lrPO3/NH96juQqtLrfdbc8nahnbMGnqDhsn72fesXLE43K/6csLCTz0mXgf0j2xg/c5NNf8ABeWa8W8AMgrWvcwdpcGyjH98IM/L1/AVr/rbv2ZWpyw/mTpz5TP2JW3y9fwFa/6279mVqcsP5kad+Uz9iUFs1X/FdWf2Wz9Vq5hbdGUNZyc1WpHVNSysg5wiMFpjIa7HDGeHtXT9V/xXVn9ls/VauQU+p7xQ6IfZWUcbbZUuezyp8TsuJOXNa7OzlB1jkflkk0JSCR7nCOWVjMnOy0POB8QyqJy31nlWpqaiA2mUtIC4e15JP3Bq6LyX2yqtWjKKCtaGTSF8+yDnDXnLc+3GD86oNLRnVmt9Zzt89kdFUQxZ6n4Ecf6jkHT9FV5uekrRVvdtSPpWNkPa9o2XfeCuPa4uLrPyrT3JpI8kqIJXYG8tEbNofO3I+dXnkQuAqtIyU2c+SVLg35LwHj7y5c85Tonza+u4jGS1rHn5LYWkn5gCfmQWhjmu5enuYQ5pIIcOseShZOVnR1BS0Nx1PHUVRrJZ4tqJzm835xaw4Gznh7VWuTusfX8otqnlyZOaERJ69in2AfoaF0jli/MKs/TQftGoI3ks0dQU1FbNTMqKo1k0DtqJzm82MktOBs56u1dIVa5N/wAxbN+gP67lZEBFpWa7UN7t8dfbKhs9PJwcOIPWCOo+xbqDlXL/APwPa/0sv6gWnyif8L13pe7A4a6ODaP6OTzv7rwugay0hQ6vpaenuE9TC2BznNNOWgnaGDnIK+NW6Lt+qoaKOtnqoTRhzY3wOaDhwbnOQf5oQaXK/u0HXj+kh/atWDk5v1npNE2uCru1vgmYx4dHLVMa5v7o47wTkblZNR2On1DZZbVWSzMhkLC58RAd5rg4cQRxHYqb7zti9IXP68f4EFj1hqKS06TmvdlNNWbDmbLs85GWl4aTlp6s9qo+r9X0WoOS9pmq6MXWeWPbpInYc0tlyfNJJA2RnJ7fauj2mw0Vt0/HY8OqaJsbo3NqMHba4kkOwAOtViPkm0yytE58tfCDkUz5hsfETjaI+dBL8mzXM0LZg4EE0+0M9hcSPuKpHJV/GFqj5dR/mF1qNjI2NZG0MY0BrWtGAAOACruntG0FgvVwutJUVUk1cXmRkrmlrdp+2cYAPH2oObapp7pqflUq6WxTxw1dFGBFK+RzAwRgbR2mgkHaeRwWlWUF+0nrWxXDUlXHVzyztxMyd0v7mCGOBLmg7g/711aw6OoLJfq69Q1FTPV1u3t88WkN2n7Z2cAdYH0L61jpCg1dBTRV81TD5O5xY+nLQ7zgARvB7B9CCp8vTHe4NsIBIFYWk9hMbsf4FQfKlfLVcdH2CCguFPUTRhr5I43gujAi2TtD+Sc7sH2rrl0tVHd7W+3XOIVNPI0B4duJI4OyOBzvyFVrTyXadttwZWEVVU6J4fHHUSAsaRwOABnHtQber2Oj5Mq5jwWubbWtcD1ENC5xLSCfkTp58ZNLcnSfEC4s/wDYLst7tsV5tNXbal8jIqmMxvdGRtAHsyCFD02i7fT6Rm0yJ6l9HKS4yOLecBLg7duxuI7EGPSd2ZFybUFzkfkUtt89x7Ymlp+9hXKdEab1ddaKouWn7lFRNkl5uZzqmSJ0rmjP8lpyPPPz5XXaXR9HS6Ql0xHVVZo5A9pkJbzgD3FzhwxxJ6utbumLDS6atEdsopJZImPc/bmILiXHO/AA9nzIOb8jons+qb3YKzZbM2Pe1hy3aidskj2EPyPYsNbSRV/LhNR1ADoahkkUg7Wuo3A/cV0CHR1BBrCXU8VTVNq5c7cO03mzlgYd2M9QPHivOhlB0xGqPKKrywEnmst5v975vhjPA9vFByHkyp5aTlFoaWoxz0Es8UmP5zWPafvBXTeWL8wqz9NB+0at6DQ9tg1c/Usc9UKp73SGHLeby5myd2M9ZPHiVJansNNqSzyWyslmihkex5dCQHZa4OHEEcQg0OTf8xbN+gP67lZFo2O1w2W0UtspnyPhpmbDXSEFxGSd+AO1byCh8zHpPlGpmUuIrZqCN/OQjcyOoYM7Q6hkH7z7FeOfg+Gj+sFG6g03adRshZeKXyhsJJYOcc3GcZ4EZ4BQvvX6N9DN+3k/EgtnlEHw0f1wnPwfDR/WCqfvX6N9DN+3k/EnvX6N9DN+3k/EgtnlEHw0f1wnPwfDR/WCqfvX6N9DN+3k/EnvX6N9DN+3k/EgtnPwfDR/XCh9ZXSotWlq6426SPn4Q3m3OAc3Je0Hd85UX71+jfQzft5PxL3U+nqe38ntdZ7DQyc3gGOni2pHEmQOOOJ7UHxX1mprfHbaE3a31NbdK3mIqoUWyyBgjc8+YH+cfN7VCv1tf62z22egFBTVLrZU19SZInSNk5h+xsNGRs7XHO/Cmr/Z4rEywT2KzyOordcHTz01EzaeGuje0ua3O/eQqoLHe7XY7WH2irnklstbROip2h7oZZpNtm3v3DB3nqQSd71ffoamrrKGakjoqOnt876WSDbMnlDtkgPyMYVp1jcq63zWinoKqCjbW1hglqpoecEQ2HOG4kDeQBvVFv8Aa7qyW4WuK1V08lbSWqGOaGEuha6F4c/afwA9qtnKJROuMtspqukr6qzOfKa2KiYXOLtn9zJA34ByeztQSehrpVXrTdLXV7o3zPklaZI2bLZGtkc1rgM9YAKqNn1XqF74ZK2qpJoKyir5omMpth0LoDgZOcOz8SluT+6XR9bV2m7xTRRUsMQoHTUZgM0YLg5xGMZ/IyPnG5VqyUN0m8kp3We4w+QW+5skkmpyxr3TOywMz+USgzQ601FDZq2eqqqKeY2eluUD46fZ5oyyBpY4ZIdgde5b1dri40+qq2ztdCBHdaGCLMYyYZcCQfHkjf7VAUmmq2g01e6aCz1DZa6zW6UBtO7a54HEzOH5WRtFq2b1pqvm1v7rxUFS4M1BS5cInYMOxES8f9rS05PAZQb0Wu7w+O9TRNhkZZYquSoDo8BzhK5kDPoa5xxxVx0vNfXx1LL8aWZrSx1NWUzQxszHNyfN2jgtORndlUSx2u8WevutXTWiaqN0bXtfTVEREbnslLotrI3NexzgM7j86svJ/b3Qe7LorVUWu11MsZpqKduwWnm8SENycAu+lBbvKIPho/rhOfg+Gj+sFUhyXaNAAFmbu/p5PxL33r9G+hm/byfiQWzyiD4aP64Tn4Pho/rBVP3r9G+hm/byfiT3r9G+hm/byfiQWzyiD4aP64TyiH4aP64VT96/RvoZv28n4k96/RvoZv28n4kFwREQEREBERAREQerxEQEREHq8REBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf//Z"
                alt="Logo"
                className="h-12 w-32"
              />
            </NavLink>
          </div>
          <div className="hidden md:flex gap-3 items-center space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
               isActive ? "text-green-500 font-bold text-xl" : "font-bold text-xl text-white hover:text-green-500"
               }
            >
              Home
            </NavLink>
            <NavLink
              to="/booking-form"
              className={({ isActive }) =>
               isActive ? "text-green-500 font-bold text-xl" : "font-bold text-xl text-white hover:text-green-500"
               }
            >
              Book Table
            </NavLink>
            <NavLink
              to="/all_bookings"
               className={({ isActive }) =>
               isActive ? "text-green-500 font-bold text-xl" : "font-bold text-xl text-white hover:text-green-500"
               }
            >
              All Bookings
            </NavLink>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-white hover:text-gray-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mr-4`}>
        <div className="px-2 pt-2 h-[100vh] text-center mt-12 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium"
            onClick={closeMenu} // Close menu when clicked
          >
            Home
          </Link>
          <Link
            to="/booking-form"
            className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium"
            onClick={closeMenu} // Close menu when clicked
          >
            Book Table
          </Link>
          <Link
            to="/all_bookings"
            className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium"
            onClick={closeMenu} // Close menu when clicked
          >
            All Bookings
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header