"use client";

import Link from "next/link";
// import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { getUser, UserLogOut } from "@/services/auth";

export default function Navbar() {
    // const [open, setOpen] = useState(false);
    // const [user, setUser] = useState(null);
    // const [loading, setLoading] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "About", href: "/about-us" },
        { name: "Contact", href: "/contact" },
    ];
    // useEffect(() => {
    //     const getCurrentUser = async () => {
    //         const userdata = await getUser();
    //         setUser(userdata);
    //     };
    //     getCurrentUser();
    // }, [loading]);

    // const handleLogOut = () => {
    //     UserLogOut();
    //     setLoading(true);
    // };

    return (
        <header className="bg-background bg-zinc-100">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold">
                    MyApp
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium hover:text-primary transition-colors">
                            {link.name}
                        </Link>
                    ))}

                    <Button variant="outline"> LogOut</Button>
                    <Link href={"/login"}>
                        <Button variant="outline"> Login</Button>
                    </Link>
                </nav>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger>
                            <span className="inline-flex items-center justify-center p-2 cursor-pointer">
                                <Menu className="h-5 w-5" />
                            </span>
                        </SheetTrigger>

                        <SheetContent side="right" className="w-64">
                            <div className="flex flex-col gap-6 mt-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-sm font-medium hover:text-primary transition-colors">
                                        {link.name}
                                    </Link>
                                ))}

                                <Button className="w-full">LogOut</Button>

                                <Button className="w-full">Login</Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
