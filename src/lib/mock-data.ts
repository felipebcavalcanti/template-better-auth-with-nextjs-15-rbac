// Mock data centralizado para simular backend

export const metricCardsData = [
  {
    title: "ARPU",
    value: "R$ 320,50",
    change: "+12% no período",
    changeColor: "text-[#00db03]",
    hasUpArrow: true,
  },
  {
    title: "Conversão IA",
    value: "68,5%",
    change: "+8,2% no período",
    changeColor: "text-[#00db03]",
    hasUpArrow: false,
  },
  {
    title: "Retenção",
    value: "85%",
    change: "+2,5% no período",
    changeColor: "text-[#00db03]",
    hasUpArrow: false,
  },
  {
    title: "Taxa de Churn",
    value: "3,2%",
    change: "-1,5% no período",
    changeColor: "text-[#db3300]",
    hasDownArrow: true,
  },
];

export const segmentBadges = [
  {
    color: "bg-[#006eff]",
    shadow: "shadow-[0px_0px_4px_#006fff]",
    label: "Premium",
  },
  {
    color: "bg-[#52a8fd]",
    shadow: "shadow-[0px_0px_4px_#53a9fd]",
    label: "Alta Renda",
  },
  {
    color: "bg-[#00449d]",
    shadow: "shadow-[0px_0px_4px_#00449e]",
    label: "Familiar",
  },
  {
    color: "bg-[#75deff]",
    shadow: "shadow-[0px_0px_4px_#75dfff]",
    label: "Jovem",
  },
  {
    color: "bg-[#0781a6]",
    shadow: "shadow-[0px_0px_4px_#0882a7]",
    label: "Profissional",
  },
];

export const kpiData = {
  retencao: [75, 78, 82, 85, 88, 90, 92, 89, 91, 93, 95, 94],
  conversao: [45, 48, 52, 55, 58, 62, 65, 68, 70, 72, 75, 78],
  churn: [8, 7.5, 7, 6.5, 6, 5.5, 5, 4.5, 4, 3.5, 3.2, 3],
  arpu: [250, 260, 270, 280, 285, 290, 295, 300, 305, 310, 315, 320.5],
};

export const offersData = [
  {
    name: "Seguro Auto Plus",
    conversion: "78%",
    revenue: "R$ 125.0k",
    feedback: "4.8/5",
  },
  {
    name: "Pacote Familiar Total",
    conversion: "65%",
    revenue: "R$ 210.0k",
    feedback: "4.6/5",
  },
  {
    name: "Vida Empresarial",
    conversion: "45%",
    revenue: "R$ 180.0k",
    feedback: "4.2/5",
  },
  {
    name: "Residencial Premium",
    conversion: "72%",
    revenue: "R$ 95.0k",
    feedback: "4.7/5",
  },
  {
    name: "Vida Empresarial",
    conversion: "45%",
    revenue: "R$ 180.0k",
    feedback: "4.2/5",
  },
  {
    name: "Pacote Familiar Total",
    conversion: "65%",
    revenue: "R$ 210.0k",
    feedback: "4.6/5",
  },
  {
    name: "Pacote Familiar Total",
    conversion: "65%",
    revenue: "R$ 210.0k",
    feedback: "4.6/5",
  },
];

export const workflowsData = [
  {
    title: "Jornada Novo Cliente",
    conversion: "35%",
    roi: "325%",
    icon1: "https://c.animaapp.com/mggl9kj3au5esw/img/icon-7.svg",
    icon2: "https://c.animaapp.com/mggl9kj3au5esw/img/icon-2.svg",
  },
  {
    title: "Recuperação de Churn",
    conversion: "28%",
    roi: "280%",
    icon1: "https://c.animaapp.com/mggl9kj3au5esw/img/icon.svg",
    icon2: "https://c.animaapp.com/mggl9kj3au5esw/img/icon-1.svg",
  },
];
