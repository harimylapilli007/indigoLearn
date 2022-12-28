import './App.css'

import Header from './components/Header'

import BecomeACCA from './components/BecomeACCA'

import WhyChooseUs from './components/WhyChooseUs'
import AccaEligibility from './components/AccaEligibility'
import WhatWillYouLearn from './components/WhatWillYouLearn'
import Placements from './components/Placements'
import KickOffYourACCA from './components/KickOffYourACCA'

const App = () => (
  <div className="app">
    <Header />
    <BecomeACCA />
    <WhyChooseUs />
    <AccaEligibility />
    <WhatWillYouLearn />
    <Placements />
    <KickOffYourACCA />
  </div>
)

export default App
