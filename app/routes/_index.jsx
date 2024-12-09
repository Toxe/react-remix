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
            </div>
            <div>
                <a href="https://remix.run/docs/en/main/start/quickstart">based on Remix Quick Start (without TypeScript)</a>
            </div>
        </div>
    );
}
