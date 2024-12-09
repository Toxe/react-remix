import { Link } from "@remix-run/react";

export const meta = () => {
    return [
        { title: "New Remix App" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export default function Index() {
    return (
        <div>
            <div>
                <h1>Main Page</h1>
                <ul>
                    <li><Link to="/page1">Page 1: Simple, unformatted page</Link></li>
                </ul>
            </div>
            <div>
                <a href="https://remix.run/docs/en/main/start/quickstart">based on Remix Quick Start (without TypeScript)</a>
            </div>
        </div>
    );
}
