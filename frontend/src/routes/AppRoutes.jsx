import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Tableau from "../pages/Tableau";

import AdminDashboard from "../pages/admin/AdminDashboard";
import ChefDashboard from "../pages/admin/ChefDashboard";
import IntervenantDashboard from "../pages/admin/IntervenantDashboard";

import ProtectedRoute from "../components/ProtectedRoute";
import MainLayout from "../components/Layout/MainLayout";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/admin/Users";

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/dashboard" element={
            <MainLayout>
                <ProtectedRoute role="Intervenant">
                    <IntervenantDashboard />
                </ProtectedRoute>
            </MainLayout>
        } />

        <Route path="/users" element={
            <MainLayout>
                <ProtectedRoute role="Admin">
                <Users />
                </ProtectedRoute>
            </MainLayout>
        } />

        <Route path="/admin" element={
            <MainLayout>
                <ProtectedRoute role="Admin">
                    <AdminDashboard />
                </ProtectedRoute>
            </MainLayout>
        } />

        <Route path="/chef" element={
            <MainLayout>
                <ProtectedRoute role="Chef">
                    <ChefDashboard />
                </ProtectedRoute>
            </MainLayout>
        } />

        <Route path="/intervenant" element={
            <MainLayout>
                <ProtectedRoute role="Intervenant">
                    <IntervenantDashboard />
                </ProtectedRoute>
            </MainLayout>
        } />

        <Route path="/tableau" element={
            <MainLayout>
                <ProtectedRoute>
                <Tableau />
                </ProtectedRoute>
            </MainLayout>
        } />
    </Routes>
  );
}