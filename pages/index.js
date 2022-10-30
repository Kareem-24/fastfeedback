import { useAuth } from "../lib/auth";
export default function Home() {
  const auth = useAuth();
  return (
    <div>
      <main>
        <h1>Fast Feedback</h1>

        <button onClick={(e) => auth.signinWithGitHub()}>Sign In</button>
        {auth?.user && (
          <button onClick={(e) => auth.signout()}>Sign Out</button>
        )}

        <div>{auth?.user?.email}</div>
      </main>
    </div>
  );
}
