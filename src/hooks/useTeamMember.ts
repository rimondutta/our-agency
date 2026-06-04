import { useState, useEffect } from "react";
import { TeamMember } from "./useTeam";

// Helper function to create slug from name
export const createSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

export function useTeamMember(slug: string) {
  const [teamMember, setTeamMember] = useState<TeamMember | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeamMember = async () => {
      if (!slug) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("/api/public/team");
        const result = await response.json();

        if (result.success) {
          // Find team member by slug (created from name)
          const member = result.data.find((team: TeamMember) =>
            createSlug(team.name) === slug
          );

          if (member) {
            setTeamMember(member);
          } else {
            setError("Team member not found");
          }
        } else {
          setError(result.message || "Failed to fetch team member");
        }
      } catch (err: any) {
        setError(err.message || "An error occurred while fetching team member");
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMember();
  }, [slug]);

  return { teamMember, loading, error };
}