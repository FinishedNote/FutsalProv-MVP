import { useQuery } from "@tanstack/react-query";
import supabase from "../lib/supabaseClient";

export const useCompetitions = (user) => {
  return useQuery({
    queryKey: ["competitions", user.id],
    queryFn: async () => {
      if (!user) return [];

      let query = supabase.from("competitions").select("*");

      if (user.role === "admin-comite") {
        query = query.eq("created_by", user.id);
      } else if (user.role === "club") {
        query = supabase
          .from("competitions")
          .select("*, teams!inner(club_id)")
          .eq("teams.club_id", user.club_id);
      } else if (user.role === "arbitrator") {
        query = supabase
          .from("competitions")
          .select("*, matches!inner(arbitre_id)")
          .eq("matches.arbitre_id", user.id);
      }

      const { data, error } = await query;
      if (error) throw error;

      return data;
    },
  });
};
