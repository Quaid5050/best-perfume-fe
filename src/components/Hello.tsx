import { Sponsors } from './Sponsors';

export const Hello = () => {
  return (
    <>
      <p>
        👋 Welcome to Next.js Boilerplate!
      </p>
      <p>
        Need advanced features? Multi-tenancy & Teams, Roles & Permissions, Shadcn UI, End-to-End Typesafety with oRPC, Stripe Payment, Light / Dark mode. Try{' '}
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://nextjs-boilerplate.com/pro-saas-starter-kit"
        >
          Next.js Boilerplate Pro
        </a>
        .
      </p>
      <Sponsors />
    </>
  );
};
