import LandingPage from "@/components/LandingPage/LandingPage";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-scree">
      <LandingPage />
      <Link href="/auth/login">Auth</Link>
    </div>
  );
}
