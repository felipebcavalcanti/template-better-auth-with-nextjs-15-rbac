import { useQuery } from "@tanstack/react-query";

// buscar métricas
export function useMetrics() {
  return useQuery({
    queryKey: ["metrics"],
    queryFn: async () => {
      const response = await fetch("/api/metrics");
      if (!response.ok) throw new Error("Erro ao buscar métricas");
      const json = await response.json();
      return json.data;
    },
  });
}

//buscar segmentos
export function useSegments() {
  return useQuery({
    queryKey: ["segments"],
    queryFn: async () => {
      const response = await fetch("/api/segments");
      if (!response.ok) {
        throw new Error("Erro ao buscar segmentos");
      }
      const json = await response.json();
      return json.data;
    },
  });
}

//  buscar dados de KPI
export function useKPI(type: string = "arpu") {
  return useQuery({
    queryKey: ["kpi", type],
    queryFn: async () => {
      const response = await fetch(`/api/kpi?type=${type}`);

      if (!response.ok){
         throw new Error("Erro ao buscar KPI");
      }

      const json = await response.json();
      return json.data;
    },
  });
}

//  buscar ofertas
export function useOffers() {
  return useQuery({
    queryKey: ["offers"],
    queryFn: async () => {
      const response = await fetch("/api/offers");
      if (!response.ok) {
        throw new Error("Erro ao buscar ofertas");
      }

      const json = await response.json();
      return json.data;
    },
  });
}

// buscar workflows
export function useWorkflows() {
  return useQuery({
    queryKey: ["workflows"],
    queryFn: async () => {
      const response = await fetch("/api/workflows");
      if (!response.ok) {
       throw new Error("Erro ao buscar workflows"); 
      }
      
      const json = await response.json();
      return json.data;
    },
  });
}
