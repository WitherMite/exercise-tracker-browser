import type { ReactNode } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router";

export default function GlobalErrorBoundary() {
    const error = useRouteError();
    if (isRouteErrorResponse(error)) {
        return (
            <>
                <h1>
                    {error.status} {error.statusText}
                </h1>
                <p>{error.data}</p>
            </>
        );
    } else if (error instanceof Error) {
        return (
            <div>
                <h1>Error</h1>
                <p>{error.message}</p>
                {import.meta.env.DEV && (
                    <>
                        {error.cause && (
                            <pre>Cause: {prettyprint(error.cause)}</pre>
                        )}
                        <p>The stack trace is:</p>
                        <pre>{error.stack}</pre>
                    </>
                )}
            </div>
        );
    } else {
        return <h1>Unknown Error</h1>;
    }
}

const maxDepth = 4;
function prettyprint(obj: any, depth = 0): ReactNode {
    if (typeof obj !== "object" || obj === null || depth > maxDepth) {
        return String(obj);
    }

    const indent = "  ".repeat(depth + 1);
    const closeIndent = "  ".repeat(depth);

    if (obj.constructor === Object) {
        return (
            <>
                {"{"}
                <br />
                {Object.entries(obj).map(([key, val], i) => {
                    const value = prettyprint(val, depth + 1);
                    return (
                        <span key={i}>
                            {indent}
                            {key} : {value},
                            <br />
                        </span>
                    );
                })}
                {closeIndent}
                {"}"}
            </>
        );
    }

    if (Array.isArray(obj)) {
        return (
            <>
                {"["}
                {obj.map((item, i) => (
                    <span key={i}>
                        <br />
                        {indent}
                        {prettyprint(item, depth + 1)}
                        {i < obj.length - 1 && ","}
                    </span>
                ))}
                {"]"}
            </>
        );
    }

    return String(obj);
}
