import ReturnButton from '@/components/return-button'
import SignOutButton from '@/components/sign-out-button'
import DashboardCards from '@/components/dashboard/dashboard-cards'
import { Separator } from '@/components/ui/separator'

export default function Dashboard() {
  return (
    <div className="min-h-screen w-full p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Bem-vindo ao seu painel de controle
            </p>
          </div>
          <div className="flex gap-2">
            <ReturnButton href="/" label="Home" />
            <SignOutButton />
          </div>
        </div>

        <Separator />

        <DashboardCards />
      </div>
    </div>
  )
}
