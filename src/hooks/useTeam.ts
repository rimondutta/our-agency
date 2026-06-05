import { useState, useEffect } from "react";

export interface TeamMember {
  _id: string;
  name: string;
  email?: string;
  phone?: string;
  jobTitle?: string;
  bio?: string;
  avatar?: string;
  skills?: string[];
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    website?: string;
  };
  isActive: boolean;
  role: string;
}

export function useTeam() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await fetch("/api/public/team");
        const result = await response.json();

        if (result.success) {
          setTeamMembers(result.data);
        } else {
          setError(result.message || "Failed to fetch team members");
        }
      } catch (err: any) {
        setError(err.message || "An error occurred while fetching team members");
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  return { teamMembers, loading, error };
}
