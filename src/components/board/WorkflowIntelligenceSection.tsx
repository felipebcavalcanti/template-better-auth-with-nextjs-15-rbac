"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { Card, CardContent } from "@/components/ui/card";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";
import { useKPI } from "@/hooks/use-board-data";

//Como o ReactApexChart não funciona no SSR, precisamos importar ele dinamicamente com o next/dynamic e desabilitar o SSR.
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});


const kpiButtons = [
  { label: "Retenção", value: "retencao" },
  { label: "Conversão", value: "conversao" },
  { label: "Churn", value: "churn" },
  { label: "ARPU", value: "arpu" },
];

export const WorkflowIntelligenceSection = ()  => {
  const [selectedKPI, setSelectedKPI] = useState<string>("arpu");
  const { data: kpiDataResponse, isLoading, error } = useKPI(selectedKPI);

  const chartOptions: ApexOptions = {
    chart: {
      type: "area",
      height: 300,
      toolbar: {
        show: false,
      },
      background: "transparent",
      animations: {
        enabled: true,
        speed: 800,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
      colors: ["#2DB3C8"],
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.2,
        stops: [0, 90, 100],
        colorStops: [
          {
            offset: 0,
            color: "#2DB3C8",
            opacity: 0.7,
          },
          {
            offset: 50,
            color: "#2DB3C8",
            opacity: 0.4,
          },
          {
            offset: 100,
            color: "#2DB3C8",
            opacity: 0.1,
          },
        ],
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez",
      ],
      labels: {
        style: {
          colors: "#FFFFFF",
          fontSize: "12px",
          fontFamily: "Montserrat, Helvetica",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#FFFFFF",
          fontSize: "12px",
          fontFamily: "Montserrat, Helvetica",
        },
        formatter: (value) => {
          if (selectedKPI === "arpu") {
            return `R$ ${value.toFixed(0)}`;
          } else if (selectedKPI === "churn") {
            return `${value.toFixed(1)}%`;
          } else {
            return `${value.toFixed(0)}%`;
          }
        },
      },
    },
    grid: {
      borderColor: "#FFFFFF1A",
      strokeDashArray: 4,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 10,
      },
    },
    tooltip: {
      enabled: true,
      theme: "dark",
      style: {
        fontSize: "12px",
        fontFamily: "Montserrat, Helvetica",
      },
      y: {
        formatter: (value) => {
          if (selectedKPI === "arpu") {
            return `R$ ${value.toFixed(2)}`;
          } else if (selectedKPI === "churn") {
            return `${value.toFixed(1)}%`;
          } else {
            return `${value.toFixed(0)}%`;
          }
        },
      },
      marker: {
        show: true,
      },
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        const value = series[seriesIndex][dataPointIndex];
        let formattedValue = "";
        if (selectedKPI === "arpu") {
          formattedValue = `R$ ${value.toFixed(2)}`;
        } else if (selectedKPI === "churn") {
          formattedValue = `${value.toFixed(1)}%`;
        } else {
          formattedValue = `${value.toFixed(0)}%`;
        }
        return `
          <div style="background: #1a1f37; padding: 8px 12px; border-radius: 8px; border: 1px solid #2DB3C8;">
            <div style="color: #FFFFFF; font-weight: 600; font-size: 14px;">${formattedValue}</div>
          </div>
        `;
      },
    },
    markers: {
      size: 0,
      hover: {
        size: 6,
        sizeOffset: 3,
      },
    },
  };

  if (isLoading) {
    return (
      <Card className="flex flex-col items-start gap-6 p-6 lg:p-8 relative bg-[#252b48] rounded-3xl overflow-hidden border border-solid border-[#FFFFFF0D] w-full">
        <div className="montserrat-regular-14 text-slate-400">
          Carregando dados de KPI...
        </div>
      </Card>
    );
  }

  if (error || !kpiDataResponse) {
    return (
      <Card className="flex flex-col items-start gap-6 p-6 lg:p-8 relative bg-[#252b48] rounded-3xl overflow-hidden border border-solid border-[#FFFFFF0D] w-full">
        <div className="montserrat-regular-14 text-red-400">
          Erro ao carregar dados de KPI
        </div>
      </Card>
    );
  }

  const series = [
    {
      name:
        kpiButtons.find((btn) => btn.value === selectedKPI)?.label || "ARPU",
      data: kpiDataResponse.values,
    },
  ];

  return (
    <Card className="flex flex-col items-start gap-6 p-6 lg:p-8 relative bg-[#252b48] rounded-3xl overflow-hidden border border-solid border-[#FFFFFF0D] w-full">
      <CardContent className="p-0 w-full">
        <div className="flex items-center justify-between relative w-full flex-[0_0_auto]">
          <h2 className="montserrat-bold-20 text-white">
            Evolução dos KPIs
          </h2>

          <ToggleGroup
            type="single"
            value={selectedKPI}
            onValueChange={(value: string) => {
              if (value) setSelectedKPI(value);
            }}
            className="inline-flex items-center gap-2 px-2 py-1.5 relative flex-[0_0_auto] bg-[#1a1f37] rounded-[100px]"
          >
            {kpiButtons.map((button) => (
              <ToggleGroupItem
                key={button.value}
                value={button.value}
                className="inline-flex items-center justify-center gap-2.5 px-4 py-2 relative flex-[0_0_auto] bg-transparent rounded-[100px] data-[state=on]:bg-[#2DB3C8] data-[state=on]:shadow-[0px_0px_10px_#2DB3C8] hover:bg-[#FFFFFF0D] transition-colors"
              >
                <span className="montserrat-regular-14 text-white whitespace-nowrap">
                  {button.label}
                </span>
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        <div className="flex flex-col items-end gap-4 relative w-full flex-[0_0_auto] mt-8">
          <div className="w-full h-[300px]">
            <ReactApexChart
              options={chartOptions}
              series={series}
              type="area"
              height={300}
            />
          </div>
        </div>

        <div className="absolute top-36 left-[-180px] w-[467px] h-[452px] rounded-[233.5px/226px] blur-[75px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(189,218,255,0.1)_51%,rgba(211,171,244,0.03)_100%)]" />

        <div className="absolute top-[-276px] left-[630px] w-[467px] h-[452px] rounded-[233.5px/226px] blur-[75px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(189,218,255,0.1)_51%,rgba(211,171,244,0.03)_100%)]" />
      </CardContent>
    </Card>
  );
};
