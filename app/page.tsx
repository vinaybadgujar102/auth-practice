import { Poppins } from "next/font/google"; //import { Poppins } from "@next/font/google"; //import { Poppins }
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    //centers the content
    <main
      className="
          flex 
          h-full 
          flex-col 
          items-center 
          justify-center 
          bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-800
        "
    >
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold tracking-tight text-white",
            font.className
          )}
        >
          🔒 Auth
        </h1>
        <p className="text-white text-lg">
          A simple authentication servie using Next.js and Prisma.
        </p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
