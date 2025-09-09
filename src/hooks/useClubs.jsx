import { useQuery } from "@tanstack/react-query";
import supabase from "../lib/supabaseClient";

export const useClubs = () => {
  return useQuery({
    queryKey: ["clubs"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("clubs")
        .select("name, province, logo_url, id");

      if (error) throw error;
      return data;
    },
  });
};
