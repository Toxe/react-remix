import { useNavigate } from "@remix-run/react";

export default function Page() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Page 2</h1>
            <ul className="list-disc list-inside">
                <li>Routing</li>
                <li>CSS</li>
            </ul>
            <hr />
            <div>
                <button type="button" onClick={() => navigate(-1)}>Back</button>
                <button type="button" onClick={() => navigate("/")}>Home</button>
                <button type="button" onClick={() => navigate("/page1")}>Page 1</button>
            </div>
        </div>
    );
}
