import React, { createContext } from "react";

export interface AuthContextInterface {
    user?: userType.user | null
    authenticated?: boolean
    login?: (user: string, password: string) => void
    logout?: () => void
}

export const AuthContext = createContext<AuthContextInterface | null>(null) 