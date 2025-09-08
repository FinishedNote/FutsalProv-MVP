import { useQuery } from "@tanstack/react-query";
import supabase from "../lib/supabaseClient";

export const useCompetitions = () => {
    return useQuery({
        queryKey: ["competitions"],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("competitions")
                .select("*");

            if (error) throw error;
            return data;
        },
    });
};
