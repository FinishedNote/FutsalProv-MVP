import supabase from "../lib/supabaseClient";

export const createCompetition = async ({ name, season, createdBy }) => {
    return supabase
        .from("competitions")
        .insert([
            {
                name,
                season,
                status: "scheduled",
                location: "bernissart",
                created_by: createdBy,
            },
        ])
        .select();
};
