import { memo } from 'react'
import { Outlet } from 'react-router'
import { Bounce, ToastContainer } from 'react-toastify'

const CmsApp = memo(() => {
  return (
    <>
      <Outlet />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  )
})

export default CmsApp
