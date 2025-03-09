const PersonalInformation: React.FC = () => {
  return (
    <>
      <div className=" w-70  h-40   md:w-sm md:h-54  border border-gray-D9 rounded-2xl p-3 lg:p-6  ">
        <div className=" grid grid-cols-12  gap-x-6 lg:gap-x-9  w-full h-full ">
          {/* content right */}
          <div className="  col-span-3 ">
            <div className=" w-15 h-15 lg:w-22 lg:h-22  rounded-full ">
              <img src="../../../public/img/Ellipse 6.png" alt="img personal" />
            </div>
          </div>
          {/* content left */}
          <div className="col-span-9  grid-flow-col   ">
            <div className=" flex items-center gap-1.5 mb-2">
              <img
                className=" w-4 h-4 lg:w-9 lg:h-9 "
                src="../../../public/img/Real Estate Logo 1.png"
                alt="logo"
              />
              <span className=" font-shabnamBold text-base text-gray-1000">
                {' '}
                املاک ولیعصز
              </span>
            </div>
            <div className=" flex flex-col  text-xs lg:text-sm text-Gray-35  gap-y-1">
              <h6 className=" font-shabnamBold text-base lg:text-2xl  text-gray-21 ">
                علی پرتو
              </h6>
              <span>امتیاز 4 از 5</span>
              <span>آگهی 500 فعال</span>
            </div>
            <div className="  cursor-pointer  mt-2 w-40.5 h-7  lg:w-55.5 lg:h-10 center  text-white bg-primary  text-xs lg:text-sm font-shabnamMedium rounded-sm  lg:rounded-lg ">
              اطلاعات تماس
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PersonalInformation
