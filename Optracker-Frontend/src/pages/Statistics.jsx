import React from 'react'
import Navigation from '@/components/ui/navigation'
import DashboardSummary from '@/components/StatisticsPage/DashboardSummary'
import OperationsChart from '@/components/StatisticsPage/OperationsChart'

export default function Statistics() {
  return (
    <div>
      <div className='mb-0'>
        <Navigation />
      </div>
      <main className='pt-28 space-y-6'>
        <div className='top-0'>
          <DashboardSummary />
          <OperationsChart />
        </div>
      </main>
    </div>
  )
}
