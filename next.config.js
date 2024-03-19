/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: 'pk_test_cHVyZS13YWxsZXllLTQ0LmNsZXJrLmFjY291bnRzLmRldiQ',
        CLERK_SECRET_KEY: 'sk_test_z8Xd0PDSyjpNvj7KzPlDGGibfnL8twYmkW7ignHd8v',
        NEXT_PUBLIC_CLERK_SIGN_IN_URL: '/sign-in',
        NEXT_PUBLIC_CLERK_SIGN_UP_URL: '/sign-up',
        NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: '/',
        NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: '/',
    }
}

module.exports = nextConfig
