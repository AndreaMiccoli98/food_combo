'use client'

import { useRouter } from "next/navigation";
import { DashboardItem } from "@/lib/interfaces";
import { dashboardItems } from "@/lib/utils/dashboardItems";
import { ManageCard } from "@/components";

const Dashboard = () => {

  const router = useRouter();
  const cardsData: DashboardItem[] = dashboardItems;

  const handleNavigation = (target: string) => {
    router.push(`/${target}`);
  }

  return (
    <div className="gap-20 p-20">
      <div className="w-full flex justify-between">
        {
          cardsData.map((card: DashboardItem) => (
            <ManageCard
              data={card}
              handleNavigation={handleNavigation} />
          ))
        }


      </div>
    </div>
  )
}

export default Dashboard;
