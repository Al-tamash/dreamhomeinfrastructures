import { redirect } from 'next/navigation';

// Redirect old architectural-planning URL to the unified interior-design page
export default function ArchitecturalPlanningPage() {
  redirect('/services/interior-design');
}
