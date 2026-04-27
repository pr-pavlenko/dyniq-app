import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Layout from '../layout/layout.tsx';
import Dashboard from '../pages/dashboard.tsx';
import ContentTools from '../pages/content-tools.tsx';
import Chatbot from '../pages/chatbot.tsx';
import Analyitcs from '@/pages/analytics.tsx';
import Settings from '@/pages/settings.tsx';
import Login from '@/pages/auth/login.tsx';
import NotFound from '@/pages/not-found.tsx';
import ServerError from '@/pages/server-error.tsx';
import { getCurrentUser } from '@/lib/auth';

const RequireAuth = () => {
    return getCurrentUser() ? <Outlet /> : <Navigate to="/login" replace />
}

const PublicOnly = () => {
    return getCurrentUser() ? <Navigate to="/dashboard" replace /> : <Outlet />
}

const RoutesPaths = () => {
    return (
        <Routes>
            <Route element={<PublicOnly />}>
                <Route path="/login" element={<Login />} />
            </Route>

            <Route path="/error" element={<NotFound />} />
            <Route path="/server-error" element={<ServerError />} />

            <Route element={<RequireAuth />}>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Navigate to="/dashboard" replace />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="content-tools" element={<ContentTools />} />
                    <Route path="chatbot" element={<Chatbot />} />
                    <Route path="analytics" element={<Analyitcs />} />
                    <Route path="settings" element={<Settings />} />
                </Route>
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default RoutesPaths;
