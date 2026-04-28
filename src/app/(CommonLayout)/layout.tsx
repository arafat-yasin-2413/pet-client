import Navbar from "@/components/shared/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="container mx-auto">
            <Navbar />
            <div>{children}</div>
        </div>
    );
};

export default CommonLayout;