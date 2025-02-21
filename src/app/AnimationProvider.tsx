"use client";

import React, { createContext, useContext, useState } from "react";

const AnimationContext = createContext<{
    isAnimating: boolean;
    triggerAnimation: () => void;
}>({ isAnimating: false, triggerAnimation: () => { } });

export const AnimationProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAnimating, setIsAnimating] = useState(false);

    const triggerAnimation = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
        }, 2000);
    };

    return (
        <AnimationContext.Provider value={{ isAnimating, triggerAnimation }}>
            {children}
        </AnimationContext.Provider>
    );
};

export const useAnimation = () => useContext(AnimationContext);
