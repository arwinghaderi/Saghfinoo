import Home from './pages/Home/home'
import Rent from './pages/Rent/Rent'
import Shopping from './pages/Shopping/shopping'
import DetailsProduct from './pages/detailsProduct/detailsProduct'
import StepOne from './pages/auth/StepOne'
import StepTwo from './pages/auth/StepTwo'
import StepThree from './pages/auth/StepThree'
import StepOneAdRE from './pages/registerAnAd/StepOneAdRE'
import StepTwoAdRE from './pages/registerAnAd/StepTwo'
import StepThreeAdRE from './pages/registerAnAd/StepThree'
import StepFourAdRE from './pages/registerAnAd/StepFour'
import StepFiveAdRE from './pages/registerAnAd/StepFive'
import StepSixAdRE from './pages/registerAnAd/StepSix'
import RegisterDoneAdRE from './pages/registerAnAd/RegisterDone'
import RegisterErrorAdRE from './pages/registerAnAd/RegisterError'
import Realestates from './pages/Realestates/Realestates'
import RealEstateDetails from './pages/RealEstateDetails/RealEstateDetails'
import AboutUs from './pages/AboutUs/AboutUs'
import ContactUs from './pages/ContactUs/ContactUs'
import NotFound from './pages/404/NotFound'
import FAQ from './pages/FAQ/FAQ'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
import EditInformation from './pages/cms/EditInformation'
import MyAds from './pages/cms/MyAds'
import SavedAd from './pages/cms/SavedAd'
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions'

const routes = [
  // pages
  { path: '/', element: <Home /> },
  { path: '/Rent/Rent', element: <Rent /> },
  { path: '/Shopping/shopping', element: <Shopping /> },
  { path: '/AboutUs/AboutUs', element: <AboutUs /> },
  { path: '/ContactUs/ContactUs', element: <ContactUs /> },
  { path: '/FAQ/FAQ', element: <FAQ /> },
  { path: '/PrivacyPolicy/PrivacyPolicy', element: <PrivacyPolicy /> },
  { path: '/auth/StepOne', element: <StepOne /> },
  { path: '/auth/StepTwo', element: <StepTwo /> },
  { path: '/auth/StepThree', element: <StepThree /> },
  {
    path: '/TermsAndConditions/TermsAndConditions',
    element: <TermsAndConditions />,
  },
  // RegisterAnAd
  { path: '/registerAnAd/StepOneAdRE', element: <StepOneAdRE /> },
  { path: '/registerAnAd/StepTwoAdRE', element: <StepTwoAdRE /> },
  { path: '/registerAnAd/StepThreeAdRE', element: <StepThreeAdRE /> },
  { path: '/registerAnAd/StepFourAdRE', element: <StepFourAdRE /> },
  { path: '/registerAnAd/StepFiveAdRE', element: <StepFiveAdRE /> },
  { path: '/registerAnAd/StepSixAdRE', element: <StepSixAdRE /> },
  { path: '/registerAnAd/RegisterDoneAdRE', element: <RegisterDoneAdRE /> },
  { path: '/registerAnAd/RegisterErrorAdRE', element: <RegisterErrorAdRE /> },
  {
    path: '/RealEstateDetails/RealEstateDetails/:Estate',
    element: <RealEstateDetails />,
  },
  {
    path: '/detailsProduct/detailsProduct/:page',
    element: <DetailsProduct />,
  },
  {
    path: '/Realestates/Realestates',
    element: <Realestates />,
  },
  // cms
  { path: '/cms/EditInformation', element: <EditInformation /> },
  { path: '/cms/MyAds', element: <MyAds /> },
  { path: '/cms/SavedAd', element: <SavedAd /> },
  { path: '*', element: <NotFound /> },
]

export default routes
