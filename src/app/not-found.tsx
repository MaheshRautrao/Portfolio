import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center p-44 text-center">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">404 - Page Not Found</CardTitle>
          <CardDescription>
            Oops! The page you&apos;re looking for doesn&apos;t exist.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-center">
          <Button>
            <Link href="/">Go to Home Page</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
