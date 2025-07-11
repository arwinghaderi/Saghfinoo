import Sorting from '../../../components/shared/UIComponents/FormElements/sorting/sorting'
import ProductBox from '../../../components/shared/Cards/productBox/productBox'
import SelectBox from '../../../components/shared/UIComponents/FormElements/selectBox/selectBox'
import { useCallback, useState } from 'react'
import { TbFilterSearch } from 'react-icons/tb'

import BoxEstate from '../../../components/shared/Cards/estateBox/estateBox'
import SectionHeader from '../../../components/shared/UIComponents/sectionHeader/sectionHeader'
import RealEstateModal from '../../../components/shared/Modals/RealEstateInfoModal/RealEstateModal'
import Pagination from '../../../components/shared/UIComponents/DataDisplay/pagination/pagination'
import FilteringModal from '../../../components/shared/Modals/filteringModal/filteringModal'
import { useMediaQuery } from 'react-responsive'

import { FilteringModalMobail } from '../../../components/shared/Modals/filteringModal/filteringModal'

const Rent: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('نوع ملک')
  const [isopenModalFiltering, setOpenModalFiltering] = useState<boolean>(false)
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  const handleSelect = (option: string) => {
    setSelectedOption(option)
  }

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

  const openModal = useCallback(() => {
    setIsModalVisible(true)
  }, [setIsModalVisible])

  const closeModal = useCallback(() => {
    setIsModalVisible(false)
  }, [setIsModalVisible])

  const openModalFiltering = useCallback(() => {
    setOpenModalFiltering(true)
  }, [setOpenModalFiltering])

  const closeModalFiltering = useCallback(() => {
    setOpenModalFiltering(false)
  }, [setOpenModalFiltering])

  document.title = 'سقفینو - خرید'

  return (
    <>
      <div>
        <Sorting openModalFiltering={openModalFiltering} />
        <div className="container">
          {/* sorting */}
          <div className="   md:flex  gap-2 my-6 items-center justify-between">
            <div className=" flex flex-col gap-y-3">
              <h3 className=" text-2xl font-shabnamBold">املاک خرید</h3>
              <span className="  sm:h-9 font-shabnam text-primary">
                ۴۷.۵۰۷ مورد یافت شد
              </span>
            </div>
            <div className=" flex items-center justify-between ">
              <SelectBox
                selectedOption={selectedOption}
                onSelect={handleSelect}
                responsiveWidth="w-28  lg:w-48"
                responsiveHeight="h-8  lg:h-12"
              >
                <li>جدیدترین</li>
                <li>قدیمی‌ترین</li>
              </SelectBox>
              <div
                onClick={openModalFiltering}
                className="  flex md:hidden  items-center gap-1 cursor-pointer text-gray-1000 border-blue-400 shadow-blue-400/50 shadow-lg p-3 border w-41.5  md:h-12 h-8 rounded-lg"
              >
                <TbFilterSearch className=" text-xl md:text-2xl" />
                <span>فیلتر های بیشتر</span>
              </div>
            </div>
          </div>
          {/* products */}
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-4">
            <ProductBox isSaved={false}></ProductBox>
            <ProductBox isSaved={false}></ProductBox>
            <ProductBox isSaved={false}></ProductBox>
            <ProductBox isSaved={false}></ProductBox>
            <ProductBox isSaved={false}></ProductBox>
            <ProductBox isSaved={false}></ProductBox>
            <ProductBox isSaved={false}></ProductBox>
            <ProductBox isSaved={false}></ProductBox>
          </div>
        </div>

        <div className="mt-8">
          <SectionHeader
            title={'املاک مربوط'}
            dec={''}
            center={false}
            btnTitle={''}
            btnHref={''}
          />
          <div className="container">
            <div className="grid grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-4 mt-4">
              <BoxEstate openModal={openModal} />
              <BoxEstate openModal={openModal} />
              <BoxEstate openModal={openModal} />
              <BoxEstate openModal={openModal} />
            </div>
          </div>

          <div className="container mt-8">
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-4">
              <ProductBox isSaved={false}></ProductBox>
              <ProductBox isSaved={false}></ProductBox>
              <ProductBox isSaved={false}></ProductBox>
              <ProductBox isSaved={false}></ProductBox>
              <ProductBox isSaved={false}></ProductBox>
              <ProductBox isSaved={false}></ProductBox>
              <ProductBox isSaved={false}></ProductBox>
              <ProductBox isSaved={false}></ProductBox>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-25.5">
        <div className=" flex items-center justify-center gap-3 ">
          <Pagination />
        </div>
      </div>
      {isModalVisible && (
        <RealEstateModal
          isModalVisible={isModalVisible}
          closeModal={closeModal}
        />
      )}
      {isopenModalFiltering && (
        <>
          {isMobile ? (
            <FilteringModalMobail closeModalFiltering={closeModalFiltering} />
          ) : (
            <FilteringModal closeModalFiltering={closeModalFiltering} />
          )}
        </>
      )}
    </>
  )
}

export default Rent
