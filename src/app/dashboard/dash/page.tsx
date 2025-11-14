
import React from 'react'
import { WorkflowIntelligenceSection } from '@/components/board/WorkflowIntelligenceSection'
import { ActiveOffersSection } from '@/components/board/ActiveOfferSection'
import { DashboardSummarySection } from '@/components/board/DashboardSummarySection'
import { KPIChartSection } from '@/components/board/KPIChartSection'
import { MetricCardsSection } from '@/components/board/MetricCardsSection'

export default function dash() {
  return (
    <div className="w-full flex flex-col pt-6">


      <div className="flex flex-col lg:flex-row gap-6 px-6 lg:px-12 pb-12">
        <div className="flex flex-col flex-1 gap-6">
          <div className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <WorkflowIntelligenceSection />
          </div>

          <div className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <ActiveOffersSection />
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-auto shrink-0 gap-6">
          <div className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <MetricCardsSection />
          </div>

          <div className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <DashboardSummarySection />
          </div>

          <div className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
            <KPIChartSection />
          </div>
        </div>
      </div>
    </div>
  )
}
