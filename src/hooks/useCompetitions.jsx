import { useQuery } from "@tanstack/react-query";
import supabase from "../lib/supabaseClient";

export const useCompetitions = (user) => {
  return useQuery({
    queryKey: ["competitions", user?.id],
    queryFn: async () => {
      if (!user) return [];

      let query;

      if (user.role === "admin-comite") {
        query = supabase
          .from("competitions")
          .select("*")
          .eq("created_by", user.id);
      } else if (user.role === "club") {
        query = supabase
          .from("competitions")
          .select("*, competition_clubs!inner(club_id)")
          .eq("competition_clubs.club_id", user.club_id);
      } else if (user.role === "arbitrator") {
        query = supabase
          .from("competitions")
          .select("*, competition_arbitres!inner(arbitre_id)")
          .eq("competition_arbitres.arbitre_id", user.id);
      } else {
        return [];
      }

      const { data, error } = await query;
      if (error) throw error;
      return data;
    },
  });
};
