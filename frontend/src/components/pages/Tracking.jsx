import FAQSection from '@components/sections/about/FAQSection'
import MoreCountsSection from '@components/sections/services/MoreCountsSection'
import TrackingHero from '@components/sections/tracking/TrackingHero'
import TrackingSection from '@components/sections/tracking/TrackingSection'
import React from 'react'

const Tracking = () => {
  return (
    <div className='min-h-screen'>
        <TrackingHero/>
        <TrackingSection/>
        <FAQSection/>
        <MoreCountsSection/>
    </div>
  )
}

export default Tracking