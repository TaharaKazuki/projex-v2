import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const LoginForm = () => {
  const handleSubmit = () => {};

  return (
    <Card className="w-96">
      <form onSubmit={handleSubmit}>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription className="text-xs">Welcome back</CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            Don&apos;t have an account?{' '}
            <Link href="/create-account" className="text-blue-500">
              Create account
            </Link>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="sample@example.com" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>

          <Button className="w-full" type="submit"></Button>
        </CardContent>
        <CardFooter></CardFooter>
      </form>
    </Card>
  );
};

export default LoginForm;
