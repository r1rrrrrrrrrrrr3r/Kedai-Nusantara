import React, { useState, useEffect, ReactNode } from 'react';

export interface User {
  name: string;
  email: string;
  password?: string;
  phone?: string;
}

// In-memory data store
let registeredUsers: User[] = [];
let activeUser: User | null = null;
const subscribers = new Set<() => void>();

function notifySubscribers() {
  subscribers.forEach(callback => callback());
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export const useAuth = () => {
  const [, setTick] = useState(0);

  useEffect(() => {
    const update = () => setTick(tick => tick + 1);
    subscribers.add(update);
    return () => {
      subscribers.delete(update);
    };
  }, []);

  const register = (newUser: Omit<User, 'phone'>) => {
    const exists = registeredUsers.some(
      u => u.email.toLowerCase() === newUser.email.toLowerCase()
    );
    if (exists) {
      return { success: false, message: 'An account with this email already exists.' };
    }

    const created: User = { ...newUser, phone: '' };
    registeredUsers.push(created);
    return { success: true, message: 'Account registered successfully!' };
  };

  const login = (email: string, password?: string) => {
    const account = registeredUsers.find(
      u => u.email.toLowerCase() === email.toLowerCase() && (!password || u.password === password)
    );
    if (!account) {
      return { success: false, message: 'Invalid email or password.' };
    }

    activeUser = account;
    notifySubscribers();
    return { success: true, message: 'Login successful!' };
  };

  const resetPassword = (email: string, newPassword: string) => {
    const account = registeredUsers.find(
      u => u.email.toLowerCase() === email.toLowerCase()
    );
    if (!account) {
      return { success: false, message: 'No user found with this email address.' };
    }

    account.password = newPassword;
    if (activeUser && activeUser.email.toLowerCase() === email.toLowerCase()) {
      activeUser.password = newPassword;
    }
    notifySubscribers();
    return { success: true, message: 'Password updated successfully!' };
  };

  const updatePhoneNumber = (phone: string) => {
    if (!activeUser) return;
    activeUser.phone = phone;
    notifySubscribers();
  };

  return {
    currentUser: activeUser,
    register,
    login,
    resetPassword,
    updatePhoneNumber,
  };
};