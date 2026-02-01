export function Footer() {
    return (
        <footer className="py-8 border-t border-border/40 text-center text-sm text-muted-foreground">
            <div className="container mx-auto">
                <p suppressHydrationWarning>&copy; {new Date().getFullYear()} Gaurav. All rights reserved.</p>
            </div>
        </footer>
    );
}
